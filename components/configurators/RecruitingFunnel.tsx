"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Flame,
  Zap,
  Sun,
  Hammer,
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
} from "lucide-react";
import { POSITIONS, EXPERIENCE, BEST_TIME } from "@/lib/options";
import { submitApplication } from "@/app/actions/application";

const posIcons: Record<string, typeof Flame> = {
  Anlagenmechaniker_SHK: Flame,
  Elektriker: Zap,
  Handelsvertreter_EE: Sun,
  Quereinsteiger: Hammer,
};

const variants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function RecruitingFunnel() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    position: "",
    experienceLevel: "",
    bestTime: "",
    name: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const total = 4;
  const progress = Math.round(((step + (status === "done" ? 1 : 0)) / total) * 100);

  function pick(key: keyof typeof data, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    setStep((s) => s + 1);
  }

  async function send() {
    if (!data.name.trim() || !data.phone.trim()) {
      setErrorMsg("Bitte Name und Handynummer angeben.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    const res = await submitApplication({
      name: data.name,
      phone: data.phone,
      position: data.position,
      experienceLevel: data.experienceLevel,
      bestTime: data.bestTime,
    });
    if (res.ok) setStatus("done");
    else {
      setStatus("error");
      setErrorMsg(res.error);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.14)] bg-[var(--ink-2)]">
      <div className="h-1.5 w-full bg-[rgba(255,255,255,0.08)]">
        <div
          className="h-full bg-[var(--kupfer)] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative min-h-[300px] p-6 md:p-8">
        <AnimatePresence mode="wait" initial={false}>
          {step === 0 && (
            <FunnelStep key="r1" title="Lust auf ein besseres Team? Wähle deinen Schwerpunkt:">
              {POSITIONS.map((o) => (
                <BigButton
                  key={o.value}
                  icon={posIcons[o.value]}
                  label={o.label}
                  onClick={() => pick("position", o.value)}
                />
              ))}
            </FunnelStep>
          )}

          {step === 1 && (
            <FunnelStep key="r2" title="Wie viel Berufserfahrung bringst du mit?">
              {EXPERIENCE.map((o) => (
                <BigButton key={o.value} label={o.label} onClick={() => pick("experienceLevel", o.value)} />
              ))}
            </FunnelStep>
          )}

          {step === 2 && (
            <FunnelStep key="r3" title="Wann können wir dich am besten erreichen?">
              {BEST_TIME.map((o) => (
                <BigButton key={o.value} label={o.label} onClick={() => pick("bestTime", o.value)} />
              ))}
            </FunnelStep>
          )}

          {step === 3 && status !== "done" && (
            <motion.div key="r4" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.26 }}>
              <h3 className="font-display text-xl font-bold text-white">
                Fast geschafft.
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Wie lautet deine Handynummer für eine kurze WhatsApp oder einen Anruf?
              </p>
              <div className="mt-6 space-y-3">
                <input
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  placeholder="Dein Name"
                  className="w-full rounded-xl border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.04)] px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--kupfer-hell)]"
                />
                <input
                  type="tel"
                  inputMode="tel"
                  value={data.phone}
                  onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                  placeholder="0151 ..."
                  className="w-full rounded-xl border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.04)] px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--kupfer-hell)]"
                />
              </div>

              {errorMsg && <p className="mt-3 text-sm text-[var(--kupfer-hell)]">{errorMsg}</p>}

              <div className="mt-5 flex items-center justify-between">
                <button onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white">
                  <ArrowLeft className="h-4 w-4" /> Zurück
                </button>
                <button
                  onClick={send}
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--kupfer)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--kupfer-hell)] disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Senden</>
                  ) : (
                    <>Bewerbung absenden <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {status === "done" && (
            <motion.div key="rdone" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-8 text-center">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--ok)]"
                >
                  <Check className="h-8 w-8 text-white" strokeWidth={2.6} />
                </motion.div>
                {/* dezenter Erfolgs-Burst statt Konfetti-Library */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[var(--kupfer-hell)]"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos((i / 6) * Math.PI * 2) * 46,
                      y: Math.sin((i / 6) * Math.PI * 2) * 46,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  />
                ))}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">
                Geschafft. Wir melden uns.
              </h3>
              <p className="mt-2 max-w-sm text-white/60">
                Deine Bewerbung ist eingegangen. Wir rufen dich an oder schreiben
                dir auf WhatsApp — kein Papierkram nötig.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FunnelStep({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.26 }}>
      <h3 className="font-display text-xl font-bold leading-snug text-white md:text-2xl">{title}</h3>
      <div className="mt-6 grid gap-3">{children}</div>
    </motion.div>
  );
}

function BigButton({ icon: Icon, label, onClick }: { icon?: typeof Flame; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] px-5 py-5 text-left transition-all hover:border-[var(--kupfer-hell)] hover:bg-[rgba(255,255,255,0.08)]"
    >
      {Icon && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.06)]">
          <Icon className="h-5 w-5 text-[var(--kupfer-hell)]" strokeWidth={2} />
        </span>
      )}
      <span className="text-lg font-semibold text-white">{label}</span>
      <ArrowRight className="ml-auto h-5 w-5 text-white/25 transition-all group-hover:translate-x-0.5 group-hover:text-white/70" />
    </button>
  );
}
