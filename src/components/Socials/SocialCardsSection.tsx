"use client";
import React, { useRef } from "react";
import SocialCard from "./SocialCard";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function SocialCardsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!scrollRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(scrollRef.current.children);

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.9 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 75%",
              scrub: true,
            },
            ease: "power1.out",
          }
        );
      });
    },
    { dependencies: [], scope: scrollRef }
  );

  return (
    <section className="w-full h-full ">
    <div
      ref={scrollRef}
      className="grid grid-cols-3 md:grid-cols-7  h-4xl py-30 px-4 md:gap-2 max-md:space-y-2 max-w-6xl w-full mx-auto"
    >
      <SocialCard
        plateFormName="Gmail"
        plateFormIcon={SiGmail}
        name="rehanamjad520@gmail.com"
        userName=""
        className="col-span-3 md:col-span-3  lg:hover:border-red-500"
        plateFormNameColor="max-md:text-red-600 md:group-hover:text-red-400"
      />
      <SocialCard
        plateFormName="LinkedIn"
        plateFormIcon={FaLinkedinIn}
        name="M.Rehan Amjad"
        userName="/in/mrehanamjad"
        className="col-span-3 md:col-span-2 lg:hover:bg-[#103b6a] lg:hover:border-sky-700"
        plateFormNameColor="max-md:text-sky-700 md:group-hover:text-sky-500"
      />
      <SocialCard
        plateFormIcon={FaGithub}
        plateFormName="Github"
        name="M.RehanAmjad"
        userName="/mrehanamjad"
        className="col-span-3 md:col-span-2 lg:hover:bg-[#161b22] lg:hover:border-white/30"
        plateFormNameColor="max-md:text-gray-200 md:group-hover:text-gray-300"
      />
    </div>
    </section>
  );
}

export default SocialCardsSection;
