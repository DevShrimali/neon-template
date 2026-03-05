"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[var(--bg-secondary)] text-[var(--text-primary)] border-t border-[var(--border)] pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Logo & Tagline */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                        <Link href="/" className="font-serif italic text-3xl group flex items-baseline mb-4">
                            DEV
                            <span className="text-[var(--accent-primary)] group-hover:text-glow transition-all ml-0.5">.</span>
                        </Link>
                        <p className="text-[var(--text-secondary)] font-serif italic text-lg max-w-sm">
                            Designing with purpose. Building with precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h5 className="font-sans font-bold text-sm text-[var(--text-muted)] tracking-wider uppercase mb-6">Explore</h5>
                        <ul className="space-y-4">
                            {['About', 'Work', 'Process', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link href={`#${link.toLowerCase()}`} className="text-[var(--text-secondary)] font-serif hover:text-[var(--accent-primary)] transition-colors inline-block group flex items-center gap-2">
                                        <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Copyright/Info */}
                    <div className="lg:col-span-4 flex flex-col lg:items-end">
                        <h5 className="font-sans font-bold text-sm text-[var(--text-muted)] tracking-wider uppercase mb-6 lg:text-right">Copyright</h5>
                        <p className="text-[var(--text-secondary)] font-mono text-sm mb-2">© 2025 Dev Shrimali.</p>
                        <p className="text-[var(--text-secondary)] font-mono text-sm mb-2">All rights reserved.</p>
                        <p className="text-[var(--text-muted)] font-mono text-xs mt-4">Designed & Built by Dev Shrimali</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-[var(--border)] mt-8 py-6 gap-6">
                    <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3">
                        {['Behance', 'Dribbble', 'Figma', 'GitHub', 'YouTube', 'LinkedIn'].map((social) => (
                            <li key={social}>
                                <a href="#" className="text-sm font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group flex items-center gap-1">
                                    {social}
                                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all pointer-events-none" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="text-sm font-mono text-[var(--text-muted)]">
                        Ahmedabad, India
                    </div>
                </div>
            </div>
        </footer>
    );
}
