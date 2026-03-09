"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import type { ClientSessionType } from "@/type/auth.type";

export default function Test3DPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: session } = authClient.useSession() as unknown as { data: ClientSessionType };   

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Creating the scene (สร้างฉาก)
    const scene = new THREE.Scene();

    // 2. Creating the camera (สร้างกล้อง)
    // PerspectiveCamera(องศาการมอง, อัตราส่วนหน้าจอ, ระยะใกล้สุดที่เห็น, ระยะไกลสุดที่เห็น)
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // 3. Creating the renderer (สร้างตัววาดภาพ)
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // นำ canvas ของ Three.js ไปใส่ใน div ที่เราเตรียมไว้
    containerRef.current.appendChild(renderer.domElement);

    // 4. Adding a cube (สร้างกล่องสี่เหลี่ยมตามตัวอย่างในคู่มือ)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }); // สีเขียว
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 5. Animation loop (การทำให้วัตถุเคลื่อนที่)
    const animate = () => {
      requestAnimationFrame(animate);

      // หมุนกล่อง
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle Resize (ทำให้รองรับการย่อ/ขยายหน้าจอ)
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: ล้างทรัพยากรเมื่อปิดหน้าหน้านี้
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* ส่วนที่ Three.js จะวาดภาพลงไป */}
      <div ref={containerRef} className="w-full h-full" />
      
      {/* ปุ่มกดกลับหน้าหลัก */}
      <div className="absolute top-10 left-10 text-white z-10">
        <h1 className="text-2xl font-bold mb-4">Three.js Test Scene</h1>
        <span className="block mb-2">User: {session?.user?.name}</span>
        <span className="block mb-2">Role: {session?.user?.role}</span>
        <Link href="/" className="px-4 py-2 bg-white/20 hover:bg-white/40 rounded-lg transition">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}