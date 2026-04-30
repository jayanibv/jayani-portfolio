"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "./Particles";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"],
});

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen bg-black flex flex-col justify-center items-center text-center text-white overflow-hidden"
        >
            {/* PARTICLES BACKGROUND */}
            <ParticleBackground />

            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center">

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className={`${playfair.className} text-6xl md:text-8xl font-bold tracking-wide`}
                    style={{
                        textShadow: "0 0 40px rgba(168,85,247,0.8)"
                    }}
                >
                    B Venkata Jayani
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 text-xl text-gray-300"
                >
                    <Typewriter
                        words={[
                            "AI/ML Enthusiast",
                            "Web Developer"
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-20 text-gray-400 z-20"
            >
                ↓ Scroll
            </motion.div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    className="relative block w-full h-20"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#ffffff"
                        d="M0,224L60,197C120,171,240,117,360,123C480,128,600,192,720,197C840,203,960,149,1080,128C1200,107,1320,117,1380,123L1440,128L1440,320L0,320Z"
                    />
                </svg>
            </div>

        </section>
    );
}