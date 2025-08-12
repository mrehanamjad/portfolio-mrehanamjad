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
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


function ProjectSection() {

  const cards = projectsData.filter(project => project.featured)

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800; // cache height

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

    let split = SplitText.create(".projects-subtitle",{
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
          trigger: "#project-section-main-container",
          start: "top 60%",
        }
      }
    );


    const cardElements = gsap.utils.toArray(
      ".project-card"
    ) as HTMLDivElement[];

    // Initial setup - stack cards with proper z-index and slight offset
    gsap.set(cardElements, {
      // y: (i: number) => i * 15,
      rotate: (i) => (isMobile ? 0 : (i !== 0 ? i + 2 : 0)),
      scale: (i: number) => 1 - i * 0.02,
      zIndex: (i: number) => cards.length - i,
      transformOrigin: "center center",
    });

    // Create main timeline
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top top",
        end: isMobile ? `+=${cards.length * 60}%` : `+=${cards.length * 100}%`,
        scrub: isMobile ? 0.5 : 1,
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
              y: -vh * 1.1,
              rotation: isMobile ? 0 : gsap.utils.random(-10, 10),
              // scale: 0.8,
              // opacity: 0.8,
              duration: isMobile ? 0.5 :  0.9,
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
              duration: isMobile ? 0.3 : 0.5,
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
        <div id="project-section-main-container" className=" w-full overflow-hidden">
         
          {/* Header Section */}
          <div className="pt-20 pb-16 text-center">
            <h2 className="projects-main-heading text-4xl  mb-4 text-outline-my font-semibold">
              PROJECTS
            </h2>
            <h3 className="projects-subtitle text-center text-6xl md:text-8xl uppercase font-bold bg-gradient-to-t from-[#9ca3af] via-[#f5f5f5] to-white inline-block text-[#f5f5f5] bg-clip-text">
              Some Of My Recent Work
            </h3>
          </div>

          {/* Cards Section */}
          <div
            ref={cardsRef}
            className="relative h-screen flex items-center justify-center"
          >
            <Link href={"/projects"}  className=" flex  justify-center items-end gap-1 cursor-pointer group hover:text-green-500" >
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
                    className={`h-full w-full rounded-xl ${isMobile ? "object-cover" :"object-fill"}`}
                    src={card.image}
                    alt={`${card.title}-image`}
                    width={1000}
                    height={1000}
                   quality={isMobile ? 60 : 90}
                   loading={index === 0 ? "eager" : "lazy"}
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
