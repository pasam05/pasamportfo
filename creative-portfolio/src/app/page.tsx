"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

// Import Shapes with dynamic import and no SSR to avoid hydration issues
const Shapes = dynamic(() => import("@/components/Shapes"), { ssr: false });

export default function HomePage() {
  // Refs for animating elements
  const nameFirstRef = useRef<HTMLSpanElement>(null);
  const nameLastRef = useRef<HTMLSpanElement>(null);
  const jobTitleRef = useRef<HTMLSpanElement>(null);

  // Function to split text into individual spans for animation
  const createLetterSpans = (text: string, className: string) => {
    return Array.from(text).map((letter, i) => {
      const uniqueId = `${className}-${letter}-${text}-${i}`;
      return (
        <span
          key={uniqueId}
          className={`name-animation ${className} inline-block opacity-0`}
          style={{
            animationDelay: `${i * 0.1}s`,
            transitionDelay: `${i * 0.1}s`,
          }}
        >
          {letter}
        </span>
      );
    });
  };

  // Animation on mount
  useEffect(() => {
    console.log("nameFirstRef:", nameFirstRef.current);
    console.log("nameLastRef:", nameLastRef.current);

    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation-first",
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".name-animation-last",
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
            stagger: { each: 0.1, from: "random" },
          },
          "-=0.5"
        );
    }, nameFirstRef.current || nameLastRef.current);

    return () => ctx.revert(); // Cleanup animations on unmount
  }, []);

  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
          {/* Text content - First column */}
          <div className="col-start-1 md:row-start-1 z-10">
            <h1
              className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
              aria-label="Andy Bryant"
            >
              {/* First name */}
              <span ref={nameFirstRef} className="block text-slate-300">
                {createLetterSpans("Hey ,I 'm Pavan", "name-animation-first")}
              </span>

              {/* Last name */}
              <span ref={nameLastRef} className="-mt-[.2em] block text-slate-500">
                {createLetterSpans("Bryant", "name-animation-last")}
              </span>
            </h1>
             <span
  className="block mt-4 text-yellow-500 font-bold uppercase tracking-wider text-[clamp(1rem,7vmin,2rem)]"
>
 Creative Developer
</span>
            {/* Job title */}
            <span
              ref={jobTitleRef}
              className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-1 md:text-4xl"
            >
              Creative Developer
            </span>
          </div>

          {/* 3D Objects - Second column */}
          <Shapes />
        </div>
      </div>
    </section>
  );
}
