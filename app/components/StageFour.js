"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Final screen tanpa external confetti.
 * Menggunakan animasi 'floating hearts' sederhana via inline keyframes.
 */

export default function StageFour({ backToStart }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // spawn some hearts for short celebration
    const created = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 80 + 10,
      delay: Math.random() * 1.2,
      size: 18 + Math.random() * 18,
    }));
    setHearts(created);
    // cleanup not needed; hearts are visual only
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white shadow-md text-center relative overflow-hidden"
    >
      {/* inline keyframes for floating hearts */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-220px) scale(1.2); opacity: 0; }
        }
      `}</style>

      {hearts.map((h) => (
        <span
          key={h.id}
          style={{
            position: "absolute",
            left: `${h.left}%`,
            bottom: 20,
            fontSize: h.size,
            animation: `floatUp 2.2s ${h.delay}s forwards cubic-bezier(.2,.8,.2,1)`,
            pointerEvents: "none",
          }}
          aria-hidden
        >
          💖
        </span>
      ))}

      <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-20 h-20 text-rose-400 fill-current">
            <path d="M12 21s-7.5-4.7-9.5-7.2C-0.08 9.9 3.5 5 7.5 6.5 9.2 7.2 10 9 12 10.7 14 9 14.8 7.15 16.5 6.5 20.5 5 24.08 9.9 21.5 13.8 19.5 16.3 12 21 12 21z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mt-4 text-rose-600">Ingat ya sayang</h1>
        <p className="text-gray-700 mt-2 mb-4">Sehat, sukses, dan bahagia — selalu di sampingmu 💖</p>

        <button
          onClick={backToStart}
          className="px-4 py-2 rounded-2xl border hover:bg-gray-50 transition"
        >
          Once Again
        </button>
      </div>
    </motion.div>
  );
}
