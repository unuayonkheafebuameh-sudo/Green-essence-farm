"use client";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function Leaf({
  color,
  position,
  rotation,
  scale,
  speed,
}: {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -1);
    shape.bezierCurveTo(0.9, -0.6, 0.9, 0.6, 0, 1.2);
    shape.bezierCurveTo(-0.9, 0.6, -0.9, -0.6, 0, -1);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 2,
      curveSegments: 16,
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(t) * 0.15;
    ref.current.rotation.y = rotation[1] + Math.sin(t * 0.7) * 0.5;
    ref.current.rotation.z = rotation[2] + Math.cos(t * 0.5) * 0.1;
  });

  return (
    <mesh ref={ref} geometry={geometry} position={position} rotation={rotation} scale={scale}>
      <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} />
    </mesh>
  );
}

export default function LeafScene({ active }: { active: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} color="#fff3c4" />
      <Leaf color="#2f8f3e" position={[-0.3, 0, 0]} rotation={[0.2, 0.4, 0.5]} scale={1.3} speed={0.9} />
      <Leaf color="#6ee000" position={[0.9, 0.5, -0.5]} rotation={[0.1, -0.5, -0.6]} scale={0.9} speed={1.1} />
      <Leaf color="#14532d" position={[0.5, -0.9, -0.3]} rotation={[0.3, 0.2, 1.2]} scale={0.7} speed={0.7} />
    </Canvas>
  );
}
