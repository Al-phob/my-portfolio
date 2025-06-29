import Image from "next/image";
import One from "./components/main/One";
import Particles from "./components/main/Particles";
import ParticlesBackground from "./components/main/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative h-full w-full text-white">
      <ParticlesBackground />
      
      <One />
      
      
    
    </main>
  );
}
