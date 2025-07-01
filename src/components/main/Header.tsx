import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-center gap-80 m-auto px-[10px]">
            <Link
                href="/"
                className="h-auto w-auto flex flex-row items-center"
            >
                <Image
                    src="/images/ai.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="cursor-pointer hover:animate-slowspin"
                />
 
            </Link>

            {/* Mobile nav */}
            <div className='xl:hidden ml-auto'>
                <MobileNav />
            </div>
            

            {/* Navbar */}
            <div className="hidden xl:flex justify-center items-center">
                <Navbar />

            </div>

        
        </div>
    </header>
  )
}

export default Header