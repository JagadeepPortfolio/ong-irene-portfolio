import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import StructuredData from "@/components/StructuredData";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Irene Ong — Financial Planning Consultant | Singapore",
    template: "%s | Irene Ong",
  },
  description:
    "Personalised financial strategies for individuals and families in Singapore. Life protection, savings, investment, and retirement planning with Prudential.",
  keywords: [
    "financial planning",
    "Singapore",
    "Prudential",
    "insurance",
    "retirement planning",
    "life protection",
    "financial advisor",
    "Irene Ong",
  ],
  openGraph: {
    title: "Irene Ong — Financial Planning Consultant",
    description:
      "Your future, thoughtfully planned. Personalised financial strategies in Singapore.",
    url: "https://ongireneportfolio.com",
    siteName: "Irene Ong",
    locale: "en_SG",
    type: "website",
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
      className={`${fraunces.variable} ${instrumentSans.variable}`}
    >
      <body>
        <StructuredData />
        <Loader />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
        <ScrollRevealProvider />
        <SmoothScroll />
      </body>
    </html>
  );
}
