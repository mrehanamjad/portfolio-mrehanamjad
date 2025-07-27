// BG-1
"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundLayout = ({ children }:any) => {
  const containerRef = useRef<any>(null);
  const codeRainRef = useRef<any>(null);
  const circuitRef = useRef<any>(null);
  const terminalRef = useRef<any>(null);
  const particlesRef = useRef<any>([]);
  const codeElementsRef = useRef<any>([]);

  const codeSnippets = [
    'const dev = () => {}',
    'function build()',
    'npm install',
    'git commit -m',
    'async/await',
    'React.useState',
    'console.log()',
    'import { }',
    'export default',
    'if (true) {',
    '=> {}',
    'try { catch',
    'return true;',
    'class Component',
    'const [state]',
    'useEffect()',
    '.map((item)',
    'addEventListener',
    'setTimeout()',
    'API.get()',
  ];

  useEffect(() => {
    const container = containerRef.current;

    // Create floating code elements
    const createCodeElements = () => {
      for (let i = 0; i < 15; i++) {
        const codeEl = document.createElement('div');
        codeEl.className = 'absolute text-xs font-mono text-emerald-400/30 select-none pointer-events-none';
        codeEl.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeEl.style.left = Math.random() * 100 + '%';
        codeEl.style.top = Math.random() * 100 + '%';
        container.appendChild(codeEl);
        codeElementsRef.current.push(codeEl);
      }
    };

    // Create glowing particles (representing data flow)
    const createParticles = () => {
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const colors = ['bg-blue-400/40', 'bg-emerald-400/40', 'bg-purple-400/40', 'bg-cyan-400/40'];
        particle.className += ' ' + colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.boxShadow = `0 0 ${size * 2}px currentColor`;
        container.appendChild(particle);
        particlesRef.current.push(particle);
      }
    };

    createCodeElements();
    createParticles();

    // Animate code elements
    codeElementsRef.current.forEach((el:any, index:any) => {
      gsap.set(el, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.6 + 0.1
      });

      gsap.to(el, {
        x: `+=${Math.random() * 400 - 200}`,
        y: `+=${Math.random() * 400 - 200}`,
        rotation: `+=${Math.random() * 180 - 90}`,
        duration: Math.random() * 30 + 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(el, {
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 8 + 5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 4
      });
    });

    // Animate particles (data flow)
    particlesRef.current.forEach((particle:any, index:any) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5
      });

      gsap.to(particle, {
        x: `+=${Math.random() * 600 - 300}`,
        y: `+=${Math.random() * 600 - 300}`,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(particle, {
        scale: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 6 + 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 3
      });
    });

    // Circuit board animation
    if (circuitRef.current) {
      gsap.to(circuitRef.current, {
        opacity: 0.4,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // Code rain effect
    if (codeRainRef.current) {
      gsap.to(codeRainRef.current, {
        backgroundPosition: '0 100px',
        duration: 15,
        repeat: -1,
        ease: "none"
      });
    }

    // Terminal glow effect
    if (terminalRef.current) {
      gsap.to(terminalRef.current, {
        opacity: 0.6,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    // Container breathing
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        background: 'radial-gradient(ellipse at center, #0f1419 0%, #000000 70%)',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Cleanup
    return () => {
      [...particlesRef.current, ...codeElementsRef.current].forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      particlesRef.current = [];
      codeElementsRef.current = [];
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0f14 0%, #000000 70%)'
      }}
    >
      {/* Circuit board pattern */}
      <div 
        ref={circuitRef}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300ff88' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M20 20h160M20 40h80m40 0h40M20 60h40m40 0h80M20 80h160M20 100h60m40 0h60M20 120h80m40 0h40M20 140h40m40 0h80M20 160h160M20 180h160'/%3E%3Cpath d='M20 20v160M40 20v160M60 20v40m0 40v80M80 20v80m0 40v40M100 20v160M120 20v40m0 40v80M140 20v80m0 40v40M160 20v160M180 20v160'/%3E%3Ccircle cx='60' cy='60' r='3' fill='%2300ff88'/%3E%3Ccircle cx='140' cy='80' r='3' fill='%2300ff88'/%3E%3Ccircle cx='80' cy='120' r='3' fill='%2300ff88'/%3E%3Ccircle cx='120' cy='140' r='3' fill='%2300ff88'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Code rain effect */}
      <div 
        ref={codeRainRef}
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='100' viewBox='0 0 20 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E1%3C/text%3E%3Ctext x='10' y='40' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E0%3C/text%3E%3Ctext x='10' y='60' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E1%3C/text%3E%3Ctext x='10' y='80' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E0%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '20px 100px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Terminal grid */}
      <div 
        ref={terminalRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hexagonal tech pattern */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2338bdf8' stroke-width='0.5' opacity='0.4'%3E%3Cpolygon points='30,5 45,15 45,35 30,45 15,35 15,15' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glowing corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />

      {/* Animated bracket decorations */}
      <div className="absolute top-20 left-10 text-emerald-400/20 text-6xl font-mono animate-pulse">{'{'}</div>
      <div className="absolute bottom-20 right-10 text-blue-400/20 text-6xl font-mono animate-pulse" style={{animationDelay: '1s'}}>{'}'}</div>
      <div className="absolute top-1/3 right-20 text-purple-400/20 text-4xl font-mono animate-pulse" style={{animationDelay: '2s'}}>{'<>'}</div>
      <div className="absolute bottom-1/3 left-20 text-cyan-400/20 text-4xl font-mono animate-pulse" style={{animationDelay: '1.5s'}}>{'</>'}</div>

      {/* Data stream lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" style={{animationDelay: '2s'}} />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.03) 2px, rgba(0, 255, 136, 0.03) 4px)'
        }}
      />
    </div>
  );
};

export default BackgroundLayout;



// Gsap -3
// "use client"
// import React, { useRef } from 'react';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';

// const BackgroundLayout = ({ children }:any) => {
//   const containerRef = useRef<any>(null);

//   const codeSnippets = [
//     'const dev = () => {}',
//     'function build()',
//     'npm install',
//     'git commit -m',
//     'async/await',
//     'React.useState',
//     'console.log()',
//     'import { }',
//     'export default',
//     'if (true) {',
//     '=> {}',
//     'try { catch',
//     'return true;',
//     'class Component',
//     'const [state]',
//     'useEffect()',
//     '.map((item)',
//     'addEventListener',
//     'setTimeout()',
//     'API.get()',
//   ];

//   useGSAP(() => {
//     const container = containerRef.current;
//     const elements:any[] = [];

//     // Create floating code elements
//     for (let i = 0; i < 15; i++) {
//       const codeEl = document.createElement('div');
//       codeEl.className = 'absolute text-xs font-mono text-emerald-400/20 select-none pointer-events-none';
//       codeEl.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
//       codeEl.style.left = Math.random() * 100 + '%';
//       codeEl.style.top = Math.random() * 100 + '%';
//       // container.appendChild(codeEl);
//       elements.push(codeEl);
//     }

//     // Create glowing particles
//     for (let i = 0; i < 35; i++) {
//       const particle = document.createElement('div');
//       particle.className = 'absolute rounded-full';
//       const size = Math.random() * 3 + 1;
//       particle.style.width = size + 'px';
//       particle.style.height = size + 'px';
      
//       const colors = ['bg-blue-400/25', 'bg-emerald-400/25', 'bg-purple-400/25', 'bg-cyan-400/25'];
//       particle.className += ' ' + colors[Math.floor(Math.random() * colors.length)];
      
//       particle.style.left = Math.random() * 100 + '%';
//       particle.style.top = Math.random() * 100 + '%';
//       particle.style.boxShadow = `0 0 ${size * 3}px currentColor`;
//       container.appendChild(particle);
//       elements.push(particle);
//     }

//     // Animate all code elements
//     gsap.set('.text-emerald-400\\/20', {
//       x: () => Math.random() * window.innerWidth,
//       y: () => Math.random() * window.innerHeight,
//       rotation: () => Math.random() * 360,
//       opacity: () => Math.random() * 0.4 + 0.1
//     });

//     gsap.to('.text-emerald-400\\/20', {
//       x: () => `+=${Math.random() * 300 - 150}`,
//       y: () => `+=${Math.random() * 300 - 150}`,
//       rotation: () => `+=${Math.random() * 180 - 90}`,
//       duration: () => Math.random() * 25 + 20,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       stagger: {
//         each: 0.5,
//         from: "random"
//       }
//     });

//     gsap.to('.text-emerald-400\\/20', {
//       opacity: () => Math.random() * 0.6 + 0.2,
//       duration: () => Math.random() * 6 + 4,
//       repeat: -1,
//       yoyo: true,
//       ease: "power2.inOut",
//       stagger: {
//         each: 0.3,
//         from: "random"
//       }
//     });

//     // Animate particles
//     gsap.set('.rounded-full', {
//       x: () => Math.random() * window.innerWidth,
//       y: () => Math.random() * window.innerHeight,
//       scale: () => Math.random() * 0.5 + 0.5
//     });

//     gsap.to('.rounded-full', {
//       x: () => `+=${Math.random() * 400 - 200}`,
//       y: () => `+=${Math.random() * 400 - 200}`,
//       duration: () => Math.random() * 18 + 12,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       stagger: {
//         each: 0.2,
//         from: "random"
//       }
//     });

//     gsap.to('.rounded-full', {
//       scale: () => Math.random() * 1.2 + 0.8,
//       opacity: () => Math.random() * 0.6 + 0.3,
//       duration: () => Math.random() * 5 + 3,
//       repeat: -1,
//       yoyo: true,
//       ease: "power2.inOut",
//       stagger: {
//         each: 0.1,
//         from: "random"
//       }
//     });

//     // Animate background layers
//     gsap.to('[data-layer="circuit"]', {
//       opacity: 0.3,
//       duration: 15,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut"
//     });

//     gsap.to('[data-layer="rain"]', {
//       backgroundPosition: '0 150px',
//       duration: 20,
//       repeat: -1,
//       ease: "none"
//     });

//     gsap.to('[data-layer="terminal"]', {
//       opacity: 0.4,
//       duration: 10,
//       repeat: -1,
//       yoyo: true,
//       ease: "power2.inOut"
//     });

//     gsap.to('[data-layer="hex"]', {
//       transform: 'rotate(0.5deg) scale(1.01)',
//       duration: 25,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut"
//     });

//     // Container breathing effect
//     gsap.to(containerRef.current, {
//       background: 'radial-gradient(ellipse at center, #050810 0%, #000000 80%)',
//       duration: 22,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut"
//     });

//     // Cleanup function
//     return () => {
//       elements.forEach(el => {
//         if (el.parentNode) {
//           el.parentNode.removeChild(el);
//         }
//       });
//     };
//   }, { scope: containerRef });

//   return (
//     <div 
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden"
//       style={{
//         background: 'radial-gradient(ellipse at center, #030508 0%, #000000 80%)'
//       }}
//     >
//       {/* Circuit board pattern - darker */}
//       <div 
//         data-layer="circuit"
//         className="absolute inset-0 opacity-15"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300ff88' stroke-width='0.3' opacity='0.2'%3E%3Cpath d='M20 20h160M20 40h80m40 0h40M20 60h40m40 0h80M20 80h160M20 100h60m40 0h60M20 120h80m40 0h40M20 140h40m40 0h80M20 160h160M20 180h160'/%3E%3Cpath d='M20 20v160M40 20v160M60 20v40m0 40v80M80 20v80m0 40v40M100 20v160M120 20v40m0 40v80M140 20v80m0 40v40M160 20v160M180 20v160'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%2300ff88' opacity='0.3'/%3E%3Ccircle cx='140' cy='80' r='2' fill='%2300ff88' opacity='0.3'/%3E%3Ccircle cx='80' cy='120' r='2' fill='%2300ff88' opacity='0.3'/%3E%3Ccircle cx='120' cy='140' r='2' fill='%2300ff88' opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '200px 200px'
//         }}
//       />

//       {/* Code rain effect - darker */}
//       <div 
//         data-layer="rain"
//         className="absolute inset-0 opacity-8"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='100' viewBox='0 0 20 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='6' fill='%2300ff88' text-anchor='middle' opacity='0.4'%3E1%3C/text%3E%3Ctext x='10' y='40' font-family='monospace' font-size='6' fill='%2300ff88' text-anchor='middle' opacity='0.3'%3E0%3C/text%3E%3Ctext x='10' y='60' font-family='monospace' font-size='6' fill='%2300ff88' text-anchor='middle' opacity='0.4'%3E1%3C/text%3E%3Ctext x='10' y='80' font-family='monospace' font-size='6' fill='%2300ff88' text-anchor='middle' opacity='0.3'%3E0%3C/text%3E%3C/svg%3E")`,
//           backgroundSize: '25px 120px',
//           backgroundRepeat: 'repeat'
//         }}
//       />

//       {/* Terminal grid - much darker */}
//       <div 
//         data-layer="terminal"
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px'
//         }}
//       />

//       {/* Hexagonal tech pattern - darker */}
//       <div 
//         data-layer="hex"
//         className="absolute inset-0 opacity-15"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2338bdf8' stroke-width='0.3' opacity='0.3'%3E%3Cpolygon points='40,10 55,20 55,40 40,50 25,40 25,20' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '80px 80px'
//         }}
//       />

//       {/* Much darker glowing corner accents */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/3 via-transparent to-transparent" />

//       {/* Darker animated bracket decorations */}
//       <div className="absolute top-20 left-10 text-emerald-400/10 text-6xl font-mono animate-pulse">{'{'}</div>
//       <div className="absolute bottom-20 right-10 text-blue-400/10 text-6xl font-mono animate-pulse" style={{animationDelay: '1s'}}>{'}'}</div>
//       <div className="absolute top-1/3 right-20 text-purple-400/10 text-4xl font-mono animate-pulse" style={{animationDelay: '2s'}}>{'<>'}</div>
//       <div className="absolute bottom-1/3 left-20 text-cyan-400/10 text-4xl font-mono animate-pulse" style={{animationDelay: '1.5s'}}>{'</>'}</div>

//       {/* Much darker data stream lines */}
//       <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent animate-pulse" />
//       <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse" style={{animationDelay: '2s'}} />

//       {/* Content layer */}
//       <div className="relative z-10 w-full h-full">
//         {children}
//       </div>

//       {/* Darker scanline effect */}
//       <div 
//         className="absolute inset-0 pointer-events-none opacity-10"
//         style={{
//           background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 255, 136, 0.02) 3px, rgba(0, 255, 136, 0.02) 6px)'
//         }}
//       />

//       {/* Deep shadow overlay */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.3) 100%)'
//         }}
//       />
//     </div>
//   );
// };

// export default BackgroundLayout;



// BG-2
// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const BackgroundLayout = ({ children }:any) => {
//   const containerRef = useRef<any>(null);
//   const textureRef = useRef<any>(null);
//   const noiseRef = useRef<any>(null);
//   const overlayRef = useRef<any>(null);
//   const particlesRef = useRef<any>([]);

//   useEffect(() => {
//     const container = containerRef.current;

//     // Create animated texture particles
//     const createTextureParticles = () => {
//       for (let i = 0; i < 30; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'absolute bg-gray-700/5 rounded-full';
//         const size = Math.random() * 8 + 2;
//         particle.style.width = size + 'px';
//         particle.style.height = size + 'px';
//         particle.style.left = Math.random() * 100 + '%';
//         particle.style.top = Math.random() * 100 + '%';
//         container.appendChild(particle);
//         particlesRef.current.push(particle);
//       }
//     };

//     createTextureParticles();

//     // Animate texture particles
//     particlesRef.current.forEach((particle:any, index:any) => {
//       gsap.set(particle, {
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         opacity: Math.random() * 0.3 + 0.1
//       });

//       gsap.to(particle, {
//         x: `+=${Math.random() * 300 - 150}`,
//         y: `+=${Math.random() * 300 - 150}`,
//         duration: Math.random() * 25 + 15,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       gsap.to(particle, {
//         opacity: Math.random() * 0.4 + 0.1,
//         duration: Math.random() * 6 + 4,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         delay: Math.random() * 3
//       });
//     });

//     // Animate main texture overlay
//     if (textureRef.current) {
//       gsap.to(textureRef.current, {
//         opacity: 0.8,
//         duration: 10,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut"
//       });
//     }

//     // Animate noise layer
//     if (noiseRef.current) {
//       gsap.to(noiseRef.current, {
//         transform: 'translate(10px, 10px) scale(1.02)',
//         duration: 20,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }

//     // Animate color overlay
//     if (overlayRef.current) {
//       gsap.to(overlayRef.current, {
//         background: 'radial-gradient(ellipse at 60% 40%, rgba(55, 65, 81, 0.15) 0%, rgba(17, 24, 39, 0.1) 50%, transparent 80%)',
//         duration: 15,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut"
//       });
//     }

//     // Container breathing animation
//     if (containerRef.current) {
//       gsap.to(containerRef.current, {
//         background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #141414 100%)',
//         duration: 18,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }

//     // Cleanup
//     return () => {
//       particlesRef.current.forEach((particle:any) => {
//         if (particle.parentNode) {
//           particle.parentNode.removeChild(particle);
//         }
//       });
//       particlesRef.current = [];
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #171717 0%, #0a0a0a 50%, #111111 100%)'
//       }}
//     >
//       {/* Primary texture layer */}
//       <div 
//         ref={textureRef}
//         className="absolute inset-0 opacity-60"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.08'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '80px 80px'
//         }}
//       />

//       {/* Animated noise texture */}
//       <div 
//         ref={noiseRef}
//         className="absolute inset-0 opacity-25"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
//           backgroundSize: '200px 200px'
//         }}
//       />

//       {/* Geometric texture pattern */}
//       <div 
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage: `
//             radial-gradient(circle at 25% 25%, rgba(107, 114, 128, 0.1) 1px, transparent 1px),
//             radial-gradient(circle at 75% 75%, rgba(75, 85, 99, 0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: '60px 60px, 80px 80px',
//           backgroundPosition: '0 0, 40px 40px'
//         }}
//       />

//       {/* Color overlay with animation */}
//       <div 
//         ref={overlayRef}
//         className="absolute inset-0"
//         style={{
//           background: 'radial-gradient(ellipse at 50% 50%, rgba(55, 65, 81, 0.1) 0%, rgba(17, 24, 39, 0.05) 50%, transparent 80%)'
//         }}
//       />

//       {/* Subtle grid lines */}
//       <div 
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(107, 114, 128, 0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(107, 114, 128, 0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: '100px 100px'
//         }}
//       />

//       {/* Content layer */}
//       <div className="relative z-10 w-full h-full">
//         {children}
//       </div>

//       {/* Soft vignette */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.15) 100%)'
//         }}
//       />
//     </div>
//   );
// };

// export default BackgroundLayout;



// BG-3
