import React from 'react'

function One() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-10">
          
          {/* Text */}
          <div className="text-center xl:text-left xl:ml-32 xl:mt-20 order-2 xl:order-none">
            
              <div className="text-sm">
                👋🏾 Hey <br />
              </div>

              <h1 className="text-xl">
                I'm Al Wahid Bio-Tchané
              </h1>

          </div>
        </div>

      </div>

    </section>
    /*<div className='relative flex flex-col h-full w-full'>
        <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover'
        >
            <source src='/images/blackhole.webm' type='video/webm' />
        </video>

    </div>*/
  )
}

export default One