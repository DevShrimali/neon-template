"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PROCESS_STEPS = [
    {
        num: "01",
        title: "DISCOVER",
        desc: "Immersing in the problem space. Understanding why before how. I refuse to design without context.",
        tags: ["User Research", "Market Analysis", "Competitor Study"],
        color: "bg-[var(--bg-primary)]",
        textColor: "text-[var(--text-primary)]"
    },
    {
        num: "02",
        title: "DEFINE",
        desc: "Translating abstract insights into concrete design requirements. Finding the signal in the noise.",
        tags: ["Problem Framing", "User Personas", "Journey Maps"],
        color: "bg-[var(--bg-secondary)]",
        textColor: "text-[var(--text-primary)]"
    },
    {
        num: "03",
        title: "DESIGN",
        desc: "From rough wireframes to polished high-fidelity UI. Pixel-perfect, brutally effective.",
        tags: ["Wireframes", "Prototypes", "Design Systems"],
        color: "bg-[var(--bg-card)]",
        textColor: "text-[var(--text-primary)]"
    },
    {
        num: "04",
        title: "VALIDATE",
        desc: "Testing early, testing often. Real users. Real feedback. No assumptions allowed.",
        tags: ["Usability Testing", "A/B Testing", "Iteration"],
        color: "bg-[var(--text-primary)]",
        textColor: "text-[var(--bg-primary)]"
    },
    {
        num: "05",
        title: "DELIVER",
        desc: "Dev handoffs that developers actually like. I stay until it ships exactly as designed.",
        tags: ["Dev Handoff", "QA Review", "Post-launch Audit"],
        color: "bg-[var(--accent-primary)]",
        textColor: "text-black"
    },
];

export function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Subtle floating of the title as you scroll past it
        gsap.to(titleRef.current, {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        // Cards stacking scale effect (very GSAP-like)
        const cards = gsap.utils.toArray(".process-card");

        cards.forEach((card: any, index: number) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Scale down previous cards when they stick to the top
            if (index < cards.length - 1) {
                gsap.to(card, {
                    scale: 0.9 + (index * 0.02),
                    filter: "blur(4px)",
                    opacity: 0.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: `top ${15 + (index * 4)}vh`,
                        endTrigger: sectionRef.current,
                        end: "bottom bottom",
                        scrub: true,
                    }
                });
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="process" className="relative py-24 lg:py-40 bg-[var(--bg-primary)] border-b border-[var(--border)] overflow-visible">

            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

                {/* Massive Sticky Title */}
                <div className="lg:col-span-4 relative h-auto">
                    <div ref={titleRef} className="lg:sticky lg:top-40 mt-10 lg:mt-0 flex flex-col">
                        <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-6">[ Methodology ]</div>
                        <h2 className="text-5xl md:text-7xl lg:text-[7vw] font-sans font-bold leading-none tracking-tighter text-[var(--text-primary)] relative z-20 mix-blend-difference mb-8">
                            HOW I<br />
                            <span className="font-serif italic text-transparent" style={{ WebkitTextStroke: "2px var(--text-primary)" }}>BUILD.</span>
                        </h2>
                        <p className="text-xl font-mono text-[var(--text-muted)] max-w-sm">Every pixel earns its place. A strategic, research-backed approach to product design.</p>
                    </div>
                </div>

                {/* Sticky Stacking Cards */}
                <div className="lg:col-span-8 flex flex-col gap-8 pb-32">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div
                            key={step.num}
                            className={`process-card sticky rounded-[2rem] p-10 md:p-16 w-full ${step.color} ${step.textColor} border border-[var(--border)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-origin-top will-change-transform`}
                            style={{ top: `calc(15vh + ${idx * 40}px)`, zIndex: 10 + idx }}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                                <span className="font-serif italic text-6xl md:text-8xl opacity-30 select-none pointer-events-none tracking-tighter leading-none">{step.num}</span>
                                <h3 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight">{step.title}</h3>
                            </div>

                            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-12 max-w-2xl opacity-90">
                                {step.desc}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {step.tags.map(tag => (
                                    <span key={tag} className="font-mono border border-current rounded-full px-5 py-2 text-sm opacity-80 backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
