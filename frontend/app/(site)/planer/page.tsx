import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen mb-4">
        <div className="h-96 bg-teal-100/20 border-teal-800 rounded-xl flex items-center justify-center mb-8">
            <h1 className="mb-4 text-2xl text-neutral-500 font-bold">Aktive plansaker</h1>
        </div>

        <div>
            <div className="w-full flex-row flex items-center justify-start mb-4">
            <button className="px-4 py-2 border border-zinc-400 rounded-2xl hover:bg-zinc-200">
                <SlidersHorizontal />
            </button>

            <input
                className="ml-3 w-1/3 px-4 py-2 border border-zinc-400 rounded-lg"
                placeholder="Søk etter bygg eller plansaker..."
            />

            <button className="ml-4 px-4 py-2 border border-zinc-400 rounded-2xl hover:bg-zinc-200">
                Listevisning
            </button>

            <button className="ml-4 px-4 py-2 border border-zinc-400 rounded-2xl hover:bg-zinc-200">
                Kartvisning
            </button>
            </div>

            <div className="flex flex-row flex-wrap justify-evenly">
            {Array.from({ length: 10 }, (_, i) => (
                <Link
                key={i}
                href="/info_plansak"
                className="bg-zinc-100 m-4 p-4 rounded-4xl shadow-md w-[30%] min-h-64 hover:bg-zinc-200 transition-colors block"
                >
                <h2 className="text-xl font-bold mb-2">Plansak {i + 1}</h2>
                </Link>
            ))}
            </div>
        </div>
        </main>
    );
}