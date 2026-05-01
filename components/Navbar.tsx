"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "skills", "experience", "projects", "education", "awards", "events"];

export default function Navbar() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            // Add a small offset so it highlights slightly before reaching the exact top
            const offset = 200;

            // If we are at the very top, don't highlight anything or highlight 'hero'
            if (window.scrollY < offset) {
                setActive("");
                return;
            }

            const scrollSections = [...sections, "contact"];

            scrollSections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop - offset;
                    if (window.scrollY >= top) {
                        current = section;
                    }
                }
            });

            // If we are at the absolute bottom of the page, force "contact"
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
                current = "contact";
            }

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#00D9C0]/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold tracking-tighter">
                    <span className="text-white">Jay</span>
                    <span className="text-[#00D9C0]">.</span>
                </div>

                <div className="hidden md:flex gap-6 lg:gap-8 items-center">
                    {sections.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="relative px-2 py-1 text-xs lg:text-sm uppercase tracking-[0.15em] font-light transition-colors duration-300"
                        >
                            <span className={`relative z-10 ${active === item ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                                {item}
                            </span>
                            {active === item && (
                                <motion.div
                                    layoutId="nav-glow"
                                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00D9C0] shadow-[0_0_10px_rgba(0,217,192,0.8)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`ml-4 px-6 py-2 rounded-full border border-[#00D9C0]/50 font-medium tracking-widest text-sm uppercase hover:bg-[#00D9C0]/10 hover:shadow-[0_0_20px_rgba(0,217,192,0.4)] transition-all duration-300 ${active === 'contact' ? 'bg-[#00D9C0]/20 text-white shadow-[0_0_20px_rgba(0,217,192,0.4)]' : 'text-[#00D9C0]'}`}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
