
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const values = new Float32Array(1800 * 3);

    for (let i = 0; i < 1800; i++) {
      values[i * 3] = (Math.random() - 0.5) * 15;
      values[i * 3 + 1] = (Math.random() - 0.5) * 10;
      values[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return values;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.025;
      ref.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#d4af37"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="particle-background">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
