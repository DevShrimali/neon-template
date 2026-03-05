"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

const PROJECTS = [
    { title: "Fintech Mobile", category: "Finance", year: "2024", slug: "fintech" },
    { title: "Crypto Trading", category: "Crypto", year: "2023", slug: "crypto" },
    { title: "Cleaning Brand", category: "Visual", year: "2023", slug: "cleaning" },
    { title: "VR Gaming", category: "Immersive", year: "2022", slug: "vr" },
];

export function Work() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Create quick setter functions for highly performant mouse following
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "power3" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Arrow bounce animation
        gsap.to(arrowRef.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, { scope: containerRef });

    useEffect(() => {
        if (!cursorRef.current) return;

        if (hoveredIdx !== null) {
            gsap.to(cursorRef.current, {
                opacity: 1,
                scale: 1,
                rotate: hoveredIdx % 2 === 0 ? 3 : -3,
                duration: 0.5,
                ease: "back.out(1.5)"
            });
        } else {
            gsap.to(cursorRef.current, {
                opacity: 0,
                scale: 0.8,
                rotate: 0,
                duration: 0.4,
                ease: "power2.in"
            });
        }
    }, [hoveredIdx]);

    return (
        <section ref={containerRef} id="work" className="py-24 lg:py-40 bg-[var(--bg-card)] border-b border-[var(--border)] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 mb-20">
                <div className="font-mono text-xs md:text-sm tracking-widest text-[var(--accent-primary)] uppercase flex justify-between border-b border-[var(--border)] pb-4 mb-2">
                    <span>[ Case Studies ]</span>
                    <span>Selected Works</span>
                </div>
            </div>

            <div className="w-full border-t border-[var(--border)] relative z-10 bg-[var(--bg-card)]">
                {PROJECTS.map((project, idx) => (
                    <Link
                        href={`/work/${project.slug}`}
                        key={idx}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        className="group flex flex-col md:flex-row items-center justify-between py-12 px-6 lg:px-12 border-b border-[var(--border)] hover:bg-[var(--bg-primary)] hover:pl-16 transition-all duration-500 relative select-none"
                    >
                        {/* Left aligned info */}
                        <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 w-full md:w-auto relative z-10">
                            <span className="font-mono text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">0{idx + 1}</span>
                            <h3
                                className="text-5xl md:text-7xl lg:text-[6vw] font-sans font-bold tracking-tighter uppercase text-[var(--text-primary)] transition-all duration-300"
                                style={{
                                    WebkitTextStroke: hoveredIdx === idx ? "2px var(--accent-primary)" : "none",
                                    color: hoveredIdx === idx ? "transparent" : "var(--text-primary)"
                                }}
                            >
                                {project.title}
                            </h3>
                        </div>

                        {/* Right aligned info */}
                        <div className="mt-6 md:mt-0 flex w-full md:w-auto justify-between md:justify-end items-center gap-12 font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] relative z-10">
                            <span className="group-hover:text-[var(--text-primary)]">{project.category}</span>
                            <span className="group-hover:text-[var(--text-primary)]">{project.year}</span>
                            <div className="w-12 h-12 rounded-full border border-[var(--border-glow)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--accent-primary)] group-hover:text-[#08090A] group-hover:border-[var(--accent-primary)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* GSAP Floating Image Reveal (Desktop) */}
            <div
                ref={cursorRef}
                className="hidden md:block fixed top-0 left-0 pointer-events-none z-50 w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-glow)] shadow-2xl bg-[var(--bg-primary)] -translate-x-1/2 -translate-y-1/2 opacity-0 scale-[0.8]"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-card)] to-[var(--bg-primary)] flex items-center justify-center text-[var(--text-muted)] font-mono text-sm">
                    [ GSAP PREVIEW ]
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 mt-20 flex justify-center">
                <Link
                    href="/work"
                    className="group flex flex-col items-center gap-4 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                    <div className="font-mono text-xs uppercase tracking-[0.3em]">View Archive</div>
                    <div ref={arrowRef}>↓</div>
                </Link>
            </div>
        </section>
    );
}
