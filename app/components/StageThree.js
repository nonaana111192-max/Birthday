"use client";
import { motion } from "framer-motion";

export default function StageThree({ next, back }) {
  const message = `Bahkan ribuan benda angkasa yang membentuk astrologi tak kuasa menahan dirinya untuk menyatakan kesempurnaan 
  kita yang seharusnya`;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md text-center"
    >
      <h2 className="text-2xl font-semibold mb-3">Astrologi</h2>

      <img
        src="https://astrotalk.com/astrology-blog/wp-content/uploads/2023/09/p-and-s-1-1.jpg"
        alt="Scorpisces"
        className="mx-auto mb-4 rounded-lg"
      />

      <p className="text-gray-700 whitespace-pre-line">{message}</p>

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
