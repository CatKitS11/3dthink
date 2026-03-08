"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { useState } from "react";
import Link from "next/link";

function DraggableBox() {
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      scale={active ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={[0, 0.65, 0]} // ยกขึ้นจากพื้นครึ่งหนึ่ง
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "red"} />
    </mesh>
  );
}

export default function DesignStudio() {
  return (
    <div className="h-screen w-full bg-slate-900">
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 50 }}>
        {/* แสงสว่างแบบ Studio */}
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* วัตถุ 3D */}
        <DraggableBox />
        
        {/* พื้น */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
        
        {/* เงาที่พื้นสวยๆ */}
        <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={10} blur={1.5} far={0.8} />

        {/* ตัวควบคุมกล้อง หมุน/ซูม */}
        <OrbitControls makeDefault />
        
        {/* สภาพแวดล้อมจำลอง */}
        <Environment preset="city" />
      </Canvas>
      
      {/* UI ทับหน้าจอ */}
      <div className="absolute top-5 left-5 text-white bg-black/50 p-4 rounded-xl">
        <h1 className="font-bold text-xl">Next-Gen Design Studio</h1>
        <p className="text-sm text-gray-300">Click the box to resize • Drag to rotate</p>
        <Link href="/" className="px-4 py-2 bg-white/20 hover:bg-white/40 rounded-lg transition">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}