'use client';

interface BlogSidebarProps {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  selectedAuthor: string;
  setSelectedAuthor: (author: string) => void;
}

const CATEGORIES = ['Transfer', 'Application', 'Website'] as const;
const AUTHORS = ['All', 'Alireza Ezlegini', 'Fateme Ahmadi'] as const;

export default function BlogSidebar({
  selectedCategories,
  toggleCategory,
  selectedAuthor,
  setSelectedAuthor,
}: BlogSidebarProps) {
  return (
    <aside className="w-full bg-[#f4f6fa] rounded-[24px] p-6 border border-[#E0E2E8]">
      {/* Categories Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-zinc-800 mb-4">Categories</h3>
        <div className="flex flex-col gap-3">
          {CATEGORIES.map((cat) => {
            const isChecked = selectedCategories.includes(cat);
            return (
              <label
                key={cat}
                className="flex items-center gap-3 text-sm text-zinc-600 cursor-pointer hover:text-zinc-800 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 rounded border-zinc-300 text-[#5A81FA] focus:ring-[#5A81FA] cursor-pointer"
                />
                <span>{cat}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#E0E2E8] my-6" />

      {/* Author Filter */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-800 mb-4">Author</h3>
        <div className="flex flex-col gap-3">
          {AUTHORS.map((author) => {
            const isSelected = selectedAuthor === author;
            return (
              <label
                key={author}
                className="flex items-center gap-3 text-sm text-zinc-600 cursor-pointer hover:text-zinc-800 transition-colors"
              >
                <input
                  type="radio"
                  name="author"
                  checked={isSelected}
                  onChange={() => setSelectedAuthor(author)}
                  className="w-4 h-4 text-[#5A81FA] border-zinc-300 focus:ring-[#5A81FA] cursor-pointer"
                />
                <span>{author}</span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
