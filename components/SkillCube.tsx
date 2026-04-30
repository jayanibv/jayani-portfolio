"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Edges } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingCube() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!);
    const hoveredRef = useRef(false);

    useFrame(() => {
        const mesh = meshRef.current;
        const hovered = hoveredRef.current;

        // Rotation
        mesh.rotation.x += hovered ? 0.01 : 0.004;
        mesh.rotation.y += hovered ? 0.02 : 0.008;

        // Smooth scale
        const targetScale = hovered ? 1.15 : 1;
        mesh.scale.lerp(
            new THREE.Vector3(targetScale, targetScale, targetScale),
            0.08
        );

        // Glow
        if (materialRef.current) {
            materialRef.current.emissiveIntensity = hovered ? 0.6 : 0.1;
        }
    });

    const skills = [
        { text: "AI", position: [0, 0, 1.75] },
        { text: "SQL", position: [0, 0, -1.75], rotation: [0, Math.PI, 0] },
        { text: "Python", position: [1.75, 0, 0], rotation: [0, Math.PI / 2, 0] },
        { text: "Node.js", position: [-1.75, 0, 0], rotation: [0, -Math.PI / 2, 0] },
        { text: "ML", position: [0, 1.75, 0], rotation: [-Math.PI / 2, 0, 0] },
        { text: "Web Systems", position: [0, -1.75, 0], rotation: [Math.PI / 2, 0, 0] },
    ];

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => (hoveredRef.current = true)}
            onPointerOut={() => (hoveredRef.current = false)}
        >
            <boxGeometry args={[3.5, 3.5, 3.5]} />

            <meshPhysicalMaterial
                ref={materialRef}
                color="#14b8a6"
                metalness={0.3}
                roughness={0.05}
                transmission={1}
                transparent
                opacity={0.45}
                thickness={1.5}
                clearcoat={1}
                clearcoatRoughness={0}
                emissive="#8b5cf6"
                emissiveIntensity={0.1}
            />

            <Edges scale={1.02} threshold={15}>
                <lineBasicMaterial color="#8b5cf6" />
            </Edges>

            {skills.map((skill, index) => (
                <Text
                    key={index}
                    position={skill.position as any}
                    rotation={(skill.rotation || [0, 0, 0]) as any}
                    fontSize={0.4}
                    color="#0f172a"
                    anchorX="center"
                    anchorY="middle"
                >
                    {skill.text}
                </Text>
            ))}
        </mesh>
    );
}

export default function SkillCube() {
    return (
        <div className="h-[34rem] w-full flex items-center justify-center cursor-pointer">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <pointLight position={[-5, -5, -5]} intensity={1.2} />

                <RotatingCube />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}