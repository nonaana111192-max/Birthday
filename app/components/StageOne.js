"use client";
import { motion } from "framer-motion";

export default function StageOne({ next }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.38 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white shadow-md text-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-36 h-36 rounded-full flex items-center justify-center bg-white shadow-inner"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="w-24 h-24 text-pink-500 fill-current">
            <path d="M12 21s-7.5-4.7-9.5-7.2C-0.08 9.9 3.5 5 7.5 6.5 9.2 7.2 10 9 12 10.7 14 9 14.8 7.15 16.5 6.5 20.5 5 24.08 9.9 21.5 13.8 19.5 16.3 12 21 12 21z" />
          </svg>
        </motion.div>

        <h1 className="text-3xl font-semibold mt-4 text-pink-700">Hai, sayang!</h1>
        <p className="text-gray-600 mt-2">Aku sudah siapkan sesuatu yang manis — yuk mulai 💕</p>

        <button
          onClick={next}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-2xl text-lg shadow-sm active:scale-95 focus:outline-none"
        >
          Mulai
          <span aria-hidden>💖</span>
        </button>
      </div>
    </motion.div>
  );
}
