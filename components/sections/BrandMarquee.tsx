"use client";

import { useState } from "react";
import { brands, brandLogo, type Brand } from "@/lib/brands";

function BrandItem({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);
  return (
    
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      title={brand.name}
      className="flex h-12 shrink-0 items-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
    >
      {failed ? (
        <span className="whitespace-nowrap font-display text-sm font-semibold tracking-[0.14em] text-[var(--steel)]">
          {brand.name.toUpperCase()}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brandLogo(brand.slug)}
          alt={`${brand.name} Logo`}
          className="h-8 w-auto object-contain md:h-9"
          onError={() => setFailed(true)}
          draggable={false}
        />
      )}
    </a>
  );
}

function Row() {
  return (
    <div className="marquee" aria-hidden>
      {brands.map((b) => (
        <BrandItem key={b.slug} brand={b} />
      ))}
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="border-y border-[var(--line)] bg-white py-7">
      <div className="mb-4 text-center">
        <span className="eyebrow text-[var(--muted)]">
          Markentechnik, die wir verbauen
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex">
          <Row />
          <Row />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
