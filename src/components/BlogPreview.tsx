import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  featured?: boolean;
};

const posts: BlogPost[] = [
  {
    slug: "why-most-sap-shopfloor-apps-fail",
    title: "Why Most SAP Shopfloor Apps Fail",
    excerpt:
      "Many SAP applications are technically correct but operationally ineffective. Here is what usually goes wrong and how to design them better.",
    category: "Process & UX",
    publishedAt: "August 18, 2026",
    readingTime: "8 min read",
    image: "/blog/sap-shop-floor-applications.jpg",
    featured: true,
  },
  {
    slug: "sap-fiori-in-manufacturing",
    title: "SAP Fiori in Manufacturing: Where It Actually Adds Value",
    excerpt:
      "A practical look at where Fiori applications can improve daily manufacturing operations.",
    category: "SAP Development",
    publishedAt: "August 11, 2026",
    readingTime: "7 min read",
    image: "/blog/sap-shop-floor-applications.jpg",
  },
  {
    slug: "integrating-shopfloor-with-sap",
    title: "Integrating Shopfloor Systems with SAP S/4HANA",
    excerpt:
      "What to consider when connecting production software and shopfloor applications with SAP.",
    category: "Integration",
    publishedAt: "August 4, 2026",
    readingTime: "9 min read",
    image: "/blog/sap-shop-floor-applications.jpg",
  },
  {
    slug: "process-design-before-automation",
    title: "Why Process Design Should Come Before Automation",
    excerpt:
      "Automation cannot fix a broken process. A look at why process analysis should come first.",
    category: "Manufacturing",
    publishedAt: "July 28, 2026",
    readingTime: "6 min read",
    image: "/blog/sap-shop-floor-applications.jpg",
  },
  {
    slug: "abap-vs-low-code",
    title: "ABAP vs Low-Code: Choosing the Right Tool",
    excerpt:
      "When should a solution be built in ABAP, Fiori or a low-code platform?",
    category: "SAP Development",
    publishedAt: "July 21, 2026",
    readingTime: "8 min read",
    image: "/blog/sap-shop-floor-applications.jpg",
  },
  {
    slug: "sap-dms-in-production",
    title: "SAP DMS in Production: Beyond Document Storage",
    excerpt:
      "How document management can become part of the manufacturing process instead of simply storing files.",
    category: "Manufacturing",
    publishedAt: "July 14, 2026",
    readingTime: "7 min read",
    image: "/blog/sap-shop-floor-applications.jpg",
  },
];

const categories = [
  { label: "All articles", href: "/blog" },
  {
    label: "SAP Development",
    href: "/blog?category=sap-development",
  },
  {
    label: "Manufacturing",
    href: "/blog?category=manufacturing",
  },
  {
    label: "Integration",
    href: "/blog?category=integration",
  },
  {
    label: "Process & UX",
    href: "/blog?category=process-ux",
  },
];

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogPreview() {
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];

  const secondaryPosts = posts
    .filter((post) => post.slug !== featuredPost.slug)
    .slice(0, 3);

  return (
    <section
      aria-labelledby="blog-heading"
      className="border-y border-slate-200 bg-slate-50 text-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* HEADER */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Weekly Blog
            </p>

            <h2
              id="blog-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl"
            >
              Practical insights into SAP, manufacturing and process design.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Lessons, implementation observations and technical guidance from
              the intersection of SAP technology and real manufacturing
              processes.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
          >
            Read All Posts

            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* BLOG GRID - 8 / 4 */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* FEATURED ARTICLE - 8 */}
          <article className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-slate-900 md:col-span-8 lg:min-h-[600px]">
            {/* IMAGE */}
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              priority
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

            {/* CONTENT */}
            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-6 sm:p-8 lg:min-h-[600px] lg:p-10">
              {/* TOP */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="font-medium text-sky-300">
                  {featuredPost.category}
                </span>

                <span className="text-white/40">•</span>

                <time className="text-white/70">
                  {featuredPost.publishedAt}
                </time>

                <span className="text-white/40">•</span>

                <span className="text-white/70">
                  {featuredPost.readingTime}
                </span>
              </div>

              {/* CENTER / TITLE */}
              <div className="max-w-3xl">
                <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  Featured article
                </span>

                <h3 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/80">
                  Read article
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:border-white/40 group-hover:bg-white/20">
                  <ArrowIcon />
                </span>
              </div>
            </div>

            {/* FULL CARD LINK */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              aria-label={`Read ${featuredPost.title}`}
              className="absolute inset-0 z-20"
            />
          </article>

          {/* SECONDARY ARTICLES - 4 */}
          <div className="flex flex-col gap-6 md:col-span-4">
            {secondaryPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex min-h-[160px] gap-4 border-b border-slate-200 pb-6 last:border-b-0 last:pb-0 sm:gap-5"
              >
                {/* THUMBNAIL */}
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-900 sm:w-32">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Thumbnail overlay */}
                  <div className="absolute inset-0 bg-slate-950/10 transition-colors duration-300 group-hover:bg-slate-950/0" />
                </div>

                {/* CONTENT */}
                <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                  <div>
                    {/* META */}
                    <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                      <span className="font-semibold uppercase tracking-[0.12em] text-sky-600">
                        {post.category}
                      </span>

                      <span className="text-slate-300">•</span>

                      <time className="text-slate-500">
                        {post.publishedAt}
                      </time>
                    </div>

                    {/* TITLE */}
                    <h3 className="line-clamp-3 text-lg font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-sky-700 sm:text-xl">
                      {post.title}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div className="mt-3 flex items-center justify-end">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:border-sky-300 group-hover:bg-sky-50 group-hover:text-sky-600">
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* FULL CARD LINK */}
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="absolute inset-0 z-10"
                />
              </article>
            ))}
          </div>
        </div>

        {/* OPTIONAL CATEGORY NAVIGATION */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-8">
          {categories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-slate-900 text-white hover:bg-sky-600"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600"
              }`}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}