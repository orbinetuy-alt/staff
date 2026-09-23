import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetailPage } from "../../components/SolutionDetailPage";

type PartnerService = {
  label: string;
  title: string;
  description: string;
  intro: string;
  summaryTitle: string;
  summaryText: string;
  summaryItems: string[];
  situationsTitle: string;
  situationsIntro: string;
  situations: { title: string; text: string }[];
  managementTitle: string;
  managementIntro: string;
  management: { title: string; text: string }[];
  processTitle: string;
  process: { number: string; title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
};

const services: Record<string, PartnerService> = {
  "evaluaciones-psicolaborales-y-tecnicas": {
    label: "Evaluaciones psicolaborales y técnicas",
    title: "Decisiones de talento respaldadas por una evaluación profesional.",
    description: "Evaluaciones psicolaborales y técnicas para procesos de selección, promoción y desarrollo de talento.",
    intro: "Junto a Ascênde evaluamos competencias, potencial y adecuación al rol para sumar una mirada especializada a cada decisión.",
    summaryTitle: "Una mirada integral",
    summaryText: "Diseñamos la evaluación según el puesto, el contexto y la decisión que la empresa necesita tomar.",
    summaryItems: ["Entrevistas por competencias", "Pruebas psicotécnicas", "Evaluaciones técnicas", "Informe y devolución"],
    situationsTitle: "Información clara para momentos decisivos.",
    situationsIntro: "La evaluación aporta evidencia cuando la experiencia y el currículum no alcanzan para conocer el ajuste real de una persona al rol.",
    situations: [
      { title: "Selección final", text: "Para comparar finalistas con criterios consistentes antes de una incorporación." },
      { title: "Promociones", text: "Para conocer fortalezas y áreas de desarrollo frente a nuevas responsabilidades." },
      { title: "Roles de liderazgo", text: "Para evaluar competencias clave vinculadas a conducción, comunicación y toma de decisiones." },
      { title: "Decisiones sensibles", text: "Para contar con una mirada profesional, independiente y documentada." },
    ],
    managementTitle: "Qué puede incluir la evaluación.",
    managementIntro: "Seleccionamos las herramientas adecuadas para obtener información relevante y aplicable a la decisión.",
    management: [
      { title: "Definición del perfil", text: "Alineamos competencias, responsabilidades y criterios de evaluación." },
      { title: "Entrevista", text: "Profundizamos en experiencia, motivaciones y conductas observables." },
      { title: "Pruebas", text: "Aplicamos instrumentos psicolaborales o técnicos según el objetivo." },
      { title: "Análisis", text: "Integramos los resultados y los contrastamos con el perfil requerido." },
      { title: "Informe", text: "Presentamos conclusiones claras, fortalezas y aspectos a considerar." },
      { title: "Devolución", text: "Conversamos los hallazgos y respondemos preguntas de la empresa." },
    ],
    processTitle: "Un proceso ajustado a cada decisión.",
    process: [
      { number: "01", title: "Contexto", text: "Comprendemos el rol y la decisión." },
      { number: "02", title: "Diseño", text: "Definimos técnicas y competencias." },
      { number: "03", title: "Evaluación", text: "Realizamos entrevistas y pruebas." },
      { number: "04", title: "Integración", text: "Analizamos toda la información." },
      { number: "05", title: "Devolución", text: "Entregamos conclusiones accionables." },
    ],
    ctaTitle: "¿Necesitás evaluar candidatos o integrantes de tu equipo?",
    ctaText: "Contanos qué decisión necesitás tomar y diseñamos la evaluación adecuada.",
  },
  "coaching-y-capacitacion": {
    label: "Coaching y capacitación",
    title: "Herramientas para que las personas y los equipos sigan creciendo.",
    description: "Programas de coaching y capacitación para líderes, equipos y organizaciones.",
    intro: "Junto a Ascênde diseñamos experiencias de aprendizaje conectadas con los desafíos reales de cada equipo y organización.",
    summaryTitle: "Desarrollo aplicado",
    summaryText: "Cada propuesta parte de un objetivo concreto y se adapta a la cultura, los roles y el momento de la empresa.",
    summaryItems: ["Coaching ejecutivo", "Desarrollo de liderazgo", "Talleres para equipos", "Seguimiento del aprendizaje"],
    situationsTitle: "Desarrollo que acompaña los desafíos del negocio.",
    situationsIntro: "La capacitación genera más valor cuando responde a necesidades observables y puede trasladarse al trabajo cotidiano.",
    situations: [
      { title: "Nuevos líderes", text: "Para acompañar la transición de especialistas a roles de conducción." },
      { title: "Equipos en cambio", text: "Para fortalecer coordinación, comunicación y adaptación a nuevas formas de trabajo." },
      { title: "Competencias clave", text: "Para desarrollar habilidades necesarias en roles específicos o en toda la organización." },
      { title: "Desarrollo individual", text: "Para trabajar objetivos profesionales con foco, práctica y seguimiento." },
    ],
    managementTitle: "Modalidades de acompañamiento.",
    managementIntro: "Combinamos espacios individuales y grupales según el objetivo de desarrollo.",
    management: [
      { title: "Diagnóstico", text: "Identificación de necesidades, públicos y resultados esperados." },
      { title: "Coaching individual", text: "Procesos confidenciales enfocados en desafíos profesionales concretos." },
      { title: "Talleres", text: "Encuentros participativos con contenidos, práctica y reflexión." },
      { title: "Liderazgo", text: "Programas para fortalecer gestión, conversaciones y toma de decisiones." },
      { title: "Equipos", text: "Instancias orientadas a acuerdos, colaboración y efectividad colectiva." },
      { title: "Seguimiento", text: "Revisión de avances y ajustes para sostener lo aprendido." },
    ],
    processTitle: "Del desafío cotidiano a un aprendizaje sostenible.",
    process: [
      { number: "01", title: "Necesidad", text: "Definimos el desafío a trabajar." },
      { number: "02", title: "Objetivos", text: "Acordamos resultados observables." },
      { number: "03", title: "Diseño", text: "Creamos la experiencia adecuada." },
      { number: "04", title: "Implementación", text: "Facilitamos espacios prácticos." },
      { number: "05", title: "Seguimiento", text: "Medimos avances y próximos pasos." },
    ],
    ctaTitle: "¿Qué capacidades necesita fortalecer tu equipo?",
    ctaText: "Conversemos sobre el desafío y diseñemos una propuesta a medida.",
  },
  "gestion-y-desarrollo-organizacional": {
    label: "Gestión y desarrollo organizacional",
    title: "Procesos de personas alineados con la estrategia de la empresa.",
    description: "Consultoría en gestión y desarrollo organizacional para fortalecer equipos, cultura y desempeño.",
    intro: "Junto a Ascênde ayudamos a ordenar prácticas, roles y herramientas para acompañar el crecimiento y la evolución de la organización.",
    summaryTitle: "Organización con propósito",
    summaryText: "Transformamos necesidades de gestión humana en procesos claros, aplicables y adecuados a cada realidad.",
    summaryItems: ["Gestión del desempeño", "Modelos de competencias", "Clima y cultura", "Gestión del cambio"],
    situationsTitle: "Estructuras que evolucionan junto con la empresa.",
    situationsIntro: "El crecimiento, los cambios de estrategia o nuevas formas de trabajo suelen exigir revisar cómo se organizan y desarrollan las personas.",
    situations: [
      { title: "Empresas en crecimiento", text: "Para formalizar procesos sin perder agilidad ni identidad." },
      { title: "Roles poco claros", text: "Para ordenar responsabilidades, expectativas y vínculos de trabajo." },
      { title: "Cambio organizacional", text: "Para acompañar nuevas estructuras, liderazgos o maneras de operar." },
      { title: "Cultura y clima", text: "Para comprender la experiencia de los equipos y priorizar acciones de mejora." },
    ],
    managementTitle: "Áreas que podemos desarrollar.",
    managementIntro: "La propuesta se construye sobre un diagnóstico compartido y prioriza herramientas que la organización pueda sostener.",
    management: [
      { title: "Estructura y roles", text: "Clarificación de responsabilidades, relaciones y contribución esperada." },
      { title: "Competencias", text: "Definición de comportamientos clave para cada nivel o familia de puestos." },
      { title: "Desempeño", text: "Diseño de ciclos, criterios y conversaciones de seguimiento." },
      { title: "Clima", text: "Relevamiento, análisis y planes de acción sobre la experiencia interna." },
      { title: "Cultura", text: "Identificación de prácticas que fortalecen o dificultan la estrategia." },
      { title: "Cambio", text: "Comunicación y acompañamiento para facilitar nuevas formas de trabajo." },
    ],
    processTitle: "De la realidad actual a prácticas que puedan sostenerse.",
    process: [
      { number: "01", title: "Diagnóstico", text: "Comprendemos contexto y prioridades." },
      { number: "02", title: "Foco", text: "Definimos qué transformar primero." },
      { number: "03", title: "Diseño", text: "Creamos procesos y herramientas." },
      { number: "04", title: "Implementación", text: "Acompañamos la puesta en práctica." },
      { number: "05", title: "Sostenibilidad", text: "Transferimos capacidades al equipo." },
    ],
    ctaTitle: "¿Tu empresa necesita ordenar o evolucionar su gestión de personas?",
    ctaText: "Contanos en qué etapa se encuentra y definimos juntos por dónde comenzar.",
  },
  "mediacion-y-resolucion-de-conflictos": {
    label: "Mediación y resolución de conflictos",
    title: "Conversaciones profesionales para transformar situaciones de conflicto.",
    description: "Mediación y facilitación profesional para prevenir, abordar y resolver conflictos laborales.",
    intro: "Junto a Ascênde facilitamos espacios imparciales y confidenciales para comprender diferencias, reconstruir acuerdos y cuidar los vínculos de trabajo.",
    summaryTitle: "Intervención imparcial",
    summaryText: "Abordamos cada situación con escucha, método y respeto por las personas y el contexto organizacional.",
    summaryItems: ["Mediación laboral", "Facilitación de conversaciones", "Prevención de conflictos", "Protocolos de actuación"],
    situationsTitle: "Cuando el desacuerdo empieza a afectar el trabajo.",
    situationsIntro: "Una intervención oportuna permite contener la escalada, recuperar el diálogo y construir compromisos posibles.",
    situations: [
      { title: "Conflictos interpersonales", text: "Cuando tensiones sostenidas dificultan la colaboración entre personas." },
      { title: "Equipos fragmentados", text: "Cuando se deterioran la confianza, la coordinación o la comunicación." },
      { title: "Cambios y tensiones", text: "Cuando una transformación despierta desacuerdos que requieren un espacio cuidado." },
      { title: "Prevención", text: "Cuando la empresa busca criterios y canales claros para actuar ante situaciones sensibles." },
    ],
    managementTitle: "Cómo acompañamos la situación.",
    managementIntro: "Definimos el encuadre y la modalidad de intervención según las personas involucradas y el alcance del conflicto.",
    management: [
      { title: "Recepción", text: "Escuchamos la necesidad y delimitamos el alcance de la intervención." },
      { title: "Entrevistas", text: "Conocemos de forma individual las perspectivas involucradas." },
      { title: "Encuadre", text: "Acordamos reglas, confidencialidad y condiciones para el diálogo." },
      { title: "Mediación", text: "Facilitamos una conversación estructurada, imparcial y respetuosa." },
      { title: "Acuerdos", text: "Construimos compromisos concretos y responsabilidades compartidas." },
      { title: "Seguimiento", text: "Revisamos el cumplimiento y la evolución de los vínculos." },
    ],
    processTitle: "Un espacio seguro para volver a construir acuerdos.",
    process: [
      { number: "01", title: "Escucha", text: "Comprendemos la situación." },
      { number: "02", title: "Encuadre", text: "Definimos condiciones y alcance." },
      { number: "03", title: "Diálogo", text: "Facilitamos la conversación." },
      { number: "04", title: "Acuerdos", text: "Traducimos avances en compromisos." },
      { number: "05", title: "Revisión", text: "Acompañamos su sostenibilidad." },
    ],
    ctaTitle: "¿Necesitás abordar una situación de conflicto en tu organización?",
    ctaText: "Podemos analizar el contexto y recomendar una modalidad de intervención adecuada.",
  },
  "tercerizacion-gestion-integral-rrhh": {
    label: "Tercerización de la gestión integral de RR. HH.",
    title: "Gestión de personas especializada, integrada a tu organización.",
    description: "Tercerización de la gestión integral de Recursos Humanos para empresas que necesitan soporte profesional continuo.",
    intro: "Junto a Ascênde brindamos soporte profesional continuo para ordenar y gestionar los procesos internos de Recursos Humanos sin necesidad de crear un área completa.",
    summaryTitle: "RR. HH. a la medida",
    summaryText: "La modalidad y dedicación se ajustan al tamaño, las prioridades y el nivel de madurez de cada organización.",
    summaryItems: ["Procesos y políticas", "Gestión del desempeño", "Roles y estructura", "Asesoramiento continuo"],
    situationsTitle: "Una función de RR. HH. disponible cuando la empresa la necesita.",
    situationsIntro: "Este servicio complementa la tercerización de personal de Staff Point: se enfoca en la gestión interna de las personas y la organización.",
    situations: [
      { title: "Sin área interna", text: "Para empresas que necesitan gestión profesional sin incorporar una estructura completa." },
      { title: "Área sobrecargada", text: "Para sumar capacidad y conocimiento en períodos o proyectos exigentes." },
      { title: "Procesos informales", text: "Para ordenar prácticas, responsabilidades y criterios de gestión." },
      { title: "Crecimiento", text: "Para acompañar nuevas necesidades antes de que se conviertan en problemas operativos." },
    ],
    managementTitle: "Una gestión integral y flexible.",
    managementIntro: "Priorizamos los procesos que más impacto tienen y trabajamos en coordinación con referentes y líderes de la empresa.",
    management: [
      { title: "Diagnóstico de gestión", text: "Revisión de prácticas actuales, riesgos y prioridades." },
      { title: "Políticas y procesos", text: "Diseño y documentación de criterios claros para la gestión diaria." },
      { title: "Estructura y roles", text: "Ordenamiento de puestos, responsabilidades y relaciones de reporte." },
      { title: "Desempeño y desarrollo", text: "Herramientas para objetivos, seguimiento y crecimiento profesional." },
      { title: "Comunicación interna", text: "Apoyo en mensajes, canales y conversaciones organizacionales." },
      { title: "Soporte continuo", text: "Asesoramiento a dirección y líderes frente a necesidades cotidianas." },
    ],
    processTitle: "Una función especializada que se integra al día a día.",
    process: [
      { number: "01", title: "Diagnóstico", text: "Relevamos prácticas y necesidades." },
      { number: "02", title: "Prioridades", text: "Definimos un plan de trabajo." },
      { number: "03", title: "Implementación", text: "Ordenamos procesos y herramientas." },
      { number: "04", title: "Gestión", text: "Acompañamos la operación cotidiana." },
      { number: "05", title: "Evolución", text: "Revisamos resultados y nuevos desafíos." },
    ],
    ctaTitle: "¿Tu empresa necesita una función de RR. HH. más sólida?",
    ctaText: "Conversemos sobre el soporte que necesita y la dedicación más adecuada.",
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};

  return {
    title: `${service.label} | Staff Point + Ascênde`,
    description: service.description,
    alternates: { canonical: `/partner/${slug}/` },
    openGraph: {
      title: `${service.label} | Staff Point + Ascênde`,
      description: service.description,
      url: `/partner/${slug}/`,
      type: "website",
    },
  };
}

export default async function PartnerServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <SolutionDetailPage
      {...service}
      currentLabel={service.label}
      categoryLabel="Partner"
      categoryHref="/#partner"
      eyebrow="Servicio junto a Ascênde"
      variant="partner"
    />
  );
}
