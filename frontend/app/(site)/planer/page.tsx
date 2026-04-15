import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, List, Map } from "lucide-react";
import { getCases } from "@/lib/api/cases";



export default async function Home() {
    const { cases } = await getCases();

    return (
        <main className="min-h-screen pb-10">
            <section className="relative mb-10 overflow-hidden border border-zinc-200">
                <div className="relative h-[340px] w-full">
                    <Image
                        src="/trondheim-havn.jpeg"
                        alt="Trondheim havn"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-white/55" />

                    <div className="absolute inset-0 flex items-center">
                        <div className="px-8 md:px-14">
                            <div className="inline-block rounded-md px-4 py-2">
                                <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
                                    Aktive bygg- og plansaker
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
                <aside className="h-fit rounded-[28px] bg-zinc-100 p-6">
                    <h2 className="mb-4 text-3xl font-semibold text-zinc-800">Filter</h2>

                    <div className="mb-6">
                        <div className="mb-2 flex items-center justify-between border-b border-zinc-300 pb-2">
                            <p className="text-lg text-zinc-700">Områder</p>
                            <span className="text-zinc-500">⌄</span>
                        </div>

                        <div className="space-y-2 text-zinc-700">
                            {["Oslo", "Trøndelag", "Sørlandet", "Rogaland", "Stavanger", "Sola", "Jørpeland"].map((area) => (
                                <label key={area} className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="rounded" />
                                    {area}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 border-b border-zinc-300 pb-2">
                            <p className="text-lg text-zinc-700">Tagger</p>
                        </div>

                        <div className="space-y-2 text-zinc-700">
                            {["Ferdig", "Under vurdering", "Åpen for innspill", "Avlyst"].map((tag) => (
                                <label key={tag} className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="rounded" />
                                    {tag}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                <div>
                    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-1 items-center gap-3">
                            <button className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-300 bg-white text-zinc-700 transition hover:bg-zinc-50">
                                <SlidersHorizontal size={18} />
                            </button>

                            <div className="flex h-12 flex-1 items-center rounded-2xl border border-zinc-300 bg-white px-4">
                                <Search size={18} className="mr-3 text-zinc-400" />
                                <input
                                    className="w-full bg-transparent outline-none placeholder:text-zinc-400"
                                    placeholder="Søk etter bygg eller plansaker..."
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-50">
                                <List size={16} />
                                Listevisning
                            </button>

                            <button className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-50">
                                <Map size={16} />
                                Kartvisning
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {cases.map((caseItem) => (
                            <Link key={caseItem.id}
                                href={`/info_plansak?caseId=${encodeURIComponent(caseItem.id)}`}
                                className="group flex flex-col rounded-[28px] border border-zinc-300 bg-[#F4FAF9] p-5 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                {/* Header — stays at top */}
                                <div className="mb-4 flex items-start justify-between gap-3">
                                    <div>
                                    <h2 className="text-2xl font-bold text-zinc-900">
                                        {caseItem.title ?? "Uten tittel"}
                                    </h2>
                                    <p className="text-sm text-zinc-600 mt-1">
                                        Frist for innspill: {caseItem.frist_for_innspill || "Ikke oppgitt"}
                                    </p>
                                    </div>
                                </div>
                                {/* Body — grows to fill remaining space, pushes footer down */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div /> {/* spacer */}
                                    <div className="flex items-end justify-between">
                                    <p className="text-sm text-zinc-700">
                                        Sist oppdatert: {caseItem.sist_oppdatert ?? "Ikke oppgitt"}
                                    </p>
                                    <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-white">
                                        Se sak
                                    </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}