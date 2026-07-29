import type { Metadata } from "next";
import { RouteTransition } from "./components/RouteTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staff Point | Gestión y tercerización de personal",
  description:
    "Soluciones de personal para operaciones que necesitan agilidad, control y continuidad.",
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
    <html lang="es">
      <body>
        <RouteTransition />
        {children}
      </body>
    </html>
  );
}
