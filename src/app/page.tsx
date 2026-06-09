export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">

        {/* HEADER */}
        <div className="mb-10">
          <div className="text-sm tracking-widest text-sky-600 font-semibold">
            FUTURE FACTORY X
          </div>

          <h1 className="text-5xl font-bold mt-2 leading-tight">
            SAP Architecture for the Factory of the Future
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            A modular blueprint for building intelligent manufacturing systems
            using SAP ecosystem, cloud integration, and real-time data flows.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-sky-600">SAP Core</h2>
            <p className="mt-2 text-sm text-slate-600">
              Central ERP layer handling finance, logistics and production planning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-sky-600">Data Layer</h2>
            <p className="mt-2 text-sm text-slate-600">
              Real-time data streaming from IoT, machines and MES systems.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-sky-600">AI Layer</h2>
            <p className="mt-2 text-sm text-slate-600">
              Predictive maintenance, optimization and autonomous decision systems.
            </p>
          </div>

        </div>

        {/* FOOTER BLOCK */}
        <div className="mt-10 p-6 bg-sky-600 text-white rounded-2xl">
          <h3 className="text-xl font-semibold">Future FactoryX Vision</h3>
          <p className="mt-2 text-sm opacity-90">
            Transforming traditional SAP landscapes into adaptive, cloud-native
            manufacturing ecosystems.
          </p>
        </div>

      </div>
    </main>
  );
}