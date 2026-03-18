import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="relative h-[420px] w-full overflow-hidden">
        <Image
          src="/forside-bilde.jpeg"
          alt="Kart over Trondheim"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold text-zinc-800 leading-tight">
            Forstå byggesaker – påvirk nærmiljøet ditt
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-700">
            Vi gjør plan- og byggesaker forståelig, slik at du enkelt kan følge
            planprosesser, forstå dokumenter og gi innspill før beslutninger tas.
          </p>

          <Link
            href="/planer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E9C65B] px-6 py-3 text-zinc-800 font-medium shadow-sm hover:bg-[#e1bc4a] transition"
          >
            Se byggesaker
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>


      {/* VISSTE DU AT */}
      <section className="mx-auto mt-16 max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="rounded-3xl bg-[#6FAFA3] p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Visste du at...</h2>

          <p className="text-lg leading-relaxed">
            Plan- og bygningsloven krever at kommuner legger til rette for
            medvirkning fra norske innbyggere?
          </p>
        </div>

        <div className="text-zinc-700 text-lg leading-relaxed">
          <p>
            <strong>Derfor</strong> har vi samlet informasjonen du trenger å vite
            på en forståelig måte, slik at du enkelt kan bidra til å forme byen
            du vil ha.
          </p>
        </div>

      </section>


      {/* HVORFOR MEDVIRKNING */}
      <section className="mt-24 bg-[#F5F5F5] py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <h2 className="text-3xl font-semibold text-zinc-700">
            Hvorfor er medvirkning viktig i planlegging?
          </h2>

          <p className="mt-3 text-zinc-600 italic max-w-xl mx-auto">
            Regjeringen understreker at medvirkning i plan- og byggesaker er
            viktig for lokaldemokratiet og for å sikre gode og forankrede
            beslutninger.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {/* Kort 1 */}
            <div className="rounded-2xl bg-[#E8F0EF] p-8 text-center shadow-sm">
              <div className="text-4xl mb-3">🗣️</div>
              <h3 className="font-semibold text-lg mb-2">
                Mulighet for innflytelse
              </h3>
              <p className="text-sm text-zinc-600">
                Medvirkning sikrer at innbyggere og berørte parter får mulighet
                til å bli hørt og gi innspill som kan påvirke utviklingen av
                planer.
              </p>
            </div>

            {/* Kort 2 */}
            <div className="rounded-2xl bg-[#E8F0EF] p-8 text-center shadow-sm">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold text-lg mb-2">
                Bedre dialog
              </h3>
              <p className="text-sm text-zinc-600">
                Medvirkning styrker dialogen mellom planleggere, politikere og
                innbyggere og gir bedre forståelse av beslutninger.
              </p>
            </div>

            {/* Kort 3 */}
            <div className="rounded-2xl bg-[#E8F0EF] p-8 text-center shadow-sm">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-semibold text-lg mb-2">
                Bedre løsninger
              </h3>
              <p className="text-sm text-zinc-600">
                Innspill fra lokalsamfunnet kan bidra til bedre planlegging og
                mer bærekraftige løsninger.
              </p>
            </div>

          </div>

          <div className="mt-8 text-right text-sm text-blue-600">
            <a href="https://www.regjeringen.no/" target="_blank">
              Regjeringen.no
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}