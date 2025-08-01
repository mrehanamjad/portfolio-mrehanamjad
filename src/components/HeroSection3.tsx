import React from "react";
import Container from "./Container";
import { ButtonWG } from "./Button";

function HeroSection3() {
  return (
    <section className="relative h-[100dvh] w-full bg-[#131313] font-oswald">
      <Container>
        <div className=" flex flex-col gap-4 justify-center items-center h-full pt-16">
          <h3 className="-mb-2 herosm-greeting relative text-5xl md:text-8xl font-dancing-script bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text font-bold">
            Hello, I am
          </h3>
          <h1 className="herosm-name text-5xl md:text-8xl lg:text-9xl uppercase font-bold">
            M.Rehan Amjad{" "}
          </h1>
          <div className="h-[1px] w-1/2 bg-zinc-400 my-3 md:my-6 "></div>
          <h2 className="herosm-subtitle text-3xl md:text-5xl  uppercase  text-white font-semibold">
            Full Stack Developer
          </h2>
          <p className="herosm-description animate-riseUp-my text-sm md:text-xl leading-relaxed w-4/5 md:w-2/3 font-light text-center text-balance">
            I build beautiful, functional, and user-friendly websites using modern tech. Let's turn ideas into reality.
          </p>
          <div className="flex items-center max-md:flex-col max-md:gap-4 justify-center gap-6 mt-8">
            <ButtonWG>Contact</ButtonWG>
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

export default HeroSection3;
