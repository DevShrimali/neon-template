"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SOCIALS = [
    { name: "Behance", url: "#" },
    { name: "Dribbble", url: "#" },
    { name: "Figma", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "YouTube", url: "#" },
    { name: "LinkedIn", url: "#" },
];

const NAV_LINKS = ["About", "Work", "Process", "Journey", "Connect"];

export function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Infinite marquee for the top banner
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            ease: "none",
            duration: 20,
        });

        // Fade in footer content
        gsap.fromTo(".footer-content",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                }
            }
        );

    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">

            {/* Marquee Banner */}
            <div className="border-y border-[var(--border-glow)] py-5 overflow-hidden bg-[var(--bg-secondary)]">
                <div ref={marqueeRef} className="flex whitespace-nowrap min-w-max">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="flex items-center text-3xl md:text-5xl font-sans font-bold tracking-tight mx-8 md:mx-16">
                            <span className="text-[var(--text-primary)]">LET&apos;S COLLABORATE</span>
                            <span className="font-serif italic text-[var(--accent-primary)] ml-8 md:ml-16">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            <div className="footer-content container mx-auto px-6 lg:px-12 pt-20 pb-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">

                    {/* Column 1: Brand */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                        <Link href="/" className="font-serif italic text-4xl md:text-5xl group flex items-baseline mb-6 hover:text-glow transition-all">
                            DEV
                            <span className="text-[var(--accent-primary)] group-hover:text-glow transition-all ml-1">.</span>
                        </Link>
                        <p className="text-lg md:text-xl font-serif italic text-[var(--text-secondary)] max-w-md leading-relaxed mb-8">
                            Designing with purpose. Building with precision. Obsessing over every pixel so users don&apos;t have to.
                        </p>

                        {/* Availability Badge */}
                        <div className="flex items-center gap-3 mt-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse" />
                            <span className="font-mono text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                                Available for new projects
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="lg:col-span-3">
                        <h5 className="font-mono text-xs text-[var(--accent-primary)] tracking-[0.3em] uppercase mb-8">
                            [ Navigation ]
                        </h5>
                        <ul className="space-y-5">
                            {NAV_LINKS.map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`#${link.toLowerCase()}`}
                                        className="text-lg font-sans text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all group flex items-center gap-3"
                                    >
                                        <span className="w-0 h-px bg-[var(--accent-primary)] group-hover:w-6 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="lg:col-span-4 flex flex-col lg:items-end">
                        <h5 className="font-mono text-xs text-[var(--accent-primary)] tracking-[0.3em] uppercase mb-8 lg:text-right">
                            [ Connect ]
                        </h5>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group flex items-center gap-2"
                                >
                                    {social.name}
                                    <ArrowUpRight
                                        size={14}
                                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-[var(--accent-primary)]"
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="mt-10 flex items-center gap-3 lg:justify-end">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                            <span className="font-mono text-sm text-[var(--text-secondary)]">
                                Ahmedabad, India
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider with gradient */}
                <div className="relative h-px w-full mb-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 bg-[var(--accent-primary)]" />
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <p className="font-mono text-sm text-[var(--text-secondary)]">
                            © {new Date().getFullYear()} Dev Shrimali
                        </p>
                        <span className="hidden md:inline text-[var(--border-glow)]">•</span>
                        <p className="font-mono text-sm text-[var(--text-secondary)]">
                            All rights reserved
                        </p>
                    </div>
                    <p className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-2">
                        Designed & Engineered with
                        <span className="text-[var(--accent-primary)] animate-pulse">♥</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
