"use client";

import SkillCube from "./SkillCube";
import { motion } from "framer-motion";
import { Great_Vibes, Merriweather } from "next/font/google";

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
});
const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

export default function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 text-black px-12 py-32"
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${greatVibes.className} text-5xl md:text-6xl font-bold text-purple-700 mb-8`}
            >
                About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <p className={`${merriweather.className} text-lg text-gray-800 leading-relaxed text-justify`}>
                        I’m a passionate AI Engineer, Full Stack Developer & Creative Technologist with experience building real-world solutions
                        in machine learning, backend systems, and immersive web experiences. My journey includes internships
                        focused on AI research, full-stack development, and system design blending analytical precision with
                        aesthetic creativity.
                    </p>

                    <p className={`${merriweather.className} text-lg text-gray-800 leading-relaxed text-justify`}>
                        I enjoy transforming complex ideas into elegant, efficient solutions whether that’s optimizing
                        neural networks, architecting scalable backend systems, or crafting interactive web experiences. I’ve
                        presented research at tech conferences, collaborated on ideation challenges, and contributed to
                        production-ready AI and full-stack projects.
                    </p>

                    {/* Contact Info List */}
                    <ul className="mt-4 text-gray-700 space-y-2">
                        <li>
                            <strong className="text-purple-600">📞 Phone:</strong> +91-8122896968
                        </li>
                        <li>
                            <strong className="text-purple-600">📧 Email:</strong> jayanibv@gmail.com
                        </li>
                        <li>
                            <strong className="text-purple-600">🎓 Degree:</strong> B.Tech in Computer Science and Engineering
                        </li>
                        <li>
                            <strong className="text-purple-600">💼 Location:</strong> Chennai, India
                        </li>
                    </ul>

                </div>

                {/* Skill Cube */}
                <SkillCube />
            </div>
        </section>
    );
}