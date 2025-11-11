"use client";
import { motion } from "framer-motion";

export default function StageThree({ next, back }) {
  const message = `Do'a dan harapan untuk Titi,  
Semoga di setiap langkah, Allah selalu tuntun Titi ke jalan yang paling baik. Dikasih hati yang kuat buat nerima dan ngadepin apa pun yang datang, entah itu ujian, rezeki, atau apapun hal yang penuh makna.  
Semoga Titi selalu punya keberanian buat tetap lembut di dunia yang sering keras, dan sabar di saat semua terasa berat.  
Semoga hidup Titi jadi perjalanan yang tenang tapi penuh makna — banyak hal baik datang tanpa Titi minta, dan yang nggak baik pun berubah jadi pelajaran berharga.  
Dan yang paling penting, semoga Titi jadi hamba sholehah yang Allah paling sayang, yang tiap langkah dan niatnya selalu jadi ibadah.  
Terus tumbuh, terus jadi cahaya buat orang sekitar, dan jangan lupa: tetap nyeduh kopi (walau jangan terlalu sering ya jelek...), tetap senyum, tetap jadi Titi yang tulus. ☕🌸`;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-4 p-6 rounded-2xl bg-white shadow-md text-center"
    >
      <h2 className="text-2xl font-semibold mb-3">Pesan Khusus</h2>
      <p className="text-gray-700">{message}</p>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">Kembali</button>
        <button onClick={next} className="px-4 py-2 rounded-lg bg-pink-500 text-white">Buka Kejutan</button>
      </div>
    </motion.div>
  );
}
