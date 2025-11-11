"use client";
import { motion } from "framer-motion";

export default function StageTwo({ next, back }) {
  const data = {
    fullName: "Aristy Novianingsih",
    nicknames: "Opi / Nopi / Risty / dll",
    specialName: "Titi",
    birthCity: "Magelang",
    birthDate: "11 November 1992",
    parents: "Sudarisman & Suripah",
    child: "Adinda Keisya Putri Hidayah",
    social: "Gak boleh difollow 😎",
    lifePath: "7",
    neptu: "11",
    zodiac: "Scorpio",
    shio: "Monyet",
    primbon: "Rabu Wage",
    hobby:
      "Overthinking (hahaha), demen ngulik, pengen bantuin orang terus, kadang suka lupa manjain diri sendiri 💆‍♀️",
  };

  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-3">📖 Biodata Singkat</h2>
      <ul className="text-gray-700 space-y-2 text-left">
        <li><strong>Nama Lengkap:</strong> {data.fullName}</li>
        <li><strong>Nama Panggilan:</strong> {data.nicknames}</li>
        <li><strong>Special Name:</strong> {data.specialName}</li>
        <li><strong>Lahir di Kota:</strong> {data.birthCity}</li>
        <li><strong>Tanggal Lahir:</strong> {data.birthDate}</li>
        <li><strong>Orang Tua Hebat:</strong> {data.parents}</li>
        <li><strong>Anak yang Membanggakan:</strong> {data.child}</li>
        <li><strong>Akun Sosmed:</strong> {data.social}</li>
        <li><strong>Life Path:</strong> {data.lifePath}</li>
        <li><strong>Neptu:</strong> {data.neptu}</li>
        <li><strong>Zodiak:</strong> {data.zodiac}</li>
        <li><strong>Shio:</strong> {data.shio}</li>
        <li><strong>Weton (ꦮꦺꦠꦺꦴꦤ꧀):</strong> {data.primbon}</li>
        <li><strong>Hobi:</strong> {data.hobby}</li>
      </ul>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Kembali
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
