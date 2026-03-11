import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PlanTitle from "@/components/plan/plan-title";
import AISummaryCard from "@/components/plan/ai-summary-card";
import ImportantDatesCard from "@/components/plan/important-dates-card";

export default function InfoPlansakPage() {
    const plan = {
    title: "Rønningsvegen 26, Rydningen",

    aiSummary: [
        {
            title: "Hva tiltaket gjelder",
            text: "Reguleringsplan for å legge til rette for bygging av ny enebolig i to etasjer på tomt 9/899."
        },
        {
            title: "Adresse og eiendom",
            text: "Rønningsvegen 26, eiendom gnr/bnr 9/899 i Trondheim kommune."
        },
        {
            title: "Tiltakshaver og plankonsulent",
            text: "Tiltakshaver er Heimdal Sag Prosjekter AS ved Reidar Grenstad. Plankonsulent er PIR2 AS ved Maryann Tvenning."
        },
        {
            title: "Avvik fra gjeldende regulering",
            text: "Gjeldende regulering tillater én bolig per tomt. Tidligere byggesøknader fra 2018–2020 ble opphevet etter naboklager fordi tiltaket krevde dispensasjon eller omregulering."
        },
        {
            title: "Kommunens vurdering",
            text: "Det er vurdert flere løsninger for plassering og utforming av bolig. En løsning med saltak og møneretning langs veien anses best tilpasset området."
        }
    ],

    importantDates: [
        { label: "Frist for innspill", date: "05.03.2026" },
        { label: "Vedtak", date: "Ikke oppgitt" },
        { label: "Klagefrist", date: "Ikke oppgitt" },
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