import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import { HeroSectionSm } from "@/components/HeroSectionSm";
import SocialCardsSection from "@/components/Socials/SocialCardsSection";
import React from "react";

function Home() {
  return (
    <div>
      <div className="max-lg:hidden">
      <HeroSection />
      </div>
      <div className="lg:hidden">
      <HeroSectionSm />
      </div>
      <SocialCardsSection />
      <AboutMe />
    </div>
  );
}

export default Home;
