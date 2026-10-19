import Image from "next/image";
import Link from "next/link";
import DataFlow from "./DataFlow";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg> 
  );
}

const capabilities = [
  {
    number: "01",
    title: "Manufacturing focus",
    text: "SAP Solutions grounded in real production and logistics processes.",
  },
  {
    number: "02",
    title: "End-to-end integration",
    text: "Connecting SAP with applications, systems and operational data.",
  },
  {    
    number: "03",
    title: "Practical execution",
    text: "Technology designed around the people who actually use it.",
  }
];

export default function Hero() {
  return (
    <section aria-label="FutureFactoryX introduction" className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.20]"
          style={{
            backgroundImage: "url('/hero/future-factory.png')",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <div 
            className="
              mx-auto
              grid 
              max-w-7xl
              gap-14 
              px-6 
              py-20 
              lg:grid-cols-12
              lg:items-center
              lg:px-8 
              lg:py-28
            "
          >
            <div className="lg:col-span-7">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-sky-600
                "
              >
                SAP • Manufacturing • Integration
              </p>

              <h1
                className="
                  mt-6
                  max-w-4xl
                  text-5xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                SAP solutions designed around how manufacturing actually works.
              </h1>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-600
                  sm:text-xl
                "
              >
                I help manufacturing and IT teams design SAP applications,
                integrations and processes that are technically robust, usable and 
                grounded in operational reality.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/blog"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-sky-600
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-sky-500
                  "
                >

                  Explore the insights

                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon/>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-slate-900
                    transition
                    hover:border-sky-400
                    hover:text-sky-700
                  "
                >

                  Discuss a challenge
                
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-slate-50
                  shadow-[0_24px_80px_rgba(15,23,42,0.08)]
                "
              >
                <div className="border-b border-slate-200 p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                    FutureFactoryX
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    Technology connected to operational reality.
                  </p>
                </div>

                <div className="divide-y divide-slate-200">
                  {capabilities.map((capability)=> (
                    <div
                      key={capability.number}
                      className="flex gap-5 p-7"
                    >
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-sky-100
                          text-xs
                          font-bold
                          text-sky-700
                        "
                      >
                        {capability.number}
                      </span>

                      <div>
                        <h2 className="font-semibold text-slate-950">
                          {capability.title}
                        </h2>

                        <p className="mt-2 text-sm leading 6 text-slate-600">
                          {capability.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950 px-7 py-5">
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-300">
                    <span>SAP</span>
                    <span>⮞</span>
                    <span>Integration</span>
                    <span>⮞</span>
                    <span>Manufacturing</span>
                    <span>⮞</span>
                    <span>Execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}