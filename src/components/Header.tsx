"use client";

import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SocialCard from "./Socials/SocialCard";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/", showOnDesktop: true },
    { name: "ABOUT", href: "#about", showOnDesktop: true },
    { name: "SKILLS", href: "#skill-section-main-container", showOnDesktop: true },
    { name: "PROJECTS", href: "#project-s", showOnDesktop: true },
    { name: "CONTACT", href: "/", showOnDesktop: false },
  ];

  useGSAP(() => {
    // Initialize dropdown as hidden
    gsap.set(".dropdown-menu", {
      display: "none",
      y: "-100%",
      opacity: 0,
    });

    // Logo hover animations
    gsap.set(".logo", { scale: 1 });

    const logoHoverTl = gsap
      .timeline({ paused: true })
      .to(".logo", { scale: 1.05, duration: 0.3, ease: "back.out(1.7)" });

    const logoElement = document.querySelector(".logo");
    logoElement?.addEventListener("mouseenter", () => logoHoverTl.play());
    logoElement?.addEventListener("mouseleave", () => logoHoverTl.reverse());

    // Menu button hover animations
    gsap.set(".menu-button", { scale: 1 });

    const menuHoverTl = gsap
      .timeline({ paused: true })
      .to(".menu-button", {
        scale: 1.05,
        duration: 0.3,
        ease: "back.out(1.7)",
      });

    const menuElement = document.querySelector(".menu-button");
    menuElement?.addEventListener("mouseenter", () => menuHoverTl.play());
    menuElement?.addEventListener("mouseleave", () => menuHoverTl.reverse());

    // Nav items hover animations
    const navHoverTls: gsap.core.Timeline[] = [];
    document.querySelectorAll(".nav-item").forEach((item) => {
      gsap.set(item, { scale: 1 });

      const tl = gsap
        .timeline({ paused: true })
        .to(item, { scale: 1.05, duration: 0.3, ease: "back.out(1.7)" });

      navHoverTls.push(tl);

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => {
      logoHoverTl.kill();
      menuHoverTl.kill();
      navHoverTls.forEach((tl) => tl.kill());
    };
  });

  useGSAP(
    () => {

      if (menuOpen) {
        // Show dropdown animation
        gsap.set(".dropdown-menu", { display: "flex" });

        const tl = gsap.timeline();

        tl.to(".dropdown-menu", {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }).fromTo(
          ".nav-item",
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        ).fromTo(".nav-social-card", {
            opacity: 0,
            x: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.2,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        ).to(".dropdown-menu",{
          border: 4,
          duration: 0.15,
          ease: "power2.inOut"
          
        },"-=0.6")

        // Menu icon rotation
        gsap.fromTo(
          ".menu-icon",
          {
            opacity: 0,
            rotation: -90,
          },
          {
            opacity: 1,
            rotation: 0,
            duration: 0.3,
          }
        );
      } else {
        // Hide dropdown animation
        const tl = gsap.timeline();

        tl.to(".nav-social-card", {
          opacity: 0,
          x: 30,
          scale: 0.8,
          duration: 0.2,
          stagger: 0.05,
          ease: "power2.in",
        }).to(".nav-item", {
          opacity: 0,
          y: -20,
          duration: 0.2,
          stagger: 0.05,
        })
          .to(".dropdown-menu",{
          border: 0,
          duration: 0.15,
          ease: "power2.inOut"
        },"-=0.1").to(
            ".dropdown-menu",
            {
              y: "-100%",
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.1"
          )
          .set(".dropdown-menu", { display: "none" });

        // Menu icon rotation
        gsap.fromTo(
          ".menu-icon",
          {
            opacity: 0,
            rotation: 90,
          },
          {
            opacity: 1,
            rotation: 0,
            duration: 0.3,
          }
        );
      }
    },
    { dependencies: [menuOpen] }
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-fit right-0  opacity-0 animate-header-my z-40 bg-transparent flex items-center justify-between p-4 py-5 md:px-10 rounded-xl overflow-hidden">

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="menu-button flex items-center z-30 space-x-2 text-2xl font-medium cursor-pointer group text-gray-50 hover:text-emerald-500"
      >
        <div className="menu-icon ">
          {menuOpen ? (
            <AiOutlineClose size={40} className="text-white -mr-1 group-hover:rotate-12" />
          ) : (
            <HiOutlineMenuAlt3 size={40}   className="text-white -mr-1 group-hover:rotate-12"  />
          )}
        </div>
        <span className="relative transition-colors  duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 group-hover:after:w-full">
          {menuOpen ? "CLOSE" : "MENU"}
        </span>
      </button>

      {/* Drop-down Glass Panel */}
      <div className=" dropdown-menu  fixed flex-col gap-8 justify-evenly items-center top-0 left-0 w-full h-screen z-20 bg-black  border-0 border-white shadow-lg">
           {/* Logo */}
      <div className="absolute left-5 top-5 md:top-8 md:left-8 flex items-center flex-col max-md:-space-y-1 space-x-2 z-30 text-xl cursor-pointer">
        <span className=" md:text-3xl font-semibold font-dancing-script -rotate-6">M.Rehan_</span>
        <span className=" md:text-3xl font-semibold font-dancing-script -rotate-6">_Amjad</span>
      </div>
        <div className="w-full h-full mt-14 flex flex-col md:flex-row justify-evenly p-8 md:items-center">
          <div className="flex flex-col items-start gap-2 md:gap-4 justify-center">
            {navItems.map((nav, idx) => (
              <Link
                href={nav.href}
                key={idx}
                
              >
                <div className={`nav-item flex  justify-center items-end gap-1 cursor-pointer group ${nav.name === "CONTACT" ? "text-green-600" : "text-gray-50"} hover:text-green-500`}>
                  <span className={`relative text-6xl font-bold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[4px] after:bg-green-700 after:transition-all after:duration-300 group-hover:after:w-full`}>
                    {nav.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-row md:flex-col  gap-4 overflow-x-auto md:overflow-visible max-md:whitespace-nowrap max-md:mt-8">
            <SocialCard
        plateFormName="Gmail"
        plateFormIcon={SiGmail}
        name="rehanamjad520@gmail.com"
        userName=""
        className="nav-social-card py-5 px-6  md:border-white border-3 rounded-md  lg:hover:border-red-400 min-w-80 w-full"
        plateFormNameColor="max-md:text-red-600 md:group-hover:text-red-400"
      />
      <SocialCard
        plateFormName="LinkedIn"
        plateFormIcon={FaLinkedinIn}
        name="M.Rehan Amjad"
        userName="/in/mrehanamjad"
        className="nav-social-card py-4 px-6 md:border-white border-3 rounded-md  lg:hover:border-sky-400 min-w-80 w-full"
        plateFormNameColor="max-md:text-sky-700 md:group-hover:text-sky-500"
      />
      <SocialCard
        plateFormIcon={FaGithub}
        plateFormName="Github"
        name="M.RehanAmjad"
        userName="/mrehanamjad"
        className="nav-social-card py-4 px-6  md:border-white border-3 rounded-md   lg:hover:border-white/30 min-w-80 w-full"
        plateFormNameColor=" max-md:text-gray-200 md:group-hover:text-gray-300"
      />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
