"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Journey", href: "#journey" },
    { label: "Connect", href: "#connect" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--bg-primary)] to-transparent z-40 pointer-events-none" />
            <header
                className={cn(
                    "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-5xl",
                    isScrolled
                        ? "top-4 py-3 px-6 bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-glow)] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        : "top-0 py-6 px-6 lg:px-12 bg-transparent"
                )}
            >
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className="font-serif italic text-2xl group flex items-baseline">
                        DEV
                        <span className="text-[var(--accent-primary)] group-hover:text-glow transition-all ml-0.5">.</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:text-glow transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <a
                            href="#resume"
                            className="px-6 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-sm hover:bg-[var(--accent-primary)] hover:text-[#000] transition-colors inline-block font-bold"
                        >
                            Resume ↗
                        </a>
                    </div>

                    <button
                        className="md:hidden text-[var(--text-primary)]"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-[var(--bg-primary)] p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="font-serif italic text-2xl group flex items-baseline" onClick={() => setIsMobileMenuOpen(false)}>
                            DEV
                            <span className="text-[var(--accent-primary)] ml-0.5">.</span>
                        </Link>
                        <button
                            className="text-[var(--text-primary)]"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-6 mt-16 mb-auto text-center">
                        {NAV_LINKS.map((link, i) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-4xl font-sans tracking-wide hover:text-[var(--accent-primary)] transition-colors animate-in slide-in-from-bottom flex justify-center w-full"
                                style={{ animationDelay: `${i * 100}ms` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="text-center pb-8">
                        <a
                            href="#resume"
                            className="px-8 py-4 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] font-mono text-lg transition-colors inline-block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Resume ↗
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
