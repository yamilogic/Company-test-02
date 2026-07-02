'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
  { label: 'Why Riala?', href: '#whyrelay' },
  { label: 'Blog', href: '/blog' },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Dropdown */}
      {open && (
        <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 py-1 w-48 overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-none"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Blue button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-xl bg-[#5A81FA] hover:bg-[#3d5ce0] transition-colors flex items-center justify-center shadow-lg"
        aria-label="Toggle menu"
      >
        <svg width="18" height="5" viewBox="0 0 18 5" fill="white">
          <circle cx="2"  cy="2.5" r="2" />
          <circle cx="9"  cy="2.5" r="2" />
          <circle cx="16" cy="2.5" r="2" />
        </svg>
      </button>

    </div>
  );
}