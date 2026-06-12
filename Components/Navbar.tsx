// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../public/Logo.png"
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Why Relay?", href: "#whyrelay" },
  { label: "How to Start", href: "#howto" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F3F4F6] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[60px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image src={Logo} width={25} height={25} alt="logo"/>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[13.5px] text-slate-400 hover:text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-all duration-300 font-regular"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA Button — always visible */}
          <Link
            href="#download"
            className="inline-flex items-center transition-all duration-300 gap-2 bg-[#5A81FA] text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            <span className="hidden sm:inline">Download App</span>
            <span className="sm:hidden">Download</span>
          </Link>

          {/* Hamburger — mobile/tablet only */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 rounded-md hover:bg-gray-100 text-gray-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-[2px] bg-current transition-all duration-250 origin-center ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-current transition-all duration-250 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-current transition-all duration-250 origin-center ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center text-[14px] text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
  
}