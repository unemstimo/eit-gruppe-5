type PlanMapProps = {
    address: string;
};

export default function PlanMap({ address }: PlanMapProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

    if (!apiKey) {
        return (
            <section className="mb-8 overflow-hidden rounded-3xl border border-zinc-300 bg-white p-6">
                <p className="text-zinc-600">
                    Google Maps API-nøkkel mangler. Legg til
                    <span className="mx-1 font-medium">
                        NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
                    </span>
                    i .env.local
                </p>
            </section>
        );
    }

    const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        address
    )}`;

    return (
        <section className="mb-8 overflow-hidden rounded-3xl border border-zinc-300 bg-white shadow-sm">
            <div className="relative h-[420px] w-full">
                <iframe
                    title={`Kart over ${address}`}
                    src={src}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </section>
    );
}