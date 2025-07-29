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

      // Animate 'ABOUT'
      gsap.fromTo(
        headingAbout,
        { top: "-22%", left: "-2%" },
        {
          top: "2%",
          left: "0",
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
        stagger: 0.1,
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
          className=" [perspective:500px] relative z-10 px-4 md:px-24 py-16 mt-40 pt-36 flex items-center justify-center"
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

          {/* Background Headings */}
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


// /*
// "use client";

// import React, { useRef } from "react";
// import Container from "../Container";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ButtonCircle } from "../Button";
// import { HiArrowLongRight } from "react-icons/hi2";

// gsap.registerPlugin(ScrollTrigger);

// function AboutMe() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const horizontalRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       const container = scrollRef.current;
//       const horizontalContainer = horizontalRef.current;
//       if (!container || !horizontalContainer) return;

//       const children = gsap.utils.toArray(
//         horizontalContainer.children
//       ) as HTMLDivElement[];

//       const mainCard = children[0];
//       const headingAbout = children[1];
//       const circle = children[2];

//       if (
//         !mainCard ||
//         !headingAbout ||
//         !circle ||
//         !mainCard.children[0]?.children
//       )
//         return;

//       const textSpans = gsap.utils.toArray(
//         mainCard.children[0].children
//       ) as HTMLSpanElement[];

//       // Create horizontal scroll timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // Calculate the scroll distance (adjust based on your content width)
//       const scrollDistance = horizontalContainer.scrollWidth - window.innerWidth;

//       // Horizontal scroll animation
//       tl.to(horizontalContainer, {
//         x: scrollDistance,
//         duration: 1,
//         ease: "none",
//       });

//       // Animate 'ABOUT ME' text
//       gsap.fromTo(
//         headingAbout,
//         { top: "-22%", left: "-2%" },
//         {
//           top: "2%",
//           left: "0",
//           scrollTrigger: {
//             trigger: container,
//             start: "top 50%",
//             end: "top 20%",
//             scrub: true,
//           },
//           ease: "power1.out",
//         }
//       );

//       // Animate each <span> inside text
//       gsap.fromTo(
//         textSpans,
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: container,
//             start: "top 60%",
//             end: "top 30%",
//             scrub: true,
//           },
//           ease: "power1.out",
//         }
//       );

//       // Circle animation - follows the horizontal scroll
//       gsap.fromTo(
//         circle,
//         { opacity: 0, x: 100 },
//         {
//           opacity: 1,
//           x: 0,
//           scrollTrigger: {
//             trigger: container,
//             start: "top 60%",
//             end: "top 20%",
//             scrub: true,
//           },
//           ease: "power1.out",
//         }
//       );

//     },
//     { scope: scrollRef }
//   );

//   return (
//     <section className="overflow-hidden">
//       <div
//         ref={scrollRef}
//         className="min-h-screen relative"
//         style={{ height: "300vh" }} // Increase height to allow more scroll
//       >
//         <Container>
//           <div
//             ref={horizontalRef}
//             className="flex items-center justify-start [perspective:500px] relative z-10 px-4 md:px-24 py-36 mt-30 scroll-pt-36"
//             style={{ width: "300vw" }} // Make container wider for horizontal scroll
//           >
//             {/* Main Card */}
//             <div className="relative z-30 max-w-5xl w-full rounded-2xl p-10 md:p-14 bg-[#006045] backdrop-blur-sm border border-zinc-800 flex-shrink-0 mr-20">
//               <p
//                 onMouseEnter={() =>
//                   gsap.to("#cursor", { scale: 8, duration: 0.3 })
//                 }
//                 onMouseLeave={() =>
//                   gsap.to("#cursor", { scale: 1, duration: 0.3 })
//                 }
//                 className="text-center text-balance text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
//               >
//                 <span>I'm a passionate Full-Stack Developer and AI </span>
//                 <span>enthusiast focused on crafting elegant, fast, and </span>
//                 <span>accessible digital experiences. With tools</span>
//                 <span> like Next.js, React, and Tailwind CSS,</span>
//                 <span>
//                   I turn ideas into reality—merging innovation, performance, and
//                   design.
//                 </span>
//               </p>
//               <div className="flex justify-between pr-9">
//                 <div></div>
//                 <div>
//                   <ButtonCircle>
//                     <span className="flex gap-1 items-center">
//                       Read <HiArrowLongRight />
//                     </span>
//                   </ButtonCircle>
//                 </div>
//               </div>
//             </div>

//             {/* Background Headings */}
//             <h2 className="absolute top-6 left-0 text-4xl md:text-6xl lg:text-[12rem] text-gray-200 font-extrabold font-raleway text-outline-my uppercase">
//               About Me
//             </h2>
            
//             {/* Circle that moves with scroll */}
//             <div className="absolute bottom-20 rounded-full z-40 right-0 h-60 w-60 bg-emerald-700"></div>
            
//             {/* Additional content for horizontal scroll effect */}
//             <div className="flex-shrink-0 w-screen h-full flex items-center justify-center">
//               <div className="max-w-5xl w-full rounded-2xl p-10 md:p-14 bg-[#004a35] backdrop-blur-sm border border-zinc-800">
//                 <h3 className="text-gray-200 text-2xl md:text-3xl font-bold mb-6">My Skills</h3>
//                 <p className="text-gray-200 text-lg leading-relaxed">
//                   Explore my technical expertise and the tools I use to bring ideas to life.
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex-shrink-0 w-screen h-full flex items-center justify-center">
//               <div className="max-w-5xl w-full rounded-2xl p-10 md:p-14 bg-[#003528] backdrop-blur-sm border border-zinc-800">
//                 <h3 className="text-gray-200 text-2xl md:text-3xl font-bold mb-6">My Projects</h3>
//                 <p className="text-gray-200 text-lg leading-relaxed">
//                   Discover the innovative solutions I've built and the impact they've made.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </section>
//   );
// }

// export default AboutMe;
