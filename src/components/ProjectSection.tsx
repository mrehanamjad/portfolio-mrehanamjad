

"use client";

import { useRef } from "react";
import Container from "./Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { LuArrowBigRightDash, LuArrowUpRight } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      color: "bg-gradient-to-br from-red-500 to-red-600",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features like real-time inventory management, secure payment processing, and AI-powered product recommendations.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics dashboard.",
      techStack: ["React Native", "TypeScript", "Firebase", "Plaid API"],
      github: "https://github.com/username/mobile-banking",
      live: "https://banking-app-demo.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      color: "bg-gradient-to-br from-green-500 to-green-600",
      title: "AI Dashboard",
      description:
        "Intelligent analytics dashboard powered by machine learning algorithms for data visualization and predictive insights across multiple business metrics.",
      techStack: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      github: "https://github.com/username/ai-dashboard",
      live: "https://ai-dashboard-demo.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      title: "Social Media Tool",
      description:
        "Comprehensive social media management platform with content scheduling, analytics tracking, and multi-platform posting capabilities.",
      techStack: ["Vue.js", "Firebase", "Node.js", "Social APIs"],
      github: "https://github.com/username/social-media-tool",
      live: "https://social-tool-demo.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      title: "Analytics Platform",
      description:
        "Advanced business intelligence platform with real-time data processing, custom report generation, and interactive visualization tools.",
      techStack: ["React", "D3.js", "Express", "Redis", "Chart.js"],
      github: "https://github.com/username/analytics-platform",
      live: "https://analytics-demo.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      title: "Video Streaming",
      description:
        "High-performance video streaming platform with adaptive bitrate streaming, content management, and real-time chat functionality.",
      techStack: ["Next.js", "AWS", "WebRTC", "Socket.io", "FFmpeg"],
      github: "https://github.com/username/video-streaming",
      live: "https://streaming-demo.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      title: "IoT Dashboard",
      description:
        "Real-time IoT device monitoring and control system with sensor data visualization, automated alerts, and device management capabilities.",
      techStack: ["React", "WebSocket", "MQTT", "InfluxDB", "Grafana"],
      github: "https://github.com/username/iot-dashboard",
      live: "https://iot-demo.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
  ];

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
      if (index < cardElements.length - 1) {
        const nextCard = cardElements[index + 1];
        mainTl
          .to(
            card,
            {
              y: -window.innerHeight * 1.2,
              rotation: gsap.utils.random(-10, 10),
              scale: 0.8,
              duration: 1,
              ease: "power2.inOut",
            },
            index * 0.5
          )
          .to(
            nextCard,
            {
              scale: 1,
              rotate: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
            },
            index * 0.5 + 0.3
          ).to(card,{opacity: 0})
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="" className="w-full min-h-screen">
      <Container>
        <div id="project-section-main-container" className="w-full">
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
              </span>
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
            {cards.map((card, index) => (
              <div
                key={index}
                className={`project-card absolute w-[85%] max-w-4xl h-[80%] ${card.color} rounded-2xl shadow-2xl border p-4 border-white/10  flex max-md:flex-col justify-between`}
              >
                <div className="pr-1 py-4 text-white flex flex-col md:w-[35%]">
                  <div className="w-full h-full flex flex-col gap-4">
                    <h4 className="font-bold text-3xl">{card.title}</h4>
                    <p className="">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm py-1 px-2 rounded-lg bg-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                    <div className="flex justify-end items-center px-2">
                      <FaGithub title="View Project" className="w-8 h-8" />
                      <LuArrowUpRight title="View Live" className="w-12 h-12" />
                    </div>
                </div>
                <div className="bg-black/20 w-full md:w-[65%] h-full rounded-xl md:flex-1">
                  <Image
                    className="h-full w-full rounded-xl"
                    src={card.images[2]}
                    alt={card.title + "-image"}
                    width={1000}
                    height={1000}
                  />
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
