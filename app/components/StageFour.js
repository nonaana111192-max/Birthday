"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function StageFour({ backToStart }) {
  const age = "Heyy";

  useEffect(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md text-center">
      <h1 className="text-4xl font-bold mb-2">Aman Aja!</h1>
      <p className="text-gray-600 mb-4">
        Gak harus dipujuk kok, tapi kalau mau email
       siap menerima hehehe. Senyum dulu dong!
        Please, Titi bahagia terus!
      </p>
      <div className="text-5xl font-extrabold mb-4">{age}</div>

      <div className="flex justify-center gap-3">
        <button
          onClick={backToStart}
          className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
        >
          Ulang lagi
        </button>
      </div>
    </div>
  );
}
