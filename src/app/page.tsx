"use client"

import Image from "next/image";
import One from "@/components/main/One";
import Particles from "@/components/main/Particles";
import ParticlesBackground from "@/components/main/ParticlesBackground";
import ProfileCard from "@/components/main/Profile";
import Profile from "@/components/main/Profile";

export default function Home() {
  return (
    <main className="relative h-full w-full text-white">
      <ParticlesBackground />
      
      <div className="flex flex-row">

        <div className="mt-32">
          <One />
        </div>

        <div className="mt-24 mr-40">

          <Profile />

        </div>
        
        
      </div>

      {/*<div className="flex justify-center items-center mt-60 text-6xl font-bold py-5" id="about-section">
        About Me
      </div>*/}
      
      
      
    
    </main>
  );
}
