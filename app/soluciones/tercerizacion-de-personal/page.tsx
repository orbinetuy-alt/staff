import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { ScrollReveal } from "../../components/ScrollReveal";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Tercerización de personal | Staff Point",
  description:
    "Conocé cómo Staff Point selecciona, incorpora, administra y acompaña personal tercerizado para dar continuidad a la operación de tu empresa.",
};

const situations = [
  {
    number: "01",
    title: "Picos de actividad",
    text: "Cuando la demanda aumenta y necesitás sumar capacidad sin alterar la estructura permanente.",
  },
  {
    number: "02",
    title: "Operaciones continuas",
    text: "Cuando determinados puestos requieren cobertura, seguimiento y capacidad de reemplazo.",
  },
  {
    number: "03",
    title: "Reemplazos frecuentes",
    text: "Cuando las ausencias o la rotación afectan el ritmo normal de trabajo.",
  },
  {
    number: "04",
    title: "Equipos específicos",
    text: "Cuando una campaña, área o tarea necesita un grupo organizado para cumplir un objetivo concreto.",
  },
];

const management = [
  ["Selección e incorporación", "Búsqueda, evaluación y coordinación del ingreso."],
  ["Documentación", "Organización de contratos, altas, bajas y novedades."],
  ["Administración", "Seguimiento de la información laboral y operativa."],
  ["Asistencia y desempeño", "Control de ausencias, incidencias y evolución del servicio."],
  ["Reportes", "Información periódica para mantener visibilidad sobre la operación."],
  ["Reemplazos y continuidad", "Respuesta ante ausencias para evitar interrupciones."],
];

const steps = [
  ["01", "Relevamiento", "Entendemos perfiles, horarios, tareas y objetivos."],
  ["02", "Selección", "Buscamos y validamos a las personas adecuadas."],
  ["03", "Incorporación", "Coordinamos documentación, inducción e ingreso."],
  ["04", "Operación", "Acompañamos asistencia, asignación y soporte."],
  ["05", "Seguimiento", "Reportamos, resolvemos incidencias y mejoramos."],
];

export default function OutsourcingPage() {
  return (
    <main className="detail-page">
      <ScrollReveal />
      <Navbar />

      <section className="detail-hero" aria-labelledby="detail-title">
        <div className="detail-shell">
          <nav className="breadcrumbs" aria-label="Migas de navegación">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#soluciones">Soluciones</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Tercerización de personal</span>
          </nav>

          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              <h1 id="detail-title">
                Tercerización de personal para operaciones que necesitan
                continuidad.
              </h1>
              <p>
                Incorporá capacidad operativa mientras Staff Point se ocupa de
                seleccionar, administrar y acompañar al personal asignado.
              </p>
              <Link className="detail-primary-cta" href="/#contacto">
                Consultar por este servicio
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <aside className="detail-summary">
              <h2>Una solución integral</h2>
              <p>
                Tu empresa define la necesidad y mantiene visibilidad sobre la
                operación. Staff Point organiza y gestiona el recurso humano.
              </p>
              <ul>
                <li>Personal seleccionado</li>
                <li>Gestión documentada</li>
                <li>Seguimiento operativo</li>
                <li>Continuidad del servicio</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="detail-section detail-situations"
        aria-labelledby="situations-title"
        data-reveal="sheet"
      >
        <div className="detail-shell">
          <div className="detail-section-heading" data-reveal="heading">
            <h2 id="situations-title">
              Más capacidad operativa, sin sumar carga administrativa.
            </h2>
            <p>
              La tercerización permite responder con flexibilidad cuando la
              operación necesita personas disponibles, control y continuidad.
            </p>
          </div>

          <div className="situation-grid">
            {situations.map((item, index) => (
              <article
                className={`situation-card reveal-delay-${index}`}
                data-reveal="card"
                key={item.number}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="detail-section detail-management"
        aria-labelledby="management-title"
        data-reveal="sheet"
      >
        <div className="detail-shell">
          <div className="detail-section-heading detail-heading-light" data-reveal="heading">
            <h2 id="management-title">
              Qué gestiona Staff Point durante el servicio.
            </h2>
            <p>
              Acompañamos el ciclo completo para que la empresa gane
              flexibilidad sin perder control sobre las personas que trabajan
              en su operación.
            </p>
          </div>

          <div className="management-list">
            {management.map(([title, text], index) => (
              <article
                className={`management-row reveal-delay-${Math.min(index, 5)}`}
                data-reveal="card"
                key={title}
              >
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="detail-section detail-process"
        aria-labelledby="detail-process-title"
        data-reveal="sheet"
      >
        <div className="detail-shell">
          <div className="detail-section-heading" data-reveal="heading">
            <h2 id="detail-process-title">
              Un proceso claro desde la necesidad hasta el seguimiento.
            </h2>
          </div>

          <ol className="detail-process-list">
            {steps.map(([number, title, text], index) => (
              <li
                className={`detail-process-step reveal-delay-${index}`}
                data-reveal="card"
                key={number}
              >
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>

          <div className="detail-final-cta" data-reveal="card">
            <div>
              <h2>¿Tu operación necesita sumar personal?</h2>
              <p>
                Contanos el perfil, la cantidad de personas y el tipo de
                cobertura que necesitás.
              </p>
            </div>
            <Link href="/#contacto">
              Solicitar asesoramiento
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
