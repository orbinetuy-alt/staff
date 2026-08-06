const organizationData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.staff.com.py/#organization",
      name: "Staff Point",
      url: "https://www.staff.com.py/",
      email: "info@staff.com.py",
      description:
        "Gestión, selección y tercerización de personal para empresas.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "info@staff.com.py",
          contactType: "consultas empresariales",
          availableLanguage: "Spanish",
        },
        {
          "@type": "ContactPoint",
          email: "staff@staff.com.py",
          contactType: "postulaciones y currículums",
          availableLanguage: "Spanish",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.staff.com.py/#website",
      url: "https://www.staff.com.py/",
      name: "Staff Point",
      inLanguage: "es-PY",
      publisher: { "@id": "https://www.staff.com.py/#organization" },
    },
  ],
};

export function OrganizationStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
