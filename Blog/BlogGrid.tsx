"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

import mobile1 from "../public/mobile1.png"

const tabs = ["All", "Educational", "Financial", "How-to", "Application"];

// Placeholder posts — apne real data se replace karna
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

  const filtered = activeTab === "All" ? posts : posts.filter((p) => p.category === activeTab);

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-6">
      {/* Tabs */}
      <div className="flex justify-end flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setPage(1); }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-500 border border-gray-200 hover:border-blue-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
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