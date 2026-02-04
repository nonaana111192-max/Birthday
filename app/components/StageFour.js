"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function StageFour({ backToStart }) {
  const message = "Love You 🤍";

  useEffect(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-4 p-8 rounded-3xl bg-white shadow-lg text-center"
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Ingat ya, sayang 🤍
      </h1>

      <p className="text-gray-600 leading-relaxed mb-6">
        Harapannya selalu sama.  
        Titi harus tetap sehat, tetap semangat, dan terus bahagia.  
        <br /><br />
        Ada kakak, bapak, dan mamak  
        yang selalu mendukung dan ingin melihatmu bahagia.  
        <br /><br />
        Bahagia Titi tetap jadi yang utama. 💕  
        <br /><br />
        <span className="text-sm text-gray-400">
          #CTYT #Terhebat #Terlambat
        </span>
      </p>

      <div className="text-4xl font-extrabold text-pink-500 mb-8">
        {message}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={backToStart}
        className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
      >
        Once Again 🔁
      </motion.button>
    </motion.div>
  );
}
