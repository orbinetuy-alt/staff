<?php
declare(strict_types=1);

require __DIR__ . '/_mail.php';

try {
    staff_post_only();
    staff_rate_limit('contact');

    $name = staff_text('name', 120);
    $company = staff_text('company', 160);
    $email = staff_text('email', 254);
    $phone = staff_text('phone', 80);
    $contact = staff_text('contact', 254);
    $service = staff_text('service', 80);
    $message = staff_text('message', 2000);

    if ($name === '' || $company === '' || $service === '') {
        staff_json(422, 'Completá los campos obligatorios.');
    }

    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        staff_json(422, 'Ingresá un correo electrónico válido.');
    }

    if ($email === '' && $contact === '') {
        staff_json(422, 'Ingresá un correo o teléfono de contacto.');
    }

    $labels = [
        'outsourcing' => 'Tercerización de personal',
        'recruitment' => 'Reclutamiento y selección',
        'temporary' => 'Personal temporal',
        'dedicated' => 'Equipos dedicados',
        'advice' => 'Necesita asesoramiento / Otra necesidad',
    ];
    $serviceLabel = $labels[$service] ?? $service;
    $body = "Nueva consulta desde staff.com.py\n\n"
        . "Nombre: {$name}\n"
        . "Empresa: {$company}\n"
        . "Email: " . ($email ?: 'No indicado') . "\n"
        . "Teléfono: " . ($phone ?: 'No indicado') . "\n"
        . "Contacto informado: " . ($contact ?: 'No aplica') . "\n"
        . "Solución: {$serviceLabel}\n\n"
        . "Mensaje:\n" . ($message ?: 'Sin mensaje adicional') . "\n";

    $config = staff_config('contact');
    $mailer = new StaffMailer($config);
    $mailer->send(
        (string) $config['recipient'],
        'Nueva consulta empresarial — ' . $company,
        $body,
        null,
        $email ?: null
    );

    staff_json(200, '¡Gracias! Recibimos tu consulta y te contactaremos pronto.');
} catch (Throwable $error) {
    error_log('[Staff Point contact] ' . $error->getMessage());
    staff_json(500, 'No pudimos enviar la consulta. Intentá nuevamente o escribinos a info@staff.com.py.');
}
