"use client";
import { motion } from "framer-motion";

const LINES = [
  "Untukmu, yang selalu membuat hari lebih hangat.",
  "Semoga setiap hari penuh tawa, kesehatan, dan kebahagiaan.",
  "Terima kasih sudah jadi kamu — selalu istimewa.",
];

export default function StageThree({ next, back }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-white shadow-md text-center"
    >
      <h2 className="text-2xl font-semibold mb-3 text-rose-600">Surat Kecil</h2>

      <div className="mt-3 text-left w-full space-y-3">
        {LINES.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.35 }}
            className="text-gray-700"
          >
            {l}
          </motion.p>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Back
        </button>
        <button onClick={next} className="px-4 py-2 rounded-lg bg-pink-500 text-white">
          Next
        </button>
      </div>
    </motion.div>
  );
}
