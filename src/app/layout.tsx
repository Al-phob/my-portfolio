import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";

import "./globals.css";

import Header from "@/components/main/Header";
//import ParticlesBackground from "@/components/main/ParticlesBackground";
import ParticlesWrapper from "@/components/main/ParticlesWrapper";
import Footer from "@/components/main/Footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al's Portfolio",
  description: "This is my portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ParticlesWrapper />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
