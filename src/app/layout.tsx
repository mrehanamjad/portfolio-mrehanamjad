import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Inter,
  Raleway,
  Hubot_Sans,
  Dancing_Script,
  Oswald,
  Host_Grotesk
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "M. Rehan Amjad - Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of M. Rehan Amjad — a passionate Full Stack Developer & AI Enthusiast skilled in Next.js, React, TypeScript, and modern web technologies. Explore projects, skills, and experience.",
  keywords: [
    "M. Rehan Amjad",
    "Full Stack Developer",
    "AI Enthusiast",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
    "Sanity CMS",
    "Freelance Developer",
    "Software Engineer",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "M. Rehan Amjad - Full Stack Developer & AI Enthusiast",
    description:
      "Explore the portfolio of M. Rehan Amjad — showcasing skills in Full Stack Development, AI, and cutting-edge web technologies.",
    url: "https://rehanamjad.vercel.app",
    siteName: "M. Rehan Amjad - Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/144995992?v=4",
        width: 1200,
        height: 630,
        alt: "M. Rehan Amjad - Full Stack Developer & AI Enthusiast",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Rehan Amjad - Full Stack Developer & AI Enthusiast",
    description:
      "Portfolio of M. Rehan Amjad — skilled in Full Stack Development, AI, and modern web technologies.",
    images: ["https://avatars.githubusercontent.com/u/144995992?v=4"],
    creator: "@m_rehanamjad", 
  },
};


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

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable} ${raleway.variable} ${hubotSans.variable} ${dancingScript.variable} ${oswald.variable} ${hostGrotesk.variable}`}
    >
      <body className="font-inter antialiased bg-[#131313]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
