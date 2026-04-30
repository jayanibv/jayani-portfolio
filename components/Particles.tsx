"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import { useRef } from "react";
import * as THREE from "three";

function FloatingParticles() {
    const ref = useRef<THREE.Points>(null);

    const sphere = inSphere(
        new Float32Array(6000),
        { radius: 1.5 }
    ) as Float32Array;

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.03;
        }
    });

    return (
        <Points ref={ref} positions={sphere} stride={3}>
            <PointMaterial
                transparent
                color="#a855f7"
                size={0.007}
                sizeAttenuation
                depthWrite={false}
            />
        </Points>
    );
}

export default function ParticleBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.4} />
                <FloatingParticles />
            </Canvas>
        </div>
    );
}