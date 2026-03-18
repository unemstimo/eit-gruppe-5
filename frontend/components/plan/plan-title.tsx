type PlanTitleProps = {
    title: string;
};

export default function PlanTitle({ title }: PlanTitleProps) {
    return (
        <section className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">{title}</h1>
        </section>
    );
}