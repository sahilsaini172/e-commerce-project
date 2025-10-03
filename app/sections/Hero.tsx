"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef(null);
  const buyRef = useRef(null);
  useEffect(() => {
    if (imageRef.current) {
      const imgAnimation = animate(imageRef.current, {
        x: { from: "150%"},
        opacity: { from: 0 },
        rotate: [
          { to: -30, duration: 1000, delay: 500 },
        ],
        scale: {to:1.2,delay:500},
        duration: 1000,
        ease: "inOutExpo",
      });
      imgAnimation.play();
    }
    if (headingRef.current) {
      const headingAnimation = animate(headingRef.current, {
        y: { from: "100%" },
        opacity: { from: 0 },
        duration: 1000,
        ease: "inOutExpo",
      });
      headingAnimation.play();
    }
    if (buyRef.current) {
      const buyAnimation = animate(buyRef.current, {
        opacity: { from: 0 },
        duration: 1000,
        ease: "inOutExpo",
      });
      buyAnimation.play();
    }
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-neutral-900 p-10">
      <div
        ref={headingRef}
        className="w-full flex flex-col items-center justify-center text-white font-black -gap-8"
      >
        <span className="text-2xl">Only one way to find out.</span>
        <h1 className="text-[15rem] font-black text-white  text-center overflow-hidden">
          JUST DO IT.
        </h1>
      </div>
      <img
        src="/hero.png"
        ref={imageRef}
        className="absolute size-1/2 overflow-visible drop-shadow-2xl aspect-square object-cover "
      />
      <h1
        ref={buyRef}
        className="absolute text-[15rem]  font-black text-white/50 mb-2  text-center overflow-hidden"
      >
        JUST DO IT.
      </h1>
      <div ref={headingRef} className="flex flex-col gap-3 items-center">
        <button className="bg-white w-fit py-2 px-12 font-bold rounded-full">
          Shop
        </button>
      </div>
    </div>
  );
}
