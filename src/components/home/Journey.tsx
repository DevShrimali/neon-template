"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TIMELINE = [
    {
        year: "PRESENT",
        role: "UI/UX DESIGN LEAD",
        company: "ENLIGHTVISION TECHNOLOGIES",
        desc: "Spearheading product design and systems. Defining the UX architecture across multiple client dimensions.",
        metrics: ["UX Research", "Systems"]
    },
    {
        year: "2021 — 2024",
        role: "UI/UX DESIGNER",
        company: "KONZEPT SOLUTIONS",
        desc: "Built scalable wireframes and robust design systems. Bridged the gap between concept and code.",
        metrics: ["Design Systems", "Prototyping"]
    },
    {
        year: "2020",
        role: "WEB DESIGNER",
        company: "VMG SOFTWARE SOLUTIONS",
        desc: "Crafted high-fidelity web interfaces. Translated business goals into functional HTML/CSS environments.",
        metrics: ["HTML/CSS", "Visuals"]
    },
    {
        year: "2018 — 2020",
        role: "UX Designer",
        company: "Ascend Agency",
        desc: "Designed holistic digital platforms for e-commerce and B2B SaaS clients, establishing design systems that improved consistency and development handoff.",
        metrics: ["Increased Conversions", "Scalable Systems"]
    },
    {
        year: "2019",
        role: "GRAPHIC DESIGNER",
        company: "PIXELTEC DIGITAL",
        desc: "Developed branding and custom print designs. The foundation of my visual syntax.",
        metrics: ["Branding", "Print"]
    },
];

export function Journey() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const timelineItemsContainerRef = useRef<HTMLDivElement>(null); // Added missing ref

    useGSAP(() => {
        // Draw the line down as the user scrolls
        gsap.fromTo(lineRef.current,
            { scaleY: 0, transformOrigin: "top" },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 20%",
                    end: "bottom 80%",
                    scrub: true,
                }
            }
        );

        // Pop in the nodes
        gsap.utils.toArray(".timeline-item").forEach((item: any) => {
            const node = item.querySelector(".timeline-node");
            const content = item.querySelector(".timeline-content");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(node, { scale: 0 }, { scale: 1, duration: 0.5, ease: "back.out(2)" })
                .fromTo(content, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="journey" className="pt-32 pb-20 bg-[var(--bg-primary)] border-t border-[var(--border)] overflow-hidden">

            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">

                {/* Brutalist Title Group */}
                <div className="lg:w-1/3 sticky top-40 flex flex-col">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-[0.9] tracking-tighter text-[var(--accent-primary)] mix-blend-difference mb-8">
                        CAREER<br />
                        <span className="font-serif italic text-[var(--text-primary)]">TRAJECTORY</span>
                    </h2>
                    <div className="font-mono text-xs md:text-sm tracking-widest text-[var(--text-secondary)] uppercase mb-6 flex flex-col gap-2 border-l border-[var(--accent-primary)] pl-4">
                        <span>[ System Log ]</span>
                        <span>05 / Journey</span>
                        <span>Tracing the evolution</span>
                    </div>
                    <p className="font-serif italic text-lg text-[var(--text-secondary)] mt-8">
                        From print origins to engineering scalable software interfaces.
                    </p>
                </div>

                {/* Log Output Style Timeline */}
                <div className="lg:w-2/3 flex flex-col w-full relative">
                    {/* Vertical Timeline Background Line */}
                    <div className="absolute left-[39px] md:left-[47px] top-6 bottom-0 w-px bg-[var(--border)] opacity-30 z-0" />

                    {/* Animated Neon Line */}
                    <div
                        ref={lineRef}
                        className="absolute left-[39px] md:left-[47px] top-6 w-[2px] bg-[var(--accent-primary)] origin-top z-10 shadow-[0_0_15px_rgba(200,255,87,0.8)]"
                        style={{ transform: "scaleY(0)" }} // Fixed from scaleY property
                    />

                    <div ref={timelineItemsContainerRef}> {/* Wrapper for timeline items to control line animation */}
                        {TIMELINE.map((item: any, idx: number) => (
                            <div key={idx} className="timeline-item relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 md:gap-16 mb-24 lg:mb-32 pl-6 md:pl-0 border-b border-[var(--border)] pt-8 first:pt-0 group">
                                {/* Node */}
                                <div className="timeline-node absolute left-[16px] top-[40px] w-2.5 h-2.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] z-10 hidden sm:block group-hover:bg-[var(--accent-primary)] group-hover:shadow-[0_0_20px_rgba(200,255,87,1)] transition-colors" />

                                <div className="timeline-content sm:col-span-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
                                    <div className="sm:w-1/4 flex flex-col gap-2 mt-1 sm:mt-0 font-mono text-xs md:text-sm tracking-widest uppercase sm:pl-12">
                                        <span className="text-[var(--text-primary)] border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 text-center py-2 rounded-full mb-2 group-hover:border-[var(--accent-primary)] transition-colors">
                                            {item.year}
                                        </span>
                                    </div>

                                    <div className="sm:w-3/4 flex flex-col">
                                        <h3 className="text-3xl lg:text-4xl font-sans font-bold uppercase tracking-tight text-[var(--text-primary)] mb-2 group-hover:text-glow transition-all">
                                            {item.role}
                                        </h3>
                                        <h4 className="font-serif italic text-lg lg:text-xl text-[var(--accent-primary)] mb-6">
                                            @ {item.company}
                                        </h4>

                                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-mono">
                                            {item.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {item.metrics.map((metric: string) => (
                                                <span key={metric} className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] border border-[var(--border-glow)] px-4 py-2 hover:bg-[var(--text-primary)] hover:text-[#08090A] transition-colors rounded">
                                                    {metric}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> {/* End of timelineItemsContainerRef wrapper */}

                    {/* Academic & Protocol Section (Isolated from Timeline) */}
                    <div className="mt-40 border-t border-[var(--border)] pt-20">
                        <h3 className="font-mono text-xl tracking-[0.2em] text-[var(--text-primary)] uppercase mb-16">
                            Academic & Protocol
                        </h3>    <div className="flex flex-col border-t border-[var(--border)]">
                            {[
                                { deg: "BTech, Computer Science", inst: "U.V. Patel College", yr: "2018" },
                                { deg: "UI & UX Assessment", inst: "LearnTube.ai", yr: "2024" },
                                { deg: "UX/UI Process", inst: "Udemy", yr: "2020" }
                            ].map((edu, i) => (
                                <div key={i} className="flex flex-col sm:flex-row justify-between py-6 border-b border-[var(--border)] hover:bg-[var(--bg-secondary)] transition-colors px-4 group cursor-default">
                                    <span className="font-sans text-xl font-bold group-hover:text-[var(--accent-primary)] transition-colors">{edu.deg}</span>
                                    <div className="flex gap-12 font-mono text-sm uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                        <span>{edu.inst}</span>
                                        <span>{edu.yr}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
