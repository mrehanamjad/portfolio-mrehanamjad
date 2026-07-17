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
import SmoothScrollProvider from "@/components/SmoothScrollProvider";


export const metadata: Metadata = {
  title: "M. Rehan Amjad | AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of M. Rehan Amjad — AI Engineer and Full-Stack Developer specializing in production-ready LLM applications, Agentic AI, Retrieval-Augmented Generation (RAG), FastAPI, Next.js, React, and TypeScript. Explore projects, skills, and experience.",

  keywords: [
    "M. Rehan Amjad",
    "Muhammad Rehan Amjad",
    "AI Engineer",
    "Full Stack Developer",
    "LLM Engineer",
    "Agentic AI",
    "Generative AI",
    "Retrieval Augmented Generation",
    "RAG",
    "LangChain",
    "LangGraph",
    "OpenAI Agent SDK",
    "FastAPI",
    "Python Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Machine Learning Engineer",
    "AI Portfolio",
    "Full Stack Portfolio",
    "Web Developer Portfolio",
    "Karachi Pakistan",
  ],

  authors: [
    {
      name: "M. Rehan Amjad",
      url: "https://rehanamjad.vercel.app",
    },
  ],

  creator: "M. Rehan Amjad",
  publisher: "M. Rehan Amjad",

  metadataBase: new URL("https://rehanamjad.vercel.app"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "M. Rehan Amjad | AI Engineer & Full-Stack Developer",
    description:
      "Building production-ready AI applications with LLMs, Agentic AI, RAG, FastAPI, Next.js, React, and TypeScript. Explore my projects, skills, and experience.",

    url: "https://rehanamjad.vercel.app",
    siteName: "M. Rehan Amjad Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://avatars.githubusercontent.com/u/144995992?v=4",
        width: 1200,
        height: 630,
        alt: "M. Rehan Amjad | AI Engineer & Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "M. Rehan Amjad | AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer building production-ready LLM, Agentic AI, and RAG applications with FastAPI, Next.js, React, and TypeScript.",

    creator: "@m_rehanamjad",
    images: [
      "https://avatars.githubusercontent.com/u/144995992?v=4",
    ],
  },

  category: "technology",
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
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
