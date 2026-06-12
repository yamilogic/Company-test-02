"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight, Search, Menu } from "lucide-react";
import mobile1 from "../public/mobile1.png";

const tabs = ["All", "Educational", "Financial", "How-to", "Application"];

const posts = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  image: mobile1,
  title: "How to install Riala App via google?",
  excerpt:
    "Simplify your payments with Riala Pay. Paying bills and making transactions has never been easier.",
  date: "2 months ago",
  isNew: i === 0,
  category: tabs[1 + (i % 4)],
}));

export default function BlogGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const filtered =
    activeTab === "All" ? posts : posts.filter((p) => p.category === activeTab);

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-5">

      {/* ── Mobile only: search bar row ── */}
      <div className="flex sm:hidden items-center gap-2">
        <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            placeholder="Search Blog Posts"
            className="flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400"
          />
        </div>
        <button className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0">
          <Menu className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* 
        ── Tablet (sm–lg): hamburger + tabs in ONE row ──
        ── Mobile: tabs row only (search is separate above) ──
        ── Desktop (lg+): tabs only, no hamburger (sidebar visible) ──
      -->  Key: hamburger shows on sm–lg only -->
      */}
      <div className="flex items-center gap-2">
        {/* Hamburger — visible on sm to lg (tablet range), hidden on mobile and desktop */}
        <button className="hidden sm:flex lg:hidden w-9 h-9 rounded-xl border border-gray-200 bg-white items-center justify-center shrink-0">
          <Menu className="w-4 h-4 text-gray-500" />
        </button>

        {/* Search — visible on sm to lg in the tab row */}
        <div className="hidden sm:flex lg:hidden flex-1 max-w-[200px] items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            placeholder="Search Blog Posts"
            className="flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400 w-full"
          />
        </div>

        {/* Tabs — always visible */}
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide flex-1 sm:flex-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setPage(1); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {filtered.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-blue-400 disabled:opacity-40 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
              page === n
                ? "bg-blue-500 text-white"
                : "border border-gray-200 text-gray-500 hover:border-blue-400"
            }`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-blue-400 disabled:opacity-40 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}