"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

function Footer() {
    const [copyToolKit, setCopyToolKit] = useState(false)
  const email = "rehanamjad520@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopyToolKit(true);
    setTimeout(() => {
        setCopyToolKit(false);
    }, 1800);
  };

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 pt-12">
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
            <a href="/projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
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
                <span className={`absolute -top-8 -left-1/2 px-2 ${copyToolKit ? "blcok" : "hidden"} text-sm bg-gray-900 rounded-lg`}>Copied</span>
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
              {/* <Link
                href="https://twitter.com/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaTwitter />
              </Link> */}
              <Link
                href={`mailto:${email}`}
                className="hover:text-white transition-colors"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-60">
            <h2 className="text-5xl  md:text-6xl lg:text-8xl font-dancing-script font-bold text-green-600">M.Rehan Amjad</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
