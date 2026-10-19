import Link from "next/link";

const expertise = [
  {
    number:"01",
    title: "Manufacturing applications",
    description:
      "SAP applications designed around production, warehouse and operational workflows.",
    technologies: "Fiori / UI5 • Shopfloor UX • Process simplification",
  },
  {
    number:"02",
    title: "SAP engineering",
    description:
      "Maintaiinable SP development focused on clean architecture and long-term usability.",
    technologies: "ABAP • OData • Adobe Forms • Enhancements",
  },
  {
    number:"03",
    title: "System integration",
    description:
      "Reliable connections between SAP and the systems supporting engineering and manufacturing.",
    technologies: "Integration Suite • APIs • External systems",
  },
  {
    number:"04",
    title: "Process & UX",
    description:
      "Understanding the process before automating it - and designing solutions people actually want to use.",
    technologies: "Process design • UX • Technical architecture",
  }
];

export default function Services() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Expertise
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              From SAP technology to operational execution.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Technical expertise matters most when it solves a real process problem. These are
              the areas where technology and manufacturing meet.
            </p>
          </div>

          <Link
            href="/expertise"
            className="text-sm font-semibold text-sky-700 hover:text-sky-600"
          >
            Explore expertise ⮞
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="
                group
                rounded-[2rem]
                border
                border-slate-200
                bg-slate-50
                p-8
                transition
                duration
                hover:translate-y-1
                hover:border-sky-200
                hover:shadow-lg
                hover:shadow-slate-900/5
                lg:p-10
              "
            >
              <span className="text-sm font-semibold text-sky-600">
                {item.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                {item.description}
              </p>

              <p className="mt-8 text-sm font-medium text-slate-500">
                {item.technologies}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

