'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function BlogPage() {
  const blogListRef = useRef<HTMLUListElement>(null);

  // Blog data
  const blogPosts = [
    {
      id: 'bus-booking',
      title: 'BUS BOOKING',
      technologies: ['Figma','UX-Research'],
    }
    
  ];

  useEffect(() => {
    // Animate blog post items on load
    const blogItems = blogListRef.current?.querySelectorAll<HTMLLIElement>('.list-item');
    blogItems?.forEach((item, index) => {
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
          Blog
        </h1>

        <div className="prose prose-xl prose-invert mb-10">
          <p>I write about case studies, user pain points, and solutions here, so others can learn from real-world examples and benefit.</p>
        </div>

        <div>
          <ul ref={blogListRef} className="grid border-b border-b-slate-100">
            {blogPosts.map((post) => (
              <li
                key={post.id}
                className="list-item opacity-0"
                style={{ transform: 'translateY(20px)' }}
              >
                <Link
                  className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
                  aria-label={post.title}
                  href={`/blog/${post.id}`}
                >
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">{post.title}</span>
                    <div className="flex gap-3 text-lg font-bold text-yellow-400">
                      {post.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                    Read More
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
