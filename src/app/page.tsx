// import React from "react";
// import HeroPlusAbout from "@/components/HeroPlusAbout";
// import SkillsSection from "@/components/SkillsSection";
// import ProjectSection from "@/components/ProjectSection";
// import ContactSection from "@/components/ContactSection";

// function Home() {
//   return (
//     <div className="bg-[#131313]">
      
//       <HeroPlusAbout />
//       <SkillsSection />
//       <ProjectSection />
//       <ContactSection />
//     </div>
//   );
// }

// export default Home;


import React from "react";
import HeroPlusAbout from "@/components/HeroPlusAbout";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Preloader from "@/components/Preloader";

function Home() {
  return (
    <div className="bg-[#131313]">
      <Preloader />
      <HeroPlusAbout />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default Home;
