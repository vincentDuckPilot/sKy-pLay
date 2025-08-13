"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-black/50 backdrop-blur-sm border-b border-[#232323]">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-bold text-xl tracking-tight text-white select-none">JoViFa Sky-Play</div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-2 py-1 text-sm font-medium transition text-gray-200 hover:text-white
                ${pathname === link.href ? "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-500 after:rounded-full after:content-['']" : ""}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="px-4 py-1.5 rounded-lg text-sm font-medium text-gray-200 hover:text-white border border-transparent hover:border-gray-400 transition">
            Login
          </button>
          <button className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-200 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm border-b border-[#232323] px-4 pb-4">
          <div className="flex flex-col gap-2 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2 rounded text-gray-200 hover:text-white text-base font-medium transition
                  ${pathname === link.href ? "bg-blue-600/20 text-blue-400" : ""}
                `}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-2 mt-2">
              <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-white border border-transparent hover:border-gray-400 transition">
                Login
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
