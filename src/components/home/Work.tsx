"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

const PROJECTS = [
    {
        title: "Aura — Neobanking OS",
        category: "Fintech Platform",
        year: "2024",
    },
    {
        title: "Lumina — AI Copilot",
        category: "SaaS Application",
        year: "2023",
    },
    {
        title: "Zenith — Dashboard",
        category: "Enterprise Analytics",
        year: "2022",
    },
    {
        title: "Pulse — Health Tech",
        category: "Mobile Experience",
        year: "2022",
    },
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
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                xTo(e.clientX - rect.left);
                yTo(e.clientY - rect.top);
            }
        };

        const container = containerRef.current;
        container?.addEventListener("mousemove", handleMouseMove);
        container?.addEventListener("mouseleave", () => setHoveredIdx(null));

        // Arrow bounce animation
        gsap.to(arrowRef.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });

        return () => {
            container?.removeEventListener("mousemove", handleMouseMove);
            container?.removeEventListener("mouseleave", () => setHoveredIdx(null));
        }
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
                <div className="font-mono text-sm md:text-base tracking-widest text-[var(--accent-primary)] uppercase flex justify-between border-b border-[var(--border)] pb-4 mb-2">
                    <span>[ Case Studies ]</span>
                    <span>Selected Works</span>
                </div>
            </div>

            <div className="w-full border-t border-[var(--border)] relative z-10 bg-[var(--bg-card)]">
                {PROJECTS.map((project, idx) => (
                    <Link
                        href={`/work/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        key={idx}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        className="group flex flex-col md:flex-row items-center justify-between py-12 px-6 relative select-none overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[var(--accent-primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0 mix-blend-difference" />

                        {/* Left aligned info */}
                        <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 w-full md:w-auto relative z-10 pointer-events-none">
                            <span className="font-mono text-sm text-[var(--text-secondary)] mix-blend-difference">0{idx + 1}</span>
                            <h3
                                className="text-5xl md:text-7xl lg:text-[6vw] font-sans font-bold tracking-tighter uppercase text-[var(--text-primary)] transition-all duration-500 mix-blend-difference"
                                style={{
                                    WebkitTextStroke: "1px rgba(240, 237, 232, 0.4)",
                                    color: "transparent",
                                }}
                            >
                                {project.title}
                            </h3>
                        </div>

                        {/* Right aligned info */}
                        <div className="flex flex-col md:flex-row lg:items-center justify-end font-mono text-sm uppercase gap-4 md:gap-24 w-full md:w-auto mt-6 md:mt-0 relative z-10 pointer-events-none mix-blend-difference text-[var(--text-secondary)]">
                            <span className="tracking-widest">{project.category}</span>
                            <span>{project.year}</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* GSAP Floating Image Reveal (Desktop) */}
            <div
                ref={cursorRef}
                className="hidden md:block absolute top-0 left-0 pointer-events-none z-40 w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-glow)] shadow-2xl bg-[var(--bg-primary)] -translate-x-1/2 -translate-y-1/2 opacity-0 scale-[0.8]"
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
                    <div className="font-mono text-sm uppercase tracking-[0.3em]">View Archive</div>
                    <div ref={arrowRef}>↓</div>
                </Link>
            </div>
        </section>
    );
}
