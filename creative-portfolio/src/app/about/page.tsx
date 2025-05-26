'use client';

import { useEffect, useRef } from 'react';

export default function AboutPage() {
  // Refs for animations
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply animations to skills items when page loads
    const skillsItems = skillsRef.current?.querySelectorAll('.skill-item');
    skillsItems?.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('opacity-100');
        item.classList.remove('opacity-30');
      }, index * 200);
    });
  }, []);

  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* About header */}
        <h1 className="font-bold leading-tight tracking-tight text-slate-300 text-7xl md:text-9xl mb-8">
          About
        </h1>

        {/* Biography section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="prose prose-xl prose-invert">
            <p>
             Hey there! I'm Pavan 👋

            </p>
            I'm a Full-Stack Web Developer with a strong creative muscle for designing modern, user-centric websites. My passion lies in blending aesthetic appeal with functional design, ensuring that every digital experience is as engaging as it is efficient.
            <p>
              With a deep understanding of UI/UX principles and Figma, I bring ideas to life, crafting visually stunning and intuitive interfaces. As a self-taught designer, I'm constantly pushing boundaries, exploring the intersection of art, code, and technology.
            </p>
            <p>
              💡 When I'm not coding, you'll find me experimenting with new design trends, discovering innovative tools, or diving into the latest tech updates to refine my craft.


            </p>
            <p>
              Join me as I continue to build, innovate, and shape the future of the web! 🚀
            </p>
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1jjxjq3s0GGuD7YZOeizokpxkzczNefgm/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-yellow-400 bg-transparent px-4 py-2 font-bold text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-navy"
              >
                Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative h-80 md:h-full overflow-hidden rounded-lg">
            <img
              src="https://res.cloudinary.com/dcjddhs7s/image/upload/v1748198437/1717236796976_erjhi5.jpg"
              alt="Manju"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Skills section */}
        <h2 className="text-4xl md:text-6xl font-bold text-slate-300 mb-8 mt-16">What I use</h2>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="skill-item opacity-30 transition-opacity duration-500 flex items-center">
            <span className="text-3xl md:text-5xl font-bold text-blue-400">REACT</span>
            
          </div>
          <div className="skill-item opacity-30 transition-opacity duration-500 flex items-center">
            <span className="text-3xl md:text-5xl font-bold text-slate-700">Figma</span>
            
          </div>
          <div className="skill-item opacity-30 transition-opacity duration-500 flex items-center">
            <span className="text-3xl md:text-5xl font-bold text-green-400">TypeScript</span>
            
          </div>
          <div className="skill-item opacity-30 transition-opacity duration-500 flex items-center">
            <span className="text-3xl md:text-5xl font-bold text-orange-400">SVG</span>
            
          </div>
        </div>

        {/* Experience section */}
        

        {/* Education section */}
        {/* Education section */}
<h2 className="text-4xl md:text-6xl font-bold text-slate-300 mb-8 mt-16">Education</h2>

<div className="mb-12">
  <div className="border-l-2 border-slate-700 pl-6 py-4">
    <h3 className="text-2xl md:text-3xl font-bold text-slate-200">B.Tech (CSE)</h3>
    <p className="text-lg text-slate-400 mb-2">2021 - 2025 / VelTech University</p>
    <p className="text-lg text-slate-300">CGPA : 8.3</p>
  </div>
</div>

<div className="mb-12">
  <div className="border-l-2 border-slate-700 pl-6 py-4">
    <h3 className="text-2xl md:text-3xl font-bold text-slate-200">Intermediate (MPC)</h3>
    <p className="text-lg text-slate-400 mb-2">2019 - 2021 / Narayana Junior College</p>
    <p className="text-lg text-slate-300">Percentage : 70%</p>
  </div>
</div>

<div className="mb-12">
  <div className="border-l-2 border-slate-700 pl-6 py-4">
    <h3 className="text-2xl md:text-3xl font-bold text-slate-200">Secondary School (10th)</h3>
    <p className="text-lg text-slate-400 mb-2">2019 / Amali Eng Med-High School</p>
    <p className="text-lg text-slate-300">GPA : 8.2</p>
  </div>
</div>

      </div>
    </section>
  );
}
