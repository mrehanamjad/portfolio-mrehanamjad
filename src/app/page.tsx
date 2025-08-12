import React from "react";
import HeroPlusAbout from "@/components/HeroPlusAbout";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

function Home() {
  return (
    <div className="bg-[#131313]">
      
      <HeroPlusAbout />
      <SkillsSection />
      <div className="h-48"></div>
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default Home;

