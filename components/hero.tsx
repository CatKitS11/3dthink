import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import ThreeDBackground from "@/components/three/threebackground";
import Test3DPage from "@/components/three/test3d";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <ThreeDBackground />
      {/* <Test3DPage /> */}
      <div className="relative z-10 text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            Just released v0.0.2 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          AI-Powered 3D Visualization Platform
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Create stunning 3D environments, generate assets with AI,
          and explore spaces through immersive real-time walkthroughs.
          All directly in your browser.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="#features">
          <Button size="lg" className="rounded-full text-base">
            Start Creating <ArrowUpRight className="h-5! w-5!" />
          </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="h-5! w-5!" /> Explore Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
