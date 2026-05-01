"use client";

import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./Particles";
import { useState } from "react";

const experienceData = [
    {
        title: "AI Intern",
        org: "Aanine Healthcare Pvt Ltd",
        year: "2025",
        skills: ["Machine Learning", "Python", "Data Processing", "Neural Networks"],
        image: "/certificates/ai-intern.jpg",
    },
    {
        title: "JAVA Full Stack Developer Intern",
        org: "Tecnics Integration Pvt Ltd",
        year: "2025",
        skills: ["Java", "Spring Boot", "React", "SQL", "API Design"],
        image: "/certificates/java-intern.jpg",
    },
    {
        title: "Python Full Stack Developer Intern",
        org: "Infosys Springboard",
        year: "2024",
        skills: ["Python", "Web Development", "Backend Architecture", "Databases"],
        image: "/certificates/python-intern.jpg",
    },
];

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section
            id="experience"
            className="relative min-h-screen bg-[#050505] px-8 md:px-20 py-32 overflow-hidden border-t border-[#00D9C0]/10"
        >
            <ParticleBackground />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-24 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm text-center uppercase"
                >
                    Mission Log
                </motion.h2>

                {/* Timeline Container */}
                <div className="relative w-full">
                    {/* The glowing center line (hidden on very small screens, placed left on mobile, center on md+) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00D9C0]/0 via-[#00D9C0]/20 to-[#00D9C0]/0 -translate-x-1/2">
                        {/* Energy pulse */}
                        <motion.div 
                            className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-[#00D9C0] to-transparent shadow-[0_0_15px_#00D9C0]"
                            animate={{ top: ["-10%", "110%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <div className="flex flex-col gap-16 md:gap-24 relative">
                        {experienceData.map((exp, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-1/2"></div>

                                    {/* Timeline Node */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00D9C0] shadow-[0_0_10px_#00D9C0] -translate-x-1/2 z-20 flex items-center justify-center">
                                        <motion.div 
                                            className="w-1.5 h-1.5 rounded-full bg-[#00D9C0]"
                                            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                        />
                                    </div>

                                    {/* Mission Card Container */}
                                    <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${isEven ? 'md:pr-16 md:justify-end' : 'md:pl-16 md:justify-start'}`}>
                                        <div 
                                            className="w-full max-w-[500px] p-6 sm:p-8 bg-[#0F0F0F] rounded-2xl border border-white/5 hover:border-[#00D9C0]/50 hover:shadow-[0_0_30px_rgba(0,217,192,0.15)] transition-all duration-500 relative group overflow-hidden"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            {/* Top Row: Badge & Year */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00D9C0]/20 to-[#A78BFA]/20 border border-[#00D9C0]/30 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D9C0] animate-pulse"></span>
                                                    <span className="text-[#E8E8E8] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                                        Mission Complete
                                                    </span>
                                                </div>
                                                <span className="text-[#00D9C0] font-mono text-sm tracking-wider">{exp.year}</span>
                                            </div>

                                            {/* Role & Org */}
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-[#00D9C0] transition-colors">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="w-2 h-2 rounded-full bg-[#00D9C0] shadow-[0_0_8px_#00D9C0] animate-pulse"></span>
                                                <h4 className="text-[#00D9C0] font-medium tracking-wide">
                                                    {exp.org}
                                                </h4>
                                            </div>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {exp.skills.map(skill => (
                                                    <span key={skill} className="px-3 py-1 text-xs text-[#E8E8E8] border border-[#00D9C0]/30 rounded-md font-mono bg-black/30">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Expanding Certificate Thumbnail */}
                                            <div 
                                                className="mt-6 relative rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video flex items-center justify-center cursor-pointer"
                                                onClick={() => setSelectedImage(exp.image)}
                                            >
                                                <div className="absolute inset-0 z-10 bg-black/60 group-hover:bg-black/0 transition-colors duration-500 flex items-center justify-center">
                                                    <span className="text-xs text-[#00D9C0] font-mono uppercase tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-300 border border-[#00D9C0]/50 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">
                                                        View Certificate
                                                    </span>
                                                </div>
                                                <motion.img 
                                                    src={exp.image}
                                                    alt={exp.title}
                                                    className="w-full h-full object-cover opacity-60"
                                                    animate={{ 
                                                        scale: hoveredIndex === index ? 1.05 : 1,
                                                        opacity: hoveredIndex === index ? 1 : 0.6
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            </div>

                                            {/* Subtle internal glow on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D9C0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FULL SCREEN IMAGE MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#00D9C0] text-xl shadow border border-white/5 transition-colors"
                        >
                            ✕
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Certificate Full View"
                            className="max-w-full max-h-full rounded-lg shadow-[0_0_50px_rgba(0,217,192,0.2)] object-contain"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
