"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Copy } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SOCIALS = ["LinkedIn", "Behance", "Dribbble", "Figma", "GitHub", "YouTube"];

export function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "devloper.ds@gmail.com";
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useGSAP(() => {
        // Massive Marquee Background
        gsap.to(".contact-marquee", {
            xPercent: -50,
            repeat: -1,
            ease: "none",
            duration: 15
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        tl.fromTo(".contact-title",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
        )
            .fromTo(".contact-terminal",
                { scale: 0.9, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 1, ease: "back.out(1.2)" },
                "-=0.6"
            )
            .fromTo(".contact-socials a",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
                "-=0.4"
            );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="connect" className="relative py-24 lg:py-40 bg-[var(--bg-secondary)] overflow-hidden font-sans border-b border-[var(--border)]">

            {/* Massive Marquee Background */}
            <div className="absolute top-1/2 -translate-y-1/2 flex overflow-hidden whitespace-nowrap opacity-[0.02] select-none pointer-events-none mix-blend-screen w-[200vw] left-[-50vw]">
                <div className="contact-marquee text-[30vw] font-sans font-bold leading-none tracking-tighter text-[var(--accent-primary)] min-w-max">
                    VAR PORTFOLIO = TRUE; SYSTEM REBOOTING; VAR PORTFOLIO = TRUE; SYSTEM REBOOTING;
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center min-h-[50vh]">

                {/* Brutalist "INITIATE" */}
                <div className="font-mono text-sm tracking-[0.5em] text-[var(--accent-primary)] uppercase mb-8 border border-[var(--accent-primary)] px-6 py-2 rounded-full animate-pulse">
                    [ STATUS: AVAILABLE ]
                </div>

                <h2 className="contact-title text-center font-sans font-bold text-6xl md:text-8xl lg:text-[8vw] uppercase tracking-tighter leading-[0.85] text-[var(--text-primary)]">
                    EXECUTE<br />
                    <span className="font-serif italic text-transparent outline-text drop-shadow-[0_0_30px_rgba(200,255,87,0.3)]" style={{ WebkitTextStroke: "2px var(--accent-primary)" }}>DIALOGUE.</span>
                </h2>

                <p className="contact-title font-mono text-center text-lg md:text-xl text-[var(--text-muted)] mt-12 max-w-xl mx-auto">
                    System ready for incoming frequencies. Briefs, bold ideas, or questions.
                </p>

                {/* The Terminal Email Block */}
                <div className="contact-terminal w-full max-w-4xl mx-auto mt-20 relative bg-[#000] border border-[var(--border-glow)] rounded-[2rem] p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    {/* Terminal reflection/glass line */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/[0.02] pointer-events-none" />
                    <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-red-500" />
                    <div className="absolute left-12 top-6 w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="absolute left-18 top-6 w-3 h-3 rounded-full bg-green-500" />

                    <div className="pl-0 md:pl-24 pt-12 md:pt-0 font-mono text-xl md:text-3xl text-[var(--text-primary)] flex items-center gap-4 break-all">
                        <span className="text-[var(--accent-primary)]">{`>`}</span>
                        {email}
                    </div>

                    <button
                        onClick={handleCopy}
                        className="font-mono text-sm md:text-base uppercase tracking-widest bg-[var(--accent-primary)] text-[#000] px-8 py-4 rounded hover:bg-[var(--text-primary)] transition-colors flex items-center gap-3 w-full md:w-auto justify-center"
                    >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                        {copied ? "COPIED" : "COPY TO CLIPBOARD"}
                    </button>
                </div>

                {/* Social Links Terminal Footer */}
                <div className="contact-socials flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-mono text-sm uppercase tracking-widest text-[var(--text-muted)] mt-24">
                    {SOCIALS.map(social => (
                        <a key={social} href="#" className="hover:text-[var(--accent-primary)] hover:-translate-y-1 transition-all">{social}</a>
                    ))}
                </div>

            </div>
        </section>
    );
}
