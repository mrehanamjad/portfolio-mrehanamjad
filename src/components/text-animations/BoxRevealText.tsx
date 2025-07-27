"use client";

import React, {
  useState,
  useEffect,
  ReactNode,
  HTMLAttributes,
  MouseEventHandler,
} from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type TriggerType = "load" | "hover" | "click" | "scroll";

interface BoxRevealTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  boxColor?: string;
  textColor?: string;
  fontSize?: string;
  delay?: number;
  duration?: number;
  autoPlay?: boolean;
  trigger?: TriggerType;
  className?: string;
}

export function BoxRevealText({
  children,
  boxColor = "bg-emerald-500",
  textColor = "text-white",
  fontSize = "text-4xl",
  delay = 0,
  duration = 1.2,
  autoPlay = true,
  trigger = "load",
  className = "",
  ...props
}: BoxRevealTextProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Auto-play on mount
  useEffect(() => {
    if (autoPlay && trigger === "load") {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, trigger, delay]);

  useGSAP(
    () => {
      if (!shouldAnimate) return;

      gsap.set(".reveal-text", { opacity: 0 });
      gsap.set(".reveal-box", { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        onComplete: () => setIsRevealed(true),
      });

      tl.to(".reveal-box", {
        scaleX: 1,
        duration: duration * 0.4,
        ease: "power2.inOut",
      })
        .set(".reveal-text", { opacity: 1 })
        .to(
          ".reveal-box",
          {
            scaleX: 0,
            transformOrigin: "right center",
            duration: duration * 0.6,
            ease: "power2.inOut",
          },
          `+=${duration * 0.1}`
        );
    },
    { dependencies: [shouldAnimate, duration] }
  );

  const handleTrigger = () => {
    if (trigger === "click" || trigger === "hover") {
      if (!isRevealed) {
        setShouldAnimate(true);
      } else {
        // Reset animation
        setIsRevealed(false);
        setShouldAnimate(false);
        setTimeout(() => setShouldAnimate(true), 100);
      }
    }
  };

  const triggerProps: Partial<React.HTMLAttributes<HTMLDivElement>> = {
    ...(trigger === "click" && { onClick: handleTrigger }),
    ...(trigger === "hover" && {
      onMouseEnter: handleTrigger,
      style: { cursor: "pointer" },
    }),
  };

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      {...triggerProps}
      {...props}
    >
      {/* Text */}
      <span className={`reveal-text inline-block ${fontSize} ${textColor} font-bold`}>
        {children}
      </span>

      {/* Box Overlay */}
      <div className={`reveal-box absolute inset-0 ${boxColor} z-10`} />
    </div>
  );
}

interface BoxRevealVariantProps extends Omit<BoxRevealTextProps, "fontSize" | "textColor" | "boxColor" | "duration"> {
  children: ReactNode;
}

// Heading
export function BoxRevealHeading({ children, ...props }: BoxRevealVariantProps) {
  return (
    <BoxRevealText
      fontSize="text-5xl md:text-6xl lg:text-7xl"
      textColor="text-gray-200"
      boxColor="bg-emerald-400"
      duration={1.5}
      {...props}
    >
      {children}
    </BoxRevealText>
  );
}

// Subtitle
export function BoxRevealSubtitle({ children, ...props }: BoxRevealVariantProps) {
  return (
    <BoxRevealText
      fontSize="text-xl md:text-2xl"
      textColor="text-gray-600"
      boxColor="bg-blue-500"
      duration={1}
      {...props}
    >
      {children}
    </BoxRevealText>
  );
}

// Button
interface BoxRevealButtonProps extends BoxRevealTextProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function BoxRevealButton({ children, onClick, ...props }: BoxRevealButtonProps) {
  return (
    <BoxRevealText
      fontSize="text-lg"
      textColor="text-white"
      boxColor="bg-purple-600"
      duration={0.8}
      trigger="hover"
      className="px-6 py-3 bg-gray-900 rounded-lg transition-colors hover:bg-gray-800"
      onClick={onClick}
      {...props}
    >
      {children}
    </BoxRevealText>
  );
}
