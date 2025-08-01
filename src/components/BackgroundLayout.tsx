// BG-1
// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const BackgroundLayout = ({ children }:any) => {
//   const containerRef = useRef<any>(null);
//   const codeRainRef = useRef<any>(null);
//   const circuitRef = useRef<any>(null);
//   const terminalRef = useRef<any>(null);
//   const particlesRef = useRef<any>([]);
//   const codeElementsRef = useRef<any>([]);

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

//   useEffect(() => {
//     const container = containerRef.current;

//     // Create floating code elements
//     const createCodeElements = () => {
//       for (let i = 0; i < 15; i++) {
//         const codeEl = document.createElement('div');
//         codeEl.className = 'absolute text-xs font-mono text-emerald-400/30 select-none pointer-events-none';
//         codeEl.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
//         codeEl.style.left = Math.random() * 100 + '%';
//         codeEl.style.top = Math.random() * 100 + '%';
//         container.appendChild(codeEl);
//         codeElementsRef.current.push(codeEl);
//       }
//     };

//     // Create glowing particles (representing data flow)
//     const createParticles = () => {
//       for (let i = 0; i < 40; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'absolute rounded-full';
//         const size = Math.random() * 4 + 1;
//         particle.style.width = size + 'px';
//         particle.style.height = size + 'px';
        
//         const colors = ['bg-blue-400/40', 'bg-emerald-400/40', 'bg-purple-400/40', 'bg-cyan-400/40'];
//         particle.className += ' ' + colors[Math.floor(Math.random() * colors.length)];
        
//         particle.style.left = Math.random() * 100 + '%';
//         particle.style.top = Math.random() * 100 + '%';
//         particle.style.boxShadow = `0 0 ${size * 2}px currentColor`;
//         container.appendChild(particle);
//         particlesRef.current.push(particle);
//       }
//     };

//     createCodeElements();
//     createParticles();

//     // Animate code elements
//     codeElementsRef.current.forEach((el:any, index:any) => {
//       gsap.set(el, {
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         rotation: Math.random() * 360,
//         opacity: Math.random() * 0.6 + 0.1
//       });

//       gsap.to(el, {
//         x: `+=${Math.random() * 400 - 200}`,
//         y: `+=${Math.random() * 400 - 200}`,
//         rotation: `+=${Math.random() * 180 - 90}`,
//         duration: Math.random() * 30 + 20,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       gsap.to(el, {
//         opacity: Math.random() * 0.8 + 0.2,
//         duration: Math.random() * 8 + 5,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         delay: Math.random() * 4
//       });
//     });

//     // Animate particles (data flow)
//     particlesRef.current.forEach((particle:any, index:any) => {
//       gsap.set(particle, {
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         scale: Math.random() * 0.5 + 0.5
//       });

//       gsap.to(particle, {
//         x: `+=${Math.random() * 600 - 300}`,
//         y: `+=${Math.random() * 600 - 300}`,
//         duration: Math.random() * 20 + 10,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       gsap.to(particle, {
//         scale: Math.random() * 1.5 + 0.5,
//         opacity: Math.random() * 0.8 + 0.2,
//         duration: Math.random() * 6 + 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         delay: Math.random() * 3
//       });
//     });

//     // Circuit board animation
//     if (circuitRef.current) {
//       gsap.to(circuitRef.current, {
//         opacity: 0.4,
//         duration: 12,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut"
//       });
//     }

//     // Code rain effect
//     if (codeRainRef.current) {
//       gsap.to(codeRainRef.current, {
//         backgroundPosition: '0 100px',
//         duration: 15,
//         repeat: -1,
//         ease: "none"
//       });
//     }

//     // Terminal glow effect
//     if (terminalRef.current) {
//       gsap.to(terminalRef.current, {
//         opacity: 0.6,
//         duration: 8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut"
//       });
//     }

//     // Container breathing
//     if (containerRef.current) {
//       gsap.to(containerRef.current, {
//         background: 'radial-gradient(ellipse at center, #0f1419 0%, #000000 70%)',
//         duration: 20,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }

//     // Cleanup
//     return () => {
//       [...particlesRef.current, ...codeElementsRef.current].forEach(el => {
//         if (el.parentNode) {
//           el.parentNode.removeChild(el);
//         }
//       });
//       particlesRef.current = [];
//       codeElementsRef.current = [];
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden"
//       style={{
//         background: 'radial-gradient(ellipse at center, #0a0f14 0%, #000000 70%)'
//       }}
//     >
//       {/* Circuit board pattern */}
//       <div 
//         ref={circuitRef}
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300ff88' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M20 20h160M20 40h80m40 0h40M20 60h40m40 0h80M20 80h160M20 100h60m40 0h60M20 120h80m40 0h40M20 140h40m40 0h80M20 160h160M20 180h160'/%3E%3Cpath d='M20 20v160M40 20v160M60 20v40m0 40v80M80 20v80m0 40v40M100 20v160M120 20v40m0 40v80M140 20v80m0 40v40M160 20v160M180 20v160'/%3E%3Ccircle cx='60' cy='60' r='3' fill='%2300ff88'/%3E%3Ccircle cx='140' cy='80' r='3' fill='%2300ff88'/%3E%3Ccircle cx='80' cy='120' r='3' fill='%2300ff88'/%3E%3Ccircle cx='120' cy='140' r='3' fill='%2300ff88'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '200px 200px'
//         }}
//       />

//       {/* Code rain effect */}
//       <div 
//         ref={codeRainRef}
//         className="absolute inset-0 opacity-15"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='100' viewBox='0 0 20 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E1%3C/text%3E%3Ctext x='10' y='40' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E0%3C/text%3E%3Ctext x='10' y='60' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E1%3C/text%3E%3Ctext x='10' y='80' font-family='monospace' font-size='8' fill='%2300ff88' text-anchor='middle'%3E0%3C/text%3E%3C/svg%3E")`,
//           backgroundSize: '20px 100px',
//           backgroundRepeat: 'repeat'
//         }}
//       />

//       {/* Terminal grid */}
//       <div 
//         ref={terminalRef}
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '40px 40px'
//         }}
//       />

//       {/* Hexagonal tech pattern */}
//       <div 
//         className="absolute inset-0 opacity-25"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2338bdf8' stroke-width='0.5' opacity='0.4'%3E%3Cpolygon points='30,5 45,15 45,35 30,45 15,35 15,15' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '60px 60px'
//         }}
//       />

//       {/* Glowing corner accents */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />

//       {/* Animated bracket decorations */}
//       <div className="absolute top-20 left-10 text-emerald-400/20 text-6xl font-mono animate-pulse">{'{'}</div>
//       <div className="absolute bottom-20 right-10 text-blue-400/20 text-6xl font-mono animate-pulse" style={{animationDelay: '1s'}}>{'}'}</div>
//       <div className="absolute top-1/3 right-20 text-purple-400/20 text-4xl font-mono animate-pulse" style={{animationDelay: '2s'}}>{'<>'}</div>
//       <div className="absolute bottom-1/3 left-20 text-cyan-400/20 text-4xl font-mono animate-pulse" style={{animationDelay: '1.5s'}}>{'</>'}</div>

//       {/* Data stream lines */}
//       <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse" />
//       <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" style={{animationDelay: '2s'}} />

//       {/* Content layer */}
//       <div className="relative z-10 w-full h-full">
//         {children}
//       </div>

//       {/* Scanline effect */}
//       <div 
//         className="absolute inset-0 pointer-events-none opacity-20"
//         style={{
//           background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.03) 2px, rgba(0, 255, 136, 0.03) 4px)'
//         }}
//       />
//     </div>
//   );
// };

// export default BackgroundLayout;



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



// BG-4


// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const BackgroundLayout = ({ children }: any) => {
//   const containerRef = useRef<any>(null);
//   const neuralNodesRef = useRef<any>([]);
//   const dataStreamsRef = useRef<any>([]);
//   const hologramElementsRef = useRef<any>([]);
//   const orbsRef = useRef<any>([]);

//   const techTerms = [
//     'AI', 'ML', 'GPU', 'CPU', 'API', 'SDK', 'IoT', 'VR', 'AR', 'XR',
//     'NFT', 'Web3', 'DeFi', 'DAO', 'IPFS', 'P2P', 'TCP', 'HTTP', 'HTTPS', 'DNS',
//     'AWS', 'GCP', 'Azure', 'Docker', 'K8s', 'CI/CD', 'DevOps', 'MLOps', 'DataOps',
//     'BigData', 'Analytics', 'Blockchain', 'Crypto', 'DApp', 'Smart Contract'
//   ];

//   useEffect(() => {
//     const container = containerRef.current;

//     // Create floating neural network nodes
//     const createNeuralNodes = () => {
//       for (let i = 0; i < 25; i++) {
//         const node = document.createElement('div');
//         node.className = 'absolute rounded-full border border-cyan-400/30';
//         const size = Math.random() * 12 + 4;
//         node.style.width = size + 'px';
//         node.style.height = size + 'px';
//         node.style.left = Math.random() * 100 + '%';
//         node.style.top = Math.random() * 100 + '%';
//         node.style.background = 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)';
//         node.style.boxShadow = `0 0 ${size}px rgba(6, 182, 212, 0.3)`;
//         container.appendChild(node);
//         neuralNodesRef.current.push(node);
//       }
//     };

//     // Create data stream lines
//     const createDataStreams = () => {
//       for (let i = 0; i < 8; i++) {
//         const stream = document.createElement('div');
//         stream.className = 'absolute';
//         stream.style.width = '2px';
//         stream.style.height = Math.random() * 200 + 100 + 'px';
//         stream.style.left = Math.random() * 100 + '%';
//         stream.style.top = Math.random() * 100 + '%';
//         stream.style.background = 'linear-gradient(180deg, transparent 0%, rgba(147, 51, 234, 0.6) 50%, transparent 100%)';
//         stream.style.transform = `rotate(${Math.random() * 360}deg)`;
//         container.appendChild(stream);
//         dataStreamsRef.current.push(stream);
//       }
//     };

//     // Create holographic tech terms
//     const createHologramElements = () => {
//       for (let i = 0; i < 12; i++) {
//         const holo = document.createElement('div');
//         holo.className = 'absolute text-xs font-mono text-purple-400/40 select-none pointer-events-none';
//         holo.textContent = techTerms[Math.floor(Math.random() * techTerms.length)];
//         holo.style.left = Math.random() * 100 + '%';
//         holo.style.top = Math.random() * 100 + '%';
//         holo.style.textShadow = '0 0 10px rgba(147, 51, 234, 0.5)';
//         holo.style.filter = 'blur(0.5px)';
//         container.appendChild(holo);
//         hologramElementsRef.current.push(holo);
//       }
//     };

//     // Create glowing energy orbs
//     const createEnergyOrbs = () => {
//       for (let i = 0; i < 6; i++) {
//         const orb = document.createElement('div');
//         orb.className = 'absolute rounded-full';
//         const size = Math.random() * 60 + 30;
//         orb.style.width = size + 'px';
//         orb.style.height = size + 'px';
//         orb.style.left = Math.random() * 100 + '%';
//         orb.style.top = Math.random() * 100 + '%';
//         orb.style.background = `radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)`;
//         orb.style.filter = 'blur(1px)';
//         container.appendChild(orb);
//         orbsRef.current.push(orb);
//       }
//     };

//     createNeuralNodes();
//     createDataStreams();
//     createHologramElements();
//     createEnergyOrbs();

//     // Animate neural nodes
//     neuralNodesRef.current.forEach((node: any, index: any) => {
//       gsap.to(node, {
//         x: `+=${Math.random() * 300 - 150}`,
//         y: `+=${Math.random() * 300 - 150}`,
//         duration: Math.random() * 25 + 15,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       gsap.to(node, {
//         scale: Math.random() * 0.8 + 0.6,
//         opacity: Math.random() * 0.8 + 0.3,
//         duration: Math.random() * 6 + 4,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         delay: Math.random() * 3
//       });
//     });

//     // Animate data streams
//     dataStreamsRef.current.forEach((stream: any, index: any) => {
//       gsap.to(stream, {
//         rotation: `+=${Math.random() * 180 - 90}`,
//         x: `+=${Math.random() * 200 - 100}`,
//         y: `+=${Math.random() * 200 - 100}`,
//         duration: Math.random() * 20 + 15,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       gsap.to(stream, {
//         opacity: Math.random() * 0.8 + 0.2,
//         scaleY: Math.random() * 1.5 + 0.5,
//         duration: Math.random() * 8 + 5,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         delay: Math.random() * 4
//       });
//     });

//     // Animate hologram elements
//     hologramElementsRef.current.forEach((holo: any, index: any) => {
//       gsap.to(holo, {
//         x: `+=${Math.random() * 400 - 200}`,
//         y: `+=${Math.random() * 400 - 200}`,
//         rotation: `+=${Math.random() * 20 - 10}`,
//         duration: Math.random() * 35 + 25,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       gsap.to(holo, {
//         opacity: Math.random() * 0.7 + 0.2,
//         scale: Math.random() * 0.4 + 0.8,
//         duration: Math.random() * 10 + 6,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         delay: Math.random() * 5
//       });
//     });

//     // Animate energy orbs
//     orbsRef.current.forEach((orb: any, index: any) => {
//       gsap.to(orb, {
//         x: `+=${Math.random() * 500 - 250}`,
//         y: `+=${Math.random() * 500 - 250}`,
//         duration: Math.random() * 30 + 20,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       gsap.to(orb, {
//         scale: Math.random() * 0.6 + 0.7,
//         opacity: Math.random() * 0.6 + 0.1,
//         duration: Math.random() * 12 + 8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         delay: Math.random() * 6
//       });
//     });

//     // Container ambient pulsing
//     if (containerRef.current) {
//       gsap.to(containerRef.current, {
//         background: 'radial-gradient(ellipse at 30% 20%, #0f0f23 0%, #000000 50%, #0a0a0f 100%)',
//         duration: 25,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }

//     // Cleanup
//     return () => {
//       [...neuralNodesRef.current, ...dataStreamsRef.current, ...hologramElementsRef.current, ...orbsRef.current].forEach(el => {
//         if (el.parentNode) {
//           el.parentNode.removeChild(el);
//         }
//       });
//       neuralNodesRef.current = [];
//       dataStreamsRef.current = [];
//       hologramElementsRef.current = [];
//       orbsRef.current = [];
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden"
//       style={{
//         background: 'radial-gradient(ellipse at 25% 25%, #0f0f23 0%, #000000 45%, #0a0a0f 100%)'
//       }}
//     >
//       {/* Neural network mesh */}
//       <div 
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2306b6d4' stroke-width='0.5' opacity='0.4'%3E%3Cline x1='0' y1='60' x2='120' y2='60'/%3E%3Cline x1='60' y1='0' x2='60' y2='120'/%3E%3Cline x1='0' y1='30' x2='120' y2='90'/%3E%3Cline x1='0' y1='90' x2='120' y2='30'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%2306b6d4'/%3E%3Ccircle cx='90' cy='30' r='2' fill='%2306b6d4'/%3E%3Ccircle cx='30' cy='90' r='2' fill='%2306b6d4'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%2306b6d4'/%3E%3Ccircle cx='60' cy='60' r='3' fill='%239333ea'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '120px 120px'
//         }}
//       />

//       {/* Digital matrix overlay */}
//       <div 
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' opacity='0.3'%3E%3Crect x='0' y='0' width='1' height='1'/%3E%3Crect x='10' y='10' width='1' height='1'/%3E%3Crect x='20' y='20' width='1' height='1'/%3E%3Crect x='30' y='30' width='1' height='1'/%3E%3Crect x='5' y='15' width='1' height='1'/%3E%3Crect x='15' y='25' width='1' height='1'/%3E%3Crect x='25' y='35' width='1' height='1'/%3E%3Crect x='35' y='5' width='1' height='1'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '40px 40px'
//         }}
//       />

//       {/* Hexagonal tech grid */}
//       <div 
//         className="absolute inset-0 opacity-15"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='86.6' viewBox='0 0 100 86.6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%239333ea' stroke-width='0.5' opacity='0.5'%3E%3Cpolygon points='50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25'/%3E%3Cpolygon points='50,17.3 76.6,32.5 76.6,62.5 50,77.7 23.4,62.5 23.4,32.5'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '100px 86.6px'
//         }}
//       />

//       {/* Quantum wave interference */}
//       <div 
//         className="absolute inset-0 opacity-25"
//         style={{
//           background: `
//             radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
//             radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
//           `
//         }}
//       />

//       {/* Glowing corner energy fields */}
//       <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-cyan-500/10 via-cyan-500/5 to-transparent" />
//       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent" />
//       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent" />
//       <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-indigo-500/10 via-indigo-500/5 to-transparent" />

//       {/* Floating tech symbols */}
//       <div className="absolute top-10 left-16 text-cyan-400/30 text-5xl font-mono animate-pulse">&lt;/&gt;</div>
//       <div className="absolute top-20 right-20 text-purple-400/30 text-4xl font-mono animate-pulse" style={{animationDelay: '1s'}}>{ }</div>
//       <div className="absolute bottom-20 left-20 text-blue-400/30 text-6xl font-mono animate-pulse" style={{animationDelay: '2s'}}>◊</div>
//       <div className="absolute bottom-16 right-16 text-indigo-400/30 text-5xl font-mono animate-pulse" style={{animationDelay: '1.5s'}}>∞</div>
//       <div className="absolute top-1/2 left-10 text-cyan-400/25 text-3xl font-mono animate-pulse" style={{animationDelay: '0.5s'}}>λ</div>
//       <div className="absolute top-1/3 right-12 text-purple-400/25 text-4xl font-mono animate-pulse" style={{animationDelay: '2.5s'}}>Ψ</div>

//       {/* Energy flow lines */}
//       <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse" />
//       <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
//       <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" style={{animationDelay: '2s'}} />

//       {/* Vertical energy streams */}
//       <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{animationDelay: '0.5s'}} />
//       <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}} />

//       {/* Content layer */}
//       <div className="relative z-10 w-full h-full">
//         {children}
//       </div>

//       {/* Holographic scan lines */}
//       <div 
//         className="absolute inset-0 pointer-events-none opacity-15"
//         style={{
//           background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6, 182, 212, 0.02) 3px, rgba(6, 182, 212, 0.02) 6px)'
//         }}
//       />

//       {/* Digital noise overlay */}
//       <div 
//         className="absolute inset-0 pointer-events-none opacity-5"
//         style={{
//           background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
//           backgroundSize: '256px 256px'
//         }}
//       />
//     </div>
//   );
// };

// export default BackgroundLayout;



/// bg-5

"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundLayout = ({ children }: any) => {
  const containerRef = useRef<any>(null);
  const neuralNodesRef = useRef<any>([]);
  const dataStreamsRef = useRef<any>([]);
  const hologramElementsRef = useRef<any>([]);
  const orbsRef = useRef<any>([]);
  const particleSystemRef = useRef<any>([]);
  const lightBeamsRef = useRef<any>([]);
  const quantumDotsRef = useRef<any>([]);

  const advancedTechTerms = [
    'QUANTUM', 'NEURAL', 'BLOCKCHAIN', 'METAVERSE', 'CYBERSEC', 'BIOTECH',
    'NANOTECH', 'FUSION', 'PHOTONIC', 'SYNTHETIC', 'AUTONOMOUS', 'ADAPTIVE',
    'DISTRIBUTED', 'ENCRYPTED', 'OPTIMIZED', 'VECTORIZED', 'TOKENIZED', 'DECENTRALIZED',
    'TENSORFLOW', 'PYTORCH', 'KUBERNETES', 'ETHEREUM', 'SOLIDITY', 'RUST',
    'WEBASSEMBLY', 'GRAPHQL', 'MICROSERVICES', 'SERVERLESS', 'EDGE_COMPUTING',
    'ZERO_KNOWLEDGE', 'HOMOMORPHIC', 'FEDERATED', 'REINFORCEMENT', 'UNSUPERVISED'
  ];

  useEffect(() => {
    const container = containerRef.current;

    // Create advanced neural network with connections
    const createAdvancedNeuralNodes = () => {
      for (let i = 0; i < 35; i++) {
        const node = document.createElement('div');
        node.className = 'absolute rounded-full border-2';
        const size = Math.random() * 16 + 6;
        const colorVariants = [
          'border-cyan-400/50 bg-cyan-400/20',
          'border-purple-400/50 bg-purple-400/20',
          'border-blue-400/50 bg-blue-400/20',
          'border-indigo-400/50 bg-indigo-400/20',
          'border-emerald-400/50 bg-emerald-400/20'
        ];
        
        node.className += ' ' + colorVariants[Math.floor(Math.random() * colorVariants.length)];
        node.style.width = size + 'px';
        node.style.height = size + 'px';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.boxShadow = `0 0 ${size * 2}px currentColor, inset 0 0 ${size/2}px rgba(255,255,255,0.1)`;
        node.style.backdropFilter = 'blur(1px)';
        
        container.appendChild(node);
        neuralNodesRef.current.push(node);
      }
    };

    // Create dynamic data streams with gradients
    const createAdvancedDataStreams = () => {
      for (let i = 0; i < 12; i++) {
        const stream = document.createElement('div');
        stream.className = 'absolute rounded-full';
        const width = Math.random() * 3 + 1;
        const height = Math.random() * 300 + 150;
        stream.style.width = width + 'px';
        stream.style.height = height + 'px';
        stream.style.left = Math.random() * 100 + '%';
        stream.style.top = Math.random() * 100 + '%';
        
        const gradients = [
          'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.8) 30%, rgba(147, 51, 234, 0.8) 70%, transparent 100%)',
          'linear-gradient(180deg, transparent 0%, rgba(147, 51, 234, 0.8) 30%, rgba(59, 130, 246, 0.8) 70%, transparent 100%)',
          'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.8) 30%, rgba(16, 185, 129, 0.8) 70%, transparent 100%)',
          'linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.8) 30%, rgba(236, 72, 153, 0.8) 70%, transparent 100%)'
        ];
        
        stream.style.background = gradients[Math.floor(Math.random() * gradients.length)];
        stream.style.transform = `rotate(${Math.random() * 360}deg)`;
        stream.style.filter = 'blur(0.5px)';
        container.appendChild(stream);
        dataStreamsRef.current.push(stream);
      }
    };

    // Create holographic floating tech terms
    const createAdvancedHologramElements = () => {
      for (let i = 0; i < 18; i++) {
        const holo = document.createElement('div');
        holo.className = 'absolute font-mono font-bold select-none pointer-events-none';
        const sizes = ['text-xs', 'text-sm', 'text-base', 'text-lg'];
        holo.className += ' ' + sizes[Math.floor(Math.random() * sizes.length)];
        
        const colors = [
          'text-cyan-400/60',
          'text-purple-400/60', 
          'text-blue-400/60',
          'text-emerald-400/60',
          'text-pink-400/60'
        ];
        holo.className += ' ' + colors[Math.floor(Math.random() * colors.length)];
        
        holo.textContent = advancedTechTerms[Math.floor(Math.random() * advancedTechTerms.length)];
        holo.style.left = Math.random() * 100 + '%';
        holo.style.top = Math.random() * 100 + '%';
        holo.style.textShadow = '0 0 20px currentColor, 0 0 40px currentColor';
        holo.style.filter = 'blur(0.3px)';
        holo.style.transform = `perspective(1000px) rotateX(${Math.random() * 20 - 10}deg) rotateY(${Math.random() * 20 - 10}deg)`;
        
        container.appendChild(holo);
        hologramElementsRef.current.push(holo);
      }
    };

    // Create energy orbs with multiple layers
    const createAdvancedEnergyOrbs = () => {
      for (let i = 0; i < 10; i++) {
        const orb = document.createElement('div');
        orb.className = 'absolute rounded-full';
        const size = Math.random() * 120 + 40;
        orb.style.width = size + 'px';
        orb.style.height = size + 'px';
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        
        const orbColors = [
          'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 30%, rgba(147, 51, 234, 0.05) 60%, transparent 80%)',
          'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 30%, rgba(59, 130, 246, 0.05) 60%, transparent 80%)',
          'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(16, 185, 129, 0.05) 60%, transparent 80%)',
          'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 30%, rgba(236, 72, 153, 0.05) 60%, transparent 80%)'
        ];
        
        orb.style.background = orbColors[Math.floor(Math.random() * orbColors.length)];
        orb.style.filter = 'blur(2px)';
        orb.style.mixBlendMode = 'screen';
        container.appendChild(orb);
        orbsRef.current.push(orb);
      }
    };

    // Create particle system
    const createParticleSystem = () => {
      for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const particleColors = [
          'bg-cyan-400/70',
          'bg-purple-400/70',
          'bg-blue-400/70',
          'bg-emerald-400/70',
          'bg-pink-400/70',
          'bg-yellow-400/70'
        ];
        
        particle.className += ' ' + particleColors[Math.floor(Math.random() * particleColors.length)];
        particle.style.boxShadow = `0 0 ${size * 4}px currentColor`;
        particle.style.filter = 'blur(0.5px)';
        
        container.appendChild(particle);
        particleSystemRef.current.push(particle);
      }
    };

    // Create light beams
    const createLightBeams = () => {
      for (let i = 0; i < 6; i++) {
        const beam = document.createElement('div');
        beam.className = 'absolute';
        beam.style.width = '1px';
        beam.style.height = '100vh';
        beam.style.left = Math.random() * 100 + '%';
        beam.style.top = '0';
        
        const beamColors = [
          'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.4) 20%, rgba(6, 182, 212, 0.6) 50%, rgba(6, 182, 212, 0.4) 80%, transparent 100%)',
          'linear-gradient(180deg, transparent 0%, rgba(147, 51, 234, 0.4) 20%, rgba(147, 51, 234, 0.6) 50%, rgba(147, 51, 234, 0.4) 80%, transparent 100%)',
          'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.4) 20%, rgba(59, 130, 246, 0.6) 50%, rgba(59, 130, 246, 0.4) 80%, transparent 100%)'
        ];
        
        beam.style.background = beamColors[Math.floor(Math.random() * beamColors.length)];
        beam.style.filter = 'blur(1px)';
        beam.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        
        container.appendChild(beam);
        lightBeamsRef.current.push(beam);
      }
    };

    // Create quantum dots
    const createQuantumDots = () => {
      for (let i = 0; i < 25; i++) {
        const dot = document.createElement('div');
        dot.className = 'absolute rounded-full';
        const size = Math.random() * 6 + 2;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        
        const dotColors = [
          'bg-cyan-300/80',
          'bg-purple-300/80',
          'bg-blue-300/80',
          'bg-emerald-300/80',
          'bg-pink-300/80'
        ];
        
        dot.className += ' ' + dotColors[Math.floor(Math.random() * dotColors.length)];
        dot.style.boxShadow = `0 0 ${size * 3}px currentColor, 0 0 ${size * 6}px currentColor`;
        dot.style.filter = 'blur(0.5px)';
        
        container.appendChild(dot);
        quantumDotsRef.current.push(dot);
      }
    };

    // Initialize all elements
    createAdvancedNeuralNodes();
    createAdvancedDataStreams();
    createAdvancedHologramElements();
    createAdvancedEnergyOrbs();
    createParticleSystem();
    createLightBeams();
    createQuantumDots();

    // Advanced neural node animations
    neuralNodesRef.current.forEach((node: any, index: any) => {
      gsap.to(node, {
        x: `+=${Math.random() * 400 - 200}`,
        y: `+=${Math.random() * 400 - 200}`,
        rotation: `+=${Math.random() * 360}`,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(node, {
        scale: Math.random() * 0.8 + 0.6,
        opacity: Math.random() * 0.9 + 0.3,
        duration: Math.random() * 5 + 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2
      });

      // Pulsing glow effect
      gsap.to(node, {
        filter: `brightness(${Math.random() * 0.5 + 1}) saturate(${Math.random() * 0.5 + 1})`,
        duration: Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 3
      });
    });

    // Advanced data stream animations
    dataStreamsRef.current.forEach((stream: any, index: any) => {
      gsap.to(stream, {
        rotation: `+=${Math.random() * 360 - 180}`,
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 300 - 150}`,
        duration: Math.random() * 25 + 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(stream, {
        opacity: Math.random() * 0.9 + 0.3,
        scaleY: Math.random() * 1.8 + 0.4,
        scaleX: Math.random() * 2 + 0.5,
        duration: Math.random() * 6 + 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 3
      });
    });

    // Advanced hologram animations
    hologramElementsRef.current.forEach((holo: any, index: any) => {
      gsap.to(holo, {
        x: `+=${Math.random() * 500 - 250}`,
        y: `+=${Math.random() * 500 - 250}`,
        rotationX: `+=${Math.random() * 40 - 20}`,
        rotationY: `+=${Math.random() * 40 - 20}`,
        duration: Math.random() * 30 + 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(holo, {
        opacity: Math.random() * 0.8 + 0.4,
        scale: Math.random() * 0.6 + 0.7,
        duration: Math.random() * 8 + 5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 4
      });

      // Text glitch effect
      gsap.to(holo, {
        textShadow: `0 0 ${Math.random() * 30 + 10}px currentColor, 0 0 ${Math.random() * 60 + 20}px currentColor`,
        duration: Math.random() * 3 + 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 5
      });
    });

    // Advanced energy orb animations
    orbsRef.current.forEach((orb: any, index: any) => {
      gsap.to(orb, {
        x: `+=${Math.random() * 600 - 300}`,
        y: `+=${Math.random() * 600 - 300}`,
        rotation: `+=${Math.random() * 180}`,
        duration: Math.random() * 35 + 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(orb, {
        scale: Math.random() * 0.8 + 0.5,
        opacity: Math.random() * 0.7 + 0.2,
        duration: Math.random() * 10 + 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 5
      });
    });

    // Particle system animations
    particleSystemRef.current.forEach((particle: any, index: any) => {
      gsap.to(particle, {
        x: `+=${Math.random() * 800 - 400}`,
        y: `+=${Math.random() * 800 - 400}`,
        duration: Math.random() * 40 + 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(particle, {
        scale: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.9 + 0.1,
        duration: Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2
      });
    });

    // Light beam animations
    lightBeamsRef.current.forEach((beam: any, index: any) => {
      gsap.to(beam, {
        x: `+=${Math.random() * 200 - 100}`,
        rotation: `+=${Math.random() * 20 - 10}`,
        duration: Math.random() * 45 + 35,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(beam, {
        opacity: Math.random() * 0.8 + 0.3,
        scaleX: Math.random() * 3 + 1,
        duration: Math.random() * 12 + 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 6
      });
    });

    // Quantum dot animations
    quantumDotsRef.current.forEach((dot: any, index: any) => {
      gsap.to(dot, {
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 300 - 150}`,
        duration: Math.random() * 15 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(dot, {
        scale: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.9 + 0.2,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 1.5
      });
    });

    // Advanced container background animation
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        background: 'radial-gradient(ellipse at 40% 30%, #0f0f23 0%, #000811 30%, #000000 60%, #0a0a0f 100%)',
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Cleanup
    return () => {
      [
        ...neuralNodesRef.current, 
        ...dataStreamsRef.current, 
        ...hologramElementsRef.current, 
        ...orbsRef.current,
        ...particleSystemRef.current,
        ...lightBeamsRef.current,
        ...quantumDotsRef.current
      ].forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      
      neuralNodesRef.current = [];
      dataStreamsRef.current = [];
      hologramElementsRef.current = [];
      orbsRef.current = [];
      particleSystemRef.current = [];
      lightBeamsRef.current = [];
      quantumDotsRef.current = [];
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 35% 25%, #0f0f23 0%, #000811 35%, #000000 65%, #0a0a0f 100%)'
      }}
    >
      {/* Advanced neural network mesh with depth */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2306b6d4' stroke-width='0.8' opacity='0.6'%3E%3Cline x1='0' y1='75' x2='150' y2='75'/%3E%3Cline x1='75' y1='0' x2='75' y2='150'/%3E%3Cline x1='0' y1='37.5' x2='150' y2='112.5'/%3E%3Cline x1='0' y1='112.5' x2='150' y2='37.5'/%3E%3Cline x1='37.5' y1='0' x2='112.5' y2='150'/%3E%3Cline x1='112.5' y1='0' x2='37.5' y2='150'/%3E%3Ccircle cx='37.5' cy='37.5' r='3' fill='%2306b6d4'/%3E%3Ccircle cx='112.5' cy='37.5' r='3' fill='%2306b6d4'/%3E%3Ccircle cx='37.5' cy='112.5' r='3' fill='%2306b6d4'/%3E%3Ccircle cx='112.5' cy='112.5' r='3' fill='%2306b6d4'/%3E%3Ccircle cx='75' cy='75' r='4' fill='%239333ea'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}
      />

      {/* Multi-layered digital matrix */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' opacity='0.4'%3E%3Crect x='0' y='0' width='2' height='2'/%3E%3Crect x='15' y='15' width='2' height='2'/%3E%3Crect x='30' y='30' width='2' height='2'/%3E%3Crect x='45' y='45' width='2' height='2'/%3E%3Crect x='7.5' y='22.5' width='2' height='2'/%3E%3Crect x='22.5' y='37.5' width='2' height='2'/%3E%3Crect x='37.5' y='52.5' width='2' height='2'/%3E%3Crect x='52.5' y='7.5' width='2' height='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Advanced hexagonal tech grid with glow */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='104' viewBox='0 0 120 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%239333ea' stroke-width='1' opacity='0.7'%3E%3Cpolygon points='60,0 111.96,30 111.96,90 60,120 8.04,90 8.04,30'/%3E%3Cpolygon points='60,20 91.96,40 91.96,80 60,100 28.04,80 28.04,40'/%3E%3Ccircle cx='60' cy='60' r='5' fill='%239333ea' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 104px'
        }}
      />

      {/* Multi-layer quantum wave interference */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 15% 85%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 85% 15%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)
          `
        }}
      />

      {/* Enhanced corner energy fields */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-500/15 via-cyan-500/8 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/15 via-purple-500/8 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/15 via-blue-500/8 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-indigo-500/15 via-indigo-500/8 to-transparent" />

      {/* Advanced floating tech symbols with 3D effect */}
      <div className="absolute top-12 left-20 text-cyan-400/40 text-7xl font-mono animate-pulse transform perspective-1000 rotate-x-12" style={{textShadow: '0 0 30px currentColor'}}>&lt;/&gt;</div>
      <div className="absolute top-24 right-24 text-purple-400/40 text-6xl font-mono animate-pulse transform perspective-1000 rotate-y-12" style={{animationDelay: '1s', textShadow: '0 0 25px currentColor'}}>{ }</div>
      <div className="absolute bottom-24 left-24 text-blue-400/40 text-8xl font-mono animate-pulse transform perspective-1000 -rotate-x-12" style={{animationDelay: '2s', textShadow: '0 0 35px currentColor'}}>◊</div>
      <div className="absolute bottom-20 right-20 text-indigo-400/40 text-7xl font-mono animate-pulse transform perspective-1000 -rotate-y-12" style={{animationDelay: '1.5s', textShadow: '0 0 30px currentColor'}}>∞</div>
      <div className="absolute top-1/2 left-12 text-cyan-400/35 text-5xl font-mono animate-pulse transform perspective-1000 rotate-12" style={{animationDelay: '0.5s', textShadow: '0 0 20px currentColor'}}>λ</div>
      <div className="absolute top-1/3 right-16 text-purple-400/35 text-6xl font-mono animate-pulse transform perspective-1000 -rotate-12" style={{animationDelay: '2.5s', textShadow: '0 0 25px currentColor'}}>Ψ</div>
      <div className="absolute bottom-1/3 left-16 text-emerald-400/35 text-5xl font-mono animate-pulse transform perspective-1000 rotate-y-12" style={{animationDelay: '3s', textShadow: '0 0 20px currentColor'}}>Ω</div>
      <div className="absolute top-2/3 right-12 text-pink-400/35 text-4xl font-mono animate-pulse transform perspective-1000 -rotate-x-12" style={{animationDelay: '1.8s', textShadow: '0 0 18px currentColor'}}>∇</div>

      {/* Multi-directional energy flow lines */}
      <div className="absolute top-1/6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{filter: 'blur(0.5px)'}} />
      <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse" style={{animationDelay: '1s', filter: 'blur(0.5px)'}} />
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" style={{animationDelay: '2s', filter: 'blur(0.5px)'}} />
      <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent animate-pulse" style={{animationDelay: '0.5s', filter: 'blur(0.5px)'}} />
      <div className="absolute top-5/6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400/40 to-transparent animate-pulse" style={{animationDelay: '1.5s', filter: 'blur(0.5px)'}} />

      {/* Vertical energy streams with enhanced glow */}
      <div className="absolute left-1/6 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse" style={{animationDelay: '0.3s', filter: 'blur(0.5px)'}} />
      <div className="absolute right-1/6 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1.3s', filter: 'blur(0.5px)'}} />
      <div className="absolute left-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/35 to-transparent animate-pulse" style={{animationDelay: '2.3s', filter: 'blur(0.5px)'}} />
      <div className="absolute right-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-emerald-400/35 to-transparent animate-pulse" style={{animationDelay: '0.8s', filter: 'blur(0.5px)'}} />
      <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-400/35 to-transparent animate-pulse" style={{animationDelay: '1.8s', filter: 'blur(0.5px)'}} />

      {/* Diagonal energy beams */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse transform rotate-45 origin-left" style={{animationDelay: '2.5s', filter: 'blur(1px)'}} />
      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-purple-400/30 to-transparent animate-pulse transform -rotate-45 origin-right" style={{animationDelay: '0.7s', filter: 'blur(1px)'}} />

      {/* Pulsing corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/40 animate-pulse" style={{filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))'}} />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-400/40 animate-pulse" style={{animationDelay: '1s', filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))'}} />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-blue-400/40 animate-pulse" style={{animationDelay: '2s', filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'}} />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-indigo-400/40 animate-pulse" style={{animationDelay: '1.5s', filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))'}} />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Enhanced holographic scan lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(6, 182, 212, 0.03) 4px, rgba(6, 182, 212, 0.03) 8px)'
        }}
      />

      {/* Advanced digital noise overlay with color shift */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-8"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='advancedNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0.8 0.1 0.8 0 0 0.2 0.9 0.3 0 0 0.3 0.2 1.0 0 0 0 0 0 0.1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23advancedNoiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
          backgroundSize: '512px 512px',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Glitch effect overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(255, 0, 100, 0.1) 50%, transparent 100%),
            linear-gradient(180deg, transparent 0%, rgba(0, 255, 200, 0.1) 50%, transparent 100%)
          `,
          backgroundSize: '200px 300px, 300px 200px',
          animation: 'glitch 8s infinite linear'
        }}
      />

      {/* CSS for glitch animation */}
      <style jsx>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(2px, -2px); }
          30% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, 2px); }
          50% { transform: translate(-2px, 2px); }
          60% { transform: translate(2px, -2px); }
          70% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
          90% { transform: translate(-2px, 2px); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .-rotate-x-12 {
          transform: rotateX(-12deg);
        }
        
        .-rotate-y-12 {
          transform: rotateY(-12deg);
        }
        
        .rotate-12 {
          transform: rotate(12deg);
        }
        
        .-rotate-12 {
          transform: rotate(-12deg);
        }
      `}</style>
    </div>
  );
};

export default BackgroundLayout;