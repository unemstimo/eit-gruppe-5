import Link from "next/link";
import { ArrowLeft, ChevronDown, FileText, Send, Sparkles, Download } from "lucide-react";

export default function TilbakemeldingPage() {
    return (
        <main className="min-h-screen px-6 py-10">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/info_plansak"
                    className="mb-10 inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900"
                >
                    <ArrowLeft size={18} />
                    Tilbake
                </Link>

                <h1 className="mb-6 text-6xl font-bold text-black">Tilbakemelding</h1>

                <p className="mb-6 max-w-5xl text-2xl leading-9 text-zinc-800">
                    Her kan du sende inn tilbakemelding til plansaken. Fyll ut feltene under,
                    velg sak og skriv inn det du ønsker å melde tilbake.
                </p>

                <div className="mb-10 border-b border-zinc-300" />

                <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                    <section>
                        <div className="grid gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Fornavn"
                                className="rounded-2xl border border-teal-300 bg-[#E8F2F0] px-5 py-4 text-lg outline-none placeholder:text-teal-600"
                            />
                            <input
                                type="text"
                                placeholder="Mellom - og etternavn"
                                className="rounded-2xl border border-teal-300 bg-[#E8F2F0] px-5 py-4 text-lg outline-none placeholder:text-teal-600"
                            />
                            <input
                                type="email"
                                placeholder="E-post"
                                className="rounded-2xl border border-teal-300 bg-[#E8F2F0] px-5 py-4 text-lg outline-none placeholder:text-teal-600"
                            />
                            <input
                                type="text"
                                placeholder="Telefon nummer"
                                className="rounded-2xl border border-teal-300 bg-[#E8F2F0] px-5 py-4 text-lg outline-none placeholder:text-teal-600"
                            />
                        </div>

                        <div className="relative mt-6">
                            <select className="w-full appearance-none rounded-2xl border border-teal-300 bg-[#E8F2F0] px-5 py-4 text-lg text-teal-700 outline-none">
                                <option>Velg sak</option>
                                <option>Rønningsvegen 26, Rydningen</option>
                            </select>
                            <ChevronDown
                                size={24}
                                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-teal-700"
                            />
                        </div>

                        <div className="relative mt-6">
                            <textarea
                                placeholder="Skriv din tilbakemelding..."
                                className="min-h-[380px] w-full rounded-2xl border border-teal-300 bg-[#E8F2F0] px-5 py-5 text-lg outline-none placeholder:text-teal-600"
                            />
                            <div className="absolute right-5 top-5 rounded-full bg-white/70 p-4">
                                <Sparkles className="text-teal-500" size={28} />
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <button className="rounded-2xl bg-zinc-200 px-12 py-4 text-2xl font-medium text-zinc-700 transition hover:bg-zinc-300">
                                Avbryt
                            </button>

                            <button className="inline-flex items-center gap-3 rounded-2xl bg-teal-700 px-10 py-4 text-2xl font-medium text-white transition hover:bg-teal-800">
                                <Send size={24} />
                                Send inn
                            </button>
                        </div>
                    </section>

                    <aside className="rounded-2xl bg-white/60 p-4">
                        <div className="rounded-2xl border border-teal-300 bg-[#E8F2F0] p-4">
                            <div className="mb-3 flex items-center gap-2">
                                <Sparkles size={18} className="text-teal-700" />
                                <h2 className="text-lg font-semibold text-teal-800">
                                    KI - generert oppsummering (av valgt sak)
                                </h2>
                            </div>

                            <div className="space-y-2 text-sm leading-6 text-zinc-800">
                                <p>
                                    En KI-generert oppsummering av plansaken vises her når bruker
                                    velger sak.
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>Hva tiltaket gjelder</li>
                                    <li>Adresse og eiendom</li>
                                    <li>Tiltakshaver og plankonsulent</li>
                                    <li>Kommunens vurdering</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="mb-3 flex items-center gap-2">
                                <FileText size={22} className="text-zinc-900" />
                                <h2 className="text-3xl font-semibold text-zinc-900">
                                    Dokumenter
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((doc) => (
                                    <div
                                        key={doc}
                                        className="flex items-center justify-between rounded-xl bg-zinc-100 px-4 py-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText size={20} className="text-zinc-500" />
                                            <div>
                                                <p className="text-base text-zinc-800">
                                                    Planbeskrivelse (PDF)
                                                </p>
                                                <p className="text-sm text-zinc-500">2.4 MB</p>
                                            </div>
                                        </div>

                                        <Download size={20} className="text-zinc-400" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}