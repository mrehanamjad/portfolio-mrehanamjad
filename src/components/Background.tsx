"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  
  const colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    const boxes = containerRef.current.querySelectorAll('.box-cell');
    
    boxes.forEach((box) => {
      const element = box as HTMLElement;
      
      // Hover animations
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          backgroundColor: getRandomColor(),
          duration: 0,
          ease: "none"
        });
      });
      
      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          backgroundColor: "transparent",
          duration: 2,
          ease: "power2.out"
        });
      });
    });
  }, { scope: containerRef });

  const baseClasses = "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4";
  const combinedClassName = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div
      ref={containerRef}
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={combinedClassName}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row${i}`}
          className="relative h-8 w-16 border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <div
              key={`col${j}`}
              className="box-cell relative h-8 w-16 border-t border-r border-slate-700"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);