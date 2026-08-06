import type { Metadata } from "next";
import { SolutionDetailPage } from "../../components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Equipos dedicados para operaciones | Staff Point",
  description:
    "Armá cuadrillas o grupos completos de personal para operaciones, campañas y tareas específicas con Staff Point.",
  alternates: { canonical: "/soluciones/equipos-dedicados/" },
  openGraph: {
    title: "Equipos dedicados para operaciones | Staff Point",
    description: "Cuadrillas y grupos completos organizados para operaciones, campañas y tareas específicas.",
    url: "/soluciones/equipos-dedicados/",
    type: "website",
  },
};

export default function DedicatedTeamsPage() {
  return (
    <SolutionDetailPage
      currentLabel="Equipos dedicados"
      title="Equipos organizados alrededor de una operación concreta."
      intro="Formamos cuadrillas o grupos completos para ejecutar tareas específicas con roles, horarios y objetivos previamente definidos."
      summaryTitle="Una solución coordinada"
      summaryText="En lugar de cubrir puestos aislados, organizamos un equipo pensado para responder a una necesidad operativa común."
      summaryItems={[
        "Cantidad y roles definidos",
        "Selección del equipo",
        "Coordinación operativa",
        "Seguimiento y continuidad",
      ]}
      situationsTitle="Cuando la necesidad requiere un equipo, no solamente una persona."
      situationsIntro="Los equipos dedicados ayudan a ordenar tareas que dependen de varias personas trabajando con un mismo objetivo."
      situations={[
        {
          title: "Operaciones específicas",
          text: "Tareas delimitadas que requieren un grupo estable durante un período determinado.",
        },
        {
          title: "Nuevos proyectos",
          text: "Iniciativas que necesitan capacidad adicional sin reorganizar al equipo existente.",
        },
        {
          title: "Campañas intensivas",
          text: "Acciones con volumen, fechas y objetivos que exigen coordinación entre varios perfiles.",
        },
        {
          title: "Tareas por cuadrilla",
          text: "Actividades que se ejecutan mejor mediante grupos completos con roles complementarios.",
        },
      ]}
      managementTitle="Cómo organizamos un equipo dedicado."
      managementIntro="Definimos la composición necesaria y acompañamos el funcionamiento del grupo durante toda la operación."
      management={[
        {
          title: "Dimensionamiento",
          text: "Definición de cantidad de personas según tareas, horarios y objetivos.",
        },
        {
          title: "Roles",
          text: "Organización de funciones y perfiles necesarios dentro del equipo.",
        },
        {
          title: "Selección",
          text: "Búsqueda y validación de cada integrante según su responsabilidad.",
        },
        {
          title: "Incorporación",
          text: "Coordinación de documentación, inducción y comienzo de actividades.",
        },
        {
          title: "Seguimiento",
          text: "Control de asistencia, incidencias y evolución general del servicio.",
        },
        {
          title: "Continuidad",
          text: "Soporte y reemplazos para mantener la capacidad acordada.",
        },
      ]}
      processTitle="Del objetivo operativo a un equipo funcionando."
      process={[
        { number: "01", title: "Objetivo", text: "Entendemos la tarea y el resultado esperado." },
        { number: "02", title: "Diseño", text: "Definimos cantidad, roles y horarios." },
        { number: "03", title: "Selección", text: "Formamos el equipo adecuado." },
        { number: "04", title: "Inicio", text: "Coordinamos el ingreso a la operación." },
        { number: "05", title: "Seguimiento", text: "Acompañamos desempeño y continuidad." },
      ]}
      ctaTitle="¿Tu operación necesita un equipo completo?"
      ctaText="Contanos qué tarea debe realizar, qué volumen tiene y durante cuánto tiempo."
    />
  );
}
