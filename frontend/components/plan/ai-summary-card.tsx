import { Sparkles } from "lucide-react";

type AISummaryCardProps = {
    summary: string;
};

export default function AISummaryCard({ summary }: AISummaryCardProps) {
    return (
        <section className="mb-8 rounded-3xl border border-blue-200 bg-blue-50 p-6">
        <div className="flex items-center gap-2 mb-3">
            <Sparkles size={20} className="text-blue-700" />
            <h2 className="text-xl font-semibold text-blue-900">KI-oppsummering</h2>
        </div>

        <p className="text-blue-950 leading-7 mb-3">{summary}</p>

        <p className="text-sm text-blue-700">
            Dette er placeholder-innhold. Senere skal oppsummeringen hentes fra backend.
        </p>
        </section>
    );
}