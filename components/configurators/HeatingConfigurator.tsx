"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Flame,
  Sun,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Phone,
} from "lucide-react";
import {
  BUILDING_TYPES,
  BUILDING_AGES,
  HEATING_NOW,
  GOALS,
} from "@/lib/options";
import { submitLead } from "@/app/actions/lead";
import { site } from "@/lib/site";

type Answers = {
  building_type?: string;
  building_age?: string;
  current_heating?: string;
  goal?: string;
};

const buildingIcons: Record<string, typeof Home> = {
  Einfamilienhaus: Home,
  Mehrfamilienhaus: Building2,
  Gewerbe: Factory,
};
const goalIcons: Record<string, typeof Flame> = {
  Waermepumpe: Flame,
  Komplettset_WP_PV: Sun,
  Unentschlossen: HelpCircle,
};

const variants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export default function HeatingConfigurator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [form, setForm] = useState({
    name: "",
    postalCode: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const totalSteps = 5; // 4 Fragen + Kontakt
  const progress = Math.round(((step + (status === "done" ? 1 : 0)) / totalSteps) * 100);

  function choose(key: keyof Answers, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  }

  async function handleSubmit() {
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      setErrorMsg("Bitte Name und Telefon oder E-Mail angeben.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    const res = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      postalCode: form.postalCode,
      serviceType: answers.goal ?? "Heizung_Allgemein",
      meta: { ...answers },
      source: "heizungs-konfigurator",
    });

    if (res.ok) setStatus("done");
    else {
      setStatus("error");
      setErrorMsg(res.error);
    }
  }

  return (
    <section id="konfigurator" className="bg-[var(--paper)] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="eyebrow text-[var(--blau)]">Heizungs-Check · 60 Sekunden</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
            Welche Lösung passt zu Ihrem Haus?
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Vier Fragen, danach erhalten Sie eine kostenlose Ersteinschätzung —
            ganz ohne sofort zu telefonieren.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_24px_70px_-40px_rgba(20,27,34,0.45)]">
          {/* Fortschritt */}
          <div className="h-1.5 w-full bg-[var(--paper-2)]">
            <div
              className="h-full bg-[var(--blau)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="relative min-h-[340px] p-6 md:p-9">
            <AnimatePresence mode="wait" initial={false}>
              {/* Schritt 1 */}
              {step === 0 && (
                <Step key="s1" title="Was für ein Gebäude besitzen Sie?">
                  {BUILDING_TYPES.map((o) => (
                    <ChoiceCard
                      key={o.value}
                      icon={buildingIcons[o.value]}
                      label={o.label}
                      onClick={() => choose("building_type", o.value)}
                    />
                  ))}
                </Step>
              )}

              {/* Schritt 2 */}
              {step === 1 && (
                <Step key="s2" title="Wie alt ist das Gebäude ungefähr?">
                  {BUILDING_AGES.map((o) => (
                    <ChoiceCard
                      key={o.value}
                      label={o.label}
                      onClick={() => choose("building_age", o.value)}
                    />
                  ))}
                </Step>
              )}

              {/* Schritt 3 */}
              {step === 2 && (
                <Step key="s3" title="Womit heizen Sie aktuell?">
                  {HEATING_NOW.map((o) => (
                    <ChoiceCard
                      key={o.value}
                      label={o.label}
                      onClick={() => choose("current_heating", o.value)}
                    />
                  ))}
                </Step>
              )}

              {/* Schritt 4 */}
              {step === 3 && (
                <Step key="s4" title="Was ist Ihr Ziel?">
                  {GOALS.map((o) => (
                    <ChoiceCard
                      key={o.value}
                      icon={goalIcons[o.value]}
                      label={o.label}
                      onClick={() => choose("goal", o.value)}
                    />
                  ))}
                </Step>
              )}

              {/* Schritt 5: Lead-Capture / Erfolg */}
              {step === 4 && status !== "done" && (
                <motion.div
                  key="s5"
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28 }}
                >
                  <h3 className="font-display text-xl font-bold text-[var(--ink)]">
                    Passende Lösung gefunden.
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Wohin dürfen wir Ihre kostenlose Ersteinschätzung senden?
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                      placeholder="Vor- und Nachname"
                    />
                    <Field
                      label="PLZ"
                      value={form.postalCode}
                      onChange={(v) =>
                        setForm((f) => ({ ...f, postalCode: v }))
                      }
                      placeholder="04279"
                      inputMode="numeric"
                    />
                    <Field
                      label="Telefon"
                      value={form.phone}
                      onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                      placeholder="0341 ..."
                      type="tel"
                    />
                    <Field
                      label="E-Mail"
                      value={form.email}
                      onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                      placeholder="name@mail.de"
                      type="email"
                    />
                  </div>

                  {errorMsg && (
                    <p className="mt-4 text-sm text-[var(--kupfer)]">{errorMsg}</p>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)]"
                    >
                      <ArrowLeft className="h-4 w-4" /> Zurück
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--blau)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--blau-hell)] disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet
                        </>
                      ) : (
                        <>
                          Ersteinschätzung anfordern
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-[var(--muted)]">
                    Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                    genutzt. Keine Weitergabe an Dritte.
                  </p>
                </motion.div>
              )}

              {/* Erfolg */}
              {status === "done" && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--ok)]">
                    <Check className="h-8 w-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-[var(--ink)]">
                    Anfrage ist da. Danke!
                  </h3>
                  <p className="mt-2 max-w-md text-[var(--muted)]">
                    Wir prüfen Ihre Angaben und melden uns zeitnah mit einer
                    konkreten Ersteinschätzung. Bei dringenden Fragen erreichen
                    Sie uns direkt:
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] hover:border-[var(--blau)]"
                  >
                    <Phone className="h-4 w-4 text-[var(--blau)]" />
                    {site.phone}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Zurück bei Fragen-Schritten */}
            {step > 0 && step < 4 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] md:bottom-9 md:left-9"
              >
                <ArrowLeft className="h-4 w-4" /> Zurück
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.28 }}
    >
      <h3 className="font-display text-xl font-bold text-[var(--ink)] md:text-2xl">
        {title}
      </h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">{children}</div>
    </motion.div>
  );
}

function ChoiceCard({
  icon: Icon,
  label,
  onClick,
}: {
  icon?: typeof Home;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-5 py-4 text-left transition-all hover:border-[var(--blau)] hover:bg-[var(--blau-50)]"
    >
      {Icon && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--paper)] group-hover:bg-white">
          <Icon className="h-5 w-5 text-[var(--blau)]" strokeWidth={2} />
        </span>
      )}
      <span className="font-medium text-[var(--ink)]">{label}</span>
      <ArrowRight className="ml-auto h-4 w-4 text-[var(--line)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--blau)]" />
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "numeric" | "text" | "tel" | "email";
}) {
  return (
    <label className="block">
      <span className="data-label">{label}</span>
      <input
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)]/60 focus:border-[var(--blau)]"
      />
    </label>
  );
}
