import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-serif-4",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Siew's Capital | Multi-Agent Intelligence",
  description: "A sovereign investment and technology firm powered by OpenClaw multi-agent systems.",
};

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${dmSans.variable} font-sans antialiased`}>
        <div className="grain" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
