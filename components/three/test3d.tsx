"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Test3DPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Creating the scene
    const scene = new THREE.Scene();

    // 2. Creating the camera
    // PerspectiveCamera(องศาการมอง, อัตราส่วนหน้าจอ, ระยะใกล้สุดที่เห็น, ระยะไกลสุดที่เห็น)
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // 3. Creating the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // นำ canvas ของ Three.js ไปใส่ใน div ที่เราเตรียมไว้
    containerRef.current.appendChild(renderer.domElement);

    // 4. Adding a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x0202FA, wireframe: true }); // color: 0x0202FA = blue
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

    // Cleanup when component unmounts
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
    <div className="absolute inset-0 z-[-7]">
      <div ref={containerRef} className="" />
    </div>
  );
}