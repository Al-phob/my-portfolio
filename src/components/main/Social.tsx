import Link from "next/link"

import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa"

const socials = [

    {
        icon : <FaLinkedinIn />, 
        path: "https://www.linkedin.com/in/albt03/"
    },    
    {
        icon: <FaGithub />, 
        path: "https://github.com/Al-phob"
    },
    {
        icon : <FaDiscord />, 
        path: "https://discordapp.com/users/758334590930255902"
    }
]

const Social = ({containerStyles ="flex gap-6", iconStyles = "w-9 h-9 border border-green-600 rounded-full flex justify-center items-center text-green-600 text-base hover:bg-green-600 hover:transition-all duration-500"}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social