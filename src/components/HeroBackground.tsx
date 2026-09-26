"use client";

import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StarsProps = React.JSX.IntrinsicElements["points"];

const Stars = forwardRef<THREE.Points, StarsProps>((props, ref) => {
  const innerRef = useRef<THREE.Points>(null);

  // Expose innerRef to parent via forwardRef
  useImperativeHandle(ref, () => innerRef.current!);

  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (!innerRef.current) return;

    innerRef.current.rotation.x -= delta / 25;
    innerRef.current.rotation.y -= delta / 30;

    const targetX = state.pointer.y * 0.15;
    const targetY = state.pointer.x * 0.15;

    innerRef.current.rotation.x = THREE.MathUtils.lerp(innerRef.current.rotation.x, targetX, 0.02);
    innerRef.current.rotation.y = THREE.MathUtils.lerp(innerRef.current.rotation.y, targetY, 0.02);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={innerRef} // Properly assigning ref here
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#985eff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

Stars.displayName = "Stars";

export default function HeroBackground() {
  return (
    <div className="w-full h-full absolute inset-0 z-5">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
