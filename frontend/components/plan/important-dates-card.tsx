import { Calendar } from "lucide-react";

type ImportantDate = {
    label: string;
    date: string;
};

type ImportantDatesCardProps = {
    dates: ImportantDate[];
};

export default function ImportantDatesCard({
    dates,
}: ImportantDatesCardProps) {
    return (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            Viktige datoer
        </h2>

        <div className="space-y-4">
            {dates.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
                <Calendar size={18} className="text-zinc-500 mt-1" />
                <div>
                <p className="font-medium text-zinc-600">{item.label}</p>
                <p className="text-sm text-zinc-400">{item.date}</p>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}