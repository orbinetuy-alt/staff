import type { Metadata } from "next";
import { SolutionDetailPage } from "../../components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Personal temporal para empresas | Staff Point",
  description:
    "Cubrí reemplazos, campañas, inventarios, temporadas y aumentos puntuales de actividad con personal temporal.",
  alternates: { canonical: "/soluciones/personal-temporal/" },
  openGraph: {
    title: "Personal temporal para empresas | Staff Point",
    description: "Cobertura de reemplazos, campañas, inventarios, temporadas y aumentos puntuales de actividad.",
    url: "/soluciones/personal-temporal/",
    type: "website",
  },
};

export default function TemporaryStaffPage() {
  return (
    <SolutionDetailPage
      currentLabel="Personal temporal"
      title="Personal temporal para responder cuando la demanda cambia."
      intro="Sumá personas durante el período que tu operación necesita para cubrir reemplazos, temporadas, campañas o aumentos puntuales de actividad."
      summaryTitle="Flexibilidad operativa"
      summaryText="Una cobertura definida según el período, las tareas y los horarios que requiere cada necesidad."
      summaryItems={[
        "Coberturas puntuales",
        "Perfiles operativos",
        "Coordinación de ingresos",
        "Capacidad de reemplazo",
      ]}
      situationsTitle="Capacidad adicional en el momento preciso."
      situationsIntro="El personal temporal permite acompañar variaciones de demanda sin perder ritmo ni sobrecargar al equipo habitual."
      situations={[
        {
          title: "Reemplazos",
          text: "Cobertura de ausencias, licencias u otras situaciones que dejan un puesto temporalmente disponible.",
        },
        {
          title: "Temporadas",
          text: "Refuerzo de la operación durante períodos previsibles de mayor actividad.",
        },
        {
          title: "Campañas",
          text: "Personal para acciones comerciales, promociones o proyectos con fechas definidas.",
        },
        {
          title: "Inventarios",
          text: "Equipos de apoyo para conteos, movimientos y tareas puntuales de control.",
        },
      ]}
      managementTitle="Qué coordinamos para cada cobertura temporal."
      managementIntro="Organizamos el servicio desde la definición de la necesidad hasta el cierre del período acordado."
      management={[
        {
          title: "Alcance",
          text: "Definición de cantidad de personas, tareas, horarios y duración estimada.",
        },
        {
          title: "Selección",
          text: "Búsqueda de perfiles acordes a la tarea y con disponibilidad para el período.",
        },
        {
          title: "Incorporación",
          text: "Coordinación de documentación, indicaciones e ingreso a la operación.",
        },
        {
          title: "Asistencia",
          text: "Seguimiento de presencia y novedades durante la cobertura.",
        },
        {
          title: "Soporte",
          text: "Canal de coordinación para resolver incidencias vinculadas al servicio.",
        },
        {
          title: "Continuidad",
          text: "Gestión de reemplazos cuando una ausencia pueda afectar la tarea.",
        },
      ]}
      processTitle="Una cobertura organizada de principio a fin."
      process={[
        { number: "01", title: "Alcance", text: "Definimos período, cantidad y tareas." },
        { number: "02", title: "Selección", text: "Buscamos personas con disponibilidad." },
        { number: "03", title: "Ingreso", text: "Coordinamos la incorporación." },
        { number: "04", title: "Cobertura", text: "Acompañamos el período de trabajo." },
        { number: "05", title: "Cierre", text: "Revisamos resultados y próximos pasos." },
      ]}
      ctaTitle="¿Tenés una necesidad puntual o una fecha definida?"
      ctaText="Indicá cuántas personas necesitás, para qué tareas y durante qué período."
    />
  );
}
