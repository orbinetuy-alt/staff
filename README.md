# Staff Point

Sitio institucional de Staff Point, desarrollado con Next.js y exportación
estática.

## Desarrollo

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Compilación

```bash
npm run build
```

Next.js genera el sitio estático en la carpeta `out/`.

## Publicación

- **Vercel:** importar este repositorio y utilizar la configuración automática
  para Next.js.
- **cPanel:** ejecutar `npm run build` y subir el contenido de `out/` a
  `public_html`.

El formulario de contacto es actualmente visual y debe conectarse a un servicio
de recepción antes del lanzamiento público.
