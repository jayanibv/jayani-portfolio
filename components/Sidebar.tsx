"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "projects", "education", "awards", "events", "contact"];

export default function Sidebar() {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop - 200;
                    if (window.scrollY >= top) {
                        setActive(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.aside
            initial={{ x: -120 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 h-screen w-20 md:w-64
      bg-gradient-to-b from-zinc-950 via-black to-zinc-900
      backdrop-blur-xl border-r border-white/10
      text-white shadow-2xl flex flex-col items-center py-10 z-50"
        >
            {/* Profile */}
            <div className="flex flex-col items-center mb-12">
                <img
                    src="/profile.jpg"
                    alt="profile"
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover 
          border border-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                />

                <h2 className="hidden md:block mt-4 text-lg font-semibold tracking-wide">
                    Jayani
                </h2>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-3 w-full px-4">
                {sections.map((section) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        className={`relative px-4 py-2 rounded-xl capitalize transition-all duration-300
            ${active === section
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {active === section && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-purple-600/20 rounded-xl border border-purple-500/40"
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        )}

                        <span className="relative z-10">{section}</span>
                    </a>
                ))}
            </nav>
        </motion.aside>
    );
}