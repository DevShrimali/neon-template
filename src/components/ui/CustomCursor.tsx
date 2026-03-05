"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const attachEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        const addLinkEvents = () => {
            document.querySelectorAll("a, button, input, [role='button']").forEach((el) => {
                el.addEventListener("mouseenter", () => setLinkHovered(true));
                el.addEventListener("mouseleave", () => setLinkHovered(false));
            });
        };

        // Use MutationObserver to re-evaluate links when DOM changes
        const observer = new MutationObserver(() => {
            addLinkEvents();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        attachEventListeners();
        addLinkEvents();

        return () => {
            removeEventListeners();
            observer.disconnect();
        };
    }, []);

    if (!mounted || (typeof window !== "undefined" && window.innerWidth <= 768)) return null; // Don't show cursor on mobile/SSR

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[var(--text-primary)] rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: clicked ? 0.8 : 1,
                    opacity: hidden ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border"
                animate={{
                    x: position.x - 24,
                    y: position.y - 24,
                    width: 48,
                    height: 48,
                    scale: linkHovered ? 1.5 : (clicked ? 0.9 : 1),
                    opacity: hidden ? 0 : (linkHovered ? 0.8 : 0.4),
                    backgroundColor: linkHovered ? "var(--accent-primary)" : "transparent",
                    borderColor: linkHovered ? "transparent" : "var(--border-glow)",
                    mixBlendMode: "difference"
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                {linkHovered && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-[#08090A] tracking-widest uppercase font-bold"
                    >
                        {/* Action-based label depending on link type, assuming VIEW generally works */}
                        GO
                    </motion.span>
                )}
            </motion.div>
        </>
    );
}
