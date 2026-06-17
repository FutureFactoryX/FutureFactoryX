export default function BlogPreview() {
      const posts = [
    {
      title: "Why Most SAP Shopfloor Apps Fail",
      excerpt:
        "Many SAP applications are technically correct but operationally useless. Here is what usually goes wrong.",
      category: "Process & UX",
    },
    {
      title: "Adobe Forms Still Matter in Manufacturing",
      excerpt:
        "PDF generation is not dead. In many production environments it is still mission critical.",
      category: "SAP Development",
    },
    {
      title: "How I Think About SAP Integrations",
      excerpt:
        "Integration is not about APIs. It is about reliability, ownership and business continuity.",
      category: "Integration Suite",
    },
  ];
    return(
      <section className="bg-sky-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-zinc-400 mb-6">
                Weekly Blog
              </p>

              <h2 className="text-4xl font-bold leading-tight max-w-3xl">
                Thoughts on SAP, operations, integrations and process design.
              </h2>
            </div>

            <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-slate-950 hover:text-black transition w-fit">
              Read All Posts
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 hover:border-white/30 transition"
              >
                <p className="text-sm text-zinc-400 mb-4">{post.category}</p>

                <h3 className="text-2xl font-semibold leading-snug mb-5">
                  {post.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
}