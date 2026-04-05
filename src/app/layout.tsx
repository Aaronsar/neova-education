import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neova Education - Annales du Bac gratuites + Correction IA",
  description:
    "Révise le Bac avec des annales corrigées 100% gratuites. Correction par IA, quiz interactifs, toutes les matières. Prépare ton Bac 2026 efficacement.",
  keywords: [
    "annales bac",
    "bac 2026",
    "annales corrigées",
    "révision bac",
    "correction IA",
    "quiz bac",
    "maths bac",
    "physique chimie bac",
    "philosophie bac",
    "SES bac",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
