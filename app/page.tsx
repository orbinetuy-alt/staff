import { Navbar } from "./components/Navbar";
import { ScrollReveal } from "./components/ScrollReveal";
import { Footer } from "./components/Footer";
import { CvApplicationModal } from "./components/CvApplicationModal";
import { CompanyContactForm } from "./components/CompanyContactForm";
import { OrganizationStructuredData } from "./components/OrganizationStructuredData";

export default function Home() {
  return (
    <main id="inicio">
      <OrganizationStructuredData />
      <ScrollReveal />
      <Navbar />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-shell">
          <div className="hero-copy">
            <h1 id="hero-title">
              El personal que tu operación necesita,
              <span> cuando lo necesita.</span>
            </h1>

            <p className="hero-intro">
              Seleccionamos y gestionamos personal confiable para cubrir
              necesidades temporales, permanentes y tercerizadas.
            </p>

            <ul className="hero-benefits" aria-label="Beneficios principales">
              <li>
                <span aria-hidden="true">01</span>
                Respuesta ágil
              </li>
              <li>
                <span aria-hidden="true">02</span>
                Personal seleccionado
              </li>
              <li>
                <span aria-hidden="true">03</span>
                Soluciones adaptadas a cada operación
              </li>
            </ul>
          </div>

          <div className="hero-form-wrap">
            <div className="form-heading">
              <span className="form-audience">Para empresas</span>
              <h2>Solicitá personal</h2>
              <p>Contanos qué necesitás y conversemos.</p>
            </div>

            <CompanyContactForm variant="compact" />
          </div>
        </div>
      </section>

      <section
        className="solutions-section"
        id="soluciones"
        aria-labelledby="solutions-title"
        data-reveal="sheet"
      >
        <div className="solutions-shell">
          <div className="solutions-heading" data-reveal="heading">
            <h2 id="solutions-title">
              Soluciones para que tu operación siga avanzando.
            </h2>
            <p>
              Cubrimos necesidades temporales, permanentes o por operación,
              ocupándonos de encontrar, incorporar y acompañar al personal
              adecuado.
            </p>
          </div>

          <div className="solutions-grid">
            <article
              className="solution-featured"
              data-reveal="card"
            >
              <div>
                <span className="solution-number" aria-hidden="true">
                  01
                </span>
                <h3>
                  <a href="/soluciones/tercerizacion-de-personal">
                    Tercerización de personal
                  </a>
                </h3>
                <p>
                  Incorporamos personal operativo, técnico o administrativo y
                  nos encargamos de su gestión para que tu empresa pueda
                  concentrarse en la operación.
                </p>
              </div>

              <ul>
                <li>Selección e incorporación</li>
                <li>Gestión administrativa</li>
                <li>Supervisión y seguimiento</li>
                <li>Reemplazos y continuidad</li>
              </ul>

              <a href="/soluciones/tercerizacion-de-personal">
                Conocer la solución
                <span aria-hidden="true">→</span>
              </a>
            </article>

            <div className="solution-secondary-grid">
              <article
                className="solution-card reveal-delay-1"
                data-reveal="card"
              >
                <span className="solution-number" aria-hidden="true">
                  02
                </span>
                <h3>
                  <a href="/soluciones/reclutamiento-y-seleccion">
                    Reclutamiento y selección
                  </a>
                </h3>
                <p>
                  Buscamos, entrevistamos y preseleccionamos candidatos para
                  que los incorpores directamente a tu empresa.
                </p>
                <a href="/soluciones/reclutamiento-y-seleccion">
                  Conocer solución <span aria-hidden="true">→</span>
                </a>
              </article>

              <article
                className="solution-card reveal-delay-2"
                data-reveal="card"
              >
                <span className="solution-number" aria-hidden="true">
                  03
                </span>
                <h3>
                  <a href="/soluciones/personal-temporal">
                    Personal temporal
                  </a>
                </h3>
                <p>
                  Cubrimos reemplazos, campañas, inventarios, temporadas y
                  aumentos puntuales de actividad.
                </p>
                <a href="/soluciones/personal-temporal">
                  Conocer solución <span aria-hidden="true">→</span>
                </a>
              </article>

              <article
                className="solution-card solution-card-wide reveal-delay-3"
                data-reveal="card"
              >
                <span className="solution-number" aria-hidden="true">
                  04
                </span>
                <div>
                  <h3>
                    <a href="/soluciones/equipos-dedicados">
                      Equipos dedicados
                    </a>
                  </h3>
                  <p>
                    Armamos cuadrillas o grupos completos para operaciones y
                    tareas específicas.
                  </p>
                </div>
                <a href="/soluciones/equipos-dedicados">
                  Conocer solución <span aria-hidden="true">→</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sectors-section"
        id="sectores"
        aria-labelledby="sectors-title"
        data-reveal="sheet"
      >
        <div className="sectors-shell">
          <div className="sectors-heading" data-reveal="heading">
            <h2 id="sectors-title">
              Personal para operaciones que no pueden detenerse.
            </h2>
            <p>
              Nos especializamos en perfiles operativos y de soporte para
              empresas con alta dinámica diaria.
            </p>
          </div>

          <div className="sectors-list" aria-label="Sectores y perfiles">
            <article className="sector-row" data-reveal="card">
              <span className="sector-number" aria-hidden="true">
                01
              </span>
              <h3>Logística y centros de distribución</h3>
              <p>
                Auxiliares, picking, preparación de pedidos, carga, descarga e
                inventarios.
              </p>
            </article>

            <article
              className="sector-row reveal-delay-1"
              data-reveal="card"
            >
              <span className="sector-number" aria-hidden="true">
                02
              </span>
              <h3>Industria y plantas productivas</h3>
              <p>
                Operarios, ayudantes, control de línea y soporte productivo.
              </p>
            </article>

            <article
              className="sector-row reveal-delay-2"
              data-reveal="card"
            >
              <span className="sector-number" aria-hidden="true">
                03
              </span>
              <h3>Retail y consumo masivo</h3>
              <p>
                Repositores, promotores, atención al cliente y apoyo comercial.
              </p>
            </article>

            <article
              className="sector-row reveal-delay-3"
              data-reveal="card"
            >
              <span className="sector-number" aria-hidden="true">
                04
              </span>
              <h3>Servicios generales</h3>
              <p>
                Personal de limpieza, mantenimiento, coordinación y apoyo
                operativo.
              </p>
            </article>

            <article
              className="sector-row reveal-delay-4"
              data-reveal="card"
            >
              <span className="sector-number" aria-hidden="true">
                05
              </span>
              <h3>Administración y atención</h3>
              <p>Asistentes, data entry, recepción y soporte interno.</p>
            </article>
          </div>

          <div
            className="sectors-callout reveal-delay-5"
            data-reveal="card"
          >
            <p>
              También cubrimos campañas, inventarios, temporadas, reemplazos y
              aumentos puntuales de actividad.
            </p>
            <a href="#contacto">
              Consultar por un perfil
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="process-section"
        id="como-trabajamos"
        aria-labelledby="process-title"
        data-reveal="sheet"
      >
        <div className="process-shell">
          <div className="process-heading" data-reveal="heading">
            <h2 id="process-title">
              De la necesidad a una operación en marcha.
            </h2>
            <p>
              Un proceso claro para encontrar, incorporar y acompañar al
              personal que tu empresa necesita.
            </p>
          </div>

          <div className="process-timeline">
            <div
              className="process-line"
              data-reveal="line"
              aria-hidden="true"
            />

            <ol>
              <li className="process-step" data-reveal="card">
                <span className="process-index">01</span>
                <div>
                  <h3>Relevamiento</h3>
                  <p>
                    Definimos perfiles, horarios, tareas y objetivos de la
                    operación.
                  </p>
                </div>
              </li>

              <li
                className="process-step reveal-delay-1"
                data-reveal="card"
              >
                <span className="process-index">02</span>
                <div>
                  <h3>Selección</h3>
                  <p>
                    Buscamos, evaluamos y validamos a los candidatos adecuados.
                  </p>
                </div>
              </li>

              <li
                className="process-step reveal-delay-2"
                data-reveal="card"
              >
                <span className="process-index">03</span>
                <div>
                  <h3>Incorporación</h3>
                  <p>
                    Coordinamos documentación, inducción e ingreso del
                    personal.
                  </p>
                </div>
              </li>

              <li
                className="process-step reveal-delay-3"
                data-reveal="card"
              >
                <span className="process-index">04</span>
                <div>
                  <h3>Operación</h3>
                  <p>
                    Acompañamos la asignación, asistencia y soporte diario.
                  </p>
                </div>
              </li>

              <li
                className="process-step reveal-delay-4"
                data-reveal="card"
              >
                <span className="process-index">05</span>
                <div>
                  <h3>Seguimiento</h3>
                  <p>
                    Realizamos reportes, gestionamos reemplazos y buscamos
                    mejoras continuas.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <blockquote
            className="process-statement reveal-delay-5"
            data-reveal="card"
          >
            <p>
              Tu empresa define la necesidad. Staff Point organiza, administra
              y acompaña al personal para asegurar la continuidad.
            </p>
          </blockquote>
        </div>
      </section>

      <section
        className="contact-section"
        id="contacto"
        aria-labelledby="contact-title"
        data-reveal="sheet"
      >
        <div className="contact-shell">
          <div className="contact-copy" data-reveal="heading">
            <span className="contact-eyebrow">Contacto</span>
            <h2 id="contact-title">
              Elegí el canal indicado para vos.
            </h2>
            <p>
              Atendemos por separado las necesidades de empresas y las
              postulaciones laborales para responder cada consulta de forma
              más ágil.
            </p>

            <div className="contact-channels" aria-label="Canales de contacto">
              <article className="contact-channel contact-channel-primary">
                <span className="contact-channel-number" aria-hidden="true">
                  01
                </span>
                <div>
                  <h3>Consultas para empresas</h3>
                  <p>
                    Solicitudes de personal, asesoramiento y consultas sobre
                    nuestras soluciones.
                  </p>
                  <strong>info@staff.com.py</strong>
                </div>
              </article>

              <article className="contact-channel">
                <span className="contact-channel-number" aria-hidden="true">
                  02
                </span>
                <div>
                  <h3>Postulaciones y CV</h3>
                  <p>
                    Si estás buscando trabajo, este será el canal para
                    presentarte y enviarnos tu currículum.
                  </p>
                  <strong>staff@staff.com.py</strong>
                  <CvApplicationModal />
                </div>
              </article>
            </div>
          </div>

          <div
            className="contact-form-wrap reveal-delay-2"
            data-reveal="card"
          >
            <div className="contact-form-heading">
              <span>Para empresas</span>
              <h3>Solicitá asesoramiento</h3>
              <p>
                Contanos qué necesita tu operación. La consulta será dirigida a
                info@staff.com.py.
              </p>
            </div>
            <CompanyContactForm variant="full" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
