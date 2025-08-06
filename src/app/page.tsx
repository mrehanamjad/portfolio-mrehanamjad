import React from "react";
import HeroPlusAbout from "@/components/HeroPlusAbout";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";

function Home() {
  return (
    <div className="bg-[#131313]">
      
      <HeroPlusAbout />

      {/* <SocialCardsSection />
      <AboutMe /> */}
      {/* <div className="w-full h-screen"></div> */}
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}

export default Home;
