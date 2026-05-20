import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CECA Marketing | Digital Marketing for Service Businesses",
  description: "We help local service businesses get more clients consistently — with high-converting websites, CRM automations, and ads that actually work.",
  keywords: "digital marketing, local service businesses, website design, Google Ads, Facebook Ads, CRM, automation, Houston",
  openGraph: {
    title: "CECA Marketing | More Clients. Less Stress. Real Results.",
    description: "High-converting websites, CRM automations, and local ads for service businesses.",
    url: "https://www.cecamarketing.com",
    siteName: "CECA Marketing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CECA Marketing | Digital Marketing for Service Businesses",
    description: "We help local service businesses get more clients consistently.",
  },
  alternates: {
    canonical: "https://www.cecamarketing.com",
    languages: {
      "en-US": "https://www.cecamarketing.com",
      "es-MX": "https://www.cecamarketing.com/es",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
