"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"],
});

export default function Education() {
    return (
        <section
            id="education"
            className="relative min-h-screen bg-gradient-to-b from-white to-purple-50 px-8 md:px-40 py-32 overflow-hidden"
        >
            {/* Soft Glow Accent */}
            <div className="absolute top-24 right-24 w-80 h-80 bg-purple-300/20 blur-[120px] rounded-full"></div>

            <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${playfair.className} text-4xl md:text-5xl font-bold mb-20 text-zinc-900`}
                style={{
                    textShadow: "0 0 20px rgba(168,85,247,0.15)",
                }}
            >
                Education
            </motion.h2>

            <div className="relative border-l-2 border-purple-400/60 pl-10 space-y-16">
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
                        <div className="absolute -left-[34px] top-2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.7)]"></div>

                        {/* Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-md border border-purple-100 hover:shadow-[0_15px_50px_rgba(168,85,247,0.15)] transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 group-hover:text-purple-600 transition">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-gray-600 text-sm md:text-base">
                                {item.school} · {item.year}
                            </p>

                            <p className="mt-4 text-purple-600 font-medium">
                                {item.score}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}