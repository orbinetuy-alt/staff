"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
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
        <a
          className="brand"
          href="#inicio"
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
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta desktop-cta" href="#contacto">
          Solicitar personal
          <span aria-hidden="true">→</span>
        </a>

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
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-index">0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta mobile-cta"
            href="#contacto"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar personal
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
