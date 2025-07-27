"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TerminalTypingBoxProps {
  text: string;
  className?: string;
  typingSpeed?: number; // in seconds
}

export const TerminalTypingBox: React.FC<TerminalTypingBoxProps> = ({
  text,
  className = "",
  typingSpeed = 4,
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const characters = text.split("");
    const textElement = textRef.current;

    textElement.innerHTML = "";

    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      textElement.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        delay: (typingSpeed / characters.length) * index,
        duration: 0.05,
        ease: "power1.inOut",
      });
    });
  }, [text]);

  return (
    <div
      className={`max-w-md bg-black text-green-400 font-mono text-sm rounded-lg p-5 shadow-lg border border-green-700 ${className}`}
    >
      <p ref={textRef} className="whitespace-pre-wrap leading-relaxed">
        <span className="animate-pulse">█</span>
      </p>
    </div>
  );
};
