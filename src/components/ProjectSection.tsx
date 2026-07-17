// "use client";

// import { useRef } from "react";
// import Container from "./Container";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";
// import { FaGithub } from "react-icons/fa6";
// import { LuArrowUpRight } from "react-icons/lu";
// import projectsData from "@/data/projects.json";
// import Link from "next/link";
// import { SplitText } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);


// function ProjectSection() {

//   const cards = projectsData.filter(project => project.featured)

//   const sectionRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);
  
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
//   const vh = typeof window !== "undefined" ? window.innerHeight : 800; // cache height

//   useGSAP(() => {
//     // Animate main heading "PROJECTS"
//     gsap.fromTo(
//       ".projects-main-heading",
//       {
//         y: 50,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: "#project-section-main-container",
//           start: "top 80%",
//           toggleActions: "play none play none",
//           once: true,
//         },
//       }
//     );

//     const split = SplitText.create(".projects-subtitle",{
//       type:"words,chars"
//     })
//     // Animate subtitle words with stagger

  
//     gsap.from(
//       split.chars,
//       {
//         y: 100,
//         autoAlpha: 0,
//         rotationX: 90,
//         duration: 1,
//         stagger: 0.05,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: "#project-section-main-container",
//           start: "top 60%",
//         }
//       }
//     );


//     const cardElements = gsap.utils.toArray(
//       ".project-card"
//     ) as HTMLDivElement[];

//     // Initial setup - stack cards with proper z-index and slight offset
//     gsap.set(cardElements, {
//       // y: (i: number) => i * 15,
//       rotate: (i) => (isMobile ? 0 : (i !== 0 ? i + 2 : 0)),
//       scale: (i: number) => 1 - i * 0.02,
//       zIndex: (i: number) => cards.length - i,
//       transformOrigin: "center center",
//     });

//     // Create main timeline
//     const mainTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: cardsRef.current,
//         start: "top top",
//         end: isMobile ? `+=${cards.length * 60}%` : `+=${cards.length * 100}%`,
//         scrub: isMobile ? 0.5 : 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Animate each card
//     cardElements.forEach((card, index) => {
//       if (index <= cardElements.length - 1) {
//         const nextCard = cardElements[index + 1];
//         mainTl
//           .to(
//             card,
//             {
//               y: -vh * 1.1,
//               rotation: isMobile ? 0 : gsap.utils.random(-10, 10),
//               // scale: 0.8,
//               // opacity: 0.8,
//               duration: isMobile ? 0.5 :  0.9,
//               ease: "power2.inOut",
//             },
//             // index * 0.5
//             index
//           )
//           .to(
//             nextCard,
//             {
//               scale: 1,
//               rotate: 0,
//               duration: isMobile ? 0.3 : 0.5,
//               ease: "back.out(1.7)",
//             },
//             // index * 0.5 + 0.3
//             index + 0.25
//           ).to(card,{opacity: 0})
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} id="project-s" className="w-full min-h-screen">
//       <Container>
//         <div id="project-section-main-container" className=" w-full overflow-hidden">
         
//           {/* Header Section */}
//           <div className="pt-20 pb-16 text-center">
//             <h2 className="projects-main-heading text-4xl  mb-8 text-outline-my font-semibold">
//               PROJECTS
//             </h2>
//             <h3 className="projects-subtitle text-center text-6xl md:text-8xl leading-16 font-bold bg-gradient-to-t from-[#9ca3af] via-[#f5f5f5] to-white inline-block text-[#f5f5f5] bg-clip-text">
//               Some Of My Recent Work
//             </h3>
//           </div>

//           {/* Cards Section */}
//           <div
//             ref={cardsRef}
//             className="relative h-screen flex items-center justify-center"
//           >
//             <Link href={"/projects"}  className=" flex  justify-center items-end gap-1 cursor-pointer group hover:text-green-500" >
//             <span className={`relative text-4xl md:text-6xl font-bold italic transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[4px] after:bg-green-700 after:transition-all after:duration-300 group-hover:after:w-full flex gap-2`}>
//                     View All Projects <LuArrowUpRight className="text-2xl md:text-7xl group-hover:rotate-12 transition-transform" />
//                   </span>
//             </Link>

//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`project-card absolute w-[97%] md:w-[85%] max-w-[60rem] h-[86%] md:h-[80%] ${card.color} rounded-2xl shadow-2xl border p-2 md:p-4 border-white/10  flex max-md:flex-col max-md:gap-4 md:justify-between`}
//               >
//                 <div className={`md:pr-1 max-md:px-1 md:py-4  flex flex-col md:w-[35%] h-full ${index % 2 === 0 ? "order-1" : "order-2 md:pl-3"} max-md:order-2 max-md:justify-between`}>
//                   <div className="w-full h-full flex flex-col gap-4">
//                     <h4 className="font-bold text-3xl">{card.title}</h4>
//                     <p className="md:text-lg  ">{card.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {card.technologies.map((tech, index) => (
//                         <span
//                           key={index}
//                           className="text-sm py-1 px-2 rounded-lg bg-white/20"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                     <div className="flex justify-end items-center px-2 gap-2 max-md:justify-between max-md:px-4 max-md:pb-4 pt-2 ">
//                     {card.github && <Link 
//                       href={card.github} 
//                       target="_blank"
//                       className="flex items-center gap-2 px-4 py-2 rounded-lg 
//                         bg-white/10 hover:bg-white/20 border border-white/20
//                         transition-all duration-200 group text-sm sm:text-base"
//                       title="View Code"
//                     >
//                       <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
//                       <span className="inline md:hidden">Code</span>
//                     </Link>}
//                   {card.live && <Link 
//                     href={card.live}
//                     target="_blank"
//                       className="flex items-center gap-2 px-4 py-2 rounded-lg 
//                         bg-white/10 hover:bg-white/20 border border-white/20
//                         transition-all duration-200 group text-sm sm:text-base"
//                       title="View Live"
//                     >
//                       <span className="inline md:hidden">Live</span>
//                       <LuArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
//                     </Link>}
//                     </div>
//                 </div>
//                 <div className={`relative bg-black/20 w-full md:w-[65%] h-[40%] md:h-full rounded-xl max-md:order-1 md:flex-1 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
//                   <Image
//                     className={`h-full w-full rounded-xl ${isMobile ? "object-cover" :"object-fill"}`}
//                     src={card.image}
//                     alt={`${card.title}-image`}
//                     width={1000}
//                     height={1000}
//                    quality={isMobile ? 60 : 90}
//                    loading={index === 0 ? "eager" : "lazy"}
//                   />
//                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
//                       <span className={`px-3 py-1.5 text-xs sm:text-sm font-medium
//                         ${card.color} backdrop-blur-sm rounded-full
//                         border border-white/20 text-white antialiased`}>
//                         {card.category}
//                       </span>
//                     </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Spacer for scroll */}
//           <div className="h-20"></div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default ProjectSection;















// New Project Section



// "use client";

// import { useRef } from "react";
// import Container from "./Container";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";
// import { FaGithub } from "react-icons/fa6";
// import { LuArrowUpRight } from "react-icons/lu";
// import projectsData from "@/data/projects.json";
// import Link from "next/link";
// import { SplitText } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);


// function ProjectSection() {

//   const cards = projectsData.filter(project => project.featured)

//   const sectionRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);
  
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
//   const vh = typeof window !== "undefined" ? window.innerHeight : 800; // cache height

//   useGSAP(() => {
//     // Animate main heading "PROJECTS"
//     gsap.fromTo(
//       ".projects-main-heading",
//       {
//         y: 50,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: "#project-section-main-container",
//           start: "top 80%",
//           toggleActions: "play none play none",
//           once: true,
//         },
//       }
//     );

//     const split = SplitText.create(".projects-subtitle",{
//       type:"words,chars"
//     })
//     // Animate subtitle words with stagger

  
//     gsap.from(
//       split.chars,
//       {
//         y: 100,
//         autoAlpha: 0,
//         rotationX: 90,
//         duration: 1,
//         stagger: 0.05,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: "#project-section-main-container",
//           start: "top 60%",
//         }
//       }
//     );


//     const cardElements = gsap.utils.toArray(
//       ".project-card"
//     ) as HTMLDivElement[];

//     // Initial setup - stack cards with proper z-index and slight offset
//     gsap.set(cardElements, {
//       // y: (i: number) => i * 15,
//       rotate: (i) => (isMobile ? 0 : (i !== 0 ? i + 2 : 0)),
//       scale: (i: number) => 1 - i * 0.02,
//       zIndex: (i: number) => cards.length - i,
//       transformOrigin: "center center",
//     });

//     // Create main timeline
//     const mainTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: cardsRef.current,
//         start: "top top",
//         end: isMobile ? `+=${cards.length * 60}%` : `+=${cards.length * 100}%`,
//         scrub: isMobile ? 0.5 : 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Animate each card
//     cardElements.forEach((card, index) => {
//       if (index <= cardElements.length - 1) {
//         const nextCard = cardElements[index + 1];
//         mainTl
//           .to(
//             card,
//             {
//               y: -vh * 1.1,
//               rotation: isMobile ? 0 : gsap.utils.random(-10, 10),
//               // scale: 0.8,
//               // opacity: 0.8,
//               duration: isMobile ? 0.5 :  0.9,
//               ease: "power2.inOut",
//             },
//             // index * 0.5
//             index
//           )
//           .to(
//             nextCard,
//             {
//               scale: 1,
//               rotate: 0,
//               duration: isMobile ? 0.3 : 0.5,
//               ease: "back.out(1.7)",
//             },
//             // index * 0.5 + 0.3
//             index + 0.25
//           ).to(card,{opacity: 0})
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} id="project-s" className="w-full min-h-screen">
//       <Container>
//         <div id="project-section-main-container" className=" w-full overflow-hidden">
         
//           {/* Header Section */}
//           <div className="pt-20 pb-16 text-center">
//             <h2 className="projects-main-heading text-4xl  mb-8 text-outline-my font-semibold">
//               PROJECTS
//             </h2>
//             <h3 className="projects-subtitle text-center text-6xl md:text-8xl leading-16 font-bold bg-gradient-to-t from-[#9ca3af] via-[#f5f5f5] to-white inline-block text-[#f5f5f5] bg-clip-text">
//               Some Of My Recent Work
//             </h3>
//           </div>

//           {/* Cards Section */}
//           <div
//             ref={cardsRef}
//             className="relative h-screen flex items-center justify-center"
//           >
//             <Link href={"/projects"}  className=" flex  justify-center items-end gap-1 cursor-pointer group hover:text-green-500" >
//             <span className={`relative text-4xl md:text-6xl font-bold italic transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[4px] after:bg-green-700 after:transition-all after:duration-300 group-hover:after:w-full flex gap-2`}>
//                     View All Projects <LuArrowUpRight className="text-2xl md:text-7xl group-hover:rotate-12 transition-transform" />
//                   </span>
//             </Link>

//                {cards.map((card, index) => {
//               const fig = String(index + 1).padStart(2, "0");
//               const filename = `${card.title}.tsx`;

//               return (
//                 <div
//                   key={index}
//                   className="project-card absolute w-[97%] md:w-[85%] max-w-[64rem] h-[86%] md:h-[80%] rounded-[28px] border border-white/[0.08] bg-[#111318] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
//                 >
//                   {/* Terminal-style chrome bar */}
//                   <div className="flex items-center justify-between px-4 md:px-5 h-11 border-b border-white/[0.06] bg-[#16181D] shrink-0">
//                     <div className="flex items-center gap-3">
//                       <div className="flex gap-1.5">
//                         <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
//                         <span className={`h-2.5 w-2.5 rounded-full ${card.color}`} />
//                         <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
//                       </div>
                     
//                     </div>
//                     <span className="font-mono text-xs text-white/90">
//                       {card.category}
//                     </span>
//                   </div>

//                   {/* Body */}
//                   <div className="flex-1 flex max-md:flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 min-h-0">
//                     <div className="flex flex-col md:w-[38%] h-full justify-between min-h-0">
//                       <div className="flex flex-col gap-4 min-h-0">
//                         <h4 className="font-bold text-2xl md:text-3xl text-[#F5F3EE] tracking-tight leading-tight">
//                           {card.title}
//                         </h4>
//                         <p className="text-sm md:text-base text-[#9AA1AC] leading-relaxed line-clamp-4 md:line-clamp-6">
//                           {card.description}
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                           {card.technologies.map((tech, i) => (
//                             <span
//                               key={i}
//                               className="font-mono text-[11px] md:text-xs py-1 px-2.5 rounded-md border border-white/10 bg-white/[0.03] text-white/60"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-2 pt-4 max-md:pb-1">
//                         {card.github && (
//                           <Link
//                             href={card.github}
//                             target="_blank"
//                             className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:border-[#F2A65A]/50 hover:bg-[#F2A65A]/10 hover:text-[#F2A65A] transition-all duration-200 group text-sm text-white/70"
//                             title="View Code"
//                           >
//                             <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//                             <span>Code</span>
//                           </Link>
//                         )}
//                         {card.live && (
//                           <Link
//                             href={card.live}
//                             target="_blank"
//                             className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:border-[#F2A65A]/50 hover:bg-[#F2A65A]/10 hover:text-[#F2A65A] transition-all duration-200 group text-sm text-white/70"
//                             title="View Live"
//                           >
//                             <span>Live</span>
//                             <LuArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
//                           </Link>
//                         )}
//                       </div>
//                     </div>

//                     <div className="relative w-full md:w-[62%] h-[45%] md:h-full rounded-2xl overflow-hidden border border-white/[0.06]">
//                       <Image
//                         className={`h-full w-full`}
//                         src={card.image}
//                         alt={`${card.title}-image`}
//                         width={1000}
//                         height={1000}
//                         quality={isMobile ? 60 : 90}
//                         loading={index === 0 ? "eager" : "lazy"}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/10" />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Spacer for scroll */}
//           <div className="h-20"></div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default ProjectSection;

















// Project section v3

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
  const cards = projectsData.filter((project) => project.featured);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;

  useGSAP(() => {
    gsap.fromTo(
      ".projects-main-heading",
      { y: 50, opacity: 0 },
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

    const split = SplitText.create(".projects-subtitle", {
      type: "words,chars",
    });

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      rotationX: 90,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#project-section-main-container",
        start: "top 60%",
      },
    });

    // --- Three separate targets now instead of one ---
    const cardElements = gsap.utils.toArray(".project-card") as HTMLDivElement[];
    const scaleWrappers = gsap.utils.toArray(".card-scale-wrapper") as HTMLDivElement[];
    const textBlocks = gsap.utils.toArray(".card-text-block") as HTMLDivElement[];

    // Outer card: only rotate + zIndex (no scale here anymore)
    gsap.set(cardElements, {
      rotate: (i) => (isMobile ? 0 : i !== 0 ? i + 2 : 0),
      zIndex: (i) => cards.length - i,
      transformOrigin: "center center",
      force3D: true,
    });

    // Inner frame: this is what actually shrinks for the stack depth effect
    gsap.set(scaleWrappers, {
      scale: (i) => 1 - i * 0.02,
      transformOrigin: "center center",
      force3D: true,
    });

    // Text block: counter-scaled so it always renders at a clean 1:1 scale
    gsap.set(textBlocks, {
      scale: (i) => 1 / (1 - i * 0.02),
      transformOrigin: "center center",
      force3D: true,
    });

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

    cardElements.forEach((card, index) => {
      const nextCard = cardElements[index + 1];
      const nextScaleWrapper = scaleWrappers[index + 1];
      const nextTextBlock = textBlocks[index + 1];

      if (index <= cardElements.length - 1) {
        mainTl
          .to(
            card,
            {
              y: -vh * 1.1,
              rotation: isMobile ? 0 : gsap.utils.random(-10, 10),
              duration: isMobile ? 0.5 : 0.9,
              ease: "power2.inOut",
            },
            index
          )
          .to(
            nextCard,
            {
              rotate: 0,
              duration: isMobile ? 0.3 : 0.5,
              ease: "back.out(1.7)",
            },
            index + 0.25
          )
          .to(
            nextScaleWrapper,
            {
              scale: 1,
              duration: isMobile ? 0.3 : 0.5,
              ease: "back.out(1.7)",
            },
            index + 0.25
          )
          .to(
            nextTextBlock,
            {
              scale: 1,
              duration: isMobile ? 0.3 : 0.5,
              ease: "back.out(1.7)",
            },
            index + 0.25
          )
          .to(card, { opacity: 0 });
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
          <div className="pt-20 pb-16 text-center">
            <h2 className="projects-main-heading text-4xl  mb-8 text-outline-my font-semibold">
              PROJECTS
            </h2>
            <h3 className="projects-subtitle text-center text-6xl md:text-8xl leading-16 font-bold bg-gradient-to-t from-[#9ca3af] via-[#f5f5f5] to-white inline-block text-[#f5f5f5] bg-clip-text">
              Some Of My Recent Work
            </h3>
          </div>

          <div ref={cardsRef} className="relative h-screen flex items-center justify-center">
            <Link href={"/projects"} className=" flex  justify-center items-end gap-1 cursor-pointer group hover:text-green-500">
              <span className="relative text-4xl md:text-6xl font-bold italic transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[4px] after:bg-green-700 after:transition-all after:duration-300 group-hover:after:w-full flex gap-2">
                View All Projects <LuArrowUpRight className="text-2xl md:text-7xl group-hover:rotate-12 transition-transform" />
              </span>
            </Link>

            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="project-card absolute w-[97%] md:w-[85%] max-w-[64rem] h-[86%] md:h-[80%] rounded-[28px] border border-white/[0.08] bg-[#111318] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {/* NEW: scale-only wrapper. This is what shrinks for stack depth. */}
                  <div className="card-scale-wrapper w-full h-full flex flex-col">
                    {/* Terminal-style chrome bar */}
                    <div className="flex items-center justify-between px-4 md:px-5 h-11 border-b border-white/[0.06] bg-[#16181D] shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                          <span className={`h-2.5 w-2.5 rounded-full ${card.color}`} />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        </div>
                      </div>
                      <span className="font-mono text-xs text-white/90">{card.category}</span>
                    </div>

                    {/* Body */}
                    <div className="flex-1 flex max-md:flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 min-h-0">
                      {/* NEW: text block gets counter-scaled to stay crisp */}
                      <div className="card-text-block flex flex-col md:w-[38%] h-full justify-between min-h-0">
                        <div className="flex flex-col gap-4 min-h-0">
                          <h4 className="font-bold text-2xl md:text-3xl text-[#F5F3EE] tracking-tight leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-sm md:text-base text-[#9AA1AC] leading-relaxed line-clamp-4 md:line-clamp-6">
                            {card.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {card.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="font-mono text-[11px] md:text-xs py-1 px-2.5 rounded-md border border-white/10 bg-white/[0.03] text-white/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4 max-md:pb-1">
                          {card.github && (
                            <Link
                              href={card.github}
                              target="_blank"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:border-[#F2A65A]/50 hover:bg-[#F2A65A]/10 hover:text-[#F2A65A] transition-all duration-200 group text-sm text-white/70"
                              title="View Code"
                            >
                              <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                              <span>Code</span>
                            </Link>
                          )}
                          {card.live && (
                            <Link
                              href={card.live}
                              target="_blank"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:border-[#F2A65A]/50 hover:bg-[#F2A65A]/10 hover:text-[#F2A65A] transition-all duration-200 group text-sm text-white/70"
                              title="View Live"
                            >
                              <span>Live</span>
                              <LuArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                            </Link>
                          )}
                        </div>
                      </div>

                      <div className="relative w-full md:w-[62%] h-[45%] md:h-full rounded-2xl overflow-hidden border border-white/[0.06]">
                        <Image
                          className="h-full w-full"
                          src={card.image}
                          alt={`${card.title}-image`}
                          width={1000}
                          height={1000}
                          quality={isMobile ? 60 : 90}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/10" />

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-20"></div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectSection;