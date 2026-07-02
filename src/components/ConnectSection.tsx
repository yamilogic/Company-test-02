'use client';

import ContactForm from './ContactForm';

const INFO_ITEMS = [
    {
        label: 'E-Mail',
        value: 'info@rialapay.com',
        icon: (
            <svg className="w-5 h-5 text-[#5A81FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        label: 'Phone',
        value: '+1-298-23-242-22',
        icon: (
            <svg className="w-5 h-5 text-[#5A81FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        label: 'Address',
        value: 'No. 1, New York, United States',
        icon: (
            <svg className="w-5 h-5 text-[#5A81FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
];

export default function ConnectSection() {
    return (
        <section
            id="connect"
            className="w-full bg-zinc-50 px-4 sm:px-10 md:px-5 lg:px-24 py-12 sm:py-16 md:py-24 max-w-[1920px] mx-auto"
        >
            <div
                className="mx-auto flex flex-col md:items-center lg:items-start lg:flex-row lg:justify-between max-w-[1312px]"
            >
                {/* ── Left: Content ── */}
                <div
                    className="flex flex-col w-full md:items-center lg:items-start mb-10 lg:mb-0 md:max-w-none lg:max-w-none max-w-[535px] gap-[32px]"
                >
                    <p className="text-sm text-zinc-400 md:text-center lg:text-left">We are here to help you...</p>

                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-zinc-900 leading-tight -mt-4 md:text-center lg:text-left">
                        <span className="text-[#5A81FA]">Discuss</span> Your Finance Solution Needs
                    </h2>

                    <p className="text-sm text-zinc-400 leading-relaxed -mt-4 md:text-center lg:text-left max-w-[420px]">
                        Simplify your payments with Riala Pay, Paying bills nad making transactions has never been easier.
                    </p>

                    {/* Info items */}
                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:justify-center lg:flex-col lg:gap-5 lg:justify-start">
                        {INFO_ITEMS.map((item) => (
                            <div key={item.label} className="flex items-center gap-4 md:gap-3 lg:gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#5A81FA]/10 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400">{item.label}</p>
                                    <p className="text-sm font-medium text-zinc-800">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right / Below: Contact Form ── */}
                <div className="w-full md:mx-auto lg:mx-0 max-w-[535px]">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
