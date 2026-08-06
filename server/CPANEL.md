# Instalación de los formularios en cPanel

1. Ejecutar `npm run build` y subir el contenido de `out/` a `public_html/`.
2. Crear, desde el Administrador de archivos, la carpeta `staff-private` al mismo nivel que `public_html`.
3. Copiar `server/mail-config.example.php` como `staff-private/mail-config.php`.
4. Completar en ese archivo las contraseñas reales de `info@staff.com.py` y `staff@staff.com.py`.
5. Asignar al archivo permisos `600` (o `640` si el hosting lo requiere).
6. Verificar que PHP tenga habilitadas las extensiones `mbstring` y `fileinfo`.
7. Probar primero una consulta empresarial y luego una postulación con un PDF pequeño.

Las contraseñas nunca deben guardarse dentro de `public_html`, Git o el código del navegador.
