"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Mini-game: klik potongan hati untuk mengumpulkannya.
 * - ada beberapa potongan di sekitar, klik satu-satu
 * - masing-masing animasi terbang ke tengah
 * - setelah semua terkumpul, pesan "Selesai" muncul dan Next diaktifkan
 *
 * Props:
 * - next(): panggil untuk lanjut
 * - back(): kembali
 */

const FRAGMENTS = [
  { id: 1, emoji: "💗" },
  { id: 2, emoji: "💖" },
  { id: 3, emoji: "💘" },
  { id: 4, emoji: "💝" },
  { id: 5, emoji: "💓" },
  { id: 6, emoji: "💕" },
];

export default function StageTwo({ next, back }) {
  const [collected, setCollected] = useState<number[]>([]);

  const collect = (id: number) => {
    if (collected.includes(id)) return;
    setCollected((s) => [...s, id]);
  };

  const allCollected = collected.length === FRAGMENTS.length;

  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-3 text-pink-600">Puzzle Hati</h2>
      <p className="text-gray-600 mb-4">
        Klik semua potongan hati, biar jadi satu—kamu tunggu kejutan kecilnya ya 💌
      </p>

      <div className="relative w-full h-64 bg-pink-50 rounded-xl overflow-hidden shadow-inner">
        {/* Center heart container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence>
            {allCollected ? (
              <motion.div
                key="full-heart"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <svg viewBox="0 0 24 24" className="w-28 h-28 text-rose-400 fill-current">
                  <path d="M12 21s-7.5-4.73-9.5-7.19C-0.08 9.9 3.5 5 7.5 6.5 9.2 7.15 10 9 12 10.7 14 9 14.8 7.15 16.5 6.5 20.5 5 24.08 9.9 21.5 13.81 19.5 16.27 12 21 12 21z" />
                </svg>
                <span className="mt-2 text-pink-700 font-medium">Kamu Sempurna 💞</span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Fragments - positioned around */}
        <div className="absolute inset-0">
          {FRAGMENTS.map((f, idx) => {
            const isCollected = collected.includes(f.id);
            // simple positions around the container
            const positions = [
              { top: "8%", left: "12%" },
              { top: "6%", right: "12%" },
              { top: "50%", left: "6%" },
              { bottom: "12%", right: "10%" },
              { bottom: "8%", left: "20%" },
              { top: "36%", right: "6%" },
            ];
            const pos = positions[idx] || { top: `${10 + idx * 8}%`, left: `${10 + idx * 6}%` };

            return (
              <motion.button
                key={f.id}
                onClick={() => collect(f.id)}
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  isCollected
                    ? { x: 0, y: 0, scale: 0.6, opacity: 0.0, transformOrigin: "center" }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.6 }}
                style={pos as any}
                className={`absolute p-0 w-14 h-14 rounded-full flex items-center justify-center text-xl bg-white shadow-md border-0 transform-gpu ${
                  isCollected ? "pointer-events-none" : "hover:scale-105 active:scale-95"
                }`}
                aria-label={`Potongan hati ${f.id}`}
              >
                {/* show emoji until collected */}
                {!isCollected ? (
                  <span>{f.emoji}</span>
                ) : (
                  // invisible but keep layout; animation handled by framer-motion
                  <span className="opacity-0">{f.emoji}</span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Back
        </button>

        <div className="flex items-center gap-3">
          {!allCollected ? (
            <span className="text-sm text-gray-500">Kumpulkan {FRAGMENTS.length - collected.length} lagi</span>
          ) : (
            <span className="text-sm text-pink-600 font-medium">Siap lanjut ✨</span>
          )}

          <button
            onClick={next}
            disabled={!allCollected}
            className={`px-4 py-2 rounded-lg text-white ${
              allCollected ? "bg-pink-500 hover:brightness-105" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}
