import { BiChevronDown } from "react-icons/bi";

export function HeroSectionSm() {
  return (
    <>
      <main className="flex pt-36 flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <p className="herosm-greeting text-2xl mb-4 text-gray-300">
          👋 Hello, I&apos;m
        </p>
        
        <h1 className="herosm-name text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-green-400">
          Muhammad Rehan Amjad
        </h1>
        
        <h2 className="herosm-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-100 h-12 flex items-center">
          Full Stack Developer
        </h2>
        
        <p className="herosm-description text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed">
          I create modern web applications and intelligent AI solutions that solve
          real-world problems.
        </p>
        
        <div className="herosm-scroll w-12 h-12 border-2 border-green-400 rounded-full flex items-center justify-center hover:bg-green-400/10 transition-colors cursor-pointer">
          <BiChevronDown className="w-6 h-6 text-green-400" />
        </div>
      </main>
    </>
  );
}