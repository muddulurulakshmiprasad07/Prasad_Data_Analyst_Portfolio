
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const globe = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (globe.current) {
      globe.current.rotation.y += delta * 0.25;
      globe.current.rotation.x += delta * 0.06;
    }
  });

  return (
    <group ref={globe}>
      {/* Main wireframe globe */}
      <mesh>
        <sphereGeometry args={[1.35, 40, 40]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Inner glowing sphere */}
      <mesh>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial
          color="#b8860b"
          transparent
          opacity={0.07}
        />
      </mesh>

      {/* Orbit rings */}
      <mesh rotation={[1.1, 0.3, 0.2]}>
        <torusGeometry args={[1.75, 0.012, 12, 100]} />
        <meshBasicMaterial color="#f5d76e" />
      </mesh>

      <mesh rotation={[0.5, 1.1, 0.7]}>
        <torusGeometry args={[1.95, 0.008, 12, 100]} />
        <meshBasicMaterial color="#d4af37" />
      </mesh>

      {/* Data points */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((point) => {
        const angle = (point / 8) * Math.PI * 2;

        return (
          <mesh
            key={point}
            position={[
              Math.cos(angle) * 1.5,
              Math.sin(angle) * 0.6,
              Math.sin(angle) * 1.2,
            ]}
          >
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshBasicMaterial color="#fff1a8" />
          </mesh>
        );
      })}
    </group>
  );
}

export default function DataGlobe() {
  return (
    <div className="data-globe">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={1} />
        <Globe />
      </Canvas>
    </div>
  );
}
