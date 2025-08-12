"use client";
import React from "react";
import Container from "./Container";
import { skillData } from "@/data/skills";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function SkillsSection() {
  useGSAP(() => {
    // Animate horizontal lines
    gsap.fromTo(
      ".skill-h-line",
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skill-section-main-container",
          start: "top top",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Animate main heading "SKILLS"
    gsap.fromTo(
      ".skills-main-heading",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skill-section-main-container",
          start: "top 80%",
          toggleActions: "play none play none",
          once: true,
        },
      }
    );

    let split = SplitText.create(".skills-subtitle",{
      type:"words,chars"
    })
    // Animate subtitle words with stagger

  
    gsap.from(
      split.chars,
      {
        y: 100,
        autoAlpha: 0,
        rotationX: 90,
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skill-section-main-container",
          start: "top 60%",
        }
      }
    );

    // Animate skill icons
    gsap.fromTo(
      ".skill-item",
      {
        y: 30,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#skill-section-main-container",
          start: "top 50%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });

  return (
    <section className="w-full min-h-screen h-full text-white">
      <Container>
        <div id="skill-section-main-container" className="h-full w-full ">
          <div className=" h-[60vh] flex flex-col justify-center items-center gap-4 md:gap-4">
            <h2 className="skills-main-heading text-4xl mb-4 text-outline-my font-semibold ">
              SKILLS
            </h2>
            <h3 className="text-5xl skills-subtitle text-center md:text-8xl  text-[#f5f5f5] font-bold bg-gradient-to-t from-[#9ca3af] via-[#f5f5f5] to-white inline-block  bg-clip-text">
              Tools Of My Trade
            </h3>
          </div>

          {skillData.map((group, idx) => (
            <div key={idx}>
              <div className="flex justify-center items-center flex-wrap gap-4 md:gap-12 px-4 md:px-10">
                {group.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item flex flex-col items-center justify-center text-center text-sm md:text-base lg:text-lg text-white/95 hover:text-green-500 hover:scale-105 transition-transform duration-200"
                  >
                    <skill.icon size={skill.size} className="mb-2" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              {idx !== skillData.length - 1 && (
                <div className="skill-h-line  mx-auto h-[1px] w-1/2 lg:w-1/4 bg-zinc-400 my-6 "></div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
