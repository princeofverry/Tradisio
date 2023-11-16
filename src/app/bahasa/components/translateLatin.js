"use client";
import React, { useState } from "react";
import { toLatin } from "carakanjs";

function TranslateLatin() {
  const [inputText, setInputText] = useState(""); // State untuk teks input
  const [translatedText, setTranslatedText] = useState(""); // State untuk hasil terjemahan
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    const translated = toLatin(text);
    setTranslatedText(translated);
  };
  return (
    <div>
      <p className="mt-8 font-bold text-white text-3xl text-center">
        Masukkan Aksara
      </p>
      <input
        type="text"
        className="w-[554px] h-[63px] bg-[#4938A0] rounded-[20px] px-4 py-4 mt-4 text-white placeholder-white placeholder:font-medium focus:outline-none focus:ring-2 ring-white"
        placeholder="Masukkan teks..."
        value={inputText}
        onChange={handleInputChange}
      />
      <p className="my-4 font-bold text-l text-white">
        Hasil Terjemahan: {translatedText}
      </p>
    </div>
  );
}

export default TranslateLatin;
