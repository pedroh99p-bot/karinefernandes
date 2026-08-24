import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Barlow_Semi_Condensed,
  Inter,
  League_Spartan,
  Montserrat
} from "next/font/google";
import { getDefaultProspectSlug, getProspectBySlug } from "@/prospects/registry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800", "900"]
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-semi-condensed",
  weight: ["600", "700", "800"]
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
  weight: ["700", "800", "900"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700"]
});

const defaultProspect = getProspectBySlug(getDefaultProspectSlug());
const canonicalOrigin = defaultProspect?.seo.canonical
  ? new URL(defaultProspect.seo.canonical).origin
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? canonicalOrigin),
  title: defaultProspect?.business.name ?? "Serviços profissionais",
  description: defaultProspect?.business.description,
  applicationName: defaultProspect?.business.name,
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable} ${leagueSpartan.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
