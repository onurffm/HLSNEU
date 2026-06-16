"use client";

import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export default function BeforeAfterShowcase({
  beforeImage = "/images/showcase/before.jpg",
  afterImage = "/images/showcase/after.jpg",
  beforeLabel = "Alte Ölheizung",
  afterLabel = "Moderne Wärmepumpe",
  beforeAlt = "Heizungskeller vor der Modernisierung",
  afterAlt = "Heizungskeller nach der Modernisierung durch HLS",
}: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, x)));
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-2)]"
      onPointerDown={(e) => {
        setDragging(true);
        update(e.clientX);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      }}
      onPointerMove={(e) => dragging && update(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      {/* Nachher (unten) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="absolute right-4 top-4 rounded-md bg-[var(--blau)] px-2.5 py-1 text-xs font-semibold text-white">
        {afterLabel}
      </span>

      {/* Vorher (oben, beschnitten) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: wrapRef.current?.clientWidth ?? "100%" }}
          draggable={false}
        />
        <span className="absolute left-4 top-4 rounded-md bg-[var(--steel)] px-2.5 py-1 text-xs font-semibold text-white">
          {beforeLabel}
        </span>
      </div>

      {/* Trennlinie + Griff */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(20,27,34,0.15)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <MoveHorizontal className="h-5 w-5 text-[var(--blau)]" strokeWidth={2.2} />
        </div>
      </div>
    </div>
  );
}
