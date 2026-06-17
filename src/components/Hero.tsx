import Image from "next/image";

export default function Hero() {
    return (
      <section className="border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex justify-center mb-4">
            <Image
              src="/logo/futurefactoryx-logo.png"
              alt="FutureFactoryX"
              width={1200}
              height={100}
              priority
              className="w-full max-w-5xl object-contain"
            />
          </div>

          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-sky-400 mb-6">
              Technology • Process • Execution
            </p>

            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-8">
              Building the Future Factory through technology and process excellence.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              SAP development, Fiori applications, integrations and manufacturing
              solutions designed around real business processes.
            </p>

          </div>
        </div>
      </section>
    );
}