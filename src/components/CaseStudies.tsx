export default function CaseStudies() {
    return (
      <section className="bg-[#0B1120]">
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
    );
}