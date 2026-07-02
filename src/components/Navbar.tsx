// components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/assets/brand/Logo.png"
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Download } from 'lucide-react';

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Why Relay?", href: "#whyrelay" },
  { label: "How to Start", href: "#howto" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // for the scroll effect
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10 || menuOpen;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, menuOpen]);

  const pathname = usePathname();
  const isBlog = pathname === "/blog";

  return (
    <nav className={isBlog 
      ? `sticky top-0 font-['Inter'] transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`
      : `bg-[#F3F4F6] border-b border-gray-100 sticky top-0 z-50 font-['Inter'] transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`
    }>
      {/* Background layer (only for blog page) */}
      {isBlog && <div className="absolute inset-0 bg-[#F3F4F6] border-b border-gray-100 z-[40]" />}

      {/* Content layer */}
      <div className={isBlog 
        ? "relative z-[55] max-w-[1312px] mx-auto px-[15px] flex items-center justify-between h-[102px]"
        : "max-w-8xl mx-auto px-2 sm:px-20 flex items-center justify-between h-[102px]"
      }>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={Logo}
            alt="logo"
            width={42}
            height={35}
            className="w-[28px] sm:w-[42px] h-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="inline-block text-[12px] text-slate-400 hover:text-slate-700 px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-[#EBF0FE] hover:-translate-y-0.5 hover:scale-100"
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
            className="
    hidden md:inline-flex
    items-center gap-2
    bg-[#5A81FA] text-white
    hover:bg-[#5A81FA]/85
    text-[13px] font-semibold
    px-5 py-2.5 rounded-xl

    shadow-[0_8px_24px_rgba(90,129,250,0.35)]
    hover:shadow-[0_12px_32px_rgba(90,129,250,0.45)]

    transition-all duration-300
    active:scale-95
  "
          >
            <Download size={18} />
            <span className="hidden sm:inline">Download App</span>
            <span className="sm:hidden">Download</span>
          </Link>

          {/* Hamburger — mobile/tablet only */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 rounded-md hover:bg-[#5A81FA]/10 text-[#5A81FA] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-[2px] bg-current transition-all duration-250 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-current transition-all duration-250 ${menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-current transition-all duration-250 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={isBlog 
          ? `relative z-[55] md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${menuOpen ? "max-h-[400px]" : "max-h-0"}`
          : `md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${menuOpen ? "max-h-[400px]" : "max-h-0"}`
        }
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