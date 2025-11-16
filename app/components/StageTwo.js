"use client";
import { motion } from "framer-motion";

export default function StageTwo({ next, back }) {
  const data = {
    
  };

  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-3">Sekarang harus gimana?</h2>
      <h1 className="text-gray-700 space-y-2 text-left">
       Apapun yang sedang kamu lakukan, kamu usahakan, selalu minta petunjuk sama Allah ya
      </h1>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Back
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded-lg bg-pink-500 text-white"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
