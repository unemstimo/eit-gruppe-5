import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PlanTitle from "@/components/plan/plan-title";
import AISummaryCard from "@/components/plan/ai-summary-card";
import ImportantDatesCard from "@/components/plan/important-dates-card";
import FeedbackButton from "@/components/plan/feedback-button";
import PlanMap from "@/components/plan/plan-map";

export default function InfoPlansakPage() {
    const plan = {
        title: "Rønningsvegen 26, Rydningen",
        address: "Rønningsvegen 26, Trondheim, Norge",
        aiSummary: [
            {
                title: "Hva tiltaket gjelder",
                text: "Reguleringsplan for å legge til rette for bygging av ny enebolig i to etasjer på tomt 9/899.",
            },
            {
                title: "Adresse og eiendom",
                text: "Rønningsvegen 26, eiendom gnr/bnr 9/899 i Trondheim kommune.",
            },
            {
                title: "Tiltakshaver og plankonsulent",
                text: "Tiltakshaver er Heimdal Sag Prosjekter AS ved Reidar Grenstad. Plankonsulent er PIR2 AS ved Maryann Tvenning.",
            },
            {
                title: "Avvik fra gjeldende regulering",
                text: "Gjeldende regulering tillater én bolig per tomt. Tidligere byggesøknader fra 2018–2020 ble opphevet etter naboklager fordi tiltaket krevde dispensasjon eller omregulering.",
            },
            {
                title: "Kommunens vurdering",
                text: "Det er vurdert flere løsninger for plassering og utforming av bolig. En løsning med saltak og møneretning langs veien anses best tilpasset området.",
            },
        ],
        importantDates: [
            { label: "Tidligere byggesøknader behandlet", date: "2018–2020" },
            { label: "Vedtak", date: "Ikke oppgitt" },
            { label: "Klagefrist", date: "Ikke oppgitt" },
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

                        <p className="mt-2 text-xl leading-8 text-zinc-800">
                            Reguleringsplan for ny enebolig i to etasjer på tomt 9/899 i
                            Rønningsvegen 26, med omregulering for å tilpasse tiltaket til
                            området og gjeldende krav.
                        </p>
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