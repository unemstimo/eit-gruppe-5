import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PlanTitle from "@/components/plan/plan-title";
import AISummaryCard from "@/components/plan/ai-summary-card";
import ImportantDatesCard from "@/components/plan/important-dates-card";

export default function InfoPlansakPage() {
    const plan = {
        title: "Plansak 1",
        aiSummary:
        "Dette er en foreløpig KI-oppsummering av plansaken. Her skal det senere komme tekst fra backend. Foreløpig bruker vi placeholder-innhold for å bygge opp layout og struktur.",
        importantDates: [
        { label: "Oppstartsmøte", date: "12. april 2026" },
        { label: "Høringsfrist", date: "25. april 2026" },
        { label: "Politisk behandling", date: "10. mai 2026" },
        ],
    };

    return (
        <main className="min-h-screen px-6 py-10">
        <div className="mx-auto max-w-5xl">
            <Link
            href="/planer"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-8 transition-colors"
            >
            <ArrowLeft size={18} />
            Tilbake til plansaker
            </Link>

            <PlanTitle title={plan.title} />
            <AISummaryCard summary={plan.aiSummary} />
            <ImportantDatesCard dates={plan.importantDates} />
        </div>
        </main>
    );
}