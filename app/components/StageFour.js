"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function StageFour({ backToStart }) {
  useEffect(() => {
    const duration = 2500;
    const end = Date.now() + duration;

    const colors = ["#ff69b4", "#ffb6c1", "#ff7aa2", "#ffd1e6"];

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
        scalar: 0.9,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
        scalar: 0.9,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-md mx-4 p-6 rounded-3xl bg-gradient-to-br from-pink-50 via-white to-rose-50 shadow-xl text-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-36 h-36 rounded-full bg-white flex items-center justify-center shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-24 h-24 text-rose-400 fill-current">
            <path d="M12 21s-7.5-4.73-9.5-7.19C-0.08 9.9 3.5 5 7.5 6.5 9.2 7.15 10 9 12 10.7 14 9 14.8 7.15 16.5 6.5 20.5 5 24.08 9.9 21.5 13.81 19.5 16.27 12 21 12 21z" />
          </svg>
        </motion.div>

        <h1 className="text-3xl font-bold mt-4 text-rose-600">Ingat ya sayang</h1>
        <p className="text-gray-700 mt-2 mb-4">Sehat, Sukses, dan Bahagia — selalu di sampingmu 💖</p>

        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-4xl font-extrabold text-rose-500 mb-4"
        >
          💘
        </motion.div>

        <div className="flex justify-center gap-3">
          <button
            onClick={backToStart}
            className="px-4 py-2 rounded-2xl border hover:bg-gray-50 transition"
          >
            Once Again
          </button>
        </div>
      </div>
    </motion.div>
  );
}
