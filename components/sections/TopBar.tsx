import { ShieldCheck, Star, BadgeEuro, PhoneCall, Wrench } from "lucide-react";
import { site } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "Meisterbetrieb" },
  {
    icon: Star,
    label: `${site.rating.value.toFixed(1)} · ${site.rating.count} Google-Bewertungen`,
  },
  { icon: BadgeEuro, label: "Förderung & Finanzierung inklusive" },
  { icon: PhoneCall, label: "Kostenlose Erstberatung" },
  { icon: Wrench, label: "Komplett aus einer Hand" },
];

export default function TopBar() {
  return (
    <div className="bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-6xl px-5">
        {/* no-scrollbar: horizontal scrollbar auf Mobil, sauber ausgeblendet */}
        <ul className="no-scrollbar flex items-center gap-6 overflow-x-auto py-2.5">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <li
                key={b.label}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs text-white/80"
              >
                <Icon
                  className="h-3.5 w-3.5 text-[var(--blau-hell)]"
                  strokeWidth={2.2}
                />
                {b.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
