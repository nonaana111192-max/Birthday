"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function StageOne({ next }) {
  useEffect(() => {
    // fokus aksesibilitas jika mau
    const el = document.getElementById("stage1-start");
    if (el) el.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-md mx-4 p-6 rounded-3xl bg-gradient-to-br from-pink-50 via-white to-pink-100 shadow-lg text-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.06, 1], rotate: [0, -2, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-36 h-36 rounded-full flex items-center justify-center bg-white shadow-inner"
        >
          {/* Simple heart SVG */}
          <motion.svg
            viewBox="0 0 24 24"
            className="w-24 h-24 text-pink-500 fill-current"
            initial={{ scale: 0.92, opacity: 0.95 }}
            animate={{ scale: [1, 1.03, 1], opacity: [0.95, 1, 0.95] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            aria-hidden="true"
          >
            <path d="M12 21s-7.5-4.73-9.5-7.19C-0.08 9.9 3.5 5 7.5 6.5 9.2 7.15 10 9 12 10.7 14 9 14.8 7.15 16.5 6.5 20.5 5 24.08 9.9 21.5 13.81 19.5 16.27 12 21 12 21z" />
          </motion.svg>
        </motion.div>

        <h1 className="text-3xl font-semibold mt-5 text-pink-700">Hai, sayang!</h1>
        <p className="text-gray-600 mt-2">
          Aku buat sesuatu kecil yang manis untukmu — yuk kumpulkan potongan hatinya!
        </p>

        <button
          id="stage1-start"
          onClick={next}
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl text-lg shadow-md active:scale-95 hover:brightness-105 focus:outline-none"
        >
          Mulai
          <span aria-hidden className="text-2xl">💕</span>
        </button>
      </div>
    </motion.div>
  );
}
