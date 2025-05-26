import Link from 'next/link';

export default function BlogPostDetail() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Post Title */}
        <h1 className="font-bold leading-tight tracking-tight text-slate-300 text-5xl md:text-7xl mb-4">
          UI/UX Case Study-BUS BOOKING
        </h1>

        {/* Post Metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex gap-3 text-lg font-bold text-yellow-400">
            <span>Figma UX-Research</span>
          </div>
          <span className="text-slate-400">Jan 1, 2025</span>
          <span className="text-slate-400">10 min read</span>
        </div>

        {/* Post Cover Image */}
        <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden mb-8">
          <img
            src="https://res.cloudinary.com/dudiuujxv/image/upload/v1744563736/WhatsApp_Image_2025-04-13_at_22.32.06_5c472db3_q3s871.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-xl prose-invert max-w-none mb-12">
          <div>
  <h2>Problem Statement</h2>
  <p>
    Passengers often struggle to decide between left-side and right-side seats on buses due to a lack of clarity about scenic views along their route. This confusion leads to missed opportunities to experience remarkable landmarks like temples, rivers, forts, and waterfalls.
  </p>
  <p>
    After their trip, users often express regret for not choosing the ‘right’ seat, impacting their overall satisfaction with the journey.
  </p>

  <h2>Goal</h2>
  <ul>
    <li>
      <strong>To eliminate confusion during seat selection.</strong>
    </li>
    <li>
      <strong>To enhance journeys by making them scenic and memorable.</strong>
    </li>
  </ul>

  <p>
    Finds this interesting? Please go through the link:
  </p>
  <p>
    <a href="https://cord-gong-11a.notion.site/UI-UX-Case-Study-BUS-BOOKING-1bad8c2af53480c28c29e0385afdc40b" target="_blank" rel="noopener noreferrer">
      Case-Study Link ->
    </a>
  </p>
</div>
        </div>

        {/* Share and Related Posts */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">Share this post</h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/intent/tweet"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-xl text-slate-300 hover:text-yellow-400"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.01C21.38 4.32 20.7 4.54 20 4.64C20.72 4.23 21.27 3.56 21.53 2.75C20.85 3.15 20.1 3.44 19.29 3.59C18.65 2.92 17.72 2.51 16.69 2.51C14.72 2.51 13.12 4.11 13.12 6.08C13.12 6.37 13.15 6.65 13.22 6.91C10.28 6.76 7.67 5.34 5.94 3.18C5.62 3.73 5.44 4.37 5.44 5.05C5.44 6.32 6.08 7.44 7.05 8.07C6.48 8.05 5.94 7.88 5.48 7.62C5.48 7.63 5.48 7.65 5.48 7.67C5.48 9.39 6.74 10.83 8.41 11.17C8.1 11.25 7.77 11.29 7.43 11.29C7.19 11.29 6.96 11.27 6.73 11.23C7.2 12.65 8.53 13.69 10.11 13.72C8.88 14.67 7.32 15.24 5.63 15.24C5.33 15.24 5.03 15.22 4.74 15.19C6.34 16.2 8.22 16.79 10.24 16.79C16.68 16.79 20.2 11.34 20.2 6.63C20.2 6.47 20.2 6.3 20.19 6.14C20.88 5.67 21.47 5.09 21.96 4.41L22 4.01Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/shareArticle"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-xl text-slate-300 hover:text-yellow-400"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM18.5 18.5V13.2C18.5 11.4 17 10.2 15.3 10.2C14.3 10.2 13.4 10.7 13 11.4V10.4H10.3V18.5H13V13.7C13 12.8 13.7 12.1 14.6 12.1C15.5 12.1 16.2 12.8 16.2 13.7V18.5H18.5ZM6.5 8.3C7.3 8.3 8 7.6 8 6.8C8 6 7.3 5.3 6.5 5.3C5.7 5.3 5 6 5 6.8C5 7.6 5.7 8.3 6.5 8.3ZM7.8 18.5V10.4H5.2V18.5H7.8Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">Related posts</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/whatsapp" className="text-slate-300 hover:text-yellow-400">
                    Whatsapp Remainder
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
