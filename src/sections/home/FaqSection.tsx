'use client';

import { useState } from 'react';

/* ── Design tokens ── */
const TOKENS = {
    desktop: { width: 868, height: 638 },
    maxWidth: 1312,
};

/* ── Category tabs ── */
const CATEGORIES = ['Application', 'About Us', 'Company'] as const;

/* ── FAQ data (per category) ── */
const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
    Application: [
        {
            question: 'How do i update my billing information?',
            answer: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est.\nat, placerat. cursus faucibus elementum vehicula.\n\nest. ex risus urna. vehicula, efficitur.',
        },
        {
            question: 'How can i scan barcodes instead of qr-codes?',
            answer: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est.\nat, placerat. cursus faucibus elementum vehicula.',
        },
        {
            question: 'How to add new cards to Riala application?',
            answer: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est.\nat, placerat. cursus faucibus elementum vehicula.',
        },
        {
            question: 'How do i change my email address?',
            answer: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est.\nat, placerat. cursus faucibus elementum vehicula.',
        },
        {
            question: 'How can i scan barcodes instead of qr-codes?',
            answer: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est.\nat, placerat. cursus faucibus elementum vehicula.',
        },
    ],
    'About Us': [
        {
            question: 'What is Riala Pay?',
            answer: 'Riala Pay is a modern financial platform that simplifies payments, bill management, and money transfers for individuals and businesses.',
        },
        {
            question: 'Where is Riala Pay available?',
            answer: 'Riala Pay is currently available in multiple countries. We are expanding to new regions regularly.',
        },
        {
            question: 'How secure is Riala Pay?',
            answer: 'We use bank-level encryption and multi-factor authentication to protect all transactions and user data.',
        },
    ],
    Company: [
        {
            question: 'How can I partner with Riala?',
            answer: 'You can reach out to our partnerships team through the contact form or email us at partners@rialapay.com.',
        },
        {
            question: 'Does Riala offer business accounts?',
            answer: 'Yes, we offer dedicated business accounts with advanced features like invoicing, team management, and analytics.',
        },
        {
            question: 'Where are your offices located?',
            answer: 'Our headquarters is in New York, with additional offices in London and Dubai.',
        },
    ],
};

/* ── Chevron icon ── */
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

export default function FaqSection() {
    const [activeCategory, setActiveCategory] = useState<string>('Application');
    const [openIndex, setOpenIndex] = useState<number>(0);

    const faqs = FAQ_DATA[activeCategory] || [];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setOpenIndex(0);
    };

    return (
        <section
            id="faq"
            className="w-full bg-zinc-50 px-4 sm:px-6 md:px-10 lg:px-24 py-12 sm:py-16 md:py-24"
        >
            <div
                className="mx-auto max-w-[868px]"
            >
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 text-center leading-tight">
                    Frequently Asked Questions
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-zinc-400 text-center mt-3">
                    Trusted by more than 200K+ Clients
                </p>

                {/* Category tabs */}
                <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
                                ${activeCategory === cat
                                    ? 'bg-[#5A81FA] text-white'
                                    : 'text-zinc-500 hover:text-zinc-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* FAQ list */}
                <div className="mt-8 md:mt-10">
                    {faqs.map((faq, index) => (
                        <div
                            key={`${activeCategory}-${index}`}
                            className="border-t border-[#E0E2E8]"
                        >
                            {/* Question row */}
                            <button
                                onClick={() => handleToggle(index)}
                                className="w-full flex items-center justify-between py-5 md:py-6 text-left cursor-pointer group"
                            >
                                <span className="text-sm md:text-base text-zinc-700 font-medium pr-4 group-hover:text-zinc-900 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronIcon isOpen={openIndex === index} />
                            </button>

                            {/* Answer (expandable) */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                                }`}
                            >
                                {faq.answer.split('\n').map((paragraph, pIndex) => (
                                    <p
                                        key={pIndex}
                                        className="text-sm text-zinc-400 leading-relaxed mt-2 first:mt-0"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-[#E0E2E8]" />
                </div>
            </div>
        </section>
    );
}
