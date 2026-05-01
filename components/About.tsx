"use client";

import SkillCube from "./SkillCube";
import { motion } from "framer-motion";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

export default function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-[#0A0A0A] text-[#E8E8E8] px-12 py-32 border-t border-[#00D9C0]/10"
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm"
            >
                About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <p className={`${merriweather.className} text-lg text-gray-300 leading-relaxed text-justify`}>
                        I’m a passionate <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">AI Engineer</span>, <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">Full Stack Developer</span> & <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">Creative Technologist</span> with experience building real-world solutions
                        in <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">machine learning</span>, <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">backend systems</span>, and <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">immersive web experiences</span>. My journey includes internships
                        focused on AI research, full-stack development, and system design blending analytical precision with
                        aesthetic creativity.
                    </p>

                    <p className={`${merriweather.className} text-lg text-gray-300 leading-relaxed text-justify`}>
                        I enjoy transforming complex ideas into elegant, efficient solutions whether that’s <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">optimizing neural networks</span>, <span className="text-[#00D9C0] font-semibold drop-shadow-[0_0_8px_rgba(0,217,192,0.5)]">architecting scalable backend systems</span>, or crafting interactive web experiences. I’ve
                        presented research at tech conferences, collaborated on ideation challenges, and contributed to
                        production-ready AI and full-stack projects.
                    </p>

                    {/* Contact Info List Container */}
                    <div className="mt-8 bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-[#00D9C0]/50 hover:shadow-[0_0_15px_rgba(0,217,192,0.3)] transition-all duration-300">
                        <ul className="text-gray-300 space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="text-[#00D9C0] text-xl">📞</span> 
                                <span><strong className="text-white">Phone:</strong> +91-8122896968</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#00D9C0] text-xl">📧</span> 
                                <span><strong className="text-white">Email:</strong> jayanibv@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#00D9C0] text-xl">🎓</span> 
                                <span><strong className="text-white">Degree:</strong> B.Tech in CSE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#00D9C0] text-xl">💼</span> 
                                <span><strong className="text-white">Location:</strong> Chennai, India</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Skill Cube */}
                <div className="bg-[#111111] p-8 rounded-3xl border border-white/5 hover:border-[#00D9C0]/50 hover:shadow-[0_0_15px_rgba(0,217,192,0.3)] transition-all duration-300 flex justify-center items-center h-full min-h-[400px]">
                    <SkillCube />
                </div>
            </div>
        </section>
    );
}