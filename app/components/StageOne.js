"use client";
import { motion } from "framer-motion";

export default function StageOne({ next }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-4 p-8 rounded-3xl bg-white shadow-lg text-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-semibold mb-4 text-gray-800"
      >
        Halo, kamu 🤍
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-gray-600 leading-relaxed text-base"
      >
        Hai <span className="font-medium text-gray-800">Aristy Novianingsih</span> ✨  
        <br />
        <span className="text-sm text-gray-500">(ANBS)</span>
        <br /><br />
        Seseorang yang paling terkasih, tersayang,  
        dan selalu punya tempat istimewa di hati ini 💕
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={next}
        className="mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl text-lg shadow-md transition-colors"
      >
        Lanjutkan 💌
      </motion.button>
    </motion.div>
  );
}
