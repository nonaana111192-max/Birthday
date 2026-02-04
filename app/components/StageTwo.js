"use client";
import { motion } from "framer-motion";

export default function StageTwo({ next, back }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-4 p-8 rounded-3xl bg-white shadow-lg"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-2xl font-semibold mb-4 text-gray-800 text-center"
      >
        Sepatah kata 🤍
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 leading-relaxed text-base text-left space-y-4"
      >
        Andai kita diberi kuasa untuk memutar waktu,  
        untuk benar-benar menjalani apa yang kita inginkan dan usahakan,  
        kamu akan tahu betapa luas dan dalam rasa yang kuberikan padamu.
        <br /><br />
        Tak akan kubiarkan kesedihan bersembunyi di relung hatimu yang rapuh.  
        Akan terus kuupayakan agar rasa tenang, senang, dan nyaman  
        tumbuh kokoh, mengisi seluruh hatimu —  
        jiwa dan raga. 🤍
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
          Lanjut 💌
        </motion.button>
      </div>
    </motion.div>
  );
}
