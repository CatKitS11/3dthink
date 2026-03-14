"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Object3D,
  Color,
  InstancedMesh,
  InstancedBufferAttribute,
  SphereGeometry,
  MeshBasicMaterial,
  DynamicDrawUsage,
} from "three";

const COUNT = 8000;

function ParticleSwarm() {
  const meshRef = useRef<InstancedMesh | null>(null);
  const seedsRef = useRef<Float32Array | null>(null);
  const colorsRef = useRef<Float32Array | null>(null);
  const dummyRef = useRef<Object3D | null>(null);
  const tmpColorRef = useRef<Color | null>(null);
  const [ready, setReady] = useState(false);

  // ✅ ทุกอย่าง init ใน useEffect = client-only = ไม่ hydration error
  useEffect(() => {
    seedsRef.current = new Float32Array(COUNT * 3);
    colorsRef.current = new Float32Array(COUNT * 3);
    dummyRef.current = new Object3D();
    tmpColorRef.current = new Color();

    for (let i = 0; i < COUNT * 3; i++) {
      seedsRef.current[i] = Math.random() * 2 - 1;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, []);

  // ✅ attach instanceColor หลัง mesh + colors พร้อม
  useEffect(() => {
    const mesh = meshRef.current;
    const colors = colorsRef.current;
    if (!mesh || !colors) return;

    const attr = new InstancedBufferAttribute(colors, 3);
    attr.setUsage(DynamicDrawUsage);
    mesh.instanceColor = attr;
  }, [ready]);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    const seeds = seedsRef.current;
    const colors = colorsRef.current;
    const dummy = dummyRef.current;
    const tmpColor = tmpColorRef.current;

    if (!mesh || !seeds || !colors || !dummy || !tmpColor || !ready) {
      return;
    }

    const time = clock.getElapsedTime();

    for (let i = 0; i < COUNT; i++) {
      const t = i / COUNT;
      const si = i * 3;
      const armIdx = i % 5;

      // Galaxy spiral
      const armAngle = (armIdx / 5) * Math.PI * 2;
      const dist = Math.pow(t, 0.5) * 40;
      const spiral = dist * 0.3 + armAngle + time * 0.15;

      const x = Math.cos(spiral) * dist + seeds[si] * t * 3;
      const z = Math.sin(spiral) * dist + seeds[si + 2] * t * 3;
      const y =
        Math.sin(i * 0.5 + time * 0.3) * 2 * t +
        seeds[si + 1] * t * 2;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(0.8 + (1 - t) * 0.5);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      // Color: cyan → purple
      const hue = (0.55 + t * 0.3 + Math.sin(time * 0.15) * 0.05) % 1;
      const sat = 0.6 + t * 0.4;
      const light = 0.35 + (1 - t) * 0.45;
      tmpColor.setHSL(hue, sat, light);

      colors[si] = tmpColor.r;
      colors[si + 1] = tmpColor.g;
      colors[si + 2] = tmpColor.b;
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[
        new SphereGeometry(0.08, 4, 4),
        new MeshBasicMaterial({ toneMapped: false }),
        COUNT,
      ]}
      frustumCulled={false}
    />
  );
}

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime() * 0.1;
    camera.position.x = Math.cos(t) * 80;
    camera.position.z = Math.sin(t) * 80;
    camera.position.y = 20 + Math.sin(t * 0.5) * 10;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeDBackground() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        camera={{
          position: [0, 30, 80],
          fov: 60,
          near: 0.1,
          far: 500,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ParticleSwarm />
        <CameraRig />
      </Canvas>
    </div>
  );
}