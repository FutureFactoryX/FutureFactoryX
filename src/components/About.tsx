import Image from "next/image";
import Link from "next/link";

const principles =[
    "Understand the process before automating it.",
    "Keep architecture maintainable.",
    "Design for the people doing the work.",
];

export default function About() {
    return (
            <section className="border-b border-slate-200 bg-white">
                <div
                    className="
                        mx-auto
                        grid
                        max-w-7xl
                        gap-12
                        px-6
                        py-20
                        lg:grid-cols-12
                        lg:items-center
                        lg:px-8
                        lg:py-28
                        "
                >
                    <div className="lg:col-span-5">
                        <div
                            className="
                                relative
                                aspect-[4/5]
                                overflow-hidden
                                rounded-[2rem]
                                bg-slate-100
                            "
                        >
                            <Image
                                src="/consultant/consultant-photo.jpg"
                                alt="SAP Consultant"
                                fill
                                sizes="(min-width: 1024px) 40vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <p className="text-sm font-semibold uppercase tracking-[0.25] text-sky-600">
                            About
                        </p>

                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                            Not just coding SAP.
                            <br/>
                            Understanding the business behind it.
                        </h2>

                        <div className="mt-8 space y-5 text-lg leading-8 text-slate-600">
                            <p>
                                FutureFactoryX is an expert-led practice focused on SAP technology in manufacturing.
                            </p>
                            <p>
                                I combine hands-on SAP engineering with an understanding of production,
                                logistics and the people who use enterprise systems every day.
                            </p>
                        </div>
                        
                        <div className="mt-10 space-y-4 border-t border-slate-200 pt-8">
                            {principles.map((principle) => ( 
                                <div
                                    key={principle}
                                    className="flex items-start gap-4"
                                >
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500"/>
                                    <p className="font-medium text-slate-700">
                                        {principle}
                                    </p>
                                </div>

                             ))}
                        </div>
                        
                        <Link
                            href="/about"
                            className="
                                mt-10
                                inline-flex
                                text-sm
                                font-semibold
                                text-sky-700
                                hover:text-sky-600
                            "
                        >
                            More about me  ⮞
                        </Link>
                    </div>
                </div>
            </section>
    );
}