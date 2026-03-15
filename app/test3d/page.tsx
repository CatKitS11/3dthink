import ThreeScene from "@/components/three/testT";
import test3d from "@/components/three/test3d";
import ThreeDBackground from "@/components/three/threebackground";
 
export default async function Test3DPage() {
  
  // ✅ Pass user data ถ้าจำเป็น
  return (
    <>
      <ThreeDBackground />
      <ThreeScene />
    </>
  );
}