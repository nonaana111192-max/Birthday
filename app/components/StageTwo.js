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
      <h2 className="text-2xl font-semibold mb-3">kata-kata dari mamas</h2>
      <h1 className="text-gray-700 space-y-2 text-left">
       Andai kita diberikan kuasa untuk memutar waktu agar bisa menjalani apa yang kita inginkan, kita usahakan, 
       kamu pasti akan tau betapa besar dan luas nya rasa yang kuberi padamu.
      Tentu tak akan kubiarkan kesedihan bersembunyi di relung hatimu yang rapuh,
        akan terus aku upayakan rasa tenang, senang, dan nyaman itu kokoh menguasai seluruh isi hatimu,
        jiwa dan raga
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
