import type { Metadata } from "next";
import { RouteTransition } from "./components/RouteTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.staff.com.py"),
  title: "Staff Point | Gestión, selección y tercerización de personal",
  description:
    "Seleccionamos y gestionamos personal temporal, permanente y tercerizado para empresas que necesitan agilidad, control y continuidad.",
  applicationName: "Staff Point",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "/",
    siteName: "Staff Point",
    title: "Staff Point | Gestión, selección y tercerización de personal",
    description:
      "Soluciones de personal temporal, permanente y tercerizado para empresas.",
  },
  twitter: {
    card: "summary",
    title: "Staff Point | Gestión y tercerización de personal",
    description:
      "Soluciones de personal temporal, permanente y tercerizado para empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PY" data-scroll-behavior="smooth">
      <body>
        <RouteTransition />
        {children}
      </body>
    </html>
  );
}
