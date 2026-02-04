"use client";
import { motion } from "framer-motion";

export default function StageThree({ next, back }) {
  const message = "Lihat betapa bahagianya dia 🤍";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-4 p-8 rounded-3xl bg-white shadow-lg text-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-2xl font-semibold mb-4 text-gray-800"
      >
        Kayak si Nailong 🐉
      </motion.h2>

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        src="https://media1.tenor.com/m/aqQM4YJbKJUAAAAC/nailong.gif"
        alt="Nailong bahagia"
        className="mx-auto mb-5 rounded-2xl shadow-sm"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-gray-600 text-base"
      >
        {message}
      </motion.p>

      <div className="mt-8 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={back}
          className="px-5 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
        >
          Kembali
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="px-6 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white shadow-md transition-colors"
        >
          Lanjut 💖
        </motion.button>
      </div>
    </motion.div>
  );
}
