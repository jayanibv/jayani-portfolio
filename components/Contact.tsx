"use client";
import { motion } from "framer-motion";
import ParticleBackground from "./Particles";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen bg-[#000000] flex flex-col items-center justify-center text-center px-8 overflow-hidden border-t border-[#00D9C0]/10"
        >
            <ParticleBackground />

            {/* Animated Glow Background */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#00D9C0]/5 blur-[140px] rounded-full animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#A78BFA]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm"
            >
                Let’s Build Something Powerful
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg mb-16 max-w-2xl leading-relaxed"
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-4 rounded-full font-semibold text-lg tracking-widest uppercase text-[#00D9C0] border border-[#00D9C0] hover:bg-[#00D9C0]/10 hover:shadow-[0_0_30px_rgba(0,217,192,0.3)] transition-all duration-300"
            >
                Connect With Me
            </motion.a>

            {/* Creative Cosmic Footer */}
            <div className="absolute bottom-0 w-full border-t border-[#00D9C0]/10 bg-[#050505]/80 backdrop-blur-md px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6 z-20">

                {/* Left: Branding */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="text-xl md:text-2xl font-bold tracking-tighter">
                        <span className="text-white">#</span>
                        <span className="text-[#00D9C0]"> Jayani</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1.5 font-mono tracking-wider">
                        Backend Architect · AI Explorer
                    </p>
                </div>

                {/* Center: Quick Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    <a href="#about" className="hover:text-[#00D9C0] hover:shadow-[#00D9C0] transition-colors duration-300">About</a>
                    <a href="#skills" className="hover:text-[#00D9C0] hover:shadow-[#00D9C0] transition-colors duration-300">Skills</a>
                    <a href="#experience" className="hover:text-[#00D9C0] hover:shadow-[#00D9C0] transition-colors duration-300">Log</a>
                    <a href="#projects" className="hover:text-[#00D9C0] hover:shadow-[#00D9C0] transition-colors duration-300">Projects</a>
                </div>

                {/* Right: Copyright & Quirky Text */}
                <div className="text-center md:text-right text-gray-500 text-xs font-mono tracking-widest leading-relaxed">
                    <p>while (alive) {`{ learn(); build(); deploy(); }`}</p>
                    <p className="mt-1">Crafted with 🤍, built for destiny ✨ &copy; {new Date().getFullYear()} B Venkata Jayani</p>
                </div>
            </div>
        </section>
    );
}