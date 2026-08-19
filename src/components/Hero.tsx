import Image from "next/image";
import Link from "next/link";
import DataFlow from "./DataFlow";

export default function Hero() {
  return (
    <section 
      aria-label="FutureFactoryX introduction"
      className="bg-white border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            {/* CONTENT */}
            <div className="relative z-10">
              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-600">
                Technology • Process • Execution
              </p>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Building the
                <span className="text-sky-600">
                  {" "}Future Factory
                </span>
                {" "}through SAP technology.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-800">
                We design SAP solutions that connect technology with real
                manufacturing processes. From Fiori applications and integrations
                to custom development supporting operational excellence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="
                    rounded-xl
                    bg-sky-500
                    px-7
                    py-3
                    text-center
                    font-medium
                    text-white
                    transition
                    hover:bg-sky-400
                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-400">
                  Let's Talk
                </Link>

                <Link
                  href="/services"
                  className="
                    rounded-xl
                    border
                    border-slate-600
                    px-7
                    py-3
                    text-center
                    font-medium
                    text-slate-700
                    transition
                    hover:border-sky-400
                    hover:text-sky-400">
                  Explore Services
                </Link>
              </div>

            </div>

            {/* VISUAL */}
            <div className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-0
              hidden
              w-full
              items-center
              justify-end
              overflow-visible
              lg:flex">
              <div className="
                relative
                w-[95%]
                sm:w-[85%]
                lg:w-[90%]
                xl:w-[80%]">

                <Image
                  src="/hero/future-factory.png"
                  alt="Digital manufacturing and SAP technology"
                  width={1200}
                  height={500}
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="
                    h-auto
                    w-full
                    object-contain
                    hero-overlay"/>

                <DataFlow />

                  {/* fade into background */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-white
                      via-transparent
                      to-white
                    "/>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}