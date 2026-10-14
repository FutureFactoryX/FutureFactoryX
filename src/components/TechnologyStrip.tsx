const technologies =[
    "SAP S/4 HANA",
    "ABAP",
    "Fiori / UI5",
    "OData",
    "Integration Suite",
    "Manufacturing",
    "Process Design",
];

export default function TechnologyStrip() {
    return (
        
        <section
            aria-label="Technology expertise"
            className="border-b border-slate-200 bg-slate-50"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-x-7
                        gap-y-3
                        py-5
                    "
                >
                {technologies.map((technology, index)=>(
                    <div
                        key={technology}
                        className="flex items-center gap-7"
                    >
                        <span className="text-sm font-meidum text-slate-600">
                            {technology}
                        </span>

                        {index !== technologies.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
                            />
                        )}
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}