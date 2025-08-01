"use client";

import React, { useRef } from "react";
import Container from "../Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ButtonCircle } from "../Button";
import { HiArrowLongRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = scrollRef.current;
      if (!container) return;

      const children = gsap.utils.toArray(
        container.children
      ) as HTMLDivElement[];

      const mainCard = children[0];
      const headingAbout = children[1];
      const circle = children[2];

      if (
        !mainCard ||
        !headingAbout ||
        !circle ||
        !mainCard.children[0]?.children
      )
        return;

      const textSpans = gsap.utils.toArray(
        mainCard.children[0].children
      ) as HTMLSpanElement[];

      // Animate 'ABOUT ME'
      gsap.fromTo(
        headingAbout,
        { top: "-22%", left: "-2%", color: "#010101",},
        {
          top: "2%",
          left: "0",
          color: "#00996646",
          scrollTrigger: {
            trigger: mainCard,
            start: "top 68%",
            end: "top 35%",
            scrub: true,
          },
          ease: "power1.out",
        }
      );

      // Animate each <span> inside text
      gsap.fromTo(
        textSpans,
        { opacity: 0, y: 20 },
        {
          opacity: 2,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: mainCard,
            start: "top 50%",
            end: "top 23%",
            scrub: true,
          },
          ease: "power1.out",
        }
      );

      // circle animation
      gsap.to(circle, {
        opacity: 1,
        left: 20,
        // elastic: true,
        scrollTrigger: {
          trigger: mainCard,
          start: "top 50%",
          end: "top 10%",
          scrub: true,
        },
        ease: "power1.out",
      });

    },
    { scope: scrollRef }
  );

  return (
    <section className="min-h-screen">
      <Container>
        <div
          ref={scrollRef}
          className=" [perspective:500px]  relative z-10 px-4 md:px-24 py-16 mt-40 pt-36 flex items-center justify-center"
        >
          {/* Main Card */}
          <div className="relative z-30 max-w-5xl w-full rounded-2xl p-10 md:p-14 bg-[#006045] backdrop-blur-sm border border-zinc-800">
            <p
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 8, duration: 0.3 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.3 })
              }
              className="text-center text-balance text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
            >
              <span>I'm a passionate Full-Stack Developer and AI </span>
              <span>enthusiast focused on crafting elegant, fast, and </span>
              <span>accessible digital experiences. With tools</span>
              <span> like Next.js, React, and Tailwind CSS,</span>
              <span>
                I turn ideas into reality—merging innovation, performance, and
                design.
              </span>
            </p>
            <div className="flex justify-between pr-9">
              <div></div>
              <div>
                <ButtonCircle>
                  <span className="flex gap-1 items-center">
                    Read <HiArrowLongRight />
                  </span>
                </ButtonCircle>
              </div>
            </div>
          </div>
          <h2 className="absolute top-6 left-0 text-4xl md:text-6xl lg:text-[12rem] text-gray-200 font-extrabold font-raleway text-outline-my uppercase">
            About Me
          </h2>
          <div className="absolute  bottom-2 rounded-full z-40 right-0 h-60 w-60 bg-emerald-700"></div>
        </div>
        {/* <div className="h-20 w-full"></div> */}
      </Container>
    </section>
  );
}

export default AboutMe;
