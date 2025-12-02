"use client";
import { motion } from "framer-motion";

export default function StageOne({ next }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md text-center"
    >
      <h1 className="text-3xl font-semibold mb-3">Halo!</h1>
      <p className="text-gray-600 leading-relaxed">
       Hai Aristy Novianingsih
        (ANBS)
        orang paling terkasih, tersayang...
      </p>

      <button
        onClick={next}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl text-lg shadow-sm active:scale-95"
      >
        Next
      </button>
    </motion.div>
  );
}
