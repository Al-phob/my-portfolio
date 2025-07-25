"use client"

import dynamic from "next/dynamic"

const ParticlesBackground = dynamic(() => import ("@/components/main/ParticlesBackground"), {
  ssr: false,
  loading: () => <div className="bg-black w-full h-full fixed top-0 left-0 -z-10" />
})

export default function ParticlesWrapper() {
    return <ParticlesBackground />
}