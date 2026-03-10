import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";

import Navbar from "@/components/navbar";
import FeaturesPage from "@/components/feature";
import FooterPage from '@/components/footer'
import { BackgroundPattern } from "@/components/background-pattern";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <BackgroundPattern />
        <Navbar className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-md dark:bg-black/50 z-50" />
        <div className="pt-16">
          <Hero />
          <FeaturesPage />
          <FooterPage />
        </div>
      </div>
    </>
  );
}
