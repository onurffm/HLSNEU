"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check, Loader2 } from "lucide-react";
import { site } from "@/lib/site";
import { submitLead } from "@/app/actions/lead";
import { SERVICE_LABELS } from "@/lib/options";

const serviceOptions = Object.entries(SERVICE_LABELS).map(([value, label]) => ({
  value,
  label,
}));

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    serviceType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit() {
    if (!form.name.trim()) {
      setErrorMsg("Bitte geben Sie Ihren Namen an.");
      return;
    }
    if (!form.phone.trim() && !form.email.trim()) {
      setErrorMsg("Bitte hinterlassen Sie Telefon oder E-Mail.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    const res = await submitLead({
      name: form.name,
      email: form.email || undefined,
      phone: form.phone || undefined,
      postalCode: form.postalCode || undefined,
      serviceType: form.serviceType || undefined,
      message: form.message || undefined,
      source: "kontaktformular",
    });
    if (res.ok) setStatus("done");
    else {
      setStatus("error");
      setErrorMsg(res.error);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[15px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus-visible:border-[var(--blau)]";

  return (
    <section id="kontakt" className="bg-[var(--paper)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Kontaktdaten */}
          <div>
            <span className="eyebrow text-[var(--blau)]">Kontakt</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
              Sprechen wir über Ihr Projekt
            </h2>
            <p className="mt-4 max-w-lg text-[var(--muted)]">
              Ob Wärmepumpe, Bad oder Klimaanlage — schildern Sie kurz Ihr
              Vorhaben. Wir melden uns zeitnah mit einer ersten Einschätzung.
              Am schnellsten geht es telefonisch.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 text-[var(--ink)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--blau-50)]">
                  <Phone
                    className="h-5 w-5 text-[var(--blau)]"
                    strokeWidth={2.2}
                  />
                </span>
                <span>
                  <span className="data-label block !text-[var(--muted)]">
                    Telefon
                  </span>
                  <span className="font-semibold">{site.phone}</span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 text-[var(--ink)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--blau-50)]">
                  <Mail className="h-5 w-5 text-[var(--blau)]" strokeWidth={2.2} />
                </span>
                <span>
                  <span className="data-label block !text-[var(--muted)]">
                    E-Mail
                  </span>
                  <span className="font-semibold">{site.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 text-[var(--ink)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--blau-50)]">
                  <MapPin
                    className="h-5 w-5 text-[var(--blau)]"
                    strokeWidth={2.2}
                  />
                </span>
                <span>
                  <span className="data-label block !text-[var(--muted)]">
                    Adresse
                  </span>
                  <span className="font-semibold">
                    {site.address.street}, {site.address.postalCode}{" "}
                    {site.address.city}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 text-[var(--ink)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--blau-50)]">
                  <Clock
                    className="h-5 w-5 text-[var(--blau)]"
                    strokeWidth={2.2}
                  />
                </span>
                <span>
                  <span className="data-label block !text-[var(--muted)]">
                    Erreichbarkeit
                  </span>
                  <span className="font-semibold">Mo – Fr, 07:00 – 17:00 Uhr</span>
                </span>
              </div>
            </div>
          </div>

          {/* Formular */}
          <div className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
            {status === "done" ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--blau-50)]">
                  <Check
                    className="h-7 w-7 text-[var(--ok)]"
                    strokeWidth={2.4}
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--ink)]">
                  Anfrage ist raus
                </h3>
                <p className="mt-2 max-w-xs text-sm text-[var(--muted)]">
                  Vielen Dank, {form.name.split(" ")[0] || "und bis gleich"}. Wir
                  melden uns zeitnah bei Ihnen. Bei dringenden Fällen erreichen
                  Sie uns direkt telefonisch.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--blau)]"
                >
                  <Phone className="h-4 w-4 text-[var(--blau)]" strokeWidth={2.2} />
                  {site.phone}
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="data-label mb-1.5 block !text-[var(--steel)]">
                      Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Vor- und Nachname"
                      className={inputClass}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="data-label mb-1.5 block !text-[var(--steel)]">
                      PLZ
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={form.postalCode}
                      onChange={(e) => update("postalCode", e.target.value)}
                      placeholder="z. B. 04279"
                      className={inputClass}
                      autoComplete="postal-code"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="data-label mb-1.5 block !text-[var(--steel)]">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="Für den Rückruf"
                      className={inputClass}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="data-label mb-1.5 block !text-[var(--steel)]">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="optional"
                      className={inputClass}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="data-label mb-1.5 block !text-[var(--steel)]">
                    Worum geht es?
                  </label>
                  <select
                    value={form.serviceType}
                    onChange={(e) => update("serviceType", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Bitte wählen…</option>
                    {serviceOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="data-label mb-1.5 block !text-[var(--steel)]">
                    Nachricht
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Beschreiben Sie Ihr Vorhaben in ein, zwei Sätzen."
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm font-medium text-[var(--kupfer)]">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--blau)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--blau-hell)] disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Wird gesendet…
                    </>
                  ) : (
                    "Anfrage senden"
                  )}
                </button>

                <p className="text-center text-xs text-[var(--muted)]">
                  Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                  verwendet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
