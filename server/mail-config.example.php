<?php
// Copiar como ~/staff-private/mail-config.php en el servidor cPanel.
// Este archivo de ejemplo no contiene credenciales reales y no debe subirse a public_html.
return [
    'contact' => [
        'host' => 'mail.staff.com.py',
        'port' => 465,
        'username' => 'info@staff.com.py',
        'password' => 'COLOCAR_AQUI_LA_CLAVE_DE_INFO',
        'from_email' => 'info@staff.com.py',
        'from_name' => 'Staff Point — Consultas',
        'recipient' => 'info@staff.com.py',
    ],
    'application' => [
        'host' => 'mail.staff.com.py',
        'port' => 465,
        'username' => 'staff@staff.com.py',
        'password' => 'COLOCAR_AQUI_LA_CLAVE_DE_STAFF',
        'from_email' => 'staff@staff.com.py',
        'from_name' => 'Staff Point — Postulaciones',
        'recipient' => 'staff@staff.com.py',
    ],
];
