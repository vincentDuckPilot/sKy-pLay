"use client";

import React, { useState } from "react";
import Image from "next/image";

const developers = [
  {
    name: "Vincentius Bhatara Ekaputra",
    img: "/developers/vincentius.jpg",
    position: "left",
  },
  {
    name: "Joanna Alicia Tombeg",
    img: "/developers/alice.jpg",
    position: "center",
  },
  {
    name: "Fachri Ananda Hauzan",
    img: "/developers/fachri.jpg",
    position: "right",
  },
];

export default function DevelopersBar() {
  const [activeIdx, setActiveIdx] = useState(1); // default: tengah

  return (
    <nav className="w-full flex justify-center py-8 bg-black/40 backdrop-blur rounded-xl mt-8">
      <div className="flex gap-12 items-end">
        {developers.map((dev, idx) => (
          <button
            key={dev.name}
            onClick={() => setActiveIdx(idx)}
            onMouseEnter={() => setActiveIdx(idx)}
            className="flex flex-col items-center group focus:outline-none"
            aria-label={dev.name}
          >
            <div className={`w-24 h-24 rounded-full bg-gray-700 border-4 border-blue-600 overflow-hidden flex items-center justify-center mb-3 transition-all duration-500
              ${activeIdx === idx ? "scale-110 shadow-2xl shadow-blue-500/30 opacity-100" : "scale-90 opacity-60 grayscale"}
            `}>
              <Image
                src={dev.img}
                alt={dev.name}
                width={96}
                height={96}
                className="object-cover w-24 h-24"
                priority={activeIdx === idx}
              />
            </div>
            <span className={`text-base font-semibold text-center transition-all duration-500
              ${activeIdx === idx ? "text-blue-400" : "text-gray-400"}
            `}>
              {dev.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
