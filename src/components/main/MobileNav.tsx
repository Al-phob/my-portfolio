"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci"
import ParticlesBackground from './ParticlesBackground';

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

function MobileNav() {
    const pathname = usePathname ()

  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[30px] text-white" />
        </SheetTrigger>

        <SheetContent className="flex flex-col justify-center items-center bg-[#030014] overflow-y-scroll overflow-x-hidden text-white">
            <SheetTitle className="sr-only">Menu mobile</SheetTitle>

            <ParticlesBackground />

            {/* Image */}
            <Link
                href="/"
                className="h-auto w-auto flex flex-row items-center py-7"
            >
                <Image
                    src="/images/ai.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="cursor-pointer hover:animate-slowspin"
                />
 
            </Link>

            {/* Nav */}
            <nav className="flex flex-col justify-center items-center gap-7">
                <div className="flex flex-col items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] text-white gap-7">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathname &&
                                "text-white"
                            } hover:text-purple-500 transition duration-300 relative overflow-hidden `}>
                                {link.name}
                            </Link>
                        )

                    })}
                </div>

            </nav>

        </SheetContent>

    </Sheet>
  )
}

export default MobileNav