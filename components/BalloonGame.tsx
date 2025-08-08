"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Balloon = {
  id: number;
  x: number; // percentage
  delay: number;
  duration: number;
  popped: boolean;
};

const makeBalloons = (count=10): Balloon[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 4,
    popped: false,
  }));

export function BalloonGame() {
  const [balloons, setBalloons] = useState<Balloon[]>(() => makeBalloons(12));
  const [score, setScore] = useState(0);
  const target = 6;

  const pop = useCallback((id: number) => {
    setBalloons((prev) => prev.map(b => b.id === id ? { ...b, popped: true } : b));
    setScore((s) => s + 1);
  }, []);

  const reset = useCallback(() => {
    setBalloons(makeBalloons(12));
    setScore(0);
  }, []);

  return (
    <div className="relative mt-10 w-full max-w-3xl rounded-3xl border border-rose-200 bg-white/70 p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-medium">Pop {target} balloons to unlock memories!</p>
        <div className="text-sm text-gray-600">Score: {score}/{target}</div>
      </div>

      <div className="relative h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-rose-50 to-amber-50">
        <AnimatePresence>
          {balloons.map((b) => !b.popped && (
            <motion.button
              key={b.id}
              initial={{ y: 260, opacity: 0.9 }}
              animate={{ y: -60, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: b.delay, duration: b.duration, repeat: Infinity }}
              onClick={() => pop(b.id)}
              className="absolute rounded-full p-0 text-5xl"
              style={{ left: `${b.x}%` }}
              aria-label="Balloon"
            >
              🎈
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {score >= target ? (
          <Link
            href="/gallery"
            className="rounded-2xl bg-rose-600 px-6 py-3 text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-300"
          >
            Go to Memories →
          </Link>
        ) : (
          <button
            onClick={reset}
            className="rounded-2xl bg-white px-4 py-2 ring-1 ring-gray-300 hover:bg-gray-50"
          >
            Reset balloons
          </button>
        )}
        <Link href="/gallery" className="text-sm text-gray-600 hover:underline">
          Skip game
        </Link>
      </div>
    </div>
  );
}
