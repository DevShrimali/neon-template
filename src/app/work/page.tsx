"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

const ARCHIVE_PROJECTS = [
    { title: "Fintech Mobile", category: "Finance", role: "Product Design", year: "2024", slug: "fintech" },
    { title: "Crypto Trading", category: "Crypto", role: "UI/UX Lead", year: "2023", slug: "crypto" },
    { title: "Cleaning Brand", category: "Visual", role: "Brand System", year: "2023", slug: "cleaning" },
    { title: "VR Gaming UI", category: "Immersive", role: "UI Designer", year: "2022", slug: "vr" },
    { title: "B2B SaaS Dashboard", category: "SaaS", role: "UX Architecture", year: "2022", slug: "saas" },
    { title: "Healthcare Portal", category: "Medical", role: "Product Design", year: "2021", slug: "healthcare" },
    { title: "E-Commerce Rebrand", category: "Retail", role: "Visual Design", year: "2020", slug: "ecommerce" },
    { title: "Logistics App", category: "Operations", role: "UI Designer", year: "2019", slug: "logistics" },
];

export default function WorkArchive() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Stagger in title and subtext
        tl.fromTo(".archive-header-element",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }
        );

        // Stagger in project rows
        tl.fromTo(".archive-row",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05 },
            "-=0.6"
        );
    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-40 font-sans">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-[var(--border)] pb-8 overflow-hidden">
                    <div>
                        <div className="archive-header-element font-mono text-sm tracking-[0.3em] uppercase text-[var(--accent-primary)] mb-6">
                            [ System Directory ]
                        </div>
                        <h1 className="archive-header-element text-5xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter uppercase leading-none text-[var(--text-primary)]">
                            THE <span className="font-serif italic text-transparent outline-text drop-shadow-[0_0_30px_rgba(200,255,87,0.3)]" style={{ WebkitTextStroke: "2px var(--accent-primary)" }}>ARCHIVE.</span>
                        </h1>
                    </div>

                    <p className="archive-header-element font-mono text-sm text-[var(--text-muted)] max-w-sm uppercase tracking-widest leading-relaxed">
                        A chronological log of shipped interfaces, design systems, and digital architecture.
                    </p>
                </div>

                {/* Brutalist Data Table List */}
                <div className="w-full flex flex-col uppercase">

                    {/* Table Header */}
                    <div className="archive-header-element hidden md:grid grid-cols-12 gap-8 font-mono text-xs tracking-widest text-[var(--text-muted)] border-b border-[var(--border-glow)] pb-4 mb-4 uppercase mix-blend-difference">
                        <div className="col-span-1">Year</div>
                        <div className="col-span-5">Project Name</div>
                        <div className="col-span-3">Role</div>
                        <div className="col-span-2">Sector</div>
                        <div className="col-span-1 text-right">Link</div>
                    </div>

                    {/* Table Rows */}
                    {ARCHIVE_PROJECTS.map((project, idx) => (
                        <Link
                            href={`/work/${project.slug}`}
                            key={idx}
                            className="archive-row group relative grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-center py-8 md:py-6 border-b border-[var(--border)] hover:bg-[var(--bg-secondary)] transition-colors"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent-primary)] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 pointer-events-none" />

                            <div className="md:col-span-1 font-mono text-sm text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors pl-4 md:pl-0">
                                {project.year}
                            </div>

                            <div className="md:col-span-5 pl-4 md:pl-0">
                                <h3 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[var(--text-primary)] group-hover:text-glow transition-all">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="md:col-span-3 font-mono text-sm tracking-widest text-[var(--text-secondary)] pl-4 md:pl-0 mt-4 md:mt-0 opacity-80 group-hover:opacity-100">
                                {project.role}
                            </div>

                            <div className="md:col-span-2 font-mono text-sm tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-primary)] pl-4 md:pl-0 opacity-60 group-hover:opacity-100 transition-colors">
                                {project.category}
                            </div>

                            <div className="md:col-span-1 flex md:justify-end pr-4 mt-6 md:mt-0">
                                <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--accent-primary)] group-hover:text-black group-hover:border-[var(--accent-primary)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}
