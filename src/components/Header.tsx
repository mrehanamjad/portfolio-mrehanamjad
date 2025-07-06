"use client";

import { Layers2Icon, TerminalIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ButtonWG } from "./Button";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropDownVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const, // 👈 fix here
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const, // 👈 fix here
      },
    },
  };

  const navItems = [
  { name: "Home", href: "/", showOnDesktop: true },
  { name: "About", href: "/", showOnDesktop: true },
  { name: "Skills", href: "/", showOnDesktop: true },
  { name: "Project", href: "/", showOnDesktop: true },
  { name: "Contact", href: "/", showOnDesktop: false }, 
];

  return (
    <header className="relative z-40 flex items-center justify-between p-6 py-10 lg:px-12 md:py-10 overflow-hidden">
      {/* Logo */}
      <motion.div
      whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center space-x-2 z-30 text-xl">
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
      </motion.div>

      {/* Menu Button */}
      <motion.button
        onClick={() => setMenuOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center z-30 space-x-2 text-2xl font-medium cursor-pointer group text-gray-50 hover:text-emerald-500"
      >
        {menuOpen ? (
    <motion.div
      key="close"
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      <X size={32} className="text-white" />
    </motion.div>
  ) : (
    <motion.div
      key="open"
      initial={{ opacity: 0, rotate: 90 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: -90 }}
      transition={{ duration: 0.3 }}
    >
      <Layers2Icon size={32} className="text-white" />
    </motion.div>
  )}
        <span className="relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 group-hover:after:w-full">
          {menuOpen ? "CLOSE" : "MENU"}
        </span>
      </motion.button>

      {/* Contact Button (hidden on small screens) */}
      <motion.div className="max-md:hidden">
        <ButtonWG>Contact</ButtonWG>
      </motion.div>

      {/* Drop-down Glass Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            variants={dropDownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed flex flex-col gap-8  justify-evenly items-center  top-0 left-0 w-full h-screen z-20 bg-white/25 backdrop-blur-md border border-white/20 shadow-lg"
          >
            <div></div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{delay:0.5}}
            className="flex flex-col items-start gap-7 justify-center">
            {navItems.map((nav,idx) => (
                <Link href={nav.href} key={idx} className={`${!nav.showOnDesktop && "md:hidden" }`}>
              <motion.div
              initial={{opacity: 0,y: -20}}
              animate={{opacity: 1, y:0 }}
                whileHover={{ scale: 1.05 }}
                transition={{delay: 0.2 * idx , type: "spring", stiffness: 200, damping:20 }}
                className="flex justify-center items-end gap-1  cursor-pointer group text-gray-50 hover:text-emerald-300"
              >
                <TerminalIcon
                  size={62}
                  className="transition-colors duration-300"
                />
                <span className="relative text-6xl  font-bold  transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[4px] after:bg-emerald-300 after:transition-all after:duration-300 group-hover:after:w-full">
                  {nav.name}
                </span>
              </motion.div>
              </Link>
            ))}
            </motion.div>
            <div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
