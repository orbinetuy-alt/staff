import Link from "next/link";

const primaryLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Sectores", href: "/#sectores" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
];

const solutionLinks = [
  {
    label: "Tercerización de personal",
    href: "/soluciones/tercerizacion-de-personal",
  },
  {
    label: "Reclutamiento y selección",
    href: "/soluciones/reclutamiento-y-seleccion",
  },
  { label: "Personal temporal", href: "/soluciones/personal-temporal" },
  { label: "Equipos dedicados", href: "/soluciones/equipos-dedicados" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/#inicio" aria-label="Staff Point, ir al inicio">
              <span className="brand-mark" aria-hidden="true" />
              <span className="footer-brand-name">STAFF POINT</span>
            </Link>
            <p>
              Gestión y tercerización de personal para empresas que necesitan
              operar con agilidad, control y continuidad.
            </p>
          </div>

          <nav className="footer-column" aria-label="Navegación del pie">
            <h2>Navegación</h2>
            <ul>
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Soluciones">
            <h2>Soluciones</h2>
            <ul>
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <h2>¿Necesitás personal?</h2>
            <p>Contanos qué necesita tu operación y conversemos.</p>
            <Link href="/#contacto">
              Solicitar asesoramiento
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Staff Point. Todos los derechos reservados.</p>
          <Link href="/#inicio">
            Volver arriba
            <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
