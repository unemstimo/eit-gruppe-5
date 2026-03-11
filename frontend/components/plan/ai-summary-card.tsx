import { Sparkles } from "lucide-react";

type SummaryItem = {
    title: string;
    text: string;
};

type AISummaryCardProps = {
    summary: SummaryItem[];
};

export default function AISummaryCard({ summary }: AISummaryCardProps) {
    return (
        <section className="mb-8 rounded-3xl border border-teal-400/60 bg-teal-300/10 p-6">
            <div className="flex items-center gap-2 mb-4">
                <Sparkles size={20} className="text-teal-700" />
                <h2 className="text-xl font-semibold text-teal-800">
                    KI-oppsummering
                </h2>
            </div>

            <div className="space-y-4">
                {summary.map((item, index) => (
                    <div key={index}>
                        <p className="font-semibold text-teal-900">
                            {item.title}
                        </p>
                        <p className="text-teal-900 leading-7">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}