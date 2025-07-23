"use client"

import TextAnimation from './TextAnimation'
import { Button } from '@/components/ui/button'
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
              
              <div className="flex flex-row gap-5">
                <Link
                  href="https://drive.google.com/file/d/1kWKEEAYlsuX4L-zjyBc0-ablKU87VONp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white text-md tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 w-[150px]">
                    Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 animate-bounce"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      ></path>
                    </svg>
                  </Button>
                </Link>
                

                <Link
                  className="w-fit text-sm mb-5 md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
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

        

      </div>

    </section>
  
  )
}

export default One