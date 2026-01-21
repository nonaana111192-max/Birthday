"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FRAGMENTS = [
  { id: 1, label: "💗" },
  { id: 2, label: "💖" },
  { id: 3, label: "💘" },
  { id: 4, label: "💝" },
  { id: 5, label: "💓" },
  { id: 6, label: "💕" },
];

export default function StageTwo({ next, back }) {
  const [collectedIds, setCollectedIds] = useState([]);

  function collect(id) {
    if (collectedIds.includes(id)) return;
    setCollectedIds((s) => [...s, id]);
  }

  const remaining = FRAGMENTS.length - collectedIds.length;
  const allCollected = remaining === 0;

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-2 text-pink-600">Puzzle Hati</h2>
      <p className="text-gray-600 mb-4">Klik potongan hati sampai jadi satu — simple & manis.</p>

      <div className="relative w-full h-56 bg-pink-50 rounded-lg overflow-hidden shadow-inner">
        {/* When all collected, show full heart in center */}
        {allCollected && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <svg viewBox="0 0 24 24" className="w-28 h-28 text-rose-400 fill-current">
                <path d="M12 21s-7.5-4.7-9.5-7.2C-0.08 9.9 3.5 5 7.5 6.5 9.2 7.2 10 9 12 10.7 14 9 14.8 7.15 16.5 6.5 20.5 5 24.08 9.9 21.5 13.8 19.5 16.3 12 21 12 21z" />
              </svg>
              <div className="mt-2 text-pink-700 font-medium">Selesai! 💞</div>
            </motion.div>
          </div>
        )}

        {/* Fragments: simple layout around */}
        <div className="absolute inset-0">
          {FRAGMENTS.map((f, i) => {
            const isCollected = collectedIds.includes(f.id);
            const positions = [
              { top: "6%", left: "10%" },
              { top: "6%", right: "10%" },
              { top: "40%", left: "6%" },
              { top: "40%", right: "6%" },
              { bottom: "8%", left: "18%" },
              { bottom: "8%", right: "18%" },
            ];
            const pos = positions[i] || { top: `${10 + i * 8}%`, left: "10%" };

            return (
              <motion.button
                key={f.id}
                onClick={() => collect(f.id)}
                initial={{ scale: 1, opacity: 1 }}
                animate={isCollected ? { scale: 0.6, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                style={pos}
                className={`absolute w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-xl transform-gpu ${
                  isCollected ? "pointer-events-none" : "hover:scale-105 active:scale-95"
                }`}
                aria-label={`Potongan hati ${f.id}`}
              >
                <span className={`${isCollected ? "opacity-0" : ""}`}>{f.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Back
        </button>

        <div className="flex items-center gap-3">
          {!allCollected ? (
            <span className="text-sm text-gray-500">Kumpulkan {remaining} lagi</span>
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
