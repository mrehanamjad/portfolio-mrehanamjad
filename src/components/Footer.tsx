"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const [copyToolKit, setCopyToolKit] = useState(false);
  const email = "rehanamjad520@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopyToolKit(true);
    setTimeout(() => {
      setCopyToolKit(false);
    }, 1800);
  };

  // Animate the glow on mount
  useGSAP(() => {
    gsap.fromTo(
      ".footer-glow_",
      { opacity: 0, scaleY: 0.5, y: 100 },
      { opacity: 0.6, scaleY: 1, y: 50, duration: 2, ease: "power2.out", 
        scrollTrigger: {
          trigger: "#footer",
          start: "top center",
        }
       }
    );
  });

  return (
    <footer
      id="footer"
      className="relative bg-black text-gray-300 border-t border-gray-800 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="footer-glow_ absolute bottom-0 left-0 w-full h-60 pointer-events-none">
        <div className="w-full h-full bg-green-500/30 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold text-white">M.Rehan Amjad</h2>
            <p className="text text-gray-400 mt-0.5">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © {new Date().getFullYear()} Rehan Amjad. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-sm">
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-start gap-4">
            {/* Email + Copy */}
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={copyEmail}
                aria-label="Copy email"
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>{email}</span>
                <div className="relative">
                  <FaCopy />
                  <span
                    className={`absolute -top-8 -left-1/2 px-2 ${
                      copyToolKit ? "block" : "hidden"
                    } text-sm bg-gray-900 rounded-lg`}
                  >
                    Copied
                  </span>
                </div>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
              <Link
                href="https://github.com/mrehanamjad"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mrehanamjad/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={`mailto:${email}`}
                className="hover:text-white transition-colors"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>

        {/* Big Name */}
        <div className="flex justify-center items-center h-60">
          <h2 className="text-5xl   md:text-6xl lg:text-8xl font-dancing-script font-bold text-green-600">
            M.Rehan Amjad
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
