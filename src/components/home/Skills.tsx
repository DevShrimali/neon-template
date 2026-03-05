"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ROW_1 = ["User Research", "Product Strategy", "Figma", "Problem Framing", "Interaction Design", "Journey Mapping", "Accessibility", "Information Architecture"];
const ROW_2 = ["Design Systems", "High-Fidelity UI", "Webflow", "Prototyping", "Micro-interactions", "HTML/CSS", "Notion", "Miro"];
const ROW_3 = ["Agile Sprints", "Dev Handoff", "Flutterflow", "QA Review", "Cross-functional Comms", "Adobe CC", "Testing", "Iteration"];

export function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const m1Ref = useRef<HTMLDivElement>(null);
    const m2Ref = useRef<HTMLDivElement>(null);
    const m3Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Continuous Marquee animations
        const mm1 = gsap.to(m1Ref.current, {
            xPercent: -50,
            repeat: -1,
            ease: "none",
            duration: 30
        });

        const mm2 = gsap.from(m2Ref.current, {
            xPercent: -50,
            repeat: -1,
            ease: "none",
            duration: 35
        });

        const mm3 = gsap.to(m3Ref.current, {
            xPercent: -50,
            repeat: -1,
            ease: "none",
            duration: 40
        });

        // Add scroll velocity to speed up timeScale
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                const velocity = Math.abs(self.getVelocity() / 300); // Scale the velocity down
                const ts = 1 + velocity;
                // smooth damp time scale
                gsap.to([mm1, mm2, mm3], {
                    timeScale: ts,
                    duration: 0.5,
                    overwrite: "auto",
                    onComplete: () => {
                        gsap.to([mm1, mm2, mm3], { timeScale: 1, duration: 1.5 });
                    }
                });
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="skills" className="py-24 lg:py-40 relative bg-[var(--bg-primary)] overflow-hidden font-sans border-y border-[var(--border)]">

            {/* Structural Title */}
            <div className="container mx-auto px-6 lg:px-12 mb-16 lg:mb-24 flex justify-between items-end relative z-10">
                <div className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-[var(--accent-primary)] pointer-events-none sticky">
                    CAPA-<br /><span className="text-[var(--text-primary)]">BILITIES</span>
                </div>
                <div className="hidden lg:block w-[400px] text-right font-mono text-sm uppercase tracking-widest text-[var(--text-muted)]">
                    Every tool is a means to an end. <br /><span className="text-[var(--text-secondary)]">The real skill is knowing which one to use.</span>
                </div>
            </div>

            {/* Marquee Arrays */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full rotate-[-2deg] scale-110">

                {/* Row 1 - Left */}
                <div className="flex overflow-hidden relative w-full border-y border-[var(--border-glow)] py-4 lg:py-6 bg-[var(--bg-card)]">
                    <div ref={m1Ref} className="flex whitespace-nowrap min-w-max">
                        {/* Loop twice for seamless marquee */}
                        {[...ROW_1, ...ROW_1].map((skill, i) => (
                            <div key={i} className="flex items-center text-4xl lg:text-7xl font-sans font-bold tracking-tight text-[var(--text-primary)] mx-6 lg:mx-12 hover:text-[var(--accent-primary)] transition-colors cursor-default">
                                {skill}
                                <span className="font-serif italic text-[var(--text-muted)] ml-6 lg:ml-12">*</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right */}
                <div className="flex overflow-hidden relative w-full border-y border-[var(--border-glow)] py-4 lg:py-6 bg-[var(--bg-secondary)]">
                    <div ref={m2Ref} className="flex whitespace-nowrap min-w-max">
                        {[...ROW_2, ...ROW_2].map((skill, i) => (
                            <div key={i} className="flex items-center text-4xl lg:text-7xl font-serif italic text-[var(--text-secondary)] mx-6 lg:mx-12 hover:text-glow hover:text-[var(--accent-primary)] transition-colors cursor-default">
                                {skill}
                                <span className="font-sans text-[var(--text-muted)] ml-6 lg:ml-12 font-bold">—</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3 - Left */}
                <div className="flex overflow-hidden relative w-full border-y border-[var(--border-glow)] py-4 lg:py-6 bg-[var(--bg-card)]">
                    <div ref={m3Ref} className="flex whitespace-nowrap min-w-max">
                        {[...ROW_3, ...ROW_3].map((skill, i) => (
                            <div key={i} className="flex items-center text-4xl lg:text-7xl font-sans font-bold tracking-tight text-transparent mix-blend-difference mx-6 lg:mx-12 cursor-default" style={{ WebkitTextStroke: "1px var(--text-primary)" }}>
                                {skill}
                                <span className="font-serif italic text-[var(--accent-primary)] ml-6 lg:ml-12">*</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
}
