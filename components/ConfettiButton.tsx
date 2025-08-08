"use client";

import { useCallback } from "react";

export function ConfettiButton() {
  const fire = useCallback(async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
  }, []);

  return (
    <button
      onClick={fire}
      className="rounded-2xl bg-white px-4 py-3 ring-1 ring-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-rose-200"
      aria-label="Celebrate with confetti"
    >
      🎉 Confetti
    </button>
  );
}
