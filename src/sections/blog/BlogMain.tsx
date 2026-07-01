'use client';

import { useState, useMemo, useCallback } from 'react';
import BlogSidebar from './BlogSidebar';
import BlogCard from './BlogCard';
import blogData from '@/data/full_blog.json';

const TABS = ['All', 'Educational', 'Financial', 'How tos', 'Application'] as const;

const SearchIcon = () => (
    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#5A81FA] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

function TabButtons({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
    return (
        <>
            {TABS.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer
                    ${activeTab === tab
                            ? 'bg-[#5A81FA] text-white shadow-sm'
                            : 'bg-transparent text-zinc-400 hover:text-zinc-700'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </>
    );
}

export default function BlogMain() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<string>('All');
    const [activeTab, setActiveTab] = useState<string>('All');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [focusedInput, setFocusedInput] = useState<'desktop' | 'mobile' | null>(null);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
        setCurrentPage(1);
    };

    const resetFilters = () => {
        setSearchQuery('');
        setSelectedCategories([]);
        setSelectedAuthor('All');
        setActiveTab('All');
        setCurrentPage(1);
    };

    const handleTabChange = useCallback((tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1);
    }, []);

    const filteredPosts = useMemo(() => {
        return blogData.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.desc.toLowerCase().includes(searchQuery.toLowerCase());

            let matchesSidebarCategory = true;
            if (selectedCategories.length > 0) {
                matchesSidebarCategory = selectedCategories.some((cat) => {
                    if (cat === 'Transfer') return post.category === 'Transfer' || post.category === 'Financial';
                    if (cat === 'Website') return post.category === 'Website' || post.category === 'Educational' || post.category === 'How tos';
                    return post.category === cat;
                });
            }

            let matchesTab = true;
            if (activeTab !== 'All') {
                if (activeTab === 'Financial') {
                    matchesTab = post.category === 'Financial' || post.category === 'Transfer';
                } else if (activeTab === 'Educational' || activeTab === 'How tos') {
                    matchesTab = post.category === activeTab || post.category === 'Website';
                } else {
                    matchesTab = post.category === activeTab;
                }
            }

            const matchesAuthor = selectedAuthor === 'All' || post.author === selectedAuthor;
            return matchesSearch && matchesSidebarCategory && matchesTab && matchesAuthor;
        });
    }, [searchQuery, selectedCategories, activeTab, selectedAuthor]);

    const postsPerPage = 6;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * postsPerPage;
        return filteredPosts.slice(start, start + postsPerPage);
    }, [filteredPosts, currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }
    };

    const searchInput = (variant: 'desktop' | 'mobile') => (
        <div className="relative flex-1 group">
            <SearchIcon />
            <input
                type="text"
                placeholder={focusedInput === variant ? "Typing..." : "Search Blog Posts"}
                value={searchQuery}
                onFocus={() => setFocusedInput(variant)}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className={`w-full h-12 rounded-xl pl-11 pr-4 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:bg-[#5A81FA]/5 focus:border-[#5A81FA] focus:ring-1 focus:ring-[#5A81FA] caret-[#5A81FA] transition-all ${
                    variant === 'desktop'
                        ? 'bg-white border border-[#E0E2E8]'
                        : 'bg-[#f4f6fa] border border-transparent'
                }`}
            />
        </div>
    );

    const sidebarProps = { selectedCategories, toggleCategory, selectedAuthor, setSelectedAuthor };

    return (
        <div className="min-h-screen bg-[#F3F4F6] relative overflow-hidden">
            {/* ── Background concentric arcs ── */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none z-0 overflow-hidden w-full" style={{ height: '500px' }}>
              <div className="absolute rounded-full border border-[#E0E2E8]" style={{ width: '120vw', height: '120vw', left: '50%', top: '-36.51vw', transform: 'translate(-50%, -50%)' }} />
              <div className="absolute rounded-full border border-[#E0E2E8]" style={{ width: '108vw', height: '108vw', left: '50%', top: '-34.13vw', transform: 'translate(-50%, -50%)' }} />
              <div className="absolute rounded-full border border-[#E0E2E8]" style={{ width: '96vw', height: '96vw', left: '50%', top: '-32.08vw', transform: 'translate(-50%, -50%)' }} />
            </div>

            <div className="max-w-[1312px] mx-auto px-4 sm:px-8 lg:px-6 pt-6 md:pt-10 pb-12 md:pb-20 relative z-10">
                {/* Header — pushed up, more space below */}
                <header className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                        Discover Educational <span className="text-[#5A81FA]">Articles</span> here
                    </h1>
                    <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                        Simplify your payments with Riala Pay, Paying bills nad making transactions has never been easier.
                    </p>
                </header>

                {/* ── Tablet / Mobile Top Row (lg:hidden) ── */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 lg:hidden">
                    <div className="flex items-center gap-2 w-full md:max-w-md">
                        {searchInput('mobile')}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="h-12 px-4 bg-[#f4f6fa] rounded-xl border border-transparent hover:border-[#E0E2E8] flex items-center justify-center text-zinc-600 transition-all cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0">
                        <TabButtons activeTab={activeTab} onTabChange={handleTabChange} />
                    </div>
                </div>

                {/* Collapsible Mobile Sidebar */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'max-h-[400px] mb-8 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <BlogSidebar {...sidebarProps} />
                </div>

                {/* Grid split layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* ── Left Column: Desktop (lg:block) ── */}
                    <div className="hidden lg:flex lg:flex-col lg:col-span-1">
                        <div className="mb-6">{searchInput('desktop')}</div>
                        <BlogSidebar {...sidebarProps} />
                    </div>

                    {/* ── Right Column ── */}
                    <div className="lg:col-span-3">
                        <div className="hidden lg:flex items-center justify-end gap-6 mb-6">
                            <TabButtons activeTab={activeTab} onTabChange={handleTabChange} />
                        </div>

                        {paginatedPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-start lg:justify-items-start">
                                {paginatedPosts.map((post, idx) => (
                                    <BlogCard key={post.id} post={post} isLatest={currentPage === 1 && idx === 0} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-[#f4f6fa]/40 rounded-[24px] border border-dashed border-[#E0E2E8]">
                                <p className="text-sm text-zinc-500 mb-4">No articles found matching your filters.</p>
                                <button onClick={resetFilters} className="px-5 py-2.5 bg-[#5A81FA] text-white text-xs font-semibold rounded-xl hover:bg-[#5A81FA]/90 transition-all cursor-pointer">
                                    Reset Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <nav className="flex items-center justify-center gap-2 mt-12 md:mt-16">
                                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-800 disabled:opacity-40 disabled:hover:text-zinc-400 cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${currentPage === page ? 'bg-[#5A81FA] text-white' : 'text-zinc-400 hover:text-zinc-700'}`}>
                                        {page}
                                    </button>
                                ))}
                                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-800 disabled:opacity-40 disabled:hover:text-zinc-400 cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
