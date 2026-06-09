import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-slate-950 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="flex flex-col items-center text-center">

          <Image
            src="/logo/futurefactoryx-logo.png"
            alt="FutureFactoryX"
            width={900}
            height={300}
            priority
            className="w-full max-w-5xl object-contain"
          />

          <p className="mt-8 text-sky-300 uppercase tracking-[0.4em]">
            Technology • Process • Execution
          </p>

          <h1 className="mt-10 text-5xl md:text-7xl font-bold max-w-5xl">
            Building the Future Factory through technology and process excellence.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300">
            SAP development, Fiori applications, integrations and practical
            manufacturing solutions designed around real business processes.
          </p>

        </div>

      </div>
    </section>
  );
}