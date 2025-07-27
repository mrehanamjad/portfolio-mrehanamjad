// import React from "react";
// import Container from "./Container";
// import { BoxRevealText } from "./text-animations/BoxRevealText";

// function HeroSection() {
//   return (
//     <section className="relative min-h- h-full pt-20">
//       <Container>
//         <div className="flex flex-col justify-between h-full gap-10">
//           <div>
//             <BoxRevealText
//               fontSize="text-5xl md:text-6xl lg:text-8xl"
//               textColor="text-gray-200"
//               boxColor="bg-emerald-800"
//               duration={1.5}
//             >
//               MUHAMMAD
//             </BoxRevealText><br/>
//             <BoxRevealText
//               fontSize="text-5xl md:text-6xl lg:text-8xl"
//               textColor="text-gray-200"
//               boxColor="bg-emerald-700"
//               duration={1.5}
//             >
//               REHAN AMJAD
//             </BoxRevealText>
//           </div>
//           <div className="flex w-full justify-between items-baseline">
//             <div></div>
//             <div className="flex flex-col items-end">
//             <BoxRevealText
//               fontSize="text-5xl md:text-6xl lg:text-9xl text-end  font-extrabold text-outline-my uppercase"
//               textColor="text-gray-200"
//               boxColor="bg-emerald-700"
//               duration={1.5}
//             >
//               Full
//             </BoxRevealText>
//             <BoxRevealText
//               fontSize="text-5xl md:text-6xl lg:text-9xl text-end  font-extrabold text-outline-my uppercase"
//               textColor="text-gray-200"
//               boxColor="bg-emerald-700"
//               duration={1.5}
//             >
//               Stack
//             </BoxRevealText>
//             <BoxRevealText
//               fontSize="text-5xl md:text-6xl lg:text-9xl text-end  font-extrabold text-outline-my uppercase"
//               textColor="text-gray-200"
//               boxColor="bg-emerald-700"
//               duration={1.5}
//             >
//               Developer
//             </BoxRevealText>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-sm animate-riseUp-my opacity-0  h-fit border-l-4 absolute bottom-10 lg:bottom-32 backdrop-blur-sm  shadow-lg p-4 py-0 text-white text-justify space-y-2  overflow-hidden">
//           <p className="text-base leading-relaxed font-light">
//             I'm a passionate developer specializing in creating beautiful,
//             functional, and user-friendly websites and applications. With
//             expertise in modern web technologies, I turn ideas into reality.
//           </p>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default HeroSection;



import React from "react";
import Container from "./Container";
import { BoxRevealText } from "./text-animations/BoxRevealText";

function HeroSection() {
  return (
    <section className="relative min-h- h-full pt-20">
      <Container>
        <div className="flex flex-col justify-between h-full gap-10">
          <div>
            <BoxRevealText
              fontSize="text-5xl md:text-6xl lg:text-8xl"
              textColor="text-gray-200"
              boxColor="bg-emerald-800"
              duration={1.5}
            >
              MUHAMMAD
            </BoxRevealText><br/>
            <BoxRevealText
              fontSize="text-5xl md:text-6xl lg:text-8xl"
              textColor="text-gray-200"
              boxColor="bg-emerald-700"
              duration={1.5}
            >
              REHAN AMJAD
            </BoxRevealText>
          </div>
          <div className="flex w-full justify-between items-baseline">
            <div></div>
            <div className="flex flex-col items-end">
            <BoxRevealText
              fontSize="text-5xl md:text-6xl lg:text-9xl text-end  font-extrabold text-outline-my uppercase"
              textColor="text-gray-200"
              boxColor="bg-emerald-700"
              duration={1.5}
            >
              Full
            </BoxRevealText>
            <BoxRevealText
              fontSize="text-5xl md:text-6xl lg:text-9xl text-end  font-extrabold text-outline-my uppercase"
              textColor="text-gray-200"
              boxColor="bg-emerald-700"
              duration={1.5}
            >
              Stack
            </BoxRevealText>
            <BoxRevealText
              fontSize="text-5xl md:text-6xl lg:text-9xl text-end  font-extrabold text-outline-my uppercase"
              textColor="text-gray-200"
              boxColor="bg-emerald-700"
              duration={1.5}
            >
              Developer
            </BoxRevealText>
            </div>
          </div>
        </div>

        <div className="max-w-sm animate-riseUp-my opacity-0  h-fit border-l-4 absolute bottom-10 lg:bottom-32 backdrop-blur-sm  shadow-lg p-4 py-0 text-white text-justify space-y-2  overflow-hidden">
          <p className="text-base leading-relaxed font-light">
            I'm a passionate developer specializing in creating beautiful,
            functional, and user-friendly websites and applications. With
            expertise in modern web technologies, I turn ideas into reality.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

