import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "CECA Marketing | Marketing Digital para Negocios de Servicios",
  description: "Ayudamos a negocios de servicios locales a conseguir mas clientes con paginas web que convierten, automatizaciones CRM y anuncios que funcionan.",
  keywords: "marketing digital, negocios de servicios, paginas web, Google Ads, Facebook Ads, CRM, automatizacion, Houston",
  openGraph: {
    title: "CECA Marketing | Mas Clientes. Menos Estres. Resultados Reales.",
    description: "Paginas web que convierten, automatizaciones CRM y anuncios locales para negocios de servicios.",
    url: "https://www.cecamarketing.com/es",
    siteName: "CECA Marketing",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CECA Marketing | Marketing Digital para Negocios de Servicios",
    description: "Ayudamos a negocios de servicios locales a conseguir mas clientes consistentemente.",
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}