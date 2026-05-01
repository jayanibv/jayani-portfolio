"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "./Particles";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"],
});

const techSkills = [
    { name: "LangChain", top: "10%", left: "85%", delay: 0 },
    { name: "Data Analytics", top: "30%", left: "105%", delay: 0.2 },
    { name: "Python", top: "50%", left: "115%", delay: 0.4 },
    { name: "AI/ML", top: "70%", left: "105%", delay: 0.6 },
];

const Constellation = () => {
    // A set of points orbiting/scattered around the center (200, 200)
    const points = [
        [200, 30], [280, 50], [350, 120], [370, 200], [340, 280], [250, 360],
        [150, 350], [60, 290], [30, 200], [60, 110], [130, 40],
        // inner ring
        [200, 80], [290, 130], [310, 220], [240, 300], [140, 290], [80, 210], [120, 120]
    ];

    // Some connecting lines forming a web
    const lines = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 0],
        [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 11],
        [0, 11], [2, 12], [4, 14], [7, 16], [9, 17]
    ];

    return (
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none z-10 scale-[1.3] md:scale-[1.5]">
            {lines.map((line, i) => (
                <motion.line
                    key={`line-${i}`}
                    x1={points[line[0]][0]}
                    y1={points[line[0]][1]}
                    x2={points[line[1]][0]}
                    y2={points[line[1]][1]}
                    stroke="#00D9C0"
                    strokeWidth="1.5"
                    animate={{ opacity: [0.1, 0.8, 0.1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3 + (i % 4),
                        delay: (i % 5) * 0.4,
                        ease: "easeInOut"
                    }}
                />
            ))}
            {points.map((pt, i) => (
                <motion.circle
                    key={`pt-${i}`}
                    cx={pt[0]}
                    cy={pt[1]}
                    r={i % 2 === 0 ? 3 : 2}
                    fill="#00D9C0"
                    style={{ filter: "drop-shadow(0 0 6px #00D9C0)" }}
                    animate={{ opacity: [0.5, 1, 0.5], r: [2, 3.5, 2] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2 + (i % 3),
                        delay: (i % 4) * 0.5,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </svg>
    );
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen bg-black flex flex-col justify-center items-center text-white overflow-hidden"
        >
            {/* PARTICLES BACKGROUND */}
            <ParticleBackground />

            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-16 mt-20 md:mt-0">

                {/* Left Column: Typography */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 text-[#00D9C0] font-mono tracking-[0.3em] uppercase text-xs md:text-sm shadow-[#00D9C0]/20 drop-shadow-md"
                    >
                        INITIALIZING PROTOCOL...
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`${playfair.className} flex flex-col`}
                    >
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-tight drop-shadow-lg">
                            Hello, I'm
                        </span>
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-tight md:leading-none pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-[0_0_15px_rgba(0,217,192,0.3)]">
                            B Venkata Jayani
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-6 text-lg md:text-xl text-gray-300 font-light h-8 tracking-wide"
                    >
                        <Typewriter
                            words={[
                                "AI/ML Enthusiast",
                                "Full Stack Developer",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={2000}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-8 text-gray-400 max-w-md text-sm md:text-base leading-relaxed font-light"
                    >
                        Architecting robust backend systems and deploying scalable AI solutions. Exploring the intersection of high-performance engineering and advanced machine learning.
                    </motion.p>
                </div>

                {/* Right Column: Visuals */}
                <div className="flex-1 relative flex justify-center items-center w-full max-w-[320px] md:max-w-[450px] aspect-square">

                    {/* Floating Skill Tags */}
                    {techSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + skill.delay, duration: 0.6 }}
                            className="absolute z-30"
                            style={{
                                top: skill.top,
                                left: skill.left,
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 + (index % 3), ease: "easeInOut", delay: (index % 4) * 0.5 }}
                                className="px-4 py-1.5 bg-[#121212]/80 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_15px_rgba(167,139,250,0.1)] text-xs md:text-sm font-mono text-gray-300 tracking-wider"
                            >
                                {skill.name}
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* Profile Image & Constellation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-20 w-48 h-48 md:w-64 md:h-64 flex justify-center items-center"
                    >
                        {/* The Constellation Layer */}
                        <Constellation />

                        {/* Profile Photo - Pure Circle */}
                        <div className="relative z-20 w-full h-full rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,217,192,0.3)] bg-black/50 backdrop-blur-sm">
                            <img
                                src="/profile.JPG"
                                alt="B Venkata Jayani"
                                className="w-full h-full object-cover scale-105"
                            />
                        </div>

                        {/* Soft background glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D9C0]/30 to-[#A78BFA]/20 blur-3xl -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 text-gray-500 font-mono text-xs md:text-sm tracking-[0.2em] z-20 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-[#00D9C0]/0 via-[#00D9C0]/40 to-[#00D9C0]/0" />
                SCROLL
            </motion.div>

        </section>
    );
}