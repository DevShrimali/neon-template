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
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "py-4 bg-[#08090A]/85 backdrop-blur-[12px] border-b border-[var(--border)]" : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
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
                            className="px-5 py-2.5 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] font-mono text-sm hover:bg-[var(--accent-primary)]/10 transition-colors inline-block"
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
