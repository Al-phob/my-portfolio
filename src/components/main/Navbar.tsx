"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        path: "/"
    }
]


function Navbar() {
    const pathname = usePathname()

  return (
    <nav className="flex flex-row items-center justify-between gap-60">
        
        <div className="w-[500px] h-full flex flex-row items-center justify-between">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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
        </div>
        
        
    </nav>
  );
};

export default Navbar