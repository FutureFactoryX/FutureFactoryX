export default function Contact() {
    return(
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-sky-400 mb-6">
          Contact
        </p>

        <h2 className="text-5xl font-bold leading-tight mb-8">
          Let’s build SAP solutions that people actually want to use.
        </h2>

        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          Available for consulting, architecture discussions and technical SAP
          projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-sky-500 text-white px-6 py-3 rounded-2xl hover:opacity-90 transition">
            LinkedIn
          </button>

          <button className="border border-zinc-300 px-6 py-3 rounded-2xl hover:bg-slate-900 transition">
            Email Contact
          </button>
        </div>
      </section>
    );
}