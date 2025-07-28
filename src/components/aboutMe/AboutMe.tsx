"use client";
import React,{useRef} from "react";
import Container from "../Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ButtonCircle, ButtonWG } from "../Button";
import { HiArrowLongRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function AboutMe() {

  const sectionRef = useRef<HTMLDivElement>(null);


  return (
    <section className="min-h-screen">
      <Container>
        <div className="relative z-10 px-4 md:px-24 py-28 flex items-center justify-center">
          {/* Main Card */}
          <div className="relative z-30 max-w-5xl w-full rounded-2xl p-10 md:p-14 bg-black/10 backdrop-blur-sm border border-zinc-800">
            <p
              onMouseEnter={() => gsap.to("#cursor", { scale: 8, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="text-center text-balance text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
            >
              I'm a passionate Full-Stack Developer and AI enthusiast focused on crafting elegant, fast, and accessible digital experiences. With tools like Next.js, React, and Tailwind CSS, I turn ideas into reality—merging innovation, performance, and design.
            </p>
          <div>
            <ButtonCircle ><span className="flex gap-1 items-center justify-content-center">Read <HiArrowLongRight /></span> </ButtonCircle>
          </div>
          </div>
          {/* Background Headings */}
          <h2 className="absolute top-6 left-0 text-4xl md:text-6xl lg:text-[12rem] text-gray-200 font-extrabold font-raleway text-outline-my uppercase">
            About
          </h2>
          <h2 className="absolute bottom-6 right-0 text-4xl md:text-6xl lg:text-[10rem] text-gray-200 font-extrabold font-raleway text-outline-my uppercase">
            Me
          </h2>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
