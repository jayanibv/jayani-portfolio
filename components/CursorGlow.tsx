"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
    const [isMounted, setIsMounted] = useState(false);
    
    // We use useMotionValue and useSpring for smooth lag effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsMounted(true);
        
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    if (!isMounted) return null;

    return (
        <motion.div
            style={{
                x: smoothX,
                y: smoothY,
            }}
            className="fixed top-0 left-0 w-[50px] h-[50px] -ml-[25px] -mt-[25px] rounded-full pointer-events-none z-50 mix-blend-screen"
        >
            <div className="w-full h-full bg-[#00D9C0] opacity-15 blur-[15px] rounded-full" />
        </motion.div>
    );
}
