import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PlanTitle from "@/components/plan/plan-title";
import AISummaryCard from "@/components/plan/ai-summary-card";
import ImportantDatesCard from "@/components/plan/important-dates-card";
import FeedbackButton from "@/components/plan/feedback-button";
import PlanMap from "@/components/plan/plan-map";
import { getCase } from "@/lib/api/cases";

function parseAiSummary(rawSummary: string) {
    const matches = Array.from(
        rawSummary.matchAll(/(?:^|\n)\s*\d+\.\s+([\s\S]*?)(?=\n\s*\d+\.\s+|$)/g)
    );

    if (!matches.length) {
        return [
            {
                title: "KI-oppsummering",
                text: rawSummary,
            },
        ];
    }

    return matches.map((match) => {
        const block = match[1].trim();
        const lines = block
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

        const firstLine = lines[0] ?? "Punkt";
        const rest = lines.slice(1).join(" ").trim();

        if (firstLine.includes(":")) {
            const [titlePart, ...textParts] = firstLine.split(":");
            const title = titlePart.trim();
            const firstLineText = textParts.join(":").trim();
            return {
                title,
                text: [firstLineText, rest].filter(Boolean).join(" ") || "Ikke oppgitt.",
            };
        }

        return {
            title: firstLine.replace(/[\s:-]+$/, ""),
            text: rest || "Ikke oppgitt.",
        };
    });
}

type InfoPlansakPageProps = {
    searchParams: Promise<{
        caseId?: string;
    }>;
};

export default async function InfoPlansakPage({
    searchParams,
}: InfoPlansakPageProps) {
    const resolvedSearchParams = await searchParams;
    const caseId = resolvedSearchParams.caseId;

    if (!caseId) {
        return (
            <main className="min-h-screen px-6 py-10">
                <div className="mx-auto max-w-6xl">
                    <Link
                        href="/planer"
                        className="mb-8 inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900"
                    >
                        <ArrowLeft size={18} />
                        Tilbake til listen
                    </Link>
                    <p className="text-zinc-700">Ingen sak valgt.</p>
                </div>
            </main>
        );
    }

    const caseData = await getCase(caseId);
    const parsedSummary = parseAiSummary(
        caseData.summary ?? "Ingen oppsummering tilgjengelig."
    );

    const plan = {
        title: caseData.title ?? "Uten tittel",
        address: caseData.title ?? "Trondheim, Norge",
        aiSummary: [
            ...parsedSummary,
        ],
        importantDates: [
            {
                label: "Frist for innspill",
                date: caseData.frist_for_innspill ?? "Ikke oppgitt",
            },
            {
                label: "Sist oppdatert",
                date: caseData.sist_oppdatert ?? "Ikke oppgitt",
            },
        ],
    };

    return (
        <main className="min-h-screen px-6 py-10">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/planer"
                    className="mb-8 inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900"
                >
                    <ArrowLeft size={18} />
                    Tilbake til listen
                </Link>

                <section className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                        <div className="mb-4 inline-flex rounded-full bg-[#EFE1A7] px-4 py-1 text-sm font-medium text-[#9C7A00]">
                            Under behandling
                        </div>
                        <PlanTitle title={plan.title} />
                    </div>

                    <div className="lg:pt-16">
                        <FeedbackButton />
                    </div>
                </section>

                <AISummaryCard summary={plan.aiSummary} />
                <ImportantDatesCard dates={plan.importantDates} />

                <PlanMap address={plan.address} />

                <div className="mt-8">
                    <FeedbackButton />
                </div>
            </div>
        </main>
    );
}