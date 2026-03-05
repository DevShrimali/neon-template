"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const statusTextRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Initial setup
        gsap.set([titleRef.current, subtitleRef.current], { y: 80, opacity: 0 });
        gsap.set(dotRef.current, { scale: 0, opacity: 0 });
        gsap.set(statusTextRef.current, { opacity: 0, x: -20 });

        tl.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "expo.out",
        })
            .to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
            }, "-=0.9")
            .to(dotRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
            }, "-=0.4")
            .to(statusTextRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
            }, "-=0.4");

        // Floating animation for the subtitle — starts after entrance completes
        gsap.to(subtitleRef.current, {
            y: "-12px",
            rotation: -4,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 2,
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-[100svh] bg-[var(--bg-primary)] overflow-hidden flex flex-col pt-24 lg:pt-32">

            {/* GSAP Shapes Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
                {/* Grid */}
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-[var(--border)]" />
                <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[var(--border)]" />
                <div className="absolute left-[90%] top-0 bottom-0 w-px bg-[var(--border)]" />
                <div className="absolute top-[20%] left-0 right-0 h-px bg-[var(--border)]" />
                <div className="absolute top-[80%] left-0 right-0 h-px bg-[var(--border)]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col flex-grow justify-between pb-12">

                {/* Top Data */}
                <div className="w-full flex justify-between items-start font-mono text-[11px] md:text-sm tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                    <div>
                        [ Dev Shrimali ]<br />
                        UI/UX Engineer
                    </div>
                    <div className="text-right">
                        [ Located ]<br />
                        Ahmedabad, IN
                    </div>
                </div>

                {/* Central Typographic Art */}
                <div className="relative w-full flex flex-col items-center justify-center my-auto pt-10 perspective-[1000px]">

                    <div className="overflow-hidden">
                        <div
                            ref={titleRef}
                            className="w-full text-center font-sans font-bold leading-[0.75] tracking-tighter text-transparent select-none z-10"
                            style={{ WebkitTextStroke: "1.5px rgba(240, 237, 232, 0.55)", fontSize: "clamp(3rem, 14vw, 12rem)" }}
                        >
                            INTENTIONAL
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mix-blend-difference overflow-hidden">
                        <div
                            ref={subtitleRef}
                            className="font-serif italic leading-none text-[var(--accent-primary)] whitespace-nowrap drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                            style={{ transform: "rotate(-3deg)", fontSize: "clamp(4rem, 20vw, 16rem)" }}
                        >
                            & design.
                        </div>
                    </div>

                </div>

                {/* Bottom Data */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full pb-8">
                    <div className="md:col-span-4 flex items-center gap-3">
                        <div ref={dotRef} className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        <div ref={statusTextRef} className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                            Status: Accepting New Roles
                        </div>
                    </div>

                    <div className="md:col-span-8 md:text-right flex flex-col md:items-end">
                        <p className="text-xl md:text-2xl lg:text-3xl font-sans text-[var(--text-primary)] leading-snug max-w-2xl">
                            I design scalable digital products built for real people. Less show-off, more show-through.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
