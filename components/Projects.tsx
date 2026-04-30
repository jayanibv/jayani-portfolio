"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"],
});

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
            title: "AI Sales & Voice Agent (Internship Project)",
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
            title: "Adversarial Federated Personalization – IEEE CICT 2025",
            desc: "Presented at the 9th IEEE International Conference (CICT 2025), IIITDM Kancheepuram. Focused on defending federated edge models from targeted poisoning attacks while preserving personalization.",
            highlight: true,
        },
    ];

    return (
        <section
            id="projects"
            className="relative min-h-screen bg-gradient-to-b from-white to-purple-50 px-8 md:px-40 py-32"
        >
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/20 blur-[120px] rounded-full"></div>

            <h2
                className={`${playfair.className} text-4xl md:text-5xl font-bold mb-20 text-zinc-900`}
                style={{ textShadow: "0 0 20px rgba(168,85,247,0.2)" }}
            >
                Projects & Research
            </h2>

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        onClick={() => setSelected(item)}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12 }}
                        whileHover={{ y: -6 }}
                        className={`cursor-pointer group relative flex flex-col justify-between
              h-[320px] p-8 rounded-3xl border transition-all duration-300
              ${item.highlight
                                ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-[0_20px_60px_rgba(124,58,237,0.35)]"
                                : "bg-white border-purple-100 shadow-lg hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]"
                            }`}
                    >
                        {item.highlight && (
                            <span className="absolute top-4 right-4 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                IEEE CICT 2025
                            </span>
                        )}

                        <div>
                            <h3
                                className={`text-xl font-semibold transition ${item.highlight
                                    ? "text-white"
                                    : "text-zinc-900 group-hover:text-purple-600"
                                    }`}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`mt-4 text-sm leading-relaxed line-clamp-4 ${item.highlight ? "text-white/90" : "text-gray-600"
                                    }`}
                            >
                                {item.desc}
                            </p>
                        </div>

                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-6 text-sm font-medium text-purple-600 hover:text-purple-800 transition"
                            >
                                View on GitHub →
                            </a>
                        )}

                        {!item.highlight && (
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition"></div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Floating Modal */}
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
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 220 }}
                            className="fixed z-50 top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2
                            w-[90%] md:w-[520px] 
                            bg-white rounded-3xl p-10 shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold text-zinc-900">
                                {selected.title}
                            </h3>

                            <p className="mt-6 text-gray-700 leading-relaxed">
                                {selected.desc}
                            </p>

                            {selected.link && (
                                <a
                                    href={selected.link}
                                    target="_blank"
                                    className="inline-block mt-6 text-purple-600 font-medium hover:text-purple-800"
                                >
                                    View on GitHub →
                                </a>
                            )}

                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-5 text-gray-500 hover:text-black text-lg"
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