'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function ProjectsPage() {
  const projectsListRef = useRef<HTMLUListElement>(null);

  // Project data
  const projects = [
    {
      id: 'whatsapp-auto',
      title: 'Whatsapp Automation',
      technologies: ['Node.js', 'Express.js','Puppeteer'],
    },
    {
      id: 'fire-detection-system',
      title: 'Lung Cancer Detection',
      technologies: ['ML', ' Open CV', 'CNN'],
    },
  ];

  useEffect(() => {
    // Animate project items on load
    const projectItems = projectsListRef.current?.querySelectorAll<HTMLLIElement>('.list-item');
    projectItems?.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translate(0px, 0px)';
      }, index * 200);
    });
  }, []);

  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="font-bold leading-tight tracking-tight text-slate-300 text-7xl md:text-9xl mb-8">
          Projects
        </h1>

        <div className="prose prose-xl prose-invert mb-10">
          <p>The tech projects I've created</p>
        </div>

        <div>
          <ul ref={projectsListRef} className="grid border-b border-b-slate-100">
            {projects.map((project) => (
              <li
                key={project.id}
                className="list-item opacity-0"
                style={{ transform: 'translateY(20px)' }}
              >
                <Link
                  className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
                  aria-label={project.title}
                  href={`/projects/${project.id}`}
                >
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">{project.title}</span>
                    <div className="flex gap-3 text-lg font-bold text-yellow-400">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                    View Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
