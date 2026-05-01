"use client";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <section
            id="education"
            className="relative min-h-screen bg-[#0A0A0A] px-8 md:px-40 py-32 overflow-hidden border-t border-[#00D9C0]/10"
        >
            {/* Soft Glow Accent */}
            <div className="absolute top-24 right-24 w-80 h-80 bg-[#00D9C0]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm"
            >
                Education
            </motion.h2>

            <div className="relative border-l-2 border-[#00D9C0]/30 pl-10 space-y-16">
                {/* Item */}
                {[
                    {
                        title: "B.Tech in Computer Science and Engineering",
                        school: "Saveetha University",
                        year: "2023 - 2027",
                        score: "CGPA: 9.35",
                    },
                    {
                        title: "CBSE - 12th",
                        school: "Sudharsanam Vidhysaashram",
                        year: "2023",
                        score: "Percentage: 94.4%",
                    },
                    {
                        title: "CBSE - 10th",
                        school: "Loyola International Residential School",
                        year: "2021",
                        score: "Percentage: 89%",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="relative group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[45px] top-4 w-4 h-4 bg-[#00D9C0] rounded-full shadow-[0_0_15px_rgba(0,217,192,0.7)]"></div>

                        {/* Card */}
                        <div className="bg-[#111111] rounded-2xl p-8 border border-white/5 hover:border-[#00D9C0]/50 hover:shadow-[0_15px_50px_rgba(0,217,192,0.15)] transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#00D9C0] transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-gray-400 text-sm md:text-base">
                                {item.school} <span className="mx-2 text-gray-600">·</span> {item.year}
                            </p>

                            <p className="mt-5 text-[#00D9C0] font-medium tracking-wide">
                                {item.score}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}