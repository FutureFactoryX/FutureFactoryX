export default function Services() {
    
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

    const metrics = [
    {
      value: "10+",
      label: "Projects delivered",
    },
    {
      value: "5+",
      label: "Integrations implemented",
    },
    {
      value: "10",
      label: "Years of SAP experience",
    },
  ];

    return (
      <section className="bg-slate-800 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="uppercase tracking-[0.25em] text-sm text-sky-400 mb-6">
              Services
            </p>

            <h2 className="text-4xl font-bold leading-tight max-w-3xl">
              Technical SAP solutions aligned with operational reality.
            </h2>
          </div>

{/* EXPERIENCE METRICS */}
<div className="mb-16 overflow-hidden rounded-[2rem] border border-sky-900/40 bg-slate-900/70 shadow-[0_20px_60px_rgba(2,6,23,0.25)]">
  <div className="grid grid-cols-1 divide-y divide-slate-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
    {metrics.map((metric) => (
      <div
        key={metric.label}
        className="relative px-8 py-9 text-center sm:px-6 lg:py-10"
      >
        {/* subtle accent */}
        <div className="absolute left-1/2 top-0 h-1 w-10 -translate-x-1/2 rounded-full bg-sky-400" />

        <p className="text-5xl font-bold tracking-tight text-white">
          {metric.value}
        </p>

        <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-sky-300">
          {metric.label}
        </p>
      </div>
    ))}
  </div>
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

        );
    }