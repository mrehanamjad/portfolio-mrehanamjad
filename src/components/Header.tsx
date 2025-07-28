"use client";

import { Layers2Icon, TerminalIcon, X } from "lucide-react";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ButtonWG } from "./Button";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", showOnDesktop: true },
    { name: "About", href: "/", showOnDesktop: true },
    { name: "Skills", href: "/", showOnDesktop: true },
    { name: "Project", href: "/", showOnDesktop: true },
    { name: "Contact", href: "/", showOnDesktop: false }, 
  ];

  useGSAP(() => {
    // Initialize dropdown as hidden
    gsap.set(".dropdown-menu", { 
      display: 'none',
      y: '-100%',
      opacity: 0 
    });

    // Logo hover animations
    gsap.set(".logo", { scale: 1 });
    
    const logoHoverTl = gsap.timeline({ paused: true })
      .to(".logo", { scale: 1.05, duration: 0.3, ease: "back.out(1.7)" });

    const logoElement = document.querySelector(".logo");
    logoElement?.addEventListener('mouseenter', () => logoHoverTl.play());
    logoElement?.addEventListener('mouseleave', () => logoHoverTl.reverse());

    // Menu button hover animations
    gsap.set(".menu-button", { scale: 1 });
    
    const menuHoverTl = gsap.timeline({ paused: true })
      .to(".menu-button", { scale: 1.05, duration: 0.3, ease: "back.out(1.7)" });

    const menuElement = document.querySelector(".menu-button");
    menuElement?.addEventListener('mouseenter', () => menuHoverTl.play());
    menuElement?.addEventListener('mouseleave', () => menuHoverTl.reverse());

    // Nav items hover animations
    const navHoverTls:gsap.core.Timeline[]  = [];
    document.querySelectorAll(".nav-item").forEach((item, index) => {
      gsap.set(item, { scale: 1 });
      
      const tl = gsap.timeline({ paused: true })
        .to(item, { scale: 1.05, duration: 0.3, ease: "back.out(1.7)" });
      
      navHoverTls.push(tl);
      
      item.addEventListener('mouseenter', () => tl.play());
      item.addEventListener('mouseleave', () => tl.reverse());
    });

    return () => {
      logoHoverTl.kill();
      menuHoverTl.kill();
      navHoverTls.forEach(tl => tl.kill());
    };
  });

  useGSAP(() => {
    const dropdown = document.querySelector(".dropdown-menu");
    const menuIcon = document.querySelector(".menu-icon");
    const navItems = document.querySelectorAll(".nav-item");

    if (menuOpen) {
      // Show dropdown animation
      gsap.set(dropdown, { display: 'flex' });
      
      const tl = gsap.timeline();
      
      tl.to(dropdown, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .fromTo(navItems, {
        opacity: 0,
        y: -20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.2");

      // Menu icon rotation
      gsap.fromTo(menuIcon, {
        opacity: 0,
        rotation: -90
      }, {
        opacity: 1,
        rotation: 0,
        duration: 0.3
      });

    } else {
      // Hide dropdown animation
      const tl = gsap.timeline();
      
      tl.to(navItems, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        stagger: 0.05
      })
      .to(dropdown, {
        y: '-100%',
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      }, "-=0.1")
      .set(dropdown, { display: 'none' });

      // Menu icon rotation
      gsap.fromTo(menuIcon, {
        opacity: 0,
        rotation: 90
      }, {
        opacity: 1,
        rotation: 0,
        duration: 0.3
      });
    }
  }, { dependencies: [menuOpen] });

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (

    <div className="fixed w-full  opacity-0 animate-header-my z-40 bg-transparent flex items-center justify-between p-4 py-5 md:px-10 rounded-xl overflow-hidden">
      {/* Logo */}
      <div className="logo flex items-center space-x-2 z-30 text-xl cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 640 512"
          >
            <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
          </svg>
        </div>
        <span className="text-3xl font-bold">Rehan</span>
      </div>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="menu-button flex items-center z-30 space-x-2 text-2xl font-medium cursor-pointer group text-gray-50 hover:text-emerald-500"
      >
        <div className="menu-icon">
          {menuOpen ? (
            <X size={32} className="text-white" />
          ) : (
            <Layers2Icon size={32} className="text-white" />
          )}
        </div>
        <span className="relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 group-hover:after:w-full">
          {menuOpen ? "CLOSE" : "MENU"}
        </span>
      </button>

      {/* Contact Button (hidden on small screens) */}
      <div className="max-md:hidden z-40">
        <ButtonWG>Contact</ButtonWG>
      </div>

      {/* Drop-down Glass Panel */}
      <div className="dropdown-menu fixed flex-col gap-8 justify-evenly items-center top-0 left-0 w-full h-screen z-20 bg-black/90  backdrop-blur-3xl border border-white/20 shadow-lg">
        <div></div>
        <div className="flex flex-col items-start gap-7 justify-center">
          {navItems.map((nav, idx) => (
            <Link href={nav.href} key={idx} className={`${!nav.showOnDesktop && "md:hidden"}`}>
              <div 
                onMouseEnter={() => gsap.to("#cursor", { scale: 8, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="nav-item flex  justify-center items-end gap-1 cursor-pointer group text-gray-50 hover:text-emerald-500">
                <TerminalIcon
                  size={62}
                  className="transition-colors duration-300"
                />
                <span className="relative text-6xl font-bold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[4px] after:bg-emerald-500 after:transition-all after:duration-300 group-hover:after:w-full">
                  {nav.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}