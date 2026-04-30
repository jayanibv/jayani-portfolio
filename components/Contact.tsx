"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"],
});

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 flex flex-col items-center justify-center text-center px-8 overflow-hidden"
        >
            {/* Animated Glow Background */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-400/20 blur-[140px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-400/20 blur-[120px] rounded-full"></div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${playfair.className} text-4xl md:text-6xl font-bold mb-6 text-zinc-900`}
                style={{
                    textShadow: "0 0 25px rgba(168,85,247,0.25)",
                }}
            >
                Let’s Build Something Powerful
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg mb-12 max-w-2xl leading-relaxed"
            >
                I’m always open to collaborating on ambitious AI systems, scalable
                backend architectures, and meaningful technology that creates real
                impact. If you’re building something bold, let’s talk.
            </motion.p>

            {/* LinkedIn Button */}
            <motion.a
                href="https://www.linkedin.com/in/b-venkata-jayani-089a202a7/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-12 py-4 rounded-full text-white font-semibold text-lg
        bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500
        shadow-lg
        hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]
        transition-all duration-300"
            >
                Connect With Me
            </motion.a>
        </section>
    );
}