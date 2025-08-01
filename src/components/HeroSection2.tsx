import React from "react";
import Container from "./Container";
import { BoxRevealText } from "./text-animations/BoxRevealText";

function HeroSection2() {
  return (
    <section className="relative h-[100dvh] w-full">
      <Container>
        <div className="flex flex-col justify-between h-screen gap-10 py-20">
          <div>
            <BoxRevealText
              fontSize="text-5xl md:text-6xl lg:text-7xl"
              textColor="text-gray-200"
              boxColor="bg-emerald-800"
              duration={1.5}
              className="font-hubot-sans"
            >
              MUHAMMAD
            </BoxRevealText>
            <br />
            <BoxRevealText
              fontSize="text-5xl md:text-6xl lg:text-7xl"
              textColor="text-gray-200"
              boxColor="bg-emerald-700"
              duration={1.5}
              className=""
            >
              REHAN AMJAD
            </BoxRevealText>
          </div>
          <div className="flex w-full justify-between items-baseline">
            <div></div>
                <div className="">
            <div className="flex flex-col items-end w-full">
              {["Full STACK", "DEVELOPER"].map((item) => (
                <BoxRevealText
                  fontSize="text-5xl md:text-6xl lg:text-7xl text-end  font-extrabold text-outline-my uppercase"
                  textColor="text-gray-200"
                  boxColor="bg-emerald-700"
                  duration={1.5}
                  className="font-raleway"
                >
                  {item}
                </BoxRevealText>
              ))}
              </div>
              <p className="text-xl">
              I'm a passionate developer specializing in creating beautiful,
              functional, and user-friendly websites and applications. With
              expertise in modern web technologies, I turn ideas into reality.
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-56 w-56 bg-orange-500 rounded-full border-2 border-white bg-center bg-cover" style={{backgroundImage: "url(https://avatars.githubusercontent.com/u/144995992?v=4)"}}></div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-0.5 w-1/2  bg-gradient-to-r from-white to-black/50  transform origin-left -rotate-[25deg]"></div>
          <div className="absolute right-1/2 top-1/2 -translate-y-1/2 h-0.5 w-1/2  bg-gradient-to-l from-white to-black/50 transform origin-right -rotate-[25deg]"></div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection2;
