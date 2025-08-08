"use client";

import Image from "next/image";
import data from "@/data/wishes.json";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Lightbox } from "@/components/Lightbox";
import { motion } from "framer-motion";

type Wish = {
  src: string;
  message: string;
  from?: string;
  alt?: string;
};

export default function GalleryPage() {
  const wishes = (data as Wish[]) || [];
  const [active, setActive] = useState<number | null>(null);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActive(null);
    if (active !== null) {
      if (e.key === "ArrowRight") setActive((i) => (i === null ? null : Math.min(i + 1, wishes.length - 1)));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? null : Math.max(i - 1, 0)));
    }
  }, [active, wishes.length]);

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Photo Wishes</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {wishes.map((w, i) => (
          <motion.button
            key={i}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
            whileHover={{ y: -2 }}
            onClick={() => setActive(i)}
          >
            <div className="relative h-56 w-full">
              <Image src={w.src} alt={w.alt || w.message} fill className="object-cover" priority={i < 3} />
            </div>
            <div className="p-4 text-left">
              <p className="font-medium">{w.message}</p>
              {w.from && <p className="mt-1 text-sm text-gray-500">— {w.from}</p>}
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={active !== null}
        onClose={() => setActive(null)}
        item={active !== null ? wishes[active] : null}
        hasPrev={active !== null && active > 0}
        hasNext={active !== null && active < wishes.length - 1}
        onPrev={() => setActive((i) => (i === null ? null : Math.max(i - 1, 0)))}
        onNext={() => setActive((i) => (i === null ? null : Math.min(i + 1, wishes.length - 1)))}
      />
    </div>
  );
}
