import Link from "next/link";
import { Navbar } from "./Navbar";
import { ScrollReveal } from "./ScrollReveal";
import { Footer } from "./Footer";

type ContentItem = {
  title: string;
  text: string;
};

type ProcessItem = ContentItem & {
  number: string;
};

type SolutionDetailPageProps = {
  categoryLabel?: string;
  categoryHref?: string;
  eyebrow?: string;
  variant?: "solution" | "partner";
  title: string;
  intro: string;
  currentLabel: string;
  summaryTitle: string;
  summaryText: string;
  summaryItems: string[];
  situationsTitle: string;
  situationsIntro: string;
  situations: ContentItem[];
  managementTitle: string;
  managementIntro: string;
  management: ContentItem[];
  processTitle: string;
  process: ProcessItem[];
  ctaTitle: string;
  ctaText: string;
};

export function SolutionDetailPage({
  categoryLabel = "Soluciones",
  categoryHref = "/#soluciones",
  eyebrow,
  variant = "solution",
  title,
  intro,
  currentLabel,
  summaryTitle,
  summaryText,
  summaryItems,
  situationsTitle,
  situationsIntro,
  situations,
  managementTitle,
  managementIntro,
  management,
  processTitle,
  process,
  ctaTitle,
  ctaText,
}: SolutionDetailPageProps) {
  return (
    <main className={`detail-page ${variant === "partner" ? "partner-detail" : ""}`}>
      <ScrollReveal />
      <Navbar />

      <section className="detail-hero" aria-labelledby="detail-title">
        <div className="detail-shell">
          <nav className="breadcrumbs" aria-label="Migas de navegación">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href={categoryHref}>{categoryLabel}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{currentLabel}</span>
          </nav>

          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              {eyebrow ? <span className="detail-eyebrow">{eyebrow}</span> : null}
              <h1 id="detail-title">{title}</h1>
              <p>{intro}</p>
              <Link className="detail-primary-cta" href="/#contacto">
                Consultar por este servicio
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <aside className="detail-summary">
              <h2>{summaryTitle}</h2>
              <p>{summaryText}</p>
              <ul>
                {summaryItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
            <h2 id="situations-title">{situationsTitle}</h2>
            <p>{situationsIntro}</p>
          </div>

          <div className="situation-grid">
            {situations.map((item, index) => (
              <article
                className={`situation-card reveal-delay-${index}`}
                data-reveal="card"
                key={item.title}
              >
                <span>0{index + 1}</span>
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
          <div
            className="detail-section-heading detail-heading-light"
            data-reveal="heading"
          >
            <h2 id="management-title">{managementTitle}</h2>
            <p>{managementIntro}</p>
          </div>

          <div className="management-list">
            {management.map((item, index) => (
              <article
                className={`management-row reveal-delay-${Math.min(index, 5)}`}
                data-reveal="card"
                key={item.title}
              >
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
            <h2 id="detail-process-title">{processTitle}</h2>
          </div>

          <ol className="detail-process-list">
            {process.map((item, index) => (
              <li
                className={`detail-process-step reveal-delay-${index}`}
                data-reveal="card"
                key={item.number}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="detail-final-cta" data-reveal="card">
            <div>
              <h2>{ctaTitle}</h2>
              <p>{ctaText}</p>
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
