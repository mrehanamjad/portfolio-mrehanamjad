"use client";

import { useRef } from "react";
import Container from "./Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import projectsData from "@/data/projects.json";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function ProjectSection() {

  const cards = projectsData

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {


    // Animate main heading "PROJECTS"
    gsap.fromTo(
      ".projects-main-heading",
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
          trigger: "#project-section-main-container",
          start: "top 80%",
          toggleActions: "play none play none",
          once: true,
        },
      }
    );

    // Animate subtitle words with stagger
    gsap.fromTo(
      ".projects-subtitle-word",
      {
        y: 100,
        opacity: 0,
        rotationX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#project-section-main-container",
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    const cardElements = gsap.utils.toArray(
      ".project-card"
    ) as HTMLDivElement[];

    // Initial setup - stack cards with proper z-index and slight offset
    gsap.set(cardElements, {
      // y: (i: number) => i * 15,
      rotate: (i) => (i !== 0 ? i + 2 : 0),
      scale: (i: number) => 1 - i * 0.02,
      zIndex: (i: number) => cards.length - i,
      transformOrigin: "center center",
    });

    // Create main timeline
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate each card
    cardElements.forEach((card, index) => {
      if (index <= cardElements.length - 1) {
        const nextCard = cardElements[index + 1];
        mainTl
          .to(
            card,
            {
              y: -window.innerHeight * 1.2,
              rotation: gsap.utils.random(-10, 10),
              // scale: 0.8,
              // opacity: 0.8,
              duration:  0.7,
              ease: "power2.inOut",
            },
            // index * 0.5
            index
          )
          .to(
            nextCard,
            {
              scale: 1,
              rotate: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            },
            // index * 0.5 + 0.3
            index + 0.25
          ).to(card,{opacity: 0})
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="project-s" className="w-full min-h-screen">
      <Container>
        <div id="project-section-main-container" className="w-full overflow-hidden">
          {/* Header Section */}
          <div className="pt-20 pb-16 text-center">
            <h2 className="projects-main-heading text-4xl  mb-4 text-outline-my font-semibold">
              PROJECTS
            </h2>
            <h3 className=" text-center text-6xl md:text-8xl uppercase font-bold ">
              <span className="projects-subtitle-word bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text">
                Some
              </span>{" "}
              <span className="projects-subtitle-word bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text">
                Of
              </span>{" "}
              <span className="projects-subtitle-word bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text">
                My
              </span>{" "}
              <span className="projects-subtitle-word bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text">
                Resent
              </span>{" "}
              <span className="projects-subtitle-word bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text">
                Work
              </span>
            </h3>
          </div>

          {/* Cards Section */}
          <div
            ref={cardsRef}
            className="relative h-screen flex items-center justify-center"
          >
            <Link href={"https://github/mrehanamjad"} target="_blank" className=" flex  justify-center items-end gap-1 cursor-pointer group hover:text-green-500" >
            <span className={`relative text-2xl md:text-6xl font-bold italic transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[4px] after:bg-green-700 after:transition-all after:duration-300 group-hover:after:w-full flex gap-2`}>
                    View All Projects <LuArrowUpRight className="text-2xl md:text-7xl group-hover:rotate-12 transition-transform" />
                  </span>
            </Link>

            {cards.map((card, index) => (
              <div
                key={index}
                className={`project-card absolute w-[97%] md:w-[85%] max-w-[60rem] h-[86%] md:h-[80%] ${card.color} rounded-2xl shadow-2xl border p-2 md:p-4 border-white/10  flex max-md:flex-col max-md:gap-4 md:justify-between`}
              >
                <div className={`md:pr-1 max-md:px-1 md:py-4  flex flex-col md:w-[35%] h-full ${index % 2 === 0 ? "order-1" : "order-2 md:pl-3"} max-md:order-2 max-md:justify-between`}>
                  <div className="w-full h-full flex flex-col gap-4">
                    <h4 className="font-bold text-3xl">{card.title}</h4>
                    <p className="md:text-lg  ">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm py-1 px-2 rounded-lg bg-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                    <div className="flex justify-end items-center px-2 gap-2 max-md:justify-between max-md:px-4 max-md:pb-4 pt-2 ">
                      <Link 
                      href={card.github} 
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg 
                        bg-white/10 hover:bg-white/20 border border-white/20
                        transition-all duration-200 group text-sm sm:text-base"
                      title="View Code"
                    >
                      <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                      <span className="inline md:hidden">Code</span>
                    </Link>
                    <Link 
                    href={card.live}
                    target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg 
                        bg-white/10 hover:bg-white/20 border border-white/20
                        transition-all duration-200 group text-sm sm:text-base"
                      title="View Live"
                    >
                      <span className="inline md:hidden">Live</span>
                      <LuArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                    </Link>
                    </div>
                </div>
                <div className={`relative bg-black/20 w-full md:w-[65%] h-[40%] md:h-full rounded-xl max-md:order-1 md:flex-1 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                  <Image
                    className="h-full w-full rounded-xl object-fill"
                    src={card.image}
                    alt={card.title + "-image"}
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                   <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className={`px-3 py-1.5 text-xs sm:text-sm font-medium
                        ${card.color} backdrop-blur-sm rounded-full
                        border border-white/20 text-white antialiased`}>
                        {card.category}
                      </span>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spacer for scroll */}
          <div className="h-20"></div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectSection;