import React from "react";
import Container from "./Container";

function AboutMe() {
  return (
    <section className="h-screen">
      <Container>
        <div className="relative h-full">
          <div className="h-full flex flex-col justify-between">
            <h2
              className="text-5xl  md:text-6xl lg:text-[12rem] text-gray-200   font-extrabold text-outline-my uppercase"
            >
              ABOUT
            </h2>
            <h2
              className="text-5xl mt-20 md:text-6xl text-end lg:text-[12rem] text-gray-200   font-extrabold text-outline-my uppercase"
            >
              Me
            </h2>
          </div>
          <div className="absolute p-6">

          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
