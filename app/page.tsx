"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MusicToggle } from "@/components/MusicToggle";
import { useEffect, useState } from "react";
import { BalloonGame } from "@/components/BalloonGame";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    // Autoplay confetti on load
    (async () => {
      const confetti = (await import("canvas-confetti")).default;
      confetti({ particleCount: 180, spread: 90, origin: { y: 0.7 } });
      setTimeout(() => confetti({ particleCount: 120, spread: 80, scalar: 0.8 }), 500);
    })();

    const t = setTimeout(() => setIntroDone(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-16">
      <motion.h1
        className="mt-4 text-center text-5xl font-extrabold tracking-tight md:text-7xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        Happy Birthday, <span className="text-rose-600">Friend!</span>
      </motion.h1>

      <motion.p
        className="mt-3 max-w-xl text-center text-lg text-gray-700"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Pop some balloons to unlock your memories 🎈
      </motion.p>

      <div className="mt-6 flex items-center gap-3">
        <MusicToggle />
      </div>

      <BalloonGame />
    </div>
  );
}
