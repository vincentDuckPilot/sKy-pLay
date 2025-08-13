import React from "react";
import { FiWifi } from "react-icons/fi";
import { BsBrowserChrome } from "react-icons/bs";
import { PiGameControllerBold } from "react-icons/pi";
import DevelopersBar from "./DevelopersBar";
import { FadeInSection, SlideUpSection, ScaleSection, StaggerSection } from "./ScrollAnimations";

const features = [
  {
    title: "Streaming Real-Time",
    desc: "Latency rendah ≤30ms untuk pengalaman bermain yang responsif.",
    icon: <FiWifi className="w-8 h-8 text-blue-500 mb-2" />,
  },
  {
    title: "Tanpa Instalasi",
    desc: "Jalankan langsung dari browser di perangkat apa pun.",
    icon: <BsBrowserChrome className="w-8 h-8 text-blue-500 mb-2" />,
  },
  {
    title: "Game Library Lengkap",
    desc: "Hubungkan akun Steam/Epic Games Anda dan mainkan game yang sudah dimiliki.",
    icon: <PiGameControllerBold className="w-8 h-8 text-blue-500 mb-2" />,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center gap-6 pt-12 pb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Mainkan Game Battlefield 4 di Laptop Apapun</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          Streaming game favoritmu dengan lancar tanpa perlu upgrade hardware. Cukup koneksi internet stabil.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition hover:shadow-lg hover:shadow-blue-500/30">
            Coba Gratis Sekarang
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition">
            Lihat Paket
          </button>
        </div>
      </section>

      {/* Developers Bar */}
      <FadeInSection delay={200}>
        <DevelopersBar />
      </FadeInSection>

      {/* Features Section */}
      <SlideUpSection delay={300}>
        <section className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="flex-1 bg-[#181818] rounded-xl p-6 shadow flex flex-col items-center text-center gap-2 border border-[#232323] hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Icon */}
              {f.icon}
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </section>
      </SlideUpSection>

      {/* How It Works Section */}
      <ScaleSection delay={400}>
        <section className="max-w-3xl mx-auto w-full px-2">
          <FadeInSection delay={100}>
            <h2 className="text-2xl font-bold mb-8 text-center">Cara Kerja</h2>
          </FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
            {/* Step 1 */}
            <FadeInSection delay={200}>
              <div className="flex flex-col items-center flex-1 min-w-[120px]">
                <span className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-2xl mb-4 shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">1</span>
                <span className="text-lg font-medium text-center">Buat Akun</span>
              </div>
            </FadeInSection>
            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center mx-4">
              <span className="text-3xl text-gray-300">→</span>
            </div>
            {/* Step 2 */}
            <FadeInSection delay={400}>
              <div className="flex flex-col items-center flex-1 min-w-[120px]">
                <span className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-2xl mb-4 shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">2</span>
                <span className="text-lg font-medium text-center">Hubungkan Library Game</span>
              </div>
            </FadeInSection>
            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center mx-4">
              <span className="text-3xl text-gray-300">→</span>
            </div>
            {/* Step 3 */}
            <FadeInSection delay={600}>
              <div className="flex flex-col items-center flex-1 min-w-[120px]">
                <span className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-2xl mb-4 shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">3</span>
                <span className="text-lg font-medium text-center">Pilih Game & Mainkan!</span>
              </div>
            </FadeInSection>
          </div>
          {/* Arrow for mobile */}
          <div className="flex md:hidden flex-col items-center gap-2 mt-2">
            <span className="text-3xl text-gray-300">↓</span>
            <span className="text-3xl text-gray-300">↓</span>
          </div>
        </section>
      </ScaleSection>

      {/* Pricing Section */}
      <SlideUpSection delay={500}>
        <section className="max-w-3xl mx-auto">
          <FadeInSection delay={100}>
            <h2 className="text-2xl font-bold mb-6 text-center">Pilih Paket</h2>
          </FadeInSection>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Gratis */}
            <ScaleSection delay={200}>
              <div className="flex-1 bg-[#181818] rounded-xl p-6 border border-[#232323] flex flex-col items-center text-center hover:border-gray-400 hover:shadow-2xl hover:shadow-gray-500/20 hover:scale-105 transition-all duration-500">
                <h3 className="font-semibold text-lg mb-2">Gratis</h3>
                <div className="text-3xl font-bold mb-2">Rp0</div>
                <ul className="text-gray-400 text-sm mb-4 flex flex-col gap-1">
                  <li>720p, 30fps</li>
                  <li>1 jam/hari</li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition w-full mt-auto hover:shadow-lg hover:shadow-blue-500/30">
                  Coba Gratis
                </button>
              </div>
            </ScaleSection>
            {/* Premium */}
            <ScaleSection delay={400}>
              <div className="flex-1 bg-[#181818] rounded-xl p-6 border border-[#232323] flex flex-col items-center text-center hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-500">
                <h3 className="font-semibold text-lg mb-2">Premium</h3>
                <div className="text-3xl font-bold mb-2">Rp99.000<small className="text-base font-normal">/bulan</small></div>
                <ul className="text-gray-400 text-sm mb-4 flex flex-col gap-1">
                  <li>1080p/4K, 60+ fps</li>
                  <li>Akses Penuh</li>
                </ul>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-lg transition w-full mt-auto hover:shadow-lg hover:shadow-blue-500/30">
                  Upgrade Premium
                </button>
              </div>
            </ScaleSection>
          </div>
        </section>
      </SlideUpSection>
    </div>
  );
}
