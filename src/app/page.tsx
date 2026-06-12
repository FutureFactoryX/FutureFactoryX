import Image from "next/image";

export default function SAPConsultingWebsite() {
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

  const services = [
    "SAP ABAP Development",
    "SAP Fiori / UI5 Applications",
    "ODATA Services",
    "SAP Integration Suite",
    "Adobe Forms",
    "Process-Oriented SAP Consulting",
    "Manufacturing & Logistics Solutions",
    "AI Agents"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex justify-center mb-4">
            <Image
              src="/logo/futurefactoryx-logo.png"
              alt="FutureFactoryX"
              width={1200}
              height={100}
              priority
              className="w-full max-w-5xl object-contain"
            />
          </div>

          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-sky-400 mb-6">
              Technology • Process • Execution
            </p>

            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-8">
              Building the Future Factory through technology and process excellence.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              SAP development, Fiori applications, integrations and manufacturing
              solutions designed around real business processes.
            </p>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-sky-400 mb-6">
                About
              </p>

              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Not just coding SAP.
                <br />
                Understanding the business behind it.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
              <p>
                My background combines SAP technical development with practical
                understanding of manufacturing and logistics processes.
              </p>

              <p>
                I work on solutions that improve usability, reduce operational
                friction and support real business goals instead of adding another
                layer of complexity.
              </p>

              <p>
                Over time I expanded beyond classic ABAP development into Fiori,
                HTML5 applications, integrations and process-oriented consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-950 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="uppercase tracking-[0.25em] text-sm text-sky-400 mb-6">
              Services
            </p>

            <h2 className="text-4xl font-bold leading-tight max-w-3xl">
              Technical SAP solutions aligned with operational reality.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800 shadow-sm hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold leading-snug">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="uppercase tracking-[0.25em] text-sm text-sky-400 mb-6">
              Case Studies
            </p>

            <h2 className="text-4xl font-bold leading-tight max-w-3xl">
              Example business outcomes from technical SAP work.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Warehouse Operations",
                text: "Reduced manual scanning effort by implementing simplified Fiori transaction flows.",
              },
              {
                title: "Production Documentation",
                text: "Automated manufacturing PDF generation using Adobe Forms and process triggers.",
              },
              {
                title: "System Integration",
                text: "Connected external operational systems with SAP using stable API integrations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-950 bg-slate-950 p-8"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
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

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-sky-400 mb-6">
          Contact
        </p>

        <h2 className="text-5xl font-bold leading-tight mb-8">
          Let’s build SAP solutions that people actually want to use.
        </h2>

        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          Available for consulting, architecture discussions and technical SAP
          projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-sky-500 text-white px-6 py-3 rounded-2xl hover:opacity-90 transition">
            LinkedIn
          </button>

          <button className="border border-zinc-300 px-6 py-3 rounded-2xl hover:bg-slate-900 transition">
            Email Contact
          </button>
        </div>
      </section>
    </div>
  );
}
