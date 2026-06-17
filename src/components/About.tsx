export default function About() {
    return (
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
    );
}