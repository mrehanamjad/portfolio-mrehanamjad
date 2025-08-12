"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterObj = { val: 0 };

    // GSAP counter animation
    gsap.to(counterObj, {
      val: 100,
      duration: 2, // how fast counting happens
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(counterObj.val));
      },
      onComplete: () => {
        hideLoader();
      },
    });

    // Wait for all images before finishing loader
    const images = Array.from(document.images);
    let loadedImages = 0;

    const checkAllLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        // If images done but counter not yet 100%, wait
        if (counterObj.val >= 100) hideLoader();
      }
    };

    if (images.length > 0) {
      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener("load", checkAllLoaded);
          img.addEventListener("error", checkAllLoaded);
        }
      });
    }

    function hideLoader() {
      gsap.to(".preloader", {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => setLoading(false),
      });
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader fixed inset-0 bg-black z-[9999]">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-9xl font-bold absolute top-4 right-4 text-white">
          {count}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
