import React from 'react'
import Particles from './Particles'

function ParticlesBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Particles
        particleColors={['#ffffff']}
        particleCount={300}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  )
}

export default ParticlesBackground