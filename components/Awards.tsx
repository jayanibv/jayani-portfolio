"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"],
});

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
        title: "AI Intern",
        org: "Aanine Healthcare Pvt Ltd",
        year: "2025",
        type: "Internship",
        images: ["/certificates/ai-intern.jpg"],
    },
    {
        title: "Python Full Stack Developer Intern",
        org: "Infosys Springboard",
        year: "2024",
        type: "Internship",
        images: ["/certificates/python-intern.jpg"],
    },
    {
        title: "JAVA Full Stack Developer Intern",
        org: "Tecnics Integration Pvt Ltd",
        year: "2025",
        type: "Internship",
        images: ["/certificates/java-intern.jpg"],
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
            "Software Testing",
            "Introduction to Internet of Things (IoT)",
            "Management Information System",
        ],
        images: [
            "/certificates/nptel-software-testing.jpg",
            "/certificates/nptel-iot.jpg",
            "/certificates/nptel-mis.jpg",
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
            className="relative min-h-screen bg-gradient-to-b from-white to-purple-50 px-8 md:px-40 py-32 overflow-hidden"
        >
            {/* Lightweight glow */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 blur-[70px] rounded-full"></div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`${playfair.className} text-4xl md:text-5xl font-bold mb-16 text-zinc-900`}
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
                        className="cursor-pointer group relative p-8 bg-white rounded-3xl shadow-md border border-purple-100 hover:shadow-lg transition-all"
                    >
                        <span className="absolute top-4 right-4 text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                            {award.type}
                        </span>

                        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-purple-600 transition">
                            {award.title}
                        </h3>

                        <p className="text-gray-600 mt-3 text-sm">{award.org}</p>

                        <p className="mt-4 text-purple-600 font-medium text-sm">
                            {award.year}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
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
                            className="fixed z-50 top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-[95%] md:w-[900px]
              max-h-[90vh]
              overflow-y-auto
              bg-white rounded-3xl p-8 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-6 right-6 z-50 
                bg-white/80 backdrop-blur-sm 
                rounded-full px-3 py-1
                text-gray-700 hover:text-black text-lg shadow"
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                                {selected.title}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {selected.org} · {selected.year}
                            </p>

                            {selected.type === "Certification" && selected.desc && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-purple-600 mb-3 uppercase tracking-wide">
                                        Certificates Included
                                    </h4>
                                    <ul className="space-y-2 text-sm text-zinc-700">
                                        {selected.desc.map((item: string, index: number) => (
                                            <li key={index} className="flex gap-2">
                                                <span className="text-purple-600">•</span>
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
                                    className="rounded-xl w-full max-h-[65vh] object-contain shadow-lg"
                                />

                                {selected.images && selected.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2
                      bg-white/80 backdrop-blur-sm
                      rounded-full px-3 py-2
                      text-2xl text-purple-600 shadow"
                                        >
                                            ‹
                                        </button>

                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2
                      bg-white/80 backdrop-blur-sm
                      rounded-full px-3 py-2
                      text-2xl text-purple-600 shadow"
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