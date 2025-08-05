import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Inter,
  Raleway,
  Hubot_Sans,
  Dancing_Script,
  Oswald
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 💥 Add Bebas Neue for headings
const bebasNeue = Bebas_Neue({
  weight: "400", // Bebas Neue only has 400
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

// ✅ Add Inter for body
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const hubotSans = Hubot_Sans({
  subsets: ["latin"],
  variable: "--font-hubot-sans",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Full Stack Portfolio",
  description: "Showcasing skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable} ${raleway.variable} ${hubotSans.variable} ${dancingScript.variable} ${oswald.variable}`}
    >
      <body className="font-inter antialiased bg-[#131313]">
        <Cursor />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
