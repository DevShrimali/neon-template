"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STATS = [
    { value: "30+", label: "Products Shipped", delay: 0.1 },
    { value: "6+", label: "Years Iterating", delay: 0.3 },
    { value: "100%", label: "End-to-End", delay: 0.5 },
    { value: "∞", label: "Curiosity", delay: 0.7 },
];

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Massive text horizontal scroll
        gsap.to(text1Ref.current, {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(text2Ref.current, {
            xPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        // Main card float in and slight rotation on scroll
        gsap.fromTo(cardRef.current,
            { y: 100, opacity: 0, rotateY: 30 },
            {
                y: 0,
                opacity: 1,
                rotateY: 0, // Resolve rotation
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                }
            }
        );

        // Stats pop in
        gsap.utils.toArray(".desktop-stat-card").forEach((stat: any, i) => {
            gsap.fromTo(stat,
                { scale: 0, opacity: 0 },
                {
                    scale: 1, opacity: 1,
                    duration: 1,
                    delay: STATS[i % STATS.length].delay,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 60%",
                    }
                }
            );
        });

        // Mobile stats fade in
        gsap.utils.toArray(".mobile-stat-card").forEach((stat: any, i) => {
            gsap.fromTo(stat,
                { y: 20, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.6,
                    delay: (i % STATS.length) * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 85%",
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="about" className="relative pb-32 pt-16 bg-[var(--bg-secondary)] overflow-hidden">

            {/* Background massive scrolling text */}
            <div className="absolute inset-0 flex flex-col justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden mix-blend-screen text-[var(--accent-primary)]">
                <div ref={text1Ref} className="whitespace-nowrap font-serif italic text-[20vw] font-bold leading-none translate-x-[10%]">
                    UNFORGETTABLE
                </div>
                <div ref={text2Ref} className="whitespace-nowrap font-sans text-[20vw] font-bold leading-none -mt-[5vw] translate-x-[-10%]">
                    INVISIBLE
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full min-h-[70vh]">

                    {/* Central Editorial Text */}
                    <div className="lg:col-span-6 lg:col-start-4 text-center perspective-[1000px]">
                        <div
                            ref={cardRef}
                            className="bg-[var(--bg-primary)]/90 backdrop-blur-3xl border border-[var(--border-glow)] p-10 md:p-16 rounded-[3rem] shadow-2xl relative z-30 transform-style-preserve-3d"
                        >
                            <h2 className="text-3xl md:text-5xl font-sans text-[var(--text-primary)] leading-[1.2] tracking-tight mb-8">
                                Good design is invisible.<br />
                                <span className="font-serif italic text-[var(--text-secondary)] font-normal text-glow block mt-4">Great design is an unfair advantage.</span>
                            </h2>

                            <p className="text-lg md:text-xl font-mono text-[var(--text-secondary)] text-left leading-relaxed">
                                I lead UI/UX for fintechs, healthcare, and SaaS. Over 6 years, I&#39;ve moved from assembling screens to engineering systems that scale. I work end-to-end, closing the gap between founder vision and developer handoff.
                            </p>

                            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-primary)]" />
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-primary)]" />
                        </div>
                    </div>

                    {/* Floating Stats - Bounds-Safe Grid Version */}
                    <div className="absolute inset-0 pointer-events-none z-20 flex justify-center items-center h-full w-full hidden lg:flex">
                        <div className="w-[120%] h-[110%] grid grid-cols-2 grid-rows-2 gap-[25vw] relative">
                            {/* Top Left */}
                            <div className="desktop-stat-card self-start justify-self-start bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border)] p-6 rounded-2xl shadow-2xl pointer-events-auto hover:border-[var(--accent-primary)] hover:scale-110 transition-colors duration-300 z-40 mt-10">
                                <div className="text-5xl font-sans font-bold text-[var(--accent-primary)] leading-none mb-2">{STATS[0].value}</div>
                                <div className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-wider">{STATS[0].label}</div>
                            </div>

                            {/* Top Right */}
                            <div className="desktop-stat-card self-end justify-self-end bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border)] p-6 rounded-2xl shadow-2xl pointer-events-auto hover:border-[var(--accent-primary)] hover:scale-110 transition-colors duration-300 z-40">
                                <div className="text-5xl font-sans font-bold text-[var(--accent-primary)] leading-none mb-2">{STATS[1].value}</div>
                                <div className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-wider">{STATS[1].label}</div>
                            </div>

                            {/* Bottom Left */}
                            <div className="desktop-stat-card self-end justify-self-start bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border)] p-6 rounded-2xl shadow-2xl pointer-events-auto hover:border-[var(--accent-primary)] hover:scale-110 transition-colors duration-300 z-40 mb-10">
                                <div className="text-5xl font-sans font-bold text-[var(--accent-primary)] leading-none mb-2">{STATS[2].value}</div>
                                <div className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-wider">{STATS[2].label}</div>
                            </div>

                            {/* Bottom Right */}
                            <div className="desktop-stat-card self-start justify-self-end bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border)] p-6 rounded-2xl shadow-2xl pointer-events-auto hover:border-[var(--accent-primary)] hover:scale-110 transition-colors duration-300 z-40">
                                <div className="text-5xl font-sans font-bold text-[var(--accent-primary)] leading-none mb-2">{STATS[3].value}</div>
                                <div className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-wider">{STATS[3].label}</div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Fallback Stats */}
                    <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
                        {STATS.map((stat, i) => (
                            <div
                                key={i}
                                className="mobile-stat-card bg-[var(--bg-card)] border border-[var(--border)] p-6 rounded-2xl shadow-2xl text-center"
                            >
                                <div className="text-4xl font-sans font-bold text-[var(--accent-primary)] leading-none mb-2">{stat.value}</div>
                                <div className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
