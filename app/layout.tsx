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
  metadataBase: new URL("https://www.kuebler-geruestbau.de"),
  title: {
    default: "Kübler Gerüstbau | Sichere Gerüstlösungen in Nienburg & Umgebung",
    template: "%s | Kübler Gerüstbau",
  },
  description:
    "Kübler Gerüstbau: Ihr Experte für sichere Gerüstlösungen in Nienburg/Weser. Über 20 Jahre Erfahrung in Planung & Montage für Wohn-, Industrie- und Sonderbauten.",
  keywords: [
    "Gerüstbau Nienburg",
    "Gerüst mieten Nienburg",
    "Fassadengerüst",
    "Arbeitsgerüst",
    "Schutzgerüst",
    "Kübler Gerüstbau",
    "Nienburg Weser",
  ],
  authors: [{ name: "Peter Kübler" }],
  creator: "Kübler Gerüstbau",
  alternates: {
    canonical: "https://www.kuebler-geruestbau.de",
  },
  openGraph: {
    title: "Kübler Gerüstbau | Ihr Partner in Nienburg",
    description: "Professioneller Gerüstbau mit über 20 Jahren Erfahrung. Sicher, termingerecht und individuell.",
    url: "https://www.kuebler-geruestbau.de",
    siteName: "Kübler Gerüstbau",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/logo_header.svg",
        width: 1200,
        height: 630,
        alt: "Kübler Gerüstbau Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kübler Gerüstbau Nienburg",
    description: "Sichere Gerüstlösungen für Nienburg und Umgebung.",
    images: ["/logo_header.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}