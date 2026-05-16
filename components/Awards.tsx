"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* -----------------------------
   DATA
------------------------------ */

const awardsData = [
    {
        title: "Student Topper Award",
        org: "Saveetha University",
        year: "2024",
        type: "Award",
        images: ["/certificates/topper2024.jpg"],
    },
    {
        title: "Student Topper Award",
        org: "Saveetha University",
        year: "2025",
        type: "Award",
        images: ["/certificates/topper2025.jpg"],
    },
    {
        title: "Oracle Certifications",
        org: "Oracle",
        year: "2024",
        type: "Certification",
        desc: [
            "Oracle SE11 Java Developer",
            "Oracle Database SQL Certified Specialist",
        ],
        images: [
            "/certificates/oracle-java.jpg",
            "/certificates/oracle-sql.jpg",
        ],
    },
    {
        title: "Cisco Certification",
        org: "Cisco",
        year: "2024",
        type: "Certification",
        desc: ["CCNA – Cisco Certified Network Associate"],
        images: ["/certificates/ccna.jpg"],
    },
    {
        title: "Salesforce Certification",
        org: "Salesforce",
        year: "2025",
        type: "Certification",
        desc: ["Salesforce Certified Agent Specialist"],
        images: ["/certificates/salesforce.jpg"],
    },
    {
        title: "NPTEL Certifications",
        org: "National Programme on Technology Enhanced Learning (NPTEL)",
        year: "2024-2026",
        type: "Certification",
        desc: [
            "Human Computer Interaction - IIITDelhi",
            "Introduction to Internet of Things (IoT) - IIT Kharagpur",
            "Management Information System- IIT Kharagpur",
            "Software Testing - IIITBangalore",
        ],
        images: [
            "/certficates/nptel-hic.png",
            "/certificates/nptel-iot.jpg",
            "/certificates/nptel-mis.jpg",
            "/certificates/nptel-software-testing.jpg",
        ],
    },
];

export default function Awards() {
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
            id="awards"
            className="relative min-h-screen bg-[#000000] px-8 md:px-40 py-32 overflow-hidden border-t border-[#00D9C0]/10"
        >
            {/* Lightweight glow */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#00D9C0]/5 blur-[70px] rounded-full pointer-events-none"></div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm"
            >
                Awards & Certifications
            </motion.h2>

            {/* Cards (NO layout animation) */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {awardsData.map((award) => (
                    <motion.div
                        key={award.title + award.year}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                            setSelected(award);
                            setImageIndex(0);
                        }}
                        className="cursor-pointer group relative p-8 bg-[#111111] rounded-3xl shadow-md border border-white/5 hover:border-[#00D9C0]/50 hover:shadow-[0_15px_50px_rgba(0,217,192,0.15)] transition-all duration-300"
                    >
                        <span className="absolute top-4 right-4 text-xs border border-[#A78BFA]/40 text-[#A78BFA] bg-[#111111]/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-[0_0_10px_rgba(167,139,250,0.1)]">
                            {award.type}
                        </span>

                        <h3 className="text-lg font-semibold text-white group-hover:text-[#00D9C0] transition-colors duration-300">
                            {award.title}
                        </h3>

                        <p className="text-gray-400 mt-3 text-sm">{award.org}</p>

                        <p className="mt-4 text-[#00D9C0] font-medium text-sm tracking-wide">
                            {award.year}
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

                            {selected.type === "Certification" && selected.desc && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-[#00D9C0] mb-3 uppercase tracking-wide">
                                        Certificates Included
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