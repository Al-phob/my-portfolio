"use client"

import TextAnimation from './TextAnimation'
import { Button } from '@/components/ui/button'
//import { Link as ScrollLink } from "react-scroll"
import { IoIosArrowForward } from "react-icons/io"
import Link from "next/link"
import WelcomeText from "@/components/main/WelcomeText"


function One() {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-10">
          
          {/* Text */}
          <div className="text-center xl:text-left xl:ml-32 xl:mt-20">
            
            <div className="flex flex-col gap-4 md:gap-8 text-left lg:w-2/3 2xl:w-1/2 mx-4 md:mx-6 xl:mx-0">
              {/*
              <div className="text-2xl">
                👋🏾 Hey 
              </div> */}

              {/*
              <h2 className='tracking-widest text-3xl font-serif font-bold w-xl'>
                <span>I'm </span>
                <ShinyText text="Al Wahid Bio-Tchané" disabled={false} speed={3} className='custom-class' />
              </h2> */}
              <div className="flex justify-center items-center mt-5 md:text-left">
                <WelcomeText />
              </div>
              

              <div className="flex flex-row sm:justify-center sm:items-center lg:justify-start lg:items-start gap-3 text-2xl">
                I am into <TextAnimation />
              </div>

              {/* className='w-xl' */}
              <p>
                I design and develop web applications with a strong 
                focus on user experience, responsive design, and
                efficient code architecture.
              </p>

              <Link
                className="w-fit text-sm mb-5 md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
                //to={'about'}
                //offset={-60}
                //smooth={true}
                //duration={500}
                //isDynamic={true}
                //onClick={scrollToSection}
                href="/about"
                scroll={true}
                
              >
                About Me
                <IoIosArrowForward className='group-hover:translate-x-1 transition-transform' />
              </Link>

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
  
  )
}

export default One