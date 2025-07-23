"use client"

import One from "@/components/main/One";
import Avatar from "@/components/main/Avatar"

export default function Home() {
  return (
    <main className="relative h-full w-full text-white">
      
      <div className="flex flex-col justify-center items-center lg:flex lg:flex-row">

        <div className="mt-20 lg:order-2 lg:mt-24 lg:mr-24">
          <Avatar />
        </div>

        <div className="lg:mt-32">
          <One />
        </div>
        
      </div>
      
    </main>
  );
}
