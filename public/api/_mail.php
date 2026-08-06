<?php
declare(strict_types=1);

final class StaffMailer
{
    private array $config;

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    public function send(string $recipient, string $subject, string $body, ?array $attachment = null, ?string $replyTo = null): void
    {
        $host = (string) ($this->config['host'] ?? '');
        $port = (int) ($this->config['port'] ?? 465);
        $username = (string) ($this->config['username'] ?? '');
        $password = (string) ($this->config['password'] ?? '');
        $fromEmail = (string) ($this->config['from_email'] ?? $username);
        $fromName = (string) ($this->config['from_name'] ?? 'Staff Point');

        if ($host === '' || $username === '' || $password === '' || $fromEmail === '') {
            throw new RuntimeException('La configuración SMTP está incompleta.');
        }

        $socket = @stream_socket_client(
            'ssl://' . $host . ':' . $port,
            $errorNumber,
            $errorMessage,
            20,
            STREAM_CLIENT_CONNECT
        );

        if (!is_resource($socket)) {
            throw new RuntimeException('No fue posible conectar con el servidor de correo.');
        }

        stream_set_timeout($socket, 20);

        try {
            $this->expect($socket, [220]);
            $this->command($socket, 'EHLO staff.com.py', [250]);
            $this->command($socket, 'AUTH LOGIN', [334]);
            $this->command($socket, base64_encode($username), [334]);
            $this->command($socket, base64_encode($password), [235]);
            $this->command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
            $this->command($socket, 'RCPT TO:<' . $recipient . '>', [250, 251]);
            $this->command($socket, 'DATA', [354]);

            $message = $this->buildMessage($recipient, $subject, $body, $fromEmail, $fromName, $attachment, $replyTo);
            $message = preg_replace('/^\./m', '..', $message) ?? $message;
            fwrite($socket, $message . "\r\n.\r\n");
            $this->expect($socket, [250]);
            $this->command($socket, 'QUIT', [221]);
        } finally {
            fclose($socket);
        }
    }

    private function buildMessage(string $recipient, string $subject, string $body, string $fromEmail, string $fromName, ?array $attachment, ?string $replyTo): string
    {
        $encodedSubject = $this->encodeHeader($subject);
        $encodedFromName = $this->encodeHeader($fromName);
        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: ' . $encodedFromName . ' <' . $fromEmail . '>',
            'To: <' . $recipient . '>',
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'X-Mailer: StaffPointWebsite/1.0',
        ];

        if ($replyTo && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
            $headers[] = 'Reply-To: <' . $replyTo . '>';
        }

        if ($attachment === null) {
            $headers[] = 'Content-Type: text/plain; charset=UTF-8';
            $headers[] = 'Content-Transfer-Encoding: 8bit';
            return implode("\r\n", $headers) . "\r\n\r\n" . $body;
        }

        $boundary = 'staff_' . bin2hex(random_bytes(16));
        $filename = $this->safeFilename((string) $attachment['name']);
        $content = chunk_split(base64_encode((string) $attachment['content']), 76, "\r\n");
        $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

        return implode("\r\n", $headers)
            . "\r\n\r\n--{$boundary}\r\n"
            . "Content-Type: text/plain; charset=UTF-8\r\n"
            . "Content-Transfer-Encoding: 8bit\r\n\r\n"
            . $body
            . "\r\n\r\n--{$boundary}\r\n"
            . "Content-Type: application/pdf; name=\"{$filename}\"\r\n"
            . "Content-Disposition: attachment; filename=\"{$filename}\"\r\n"
            . "Content-Transfer-Encoding: base64\r\n\r\n"
            . $content
            . "\r\n--{$boundary}--";
    }

    private function command($socket, string $command, array $expectedCodes): void
    {
        fwrite($socket, $command . "\r\n");
        $this->expect($socket, $expectedCodes);
    }

    private function expect($socket, array $expectedCodes): void
    {
        $response = '';
        while (($line = fgets($socket, 515)) !== false) {
            $response .= $line;
            if (strlen($line) >= 4 && $line[3] === ' ') break;
        }

        $code = (int) substr($response, 0, 3);
        if (!in_array($code, $expectedCodes, true)) {
            throw new RuntimeException('El servidor de correo rechazó el envío.');
        }
    }

    private function encodeHeader(string $value): string
    {
        return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }

    private function safeFilename(string $filename): string
    {
        $clean = preg_replace('/[^A-Za-z0-9._-]/', '_', basename($filename));
        return $clean ?: 'cv.pdf';
    }
}

function staff_json(int $status, string $message): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    header('Cache-Control: no-store');
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function staff_post_only(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        staff_json(405, 'Método no permitido.');
    }

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $host = $_SERVER['HTTP_HOST'] ?? '';
    if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== preg_replace('/:\d+$/', '', $host)) {
        staff_json(403, 'Origen no permitido.');
    }

    if (trim((string) ($_POST['website'] ?? '')) !== '') {
        staff_json(200, 'Solicitud recibida.');
    }
}

function staff_rate_limit(string $channel): void
{
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    $key = hash('sha256', $channel . '|' . $ip);
    $path = sys_get_temp_dir() . '/staff_form_' . $key;
    $now = time();
    $last = is_file($path) ? (int) file_get_contents($path) : 0;

    if ($last > 0 && ($now - $last) < 30) {
        staff_json(429, 'Esperá unos segundos antes de volver a enviar.');
    }

    @file_put_contents($path, (string) $now, LOCK_EX);
}

function staff_config(string $channel): array
{
    $customPath = getenv('STAFF_MAIL_CONFIG') ?: dirname(__DIR__, 2) . '/staff-private/mail-config.php';
    if (!is_file($customPath)) {
        throw new RuntimeException('No se encontró la configuración privada del correo.');
    }

    $config = require $customPath;
    if (!is_array($config) || !isset($config[$channel]) || !is_array($config[$channel])) {
        throw new RuntimeException('La configuración del canal de correo es inválida.');
    }

    return $config[$channel];
}

function staff_text(string $key, int $maxLength = 2000): string
{
    $value = trim((string) ($_POST[$key] ?? ''));
    return mb_substr($value, 0, $maxLength);
}
