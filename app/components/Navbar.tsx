"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Alianza", href: "/#alianza" },
  { label: "Sectores", href: "/#sectores" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          className="brand"
          href="/#inicio"
          aria-label="Staff Point, ir al inicio"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-name">STAFF POINT</span>
            <span className="brand-tagline">
              Gestión y tercerización de personal
            </span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta desktop-cta" href="/#contacto">
          Solicitar personal
          <span aria-hidden="true">→</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? "toggle-line line-one open" : "toggle-line line-one"} />
          <span className={menuOpen ? "toggle-line line-two open" : "toggle-line line-two"} />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={menuOpen ? "mobile-nav open" : "mobile-nav"}
        aria-label="Navegación móvil"
      >
        <div className="mobile-nav-inner">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-index">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-cta mobile-cta"
            href="/#contacto"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar personal
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
