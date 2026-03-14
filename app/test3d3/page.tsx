"use client";
import dynamic from 'next/dynamic';


const ThreeDBackground = dynamic(() => import('@/components/three/threebackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-black"></div> // แสดง loader หรือพื้นหลังดำขณะโหลด
});


export default function DesignStudio() {
  return (
    <div className="h-screen w-full bg-slate-900">
      <ThreeDBackground />
    </div>
  );
}