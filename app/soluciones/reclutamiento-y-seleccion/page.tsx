import type { Metadata } from "next";
import { SolutionDetailPage } from "../../components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Reclutamiento y selección de personal | Staff Point",
  description:
    "Staff Point busca, evalúa y preselecciona candidatos para que tu empresa incorpore los perfiles adecuados.",
};

export default function RecruitmentPage() {
  return (
    <SolutionDetailPage
      currentLabel="Reclutamiento y selección"
      title="Encontrá a las personas adecuadas para hacer crecer tu equipo."
      intro="Definimos el perfil, buscamos candidatos y realizamos una preselección para que tu empresa pueda decidir con información clara."
      summaryTitle="Una búsqueda enfocada"
      summaryText="Trabajamos a partir de la necesidad concreta de la empresa para presentar perfiles alineados con el puesto y la operación."
      summaryItems={[
        "Relevamiento del perfil",
        "Búsqueda de candidatos",
        "Entrevistas y filtros",
        "Presentación de perfiles",
      ]}
      situationsTitle="Cuando contratar bien también significa cuidar tiempo y recursos."
      situationsIntro="Delegar la búsqueda permite que el equipo interno se concentre en evaluar decisiones, no en administrar todo el proceso."
      situations={[
        {
          title: "Nuevos puestos",
          text: "Cuando la empresa necesita definir y cubrir una posición que todavía no forma parte del equipo.",
        },
        {
          title: "Búsquedas operativas",
          text: "Cuando es necesario encontrar perfiles disponibles para tareas y horarios específicos.",
        },
        {
          title: "Múltiples incorporaciones",
          text: "Cuando una apertura, expansión o nuevo proyecto requiere sumar varias personas.",
        },
        {
          title: "Tiempo interno limitado",
          text: "Cuando entrevistas, filtros y coordinación consumen recursos clave de la empresa.",
        },
      ]}
      managementTitle="Qué incluye el proceso de selección."
      managementIntro="Organizamos cada instancia para que la empresa reciba candidatos previamente evaluados y pueda avanzar con mayor claridad."
      management={[
        {
          title: "Relevamiento",
          text: "Definición del puesto, experiencia, tareas, horarios y condiciones relevantes.",
        },
        {
          title: "Búsqueda",
          text: "Activación de los canales adecuados para encontrar candidatos disponibles.",
        },
        {
          title: "Preselección",
          text: "Revisión inicial de antecedentes y adecuación general al perfil solicitado.",
        },
        {
          title: "Entrevistas",
          text: "Conversaciones orientadas a experiencia, disponibilidad y ajuste al puesto.",
        },
        {
          title: "Presentación",
          text: "Entrega de perfiles seleccionados para la evaluación final de la empresa.",
        },
        {
          title: "Coordinación",
          text: "Acompañamiento de las instancias necesarias hasta cerrar la búsqueda.",
        },
      ]}
      processTitle="De la definición del perfil a la presentación de candidatos."
      process={[
        { number: "01", title: "Necesidad", text: "Entendemos el puesto y su contexto." },
        { number: "02", title: "Búsqueda", text: "Localizamos candidatos potenciales." },
        { number: "03", title: "Evaluación", text: "Entrevistamos y aplicamos filtros." },
        { number: "04", title: "Presentación", text: "Compartimos los perfiles seleccionados." },
        { number: "05", title: "Coordinación", text: "Acompañamos el cierre del proceso." },
      ]}
      ctaTitle="¿Necesitás incorporar personal a tu empresa?"
      ctaText="Contanos qué puesto buscás, cuáles son sus tareas y qué disponibilidad requiere."
    />
  );
}
