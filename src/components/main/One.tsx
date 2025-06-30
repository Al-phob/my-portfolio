"use client"

import { useRef } from "react"
import TextAnimation from './TextAnimation'
import { Button } from '@/components/ui/button'
//import { Link as ScrollLink } from "react-scroll"
import { IoIosArrowForward } from "react-icons/io"
import Link from "next/link"

function One() {
  //const targetRef = useRef<HTMLDivElement | null>(null)

  //const scrollToSection = () => {
  //  targetRef.current?.scrollIntoView({behavior: "smooth"})
  //}

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-10">
          
          {/* Text */}
          <div className="text-center xl:text-left xl:ml-32 xl:mt-20 order-2 xl:order-none">
            
            <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0">
              <div className="text-2xl">
                👋🏾 Hey 
              </div>

              <h1 className="text-4xl w-2xl font-bold">
                I'm Al Wahid Bio-Tchané
              </h1>

              <div className="flex flex-row text-2xl gap-3">
                I am into 
                <span className=''>
                  <TextAnimation />
                </span>
              </div>

              {/* className='w-xl' */}
              <p>
                I design and develop web applications with a strong 
                focus on user experience, responsive design, and
                efficient code architecture.
              </p>

              <Link
                className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
                //to={'about'}
                //offset={-60}
                //smooth={true}
                //duration={500}
                //isDynamic={true}
                //onClick={scrollToSection}
                href=""
                scroll={true}
                
              >
                About Me
                <IoIosArrowForward className='group-hover:translate-x-1 transition-transform' />
              </Link>

              {/* Spacer 
              <div className="h-screen" /> */}

            </div>
          </div>
        </div>

        

      </div>

      {/* Target Section 
      <div
        ref={targetRef}
        className="mt-20 flex flex-col justify-center items-center"
      >

        <div className="h-full flex justify-center items-center text-6xl">
          About me

        </div> 


      </div> */ }

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