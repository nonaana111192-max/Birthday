"use client";
import { motion } from "framer-motion";

export default function StageThree({ next, back }) {
  const lines = [
    "Untukmu, yang selalu membuat hari lebih hangat.",
    "Semoga setiap hari penuh tawa, kesehatan, dan kebahagiaan.",
    "Terima kasih sudah jadi kamu."
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-md mx-4 p-6 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-pink-50 shadow-lg text-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-28 h-28 rounded-full flex items-center justify-center bg-white shadow-md"
          animate={{ scale: [1, 1.04, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-16 h-16 text-pink-500 fill-current">
            <path d="M12 21s-7.5-4.73-9.5-7.19C-0.08 9.9 3.5 5 7.5 6.5 9.2 7.15 10 9 12 10.7 14 9 14.8 7.15 16.5 6.5 20.5 5 24.08 9.9 21.5 13.81 19.5 16.27 12 21 12 21z" />
          </svg>
        </motion.div>

        <h2 className="text-2xl font-semibold mt-4 text-rose-600">Surat Kecil</h2>

        <div className="mt-4 text-left w-full space-y-3">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.45 }}
              className="text-gray-700 leading-relaxed"
            >
              {l}
            </motion.p>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={back}
            className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
          >
            Back
          </button>

          <button
            onClick={next}
            className="px-5 py-2 rounded-2xl bg-pink-500 text-white shadow-md hover:brightness-105 active:scale-95"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </motion.div>
  );
}
