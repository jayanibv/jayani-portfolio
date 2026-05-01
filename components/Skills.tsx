"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./Particles";
import { useState } from "react";

const nodes = [
    // Languages
    { id: 'python', label: 'Python', category: 'Languages', x: 15, y: 15, color: '#00D9C0' },
    { id: 'java', label: 'JAVA', category: 'Languages', x: 30, y: 10, color: '#00D9C0' },
    { id: 'sql', label: 'SQL', category: 'Languages', x: 25, y: 25, color: '#00D9C0' },
    { id: 'js', label: 'Javascript', category: 'Languages', x: 10, y: 30, color: '#00D9C0' },

    // Frameworks
    { id: 'fastapi', label: 'FastAPI', category: 'Frameworks', x: 15, y: 65, color: '#818CF8' },
    { id: 'react', label: 'React', category: 'Frameworks', x: 10, y: 80, color: '#818CF8' },
    { id: 'node', label: 'Node.js', category: 'Frameworks', x: 25, y: 75, color: '#818CF8' },

    // AI/ML & LLM
    { id: 'numpy', label: 'NumPy', category: 'AI/ML & LLM', x: 50, y: 15, color: '#A78BFA' },
    { id: 'pandas', label: 'Pandas', category: 'AI/ML & LLM', x: 65, y: 10, color: '#A78BFA' },
    { id: 'rag', label: 'RAG', category: 'AI/ML & LLM', x: 85, y: 15, color: '#A78BFA' },
    { id: 'prompt', label: 'Prompt engineering', category: 'AI/ML & LLM', x: 90, y: 28, color: '#A78BFA' },
    { id: 'n8n', label: 'n8n workflow', category: 'AI/ML & LLM', x: 75, y: 30, color: '#A78BFA' },
    { id: 'agents', label: 'Agents', category: 'AI/ML & LLM', x: 60, y: 35, color: '#A78BFA' },
    { id: 'langchain', label: 'langchain', category: 'AI/ML & LLM', x: 85, y: 45, color: '#A78BFA' },
    { id: 'openapi', label: 'OpenAPI', category: 'AI/ML & LLM', x: 50, y: 45, color: '#A78BFA' },
    { id: 'gemini', label: 'Gemini API', category: 'AI/ML & LLM', x: 70, y: 50, color: '#A78BFA' },

    // Cloud and Tools
    { id: 'azure', label: 'Azure', category: 'Cloud and Tools', x: 75, y: 70, color: '#0891B2' },
    { id: 'gcp', label: 'google cloud', category: 'Cloud and Tools', x: 90, y: 65, color: '#0891B2' },
    { id: 'git', label: 'Git', category: 'Cloud and Tools', x: 80, y: 85, color: '#0891B2' },
    { id: 'docker', label: 'docker', category: 'Cloud and Tools', x: 92, y: 80, color: '#0891B2' },
    { id: 'twilio', label: 'Twilio', category: 'Cloud and Tools', x: 65, y: 85, color: '#0891B2' },
    { id: 'supabase', label: 'supabase', category: 'Cloud and Tools', x: 70, y: 75, color: '#0891B2' },

    // DB
    { id: 'mysql', label: 'MySQL', category: 'DB', x: 40, y: 80, color: '#38BDF8' },
    { id: 'postgres', label: 'PostgreSQL', category: 'DB', x: 50, y: 85, color: '#38BDF8' },
];

const edges = [
    // Languages intra
    ['python', 'java'], ['java', 'sql'], ['python', 'sql'], ['js', 'python'],
    // Frameworks intra
    ['fastapi', 'react'], ['react', 'node'], ['fastapi', 'node'],
    // DB intra
    ['mysql', 'postgres'],
    // Cloud and Tools intra
    ['azure', 'gcp'], ['azure', 'docker'], ['git', 'docker'], ['git', 'supabase'], ['supabase', 'twilio'], ['twilio', 'docker'],
    // AI/ML intra
    ['numpy', 'pandas'], ['pandas', 'rag'], ['rag', 'prompt'], ['prompt', 'langchain'], ['langchain', 'agents'], ['agents', 'n8n'], ['n8n', 'gemini'], ['gemini', 'openapi'], ['openapi', 'numpy'], ['rag', 'agents'],
    // Inter-cluster
    ['python', 'numpy'], ['js', 'react'], ['node', 'postgres'], ['sql', 'mysql'], ['fastapi', 'openapi'], ['docker', 'fastapi'], ['langchain', 'python']
];

export default function Skills() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <section
            id="skills"
            className="relative min-h-screen bg-[#050505] px-8 md:px-20 py-32 overflow-hidden border-t border-[#00D9C0]/10 flex flex-col items-center justify-center"
        >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#001515] blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0d0010] blur-[150px] rounded-full pointer-events-none"></div>
            <ParticleBackground />

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center mt-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-24 bg-clip-text text-transparent bg-gradient-to-r from-[#00D9C0] to-[#A78BFA] drop-shadow-sm text-center"
                >
                    My Universe of Skills
                </motion.h2>

                {/* Network Map Container - Increased Size */}
                <div className="relative w-full max-w-[1200px] h-[750px] mx-auto">
                    {/* Edges Layer (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
                        {edges.map(([sourceId, targetId], i) => {
                            const source = nodes.find(n => n.id === sourceId);
                            const target = nodes.find(n => n.id === targetId);
                            if (!source || !target) return null;

                            const hoveredNodeData = nodes.find(n => n.id === hoveredNode);
                            const hoveredCategory = hoveredNodeData?.category;
                            
                            // Highlight the line ONLY if BOTH nodes belong to the hovered category
                            const isCategoryEdge = hoveredCategory && (source.category === hoveredCategory && target.category === hoveredCategory);

                            return (
                                <motion.line
                                    key={i}
                                    x1={`${source.x}%`}
                                    y1={`${source.y}%`}
                                    x2={`${target.x}%`}
                                    y2={`${target.y}%`}
                                    stroke={isCategoryEdge ? source.color : "rgba(0, 217, 192, 0.15)"}
                                    strokeWidth={isCategoryEdge ? 2 : 1}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: i * 0.05 }}
                                    className="transition-colors duration-300"
                                />
                            );
                        })}
                    </svg>

                    {/* Nodes Layer */}
                    {nodes.map((node, i) => {
                        const isHovered = hoveredNode === node.id;
                        const isDimmed = hoveredNode && !isHovered;

                        return (
                            <motion.div
                                key={node.id}
                                className="absolute -ml-4 -mt-4 flex flex-col items-center justify-center cursor-crosshair z-20"
                                style={{
                                    left: `${node.x}%`,
                                    top: `${node.y}%`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                                animate={{
                                    scale: isHovered ? 1.3 : (isDimmed ? 0.9 : 1),
                                    opacity: isHovered ? 1 : (isDimmed ? 0.5 : 1)
                                }}
                            >
                                {/* The Glowing Dot */}
                                <motion.div
                                    animate={{
                                        boxShadow: isHovered
                                            ? `0 0 25px 5px ${node.color}80`
                                            : `0 0 10px 2px ${node.color}40`
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="w-4 h-4 rounded-full relative"
                                    style={{ backgroundColor: node.color }}
                                >
                                    {/* Pulse effect */}
                                    {!hoveredNode && (
                                        <div 
                                            className="absolute inset-0 rounded-full animate-ping opacity-30" 
                                            style={{ backgroundColor: node.color, animationDuration: `${2 + (i % 2)}s` }} 
                                        />
                                    )}
                                </motion.div>

                                {/* Label */}
                                <span 
                                    className="absolute top-6 whitespace-nowrap font-medium tracking-wider text-sm transition-all duration-300 pointer-events-none"
                                    style={{ 
                                        color: isHovered ? '#FFFFFF' : '#9CA3AF',
                                        textShadow: isHovered ? `0 0 10px ${node.color}` : 'none'
                                    }}
                                >
                                    {node.label}
                                </span>

                                {/* Tooltip (Category only, removed proficiency percentage) */}
                                {isHovered && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: -35 }}
                                        className="absolute whitespace-nowrap bg-[#111111] border border-white/10 px-3 py-1 rounded-full text-xs font-bold shadow-xl pointer-events-none"
                                        style={{ color: node.color, borderColor: `${node.color}50` }}
                                    >
                                        {node.category}
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
