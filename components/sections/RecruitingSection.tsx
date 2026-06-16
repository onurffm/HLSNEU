import { Clock, Wrench, HeartHandshake, TrendingUp } from "lucide-react";
import RecruitingFunnel from "@/components/configurators/RecruitingFunnel";

const vorteile = [
  {
    icon: HeartHandshake,
    title: "Arbeiten auf Augenhöhe",
    text: "Kein anonymer Großbetrieb. Der Chef ist persönlich für dich erreichbar — Respekt statt Ellenbogen.",
  },
  {
    icon: Wrench,
    title: "Moderne Technik & Ausstattung",
    text: "Wärmepumpen, PV und Smart-Home statt Kabelchaos. Hochwertige Arbeitsmittel, saubere und fachgerechte Projekte.",
  },
  {
    icon: TrendingUp,
    title: "Weiterbildung & Aufstieg",
    text: "Schulungen, Fachseminare und Herstellertrainings. Vom Monteur zum Projektleiter, vom Azubi zum Spezialisten.",
  },
  {
    icon: Clock,
    title: "Geregelte Arbeitszeiten",
    text: "Feste Strukturen, kurze Wege in Leipzig und langfristige Sicherheit statt Montage quer durch die Republik.",
  },
];

export default function RecruitingSection() {
  return (
    <section
      id="karriere"
      className="blueprint relative overflow-hidden py-20 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Linke Spalte: Argumente */}
          <div>
            <span className="eyebrow text-[var(--blau-hell)]">
              Karriere · #HandwerkMitZukunft
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              Bau dir deine Karriere bei HLS
            </h2>
            <p className="mt-3 font-display text-lg font-semibold text-white/90">
              Moderne Technik. Saubere Projekte. Klare Strukturen.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
              Wir wachsen und suchen Fachkräfte, Talente und Quereinsteiger, die
              mehr wollen als nur mitlaufen — als Anlagenmechaniker SHK,
              Elektriker oder im Vertrieb erneuerbarer Energien. Niemand wird bei
              uns verheizt.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {vorteile.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/15 bg-white/5">
                    <v.icon
                      className="h-5 w-5 text-[var(--blau-hell)]"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Funnel */}
          <div className="lg:pl-4">
            <RecruitingFunnel />
          </div>
        </div>
      </div>
    </section>
  );
}
