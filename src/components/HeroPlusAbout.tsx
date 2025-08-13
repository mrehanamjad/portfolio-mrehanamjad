// "use client";
// import React from "react";
// import Container from "./Container";
// import { ButtonWG } from "./Button";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
// import Link from "next/link";

// gsap.registerPlugin([ScrollTrigger]);

// function HeroPlusAbout() {

//   useGSAP(()=>{
//     const tl = gsap.timeline();
//     tl.to("#hero-img",{
//       y : "-50%",
//       duration:2,
//       delay:1,
//     })
//     .to("#hero-img",{
//       filter: "grayscale(30%)",
//       duration:1,
//     })
//   })

//   useGSAP(() => {
//      const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#hero-container",
//         start: "top top",
//         end: "bottom top",
//         pin: true,
//         scrub: 0.5,
//       },
//      });
//     tl.to("#hero-img",{
//        ease: "power2",
//        duration:2,
//        rotate: 0,
//        opacity:1,
//        zIndex: 1,
//        scale: 0.9,
//        x: 51,
//        grayScale: 0,
//     },0).to("#hero", {
//       "--clip": "15%",
//       ease: "power2",
//       duration: 2,
//     },0).to("#hero",{
//       opacity:0,
//       ease: "power2",
//       duration:0.05
//     }).to(".aboutme-img",{
//       scale:1,
//       ease: "power2",
//       duration:1,
//     }).to(".aboutme-text",{
//       display:"block",
//       ease: "power2",
//       duration:0.1,
//     }).fromTo(".aboutme-text-piece ", { opacity: 0, y: 20 },
//         {
//           opacity: 2,
//           y: 0,
//           stagger: 0.1,
//           ease: "power1.out",
//         }).to("#aboutme-container",{
//           backgroundColor: "#131313",

//         })
//   });

//   return (
//     <section
//       id="hero-container"
//       className=" relative h-[100dvh] w-full bg-[#131313] font-oswald"
//     >
//       <Container>
//         {/* About  */}
//         <div id="aboutme-container" className="absolute overflow-hidden bg-black top-0 left-0 h-full w-full flex flex-col gap-4 justify-center items-center ">
//           <div className="h-full flex justify-center items-center flex-col gap-8 md:gap-20">
//             <div className="text-center text-6xl lg:text-8xl font-bold scale-[1] flex justify-center items-center gap-4 ">
//               <span>ABOUT</span>
//               <div  className="aboutme-img md:w-24 md:h-24 w-16 h-16 scale-[1.8] md:scale-[3] bg-green-300 rounded-full bg-center bg-cover" style={{backgroundImage: "url(https://avatars.githubusercontent.com/u/144995992?v=4)"}}></div>
//               <span>ME</span>
//             </div>
//             <p
//             id="about-txt"
//               className="aboutme-text text-center hidden  text-balance text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
//             >
//               <span className="aboutme-text-piece">I&apos;m a passionate Full-Stack Developer 👨‍💻 and AI </span>
//               <span className="aboutme-text-piece">enthusiast ✨ focused on crafting elegant, fast, and </span>
//               <span className="aboutme-text-piece">accessible digital experiences 🚀. With tools</span>
//               <span className="aboutme-text-piece"> like Next.js, React, and Tailwind CSS,</span>
//               <span className="aboutme-text-piece">
//                 I turn ideas into reality 💡🌱 — merging 🔀 innovation, performance, and
//                 design.
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Hero  */}
//         <div
//           id="hero"
//           style={{ "--clip": "100%" } as React.CSSProperties}
//           className="absolute overflow-hidden heroclip z-10 bg-[#131313] top-0 left-0 h-full w-full flex flex-col gap-4 justify-center items-center pt-16"
//         >

// <div
//     id="hero-img"
//     className="absolute z-0 w-56 h-72 md:w-72 md:h-96 bg-white -rotate-[12deg] rounded-xl bg-cover bg-center opacity-50 grayscale top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[100%]"
//     style={{ backgroundImage: "url(https://avatars.githubusercontent.com/u/144995992?v=4)" }}
//   ></div>

//           <h3 className="-mb-2 herosm-greeting relative text-5xl md:text-8xl font-dancing-script bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text font-bold">
//             Hello, I am
//           </h3>
//           <h1 className="herosm-name text-5xl md:text-8xl lg:text-9xl uppercase font-bold">
//             M.Rehan Amjad{" "}
//           </h1>
//           <div className="hero-h-line-animate  h-[1px] w-1/2 bg-zinc-400 my-3 md:my-6 "></div>
//           <h2 className="herosm-subtitle text-3xl md:text-5xl  uppercase  text-white font-semibold">
//             Full Stack Developer
//           </h2>
//           <p className="herosm-description animate-riseUp-my text-sm md:text-xl leading-relaxed w-4/5 md:w-2/3 font-light text-center text-balance">
//             I build beautiful, functional, and user-friendly websites using
//             modern tech. Let&apos;s turn ideas into reality.
//           </p>
//           <div className="flex items-center max-md:flex-col max-md:gap-4 justify-center gap-6 mt-8">
//             <Link href={"/#contact"} >
//             <ButtonWG>Contact</ButtonWG></Link>
//             <div className="flex items-center justify-content-center gap-2 font-dancing-script text-xl font-semibold">
//               <div className="h-3 w-3 bg-green-800 rounded-full"></div> Open to
//               work
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default HeroPlusAbout;

"use client";
import React from "react";
import Container from "./Container";
import { ButtonWG } from "./Button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function HeroPlusAbout() {
  useGSAP(() => {

    let split = SplitText.create(".description",{
      type:"chars,words"
    })


    const tl = gsap.timeline();
    tl.to(".greeding",{
      opacity:1,
      y:0,
      duration:0.6,
    }).to(".name",{
      opacity:1,
      y:0,
      duration:0.6,
    }).to(".subtitle",{
      opacity:1,
      y:0,
      duration:0.6,
    }).from(split.words, {
        opacity: 0,
        y: 100,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      }).to(".h-line",{
      width: "50%",
      duration:0.6,
    }).to("#hero-img", {
      y: "-50%",
      duration: 2,
    }).to("#hero-img", {
      filter: "grayscale(30%)",
      duration: 1,
    });
  });

  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-container",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 0.5,
      },
    });
    tl.to(
      "#hero-img",
      {
        ease: "power2",
        duration: 2,
        rotate: 0,
        opacity: 1,
        zIndex: 2,
        scale: 0.9,
        x: 51,
        grayScale: 0,
      },
      0
    )
      .to(
        "#hero",
        {
          "--clip": "15%",
          ease: "power2",
          duration: 2,
        },
        0
      )
      .to("#hero", {
        opacity: 0,
        ease: "power2",
        duration: 0.05,
      })
      .to(".aboutme-img", {
        scale: 1,
        ease: "power2",
        duration: 1,
      })
      .to(".aboutme-text", {
        display: "block",
        ease: "power2",
        duration: 0.1,
      })
      .fromTo(
        ".aboutme-text-piece ",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power1.out",
        }
      )
      .to("#aboutme-container", {
        backgroundColor: "#131313",
      });
  });

  // GSAP glow animation for green light
  useGSAP(() => {
    gsap.to("#green-glow", {
      scale: 1.1,
      opacity: 0.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <section
      id="hero-container"
      className="relative h-[100dvh] w-full bg-[#131313] font-oswald overflow-hidden"
    >
      <Container>
        {/* About */}
        <div
          id="aboutme-container"
          className="absolute overflow-hidden bg-black top-0 left-0 h-full w-full flex flex-col gap-4 justify-center items-center "
        >
          <div className="h-full flex justify-center items-center flex-col gap-8 md:gap-20">
            <div className="text-center text-6xl lg:text-8xl font-bold scale-[1] flex justify-center items-center gap-4 ">
              <span>ABOUT</span>
              <div
                className="aboutme-img md:w-24 md:h-24 w-16 h-16 scale-[1.8] md:scale-[3] bg-green-300 rounded-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://avatars.githubusercontent.com/u/144995992?v=4)",
                }}
              ></div>
              <span>ME</span>
            </div>
            <p
              id="about-txt"
              className="aboutme-text text-center hidden  text-balance text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
            >
             <span className="aboutme-text-piece">I&apos;m a passionate Full-Stack Developer 👨‍💻 and AI </span>
              <span className="aboutme-text-piece">enthusiast ✨ focused on crafting elegant, fast, and </span>
              <span className="aboutme-text-piece">accessible digital experiences 🚀. With tools</span>
              <span className="aboutme-text-piece"> like Next.js, React, and Tailwind CSS,</span>
              <span className="aboutme-text-piece">
                I turn ideas into reality 💡🌱 — merging 🔀 innovation, performance, and
                design.
              </span>
            </p>
          </div>
        </div>

        {/* Hero */}
        <div
          id="hero"
          style={{ "--clip": "100%" } as React.CSSProperties}
          className="absolute overflow-hidden heroclip z-10 bg-[#131313] top-0 left-0 h-full w-full flex flex-col gap-4 justify-center items-center pt-16"
        >
          {/* Green glowing background */}
          <div
            id="green-glow"
            className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] z-[1] opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,128,0.6) 0%, transparent 70%)",
            }}
          ></div>
          <div
            id="hero-img"
            className="absolute z-0 w-56 h-72 md:w-72 md:h-96 bg-white -rotate-[12deg] rounded-xl bg-cover bg-center opacity-50 grayscale top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[100%]"
            style={{
              backgroundImage:
                "url(https://avatars.githubusercontent.com/u/144995992?v=4)",
            }}
          ></div>

          <h3 className="-mb-2 z-1 greeding translate-y-16 opacity-0 relative text-5xl md:text-8xl font-dancing-script bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text font-bold">
            Hello, I am
          </h3>
          <h1 className="name translate-y-16 opacity-0 z-1 text-5xl md:text-8xl lg:text-9xl uppercase font-bold">
            M.Rehan Amjad{" "}
          </h1>
          <div className="h-line  z-1 h-[1px] w-0 bg-zinc-400 my-3 md:my-6 "></div>
          <h2 className="subtitle translate-y-16 opacity-0 z-1 text-3xl md:text-5xl  uppercase  text-white font-semibold">
            Full Stack Developer
          </h2>
          <p className="description  z-1 text-sm md:text-xl leading-relaxed w-4/5 md:w-2/3 font-light text-center text-balance">
            I build beautiful, functional, and user-friendly websites using
            modern tech. Let&apos;s turn ideas into reality.
          </p>
          <div className="flex items-center max-md:flex-col max-md:gap-4 justify-center gap-6 mt-8">
            <Link href={"/#contact"}>
              <ButtonWG>Contact</ButtonWG>
            </Link>
            <div className="flex items-center justify-content-center gap-2 font-dancing-script text-xl font-semibold">
              <div className="h-3 w-3 bg-green-800 rounded-full"></div> Open to
              work
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroPlusAbout;
