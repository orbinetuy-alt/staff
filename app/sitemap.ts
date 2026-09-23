import type { MetadataRoute } from "next";

const baseUrl = "https://www.staff.com.py";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/soluciones/tercerizacion-de-personal/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/soluciones/reclutamiento-y-seleccion/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/soluciones/personal-temporal/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/soluciones/equipos-dedicados/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partner/evaluaciones-psicolaborales-y-tecnicas/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partner/coaching-y-capacitacion/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partner/gestion-y-desarrollo-organizacional/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partner/mediacion-y-resolucion-de-conflictos/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partner/tercerizacion-gestion-integral-rrhh/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
