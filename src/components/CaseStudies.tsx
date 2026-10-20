const projects = [
  {
    category: "Manufacturing UX",
    title: "Simplifying warehouse transaction flows",
    context: "Operational workflows required unnecessary manual scanning and interaction.",
    intervention: "Simplified SAP Fiori transaction flows around the actual warehouse process.",
    outcome: "Reduced manual scanning effort and simplified daily execution.",
    capabilities: "Fiori • SAP • Warehouse processes",
  },
  {
    category: "Manufacturing automation",
    title: "Automating production documentation",
    context: "Manufacturing documentation required repetitive manual preparation.",
    intervention: "Automated document generation using SAP process triggers and Adobe Forms.",
    outcome: "Reduced manual document preparation within the manufacturing process.",
    capabilities: "ABAP • Adobe Forms • Manufacturing",
  },
];

export default function CaseStudies() {
    return (
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Selected Work
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Technical work measured by operational impact.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                "
              >
                <div className="border-b border-slate-200 p-8 lg:p-10">
                  <p className="text-sm font-semibold text-sky-600">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                    {project.title}
                  </h3>
                </div>

                <div className="grid gap-8 p-8 lg:p-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Context
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                      {project.context}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Intervation
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                      {project.intervention}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Outcome
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                      {project.outcome}
                    </p>
                  </div>
                </div>
                <div className="border-t border-slate-200 bg-slate-50 px-8 py-5 lg:px-10">
                  <p className="text-sm font-medium text-slate-500">
                    {project.capabilities}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
}