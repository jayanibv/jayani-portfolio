"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* -----------------------------
   DATA
------------------------------ */

const eventsData = [
    {
        title: "Google Student Ambassador",
        org: "Google - Communique",
        year: "2025",
        type: "Event",
        desc: ["Google Student Ambassador"],
        images: ["/certificates/google-student-ambassador.jpg"],
    },
    {
        title: "Hackathon Participant",
        org: "EY",
        year: "2025",
        type: "Hackathon",
        desc: ["Participated in the Round 1: Executive Summary Submission of EY Techathon 6.0"],
        images: ["/certificates/EY-Hackathon.png"],
    },
    {
        title: "Ideathon Participant",
        org: "Thamizhan Skills",
        year: "2026",
        type: "Ideathon",
        desc: ["Participated in the Thamizhan Skills Ideathon and presented our Idea about 'Federated Digital Twins for Indian Manufacturin Hubs'"],
        images: ["/certificates/Tech - Thamizhan ideathon cert.jpg",
            "/certificates/Tech - Thamizhan Ideathon.jpg"
        ],
    },
    {
        title: "NariYukthi Hackathon - Round 1 Cleared",
        org: "SRM",
        year: "2024",
        type: "Hackathon",
        desc: ["Participated in the SRM Hackathon 2024 of the 9th Edition of ACM-W India National Level Hackathon - 'NariYukthi TechHack"],
        images: ["/certificates/NariYukti Hackathon Tech.jpg"],
    },
    {
        title: "CodeN'Surge Coordinator",
        org: "Saveetha Institute of Medical and Technical Sciences",
        year: "2024",
        type: "Event Organizer",
        desc: ["Event Coordinator for CodeN'Surge national Level Hackathon"],
        images: ["/certificates/CodeN'Surge National Level Hackathon Coordinator.jpg"],
    },
    {
        title: "Conducted workshops",
        org: "Saveetha Institute of Medical and Technical Sciences",
        year: "2025",
        type: "Workshop",
        desc: ["Conducted workshops on Using AI Technology for Students, to know how to use AI efficiently as per our requirements. Hands-on-experince with Chat GPT, Gemini, NotebookLM etc."],
        images: ["/certificates/pic 2.jpg",
            "/certificates/pic 3.jpg",
            "/certificates/pic 4.jpg",
            "/certificates/pic 4.jpeg",
            "/certificates/pic 1.jpeg"
        ],
    }
];

export default function Events() {
    const [selected, setSelected] = useState<any | null>(null);
    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = () => {
        if (!selected) return;
        setImageIndex((prev: number) =>
            prev + 1 === selected.images.length ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        if (!selected) return;
        setImageIndex((prev: number) =>
            prev === 0 ? selected.images.length - 1 : prev - 1
        );
    };

    return (
        <section
            id="events"
            className="relative min-h-screen bg-[#0A0A0A] px-8 md:px-40 py-32 overflow-hidden border-t border-[#00D9C0]/10"
        >
            {/* Lightweight glow */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#00D9C0]/5 blur-[70px] rounded-full pointer-events-none"></div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm"
            >
                Events
            </motion.h2>

            {/* Cards (NO layout animation) */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {eventsData.map((event) => (
                    <motion.div
                        key={event.title + event.year}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                            setSelected(event);
                            setImageIndex(0);
                        }}
                        className="cursor-pointer group relative p-8 bg-[#0D0D0D] rounded-3xl shadow-md border border-white/5 hover:border-[#00D9C0]/50 hover:shadow-[0_15px_50px_rgba(0,217,192,0.15)] transition-all duration-300"
                    >
                        <span className="absolute top-4 right-4 text-xs border border-[#A78BFA]/40 text-[#A78BFA] bg-[#0D0D0D]/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-[0_0_10px_rgba(167,139,250,0.1)]">
                            {event.type}
                        </span>

                        <h3 className="text-lg font-semibold text-white group-hover:text-[#00D9C0] transition-colors duration-300">
                            {event.title}
                        </h3>

                        <p className="text-gray-400 mt-3 text-sm">{event.org}</p>

                        <p className="mt-4 text-[#00D9C0] font-medium text-sm tracking-wide">
                            {event.year}
                        </p>
                        
                        {/* Subtle bottom glow indicator on hover */}
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
                    </motion.div>
                ))}
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[900px] max-h-[90vh] overflow-y-auto bg-[#111111] rounded-3xl p-8 border border-[#00D9C0]/30 shadow-[0_0_50px_rgba(0,217,192,0.15)]"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-6 right-6 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full px-3 py-1 text-gray-500 hover:text-[#00D9C0] text-lg shadow border border-white/5 transition-colors"
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                {selected.title}
                            </h3>

                            <p className="text-gray-400 mb-4">
                                {selected.org} <span className="mx-2 text-gray-600">·</span> {selected.year}
                            </p>

                            {selected.desc && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-[#00D9C0] mb-3 uppercase tracking-wide">
                                        Details
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        {selected.desc.map((item: string, index: number) => (
                                            <li key={index} className="flex gap-2">
                                                <span className="text-[#A78BFA]">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="relative flex items-center justify-center mt-6">
                                <motion.img
                                    key={imageIndex}
                                    src={selected.images?.[imageIndex]}
                                    className="rounded-xl w-full max-h-[65vh] object-contain shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black/50"
                                />

                                {selected.images && selected.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/5 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-[#00D9C0] shadow hover:bg-[#222222] transition-colors"
                                        >
                                            ‹
                                        </button>

                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/5 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-[#00D9C0] shadow hover:bg-[#222222] transition-colors"
                                        >
                                            ›
                                        </button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
