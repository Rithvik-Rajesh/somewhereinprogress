import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Anton } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somewhere In Progress",
  description:
    "An interactive cinematic journal from a curious creative technologist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
