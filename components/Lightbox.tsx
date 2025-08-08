"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  item: { src: string; message: string; from?: string; alt?: string } | null;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ open, onClose, item, hasPrev, hasNext, onPrev, onNext }: Props) {
  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-label="Image lightbox"
        >
          <div
            className="relative mx-auto flex h-full max-w-5xl flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto h-[60vh] w-full">
              <Image src={item.src} alt={item.alt || item.message} fill className="object-contain rounded-xl" />
            </div>
            <div className="mx-auto mt-4 max-w-3xl rounded-xl bg-white/90 p-4 text-center text-gray-800">
              <p className="text-lg font-medium">{item.message}</p>
              {item.from && <p className="mt-1 text-sm text-gray-500">— {item.from}</p>}
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
              {hasPrev && (
                <button
                  onClick={onPrev}
                  className="pointer-events-auto rounded-full bg-white/80 px-3 py-2 text-xl shadow"
                  aria-label="Previous"
                >
                  ←
                </button>
              )}
              {hasNext && (
                <button
                  onClick={onNext}
                  className="pointer-events-auto rounded-full bg-white/80 px-3 py-2 text-xl shadow"
                  aria-label="Next"
                >
                  →
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xl shadow"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
