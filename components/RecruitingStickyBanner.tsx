"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, Wrench } from "lucide-react";

export default function RecruitingStickyBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Erst nach dem ersten Bildschirm einblenden, am Footer wieder ausblenden.
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 320;
      setVisible(y > 700 && !nearBottom);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="flex items-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[var(--ink)] px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:gap-4 sm:px-5">
          <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-xl bg-[var(--blau)] sm:flex">
            <Wrench className="h-5 w-5 text-white" strokeWidth={2.2} />
          </span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Wir stellen ein: Anlagenmechaniker (m/w/d)
            </p>
            <p className="data-label truncate !text-white/50">
              60-Sekunden-Bewerbung — ohne Anschreiben
            </p>
          </div>

          <a
            href="#karriere"
            className="flex flex-none items-center gap-1.5 rounded-full bg-[var(--blau)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--blau-hell)]"
          >
            Bewerben
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </a>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Hinweis schließen"
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}
