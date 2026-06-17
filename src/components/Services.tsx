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

    return (
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

        );
    }