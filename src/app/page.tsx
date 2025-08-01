import AboutMe from "@/components/aboutMe/AboutMe";
import BackgroundLayout from "@/components/BackgroundLayout";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import HeroSection3 from "@/components/HeroSection3";
import { HeroSectionSm } from "@/components/HeroSectionSm";
import SocialCardsSection from "@/components/Socials/SocialCardsSection";
import React from "react";

function Home() {
  return (
    <div className="bg-[#131313]">
      <HeroSection3 />

      {/* <SocialCardsSection />
      <AboutMe /> */}
      {/* <div className="w-full h-screen"></div> */}
    </div>
  );
}

export default Home;
