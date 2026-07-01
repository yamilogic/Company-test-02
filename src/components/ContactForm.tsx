'use client';

import { useState, type FormEvent } from 'react';

const TOKENS = {
    padding: 40,
    innerGap: 24,
    borderRadius: '12px',
    borderColor: '#E0E2E8',
    accent: '#5A81FA',
};

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputCls = `w-full h-12 rounded-lg border border-[#E0E2E8] bg-white pl-10 pr-4 text-sm text-zinc-900
                   placeholder:text-zinc-400 outline-none
                   focus:border-[#5A81FA] focus:ring-2 focus:ring-[#5A81FA]/20
                   transition-all duration-200`;

const FIELDS = [
    {
        name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name',
        icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    },
    {
        name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your Phone',
        icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
    },
    {
        name: 'email', label: 'Email', type: 'email', placeholder: 'your Email',
        icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
    },
] as const;

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        const form = e.currentTarget;
        const data = new FormData(form);
        data.append('access_key', WEB3FORMS_KEY);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            });
            const json = await res.json();

            if (json.success) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setErrorMsg(json.message || 'Something went wrong.');
                setStatus('error');
            }
        } catch {
            setErrorMsg('Network error. Please try again.');
            setStatus('error');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-white flex flex-col"
            style={{
                width: '100%',
                minWidth: 0,
                padding: `${TOKENS.padding}px`,
                gap: `${TOKENS.innerGap}px`,
                borderRadius: TOKENS.borderRadius,
                border: `1px solid ${TOKENS.borderColor}`,
            }}
        >
            {/* Input fields */}
            {FIELDS.map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5 w-full">
                    <span className="text-sm font-medium text-zinc-700">{f.label}</span>
                    <div className="relative w-full">
                        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            {f.icon}
                        </svg>
                        <input required name={f.name} type={f.type} placeholder={f.placeholder} className={inputCls} />
                    </div>
                </div>
            ))}

            {/* Message */}
            <div className="flex flex-col gap-1.5 w-full">
                <span className="text-sm font-medium text-zinc-700">Message</span>
                <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Your Message goes here..."
                    className="w-full rounded-lg border border-[#E0E2E8] bg-white px-4 py-3 text-sm text-zinc-900
                               placeholder:text-zinc-400 outline-none resize-none
                               focus:border-[#5A81FA] focus:ring-2 focus:ring-[#5A81FA]/20
                               transition-all duration-200"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'sending'}
                className="h-12 w-full rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2
                           transition-all duration-200 cursor-pointer
                           disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: TOKENS.accent }}
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="m22 2-7 20-4-9-9-4 20-7z" />
                    <path d="m22 2-11 11" />
                </svg>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {/* Feedback */}
            {status === 'success' && (
                <p className="text-sm text-emerald-600 font-medium text-center">
                    ✓ Message sent successfully!
                </p>
            )}
            {status === 'error' && (
                <p className="text-sm text-red-500 font-medium text-center">{errorMsg}</p>
            )}
        </form>
    );
}
