"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
    const [selected, setSelected] = useState<any>(null);

    const data = [
        {
            title: "RAG-Based AI Chatbot",
            desc: "Built a Retrieval-Augmented Generation pipeline integrating vector search, embeddings, and LLM-based reasoning using LangChain and FAISS for grounded AI responses.",
            link: "https://github.com/jayanibv/RAG-chatbot",
        },
        {
            title: "Conversational AI – Gemini + LangChain",
            desc: "Developed a context-aware chatbot using Google Gemini API with LangChain memory and a real-time Gradio interface for seamless AI interactions.",
            link: "https://github.com/jayanibv/Langchain-Gemini-Chatbot",
        },
        {
            title: "AI Sales & Voice Agent",
            desc: "Developed an AI-powered Sales & HR voice agent using Twilio, ElevenLabs, PostgreSQL, and n8n orchestration. Designed automated conversational workflows with voice synthesis, call handling, and backend database integration.",
        },
        {
            title: "Online Event Management System",
            desc: "Full-stack booking platform built during Infosys internship using Flask and MySQL with authentication, time-slot validation, and booking logic.",
            link: "https://github.com/jayanibv/event_management",
        },
        {
            title: "Resume-Rhapsody – AI Resume Builder",
            desc: "AI-powered resume generator using OpenAI API to dynamically create ATS-friendly resumes tailored to job roles with PDF export functionality.",
            link: "https://github.com/jayanibv/Resume-Raphsody",
        },
        {
            title: "Adversarial Federated Personalization",
            desc: "Presented at the 9th IEEE International Conference (CICT 2025), IIITDM Kancheepuram. Focused on defending federated edge models from targeted poisoning attacks while preserving personalization.",
            highlight: true,
        },
    ];

    return (
        <section
            id="projects"
            className="relative min-h-screen bg-[#000000] px-8 md:px-40 py-32 border-t border-[#00D9C0]/10"
        >
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#00D9C0]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm"
            >
                Projects & Research
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        onClick={() => setSelected(item)}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12 }}
                        whileHover={{ y: -6 }}
                        className="cursor-pointer group relative flex flex-col justify-between h-[320px] p-8 rounded-3xl border border-white/5 bg-[#0D0D0D] transition-all duration-300 hover:border-[#00D9C0]/50 hover:shadow-[0_0_20px_rgba(0,217,192,0.2)]"
                    >
                        {item.highlight && (
                            <span className="absolute top-4 right-4 text-xs border border-[#A78BFA]/40 text-[#A78BFA] px-3 py-1 rounded-full backdrop-blur-sm">
                                IEEE CICT 2025
                            </span>
                        )}

                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-[#00D9C0] transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-sm leading-relaxed line-clamp-4 text-gray-400">
                                {item.desc}
                            </p>
                        </div>

                        {item.link && (
                            <div className="mt-6 text-sm font-medium text-[#00D9C0] hover:text-white transition-colors">
                                View on GitHub →
                            </div>
                        )}
                        
                        {/* Subtle bottom glow indicator on hover */}
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
                    </motion.div>
                ))}
            </div>

            {/* Floating Modal */}
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
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 220 }}
                            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[520px] bg-[#111111] border border-[#00D9C0]/30 rounded-3xl p-10 shadow-[0_0_50px_rgba(0,217,192,0.15)]"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {selected.title}
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                {selected.desc}
                            </p>

                            {selected.link && (
                                <a
                                    href={selected.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-8 text-sm uppercase tracking-widest font-medium text-[#00D9C0] hover:text-white transition-colors"
                                >
                                    View on GitHub →
                                </a>
                            )}

                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-[#00D9C0] text-xl transition-colors"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}