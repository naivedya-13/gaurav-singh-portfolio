import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { themeScript } from "@/components/ThemeToggle";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Gaurav Singh — Full Stack Engineer",
  description:
    "Full Stack Engineer with 4+ years building fast, scalable OTT, cinema and event-booking platforms with React, Next.js, Node.js and TypeScript.",
  keywords: ["Gaurav Singh", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Mumbai"],
  openGraph: {
    title: "Gaurav Singh — Full Stack Engineer",
    description: "React · Next.js · Node.js · TypeScript. Booking and streaming platforms across India and the Middle East.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0d" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
