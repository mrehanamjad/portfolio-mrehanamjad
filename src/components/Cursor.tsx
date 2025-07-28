"use client"
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      gsap.to(cursorRef.current, {
        x: clientX - 10,
        y: clientY - 10,
        duration: 1,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="h-[20px] w-[20px] bg-emerald-500 rounded-full z-50 fixed pointer-events-none mix-blend-difference"
    ></div>
  );
}

export default Cursor;
