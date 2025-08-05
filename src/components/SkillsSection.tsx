"use client"
import React from "react";
import Container from "./Container";
import { skillData } from "@/data/skills";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function SkillsSection() {

  useGSAP(()=>{

    gsap.fromTo(".skill-h-line",{
      scaleX: 0
    },{
      scaleX:1,
      stagger: 0.1,
      duration:1,
      ease: "power2.out",
       scrollTrigger :{
        trigger: "#skill-section-main-container",
        start: "top top",
        toggleActions: "play none none none",
        once: true,
      },
    })

  })

  return (
    <section className="w-full min-h-screen h-full">
      <Container>
        <div id="skill-section-main-container" className="h-full w-full ">
          <div className=" h-[60vh] flex flex-col justify-center items-center gap-4 md:gap-10">
            <h2 className="text-4xl text-outline-my font-semibold ">SKILLS</h2>
            <h3 className="text-5xl text-center md:text-8xl lg:text-9xl uppercase font-bold ">
              <span className="bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text">
                Tools Of My
              </span>{" "}
              <span className="bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text">
                Trade
              </span>
            </h3>
          </div>

          {skillData.map((group, idx) => (
            <div  key={idx} >
              <div className="flex justify-center items-center flex-wrap gap-4 md:gap-12 px-4 md:px-10">
                {group.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center text-sm md:text-base lg:text-lg text-white/80 hover:scale-105 transition-transform duration-200"
                  >
                    <skill.icon size={48} className="mb-2" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              { idx !== (skillData.length - 1) &&
              <div  className="skill-h-line  mx-auto h-[1px] w-1/2 lg:w-1/4 bg-zinc-400 my-6 "></div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
