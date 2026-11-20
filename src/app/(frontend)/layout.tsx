import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import logo from "@/public/icon/logo.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.ieia-filadelfia.org/"; // troque pelo domínio real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IEIA Filadélfia ",
    template: "%s | IEIA Filadélfia",
  },
  description:
    "Igreja IEIA Filadélfia, no bairro Social da Juventude, Luena, Moxico, Angola. Cultos, horários, ministérios e contactos.",
  keywords: [
    "IEIA Filadélfia",
    "igreja no Luena",
    "igreja no Moxico",
    "igreja em Angola",
    "cultos no Luena",
    "bairro Social da Juventude",
    "ieia", "IEIA", "igreja evangélica", "ministérios", "eventos da igreja", "notícias da igreja", "juventude da igreja", "liderança da igreja", "ministerios de casais",
    "filadélfia", "luena"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: siteUrl,
    siteName: "IEIA Filadélfia",
    title: "IEIA Filadélfia | Igreja no Luena, Moxico",
    description:
      "Igreja IEIA Filadélfia, no bairro Social da Juventude, Luena, Moxico, Angola.",
    images: [
      { url: logo.src, width: 1200, height: 630, alt: "Igreja IEIA Filadélfia" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEIA Filadélfia | Igreja no Luena, Moxico",
    description: "Igreja IEIA Filadélfia, Luena, Moxico, Angola.",
    images: [logo.src],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "kaPYyOAOQ3-ULTgL1LSCtBqJJH32X602-nzFtxHpqT0",
  },
  icons: {
    icon: [
      { url: logo.src },
      { url: logo.src, sizes: "200x200", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "IEIA Filadélfia",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  description: "Igreja localizada no bairro Social da Juventude, Luena, Moxico, Angola.",
  telephone: "+244 924 266 075 / +244 934 028 046 ",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bairro Social da Juventude",
    addressLocality: "Luena",
    addressRegion: "Moxico",
    addressCountry: "AO",
  },
  sameAs: [
    "https://www.facebook.com/SUA-PAGINA",
    "https://www.youtube.com/@SEU-CANAL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}