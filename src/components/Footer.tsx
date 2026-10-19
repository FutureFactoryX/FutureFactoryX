import Link from "next/link";

const navigation = {
    explore: [
        { label: "Blog Preview", href: "/blog"},
        { label: "Expertise", href: "/services"},
        { label: "Work", href: "/work"},
    ],
    company: [
        { label: "About", href: "/about"},
        { label: "Contact", href: "/contact"},
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
                <div className="grid gap-12 md:grid-cols-12">
                    <div className="md:col-span-6">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight text-white"
                        >
                            FutureFactory
                            <span className="text-sky-400">X</span>
                        </Link>

                        <p className="mt-5 max-w-sm leading-7 text-slate-400">
                            Practical insights and consulting around SAP, manufacturing,
                            integrations and process design.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-sm font-semibold text-white">
                            Explore
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            {navigation.explore.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-slate-400 transition hober:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-sm font-semibold text-white">
                            FutureFactoryX
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            {navigation.company.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-slate-400 transition hober:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div
                    className="
                        mt-14
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-slate-800
                        pt-8
                        text-sm
                        text-slate-500
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p>
                        © {new Date().getFullYear()} FutureFactoryX.
                    </p>

                    <p>
                        SAP • Manufacturing • Integration
                    </p>
                </div>
            </div>
        </footer>
    )
}