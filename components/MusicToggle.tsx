"use client";

import { useEffect, useRef, useState } from "react";

export function MusicToggle() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const el = new Audio("/happy-birthday.wav");
      el.loop = true;
      el.preload = "auto";
      audioRef.current = el;
    }
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (enabled) {
      a.play().catch(() => setEnabled(false));
    } else {
      a.pause();
      a.currentTime = 0;
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled((v) => !v)}
      className="rounded-2xl bg-white px-4 py-3 ring-1 ring-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-rose-200"
      aria-pressed={enabled}
      aria-label="Toggle birthday music"
      title="Toggle birthday music"
    >
      {enabled ? "🔊 Stop Music" : "🎵 Play Music"}
    </button>
  );
}
