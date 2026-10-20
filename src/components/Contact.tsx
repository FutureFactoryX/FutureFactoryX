import Link from "next/link";

export default function Contact() {
    return(
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8  lg:py-24">
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Let's talk
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Complex SAP problem?
                <br />
                Let's make it clearer.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Planning a manufacturing application, integration or SAP process improvement?
                Start with the problem and the operational context.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="
                  rounded-xl
                  bg-sky-500
                  px-6
                  py-3.5
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-sky-400
                "
              >
                Discuss a challenge
              </Link>

              <a
                href="https://www/linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-slate-700
                  px-6
                  py-3.5
                  text-center
                  text-sm
                  font-semibold
                  text-slate-200
                  transition
                  hover:border-slate-500
                  hover:bg-slate-900
                "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}