"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/*
 Simple interaction:
 - Tampilkan satu hati besar yang bisa diklik.
 - Saat diklik: muncul burst hati kecil (CSS + DOM) dan tombol Next aktif.
 - Tidak ada TypeScript / external libs.
*/

export default function StageTwo({ next, back }) {
  const [sent, setSent] = useState(false);
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    if (!sent) return;
    // buat burst hearts sederhana
    const created = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      delay: Math.random() * 0.4,
      size: 12 + Math.random() * 18,
      dur: 1400 + Math.random() * 800,
    }));
    setBursts(created);
    // bersihkan burst setelah animasi
    const t = setTimeout(() => setBursts([]), 2200);
    return () => clearTimeout(t);
  }, [sent]);

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md relative overflow-hidden"
    >
      <style>{`
        @keyframes popUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-120px) scale(1.2); opacity: 0; }
        }
      `}</style>

      <h2 className="text-2xl font-semibold mb-2 text-pink-600">Sentuhan Cinta</h2>
      <p className="text-gray-600 mb-4">Klik hati ini sekali untuk mengirimkan cinta — lalu lanjut ya.</p>

      <div className="flex items-center justify-center py-4">
        <motion.button
          onClick={() => setSent(true)}
          whileTap={{ scale: 0.9 }}
          className={`w-36 h-36 rounded-full bg-pink-100 flex items-center justify-center shadow-md border-0 ${
            sent ? "opacity-80" : ""
          }`}
          aria-label="Kirim cinta"
        >
          <motion.span
            animate={sent ? { scale: [1, 1.12, 1] } : { scale: [1, 1.04, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl"
          >
            💗
          </motion.span>
        </motion.button>
      </div>

      {/* burst hearts */}
      {bursts.map((b) => (
        <span
          key={b.id}
          style={{
            position: "absolute",
            left: `${b.left}%`,
            bottom: 80,
            fontSize: b.size,
            animation: `popUp ${b.dur}ms ${b.delay}s forwards cubic-bezier(.2,.8,.2,1)`,
            pointerEvents: "none",
          }}
          aria-hidden
        >
          {["💖", "💗", "💕"][Math.floor(Math.random() * 3)]}
        </span>
      ))}

      <div className="mt-6 flex justify-between items-center">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Back
        </button>

        <div className="flex items-center gap-3">
          {!sent ? (
            <span className="text-sm text-gray-500">Klik hati dulu ya</span>
          ) : (
            <span className="text-sm text-pink-600 font-medium">Cinta terkirim ✨</span>
          )}
          <button
            onClick={next}
            disabled={!sent}
            className={`px-4 py-2 rounded-lg text-white ${
              sent ? "bg-pink-500 hover:brightness-105" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}
