<?php
declare(strict_types=1);

require __DIR__ . '/_mail.php';

try {
    staff_post_only();
    staff_rate_limit('application');

    $name = staff_text('applicantName', 120);
    $phone = staff_text('applicantPhone', 80);
    $email = staff_text('applicantEmail', 254);
    $motivation = staff_text('applicantMotivation', 3000);
    $consent = isset($_POST['applicantConsent']);

    if ($name === '' || $phone === '' || $motivation === '' || !$consent) {
        staff_json(422, 'Completá todos los campos y aceptá la autorización.');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        staff_json(422, 'Ingresá un correo electrónico válido.');
    }

    if (count(preg_split('/\s+/', trim($motivation)) ?: []) > 250) {
        staff_json(422, 'La presentación no puede superar las 250 palabras.');
    }

    $file = $_FILES['cv'] ?? null;
    if (!is_array($file) || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        staff_json(422, 'Adjuntá tu CV en formato PDF.');
    }

    if ((int) $file['size'] > 5 * 1024 * 1024) {
        staff_json(422, 'El CV no puede superar los 5 MB.');
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    if ($finfo->file((string) $file['tmp_name']) !== 'application/pdf') {
        staff_json(422, 'El archivo adjunto debe ser un PDF válido.');
    }

    $content = file_get_contents((string) $file['tmp_name']);
    if ($content === false) throw new RuntimeException('No se pudo leer el CV adjunto.');

    $body = "Nueva postulación desde staff.com.py\n\n"
        . "Nombre: {$name}\n"
        . "Teléfono: {$phone}\n"
        . "Email: {$email}\n"
        . "Consentimiento: Aceptado\n\n"
        . "Presentación:\n{$motivation}\n";

    $config = staff_config('application');
    $mailer = new StaffMailer($config);
    $mailer->send(
        (string) $config['recipient'],
        'Nueva postulación — ' . $name,
        $body,
        ['name' => (string) $file['name'], 'content' => $content],
        $email
    );

    staff_json(200, '¡Postulación enviada! Recibimos tus datos y tu CV correctamente.');
} catch (Throwable $error) {
    error_log('[Staff Point application] ' . $error->getMessage());
    staff_json(500, 'No pudimos enviar tu postulación. Intentá nuevamente o escribinos a staff@staff.com.py.');
}
