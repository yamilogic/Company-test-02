import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import phone from "../public/mobile1.png";
import logo from "../public/Logo.png";

const footerLinks = {
  Product: ["Patch", "Updates", "Careers"],
  Company: ["Patch", "Api", "Beta Test"],
  Support: ["Help Center", "Account Information", "Early Access", "Talk to Support"],
};

export default function FooterSection() {
  return (
    <footer className="w-full px-4 sm:px-10 lg:px-26 bg-white">

      {/* Phone + arc rings — desktop dimensions untouched */}
      <div className="relative w-full flex justify-center items-end overflow-hidden bg-white pt-12 h-[260px] sm:h-[360px]">

        {/* Arc rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: 0, height: 0 }}>
            {[100, 160, 220].map((r, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-gray-200"
                style={{ width: r * 2, height: r * 2, top: -r, left: -r }}
              />
            ))}
          </div>
        </div>

        {/* White fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

        {/* Phone image */}
        <div className="relative z-10 w-[150px] sm:w-[200px] h-[220px] sm:h-[280px] overflow-hidden">
          <Image src={phone} alt="Riala App" fill className="object-top object-cover" />
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-gray-100 px-4 sm:px-6 rounded-3xl border border-[#E0E2E8] pt-10 pb-8">

        {/* On mobile: stack vertically. On desktop: your original grid unchanged */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10 lg:grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-4">

          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src={logo} alt="logo" width={42} height={42} />
              <span className="text-4xl font-medium text-gray-900 tracking-tight">Riala</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Simplify your payments with Riala Pay. Paying bills and making transactions has never been easier.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-xl border border-[#E0E2E8] shadow-sm px-4 py-2 w-full sm:max-w-sm gap-2 sm:gap-0">
              <Mail className="w-4 h-4 text-gray-400 shrink-0 mr-2 hidden sm:block" />
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 text-sm text-gray-500 outline-none bg-transparent placeholder:text-gray-400 min-w-0 py-1"
              />
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-medium px-5 py-2 rounded-full whitespace-nowrap">
                Join News Letter
              </button>
            </div>
          </div>

          {/* Link columns — mobile: 2 col grid, tablet: 3 col, desktop: your ml-44 flex row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:flex lg:flex-row lg:ml-44 lg:gap-16">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{heading}</h4>
                <ul className="space-y-3 lg:w-36">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-200 flex justify-center">
          <p className="text-xs text-gray-400">© All Rights Reserved 2025 – By iGraphical School</p>
        </div>
      </div>
    </footer>
  );
}