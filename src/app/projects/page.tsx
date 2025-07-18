import Skills from '@/components/main/Skills'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import Link from 'next/link'

const projects = [
    {
        id: 1,
        name: "AyoBeen Website",
        image: "/images/ayobeen.png",
        link: "https://ayobeen.vercel.app/",
        git: "https://github.com/Al-phob/ayobeen-project",
        tech : "Tech Stack : Next.js, TypeScript, TailwindCSS",
        desc: "I designed and developed the official website for AyoBeen, an emerging fashion brand. The main objective was to enhance their visual identity and showcase their collections in a clean and impactful way. The site emphasizes product presentation through a minimalist, responsive design, centered on the user experience. This project allowed me to combine visual creativity and technical mastery to support the growth of a young, ambitious brand."
    },

    {
        id: 2,
        name: "Kev's Portfolio",
        image: "/images/kev-portfolio.png",
        link : "https://kev-portfolio-ten.vercel.app/",
        git : "https://github.com/Al-phob/kev-portfolio",
        tech: "Tech Stack : Next.js, TypeScript, TailwindCSS",
        desc: "This project involved creating a personalized online portfolio for Kev, community manager of the Amiens SC football club. The goal was to showcase his professional and personal achievements in the fields of digital marketing, content creation, and community management. I focused on seamless navigation, a modern design, and a clear structure to make his projects easier to read. This work reflects his professional world while incorporating elements of visual personalization and storytelling."
    },

    {
        id: 3,
        name: "My Portfolio",
        image: "/images/myportfolio.png",
        link: "",
        git: "",
        tech: "Tech Stack : Next.js, TypeScript, TailwindCSS",
        desc: "This portfolio was designed as an interactive showcase of my background and skills as a full-stack web developer. I showcase my professional and personal projects, with an emphasis on accessibility, performance, and sleek design. Designed primarily as a space for technical and creative expression, this site reflects my passion for web development, with a particular focus on user experience, responsive design, and seamless content integration. This project allowed me to apply my knowledge of Next.js, TypeScript, and Tailwind CSS, while asserting my identity as a developer." 
    }
]

function page() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 text-white">

        <h3 className="text-3xl text-center uppercase font-serif">
            Tech Stack
        </h3>

        <div className="w-24 h-1 border-b-2 border-white"/>

        <div className="">
            <Skills />
        </div>

        <h3 className="text-3xl text-center uppercase font-serif mt-10">
            Projects
        </h3>

        <div className="w-24 h-1 border-b-2 border-white"/>

        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="border rounded-sm overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                    >
                        <div className="relative w-full overflow-hidden p-4">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={850}
                                height={850}
                                className=""
                            />
                        </div>
                        <div>
                            <div className="flex justify-center mb-2">
                                <h2 className="text-lg font-semibold uppercase flex flex-row gap-4">
                                    {project.name}
                                    <Link href={project.link} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                        <BiLinkExternal size={15} />
                                    </Link>
                                    <Link href={project.git} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                        <FaGithub size={15} />
                                    </Link>

                                    
                                    

                                </h2>
                            </div>
                            <p className="flex justify-center items-center">{project.tech}</p>
                            <p className="mb-3 p-4">{project.desc}</p>
                        </div>
                    </div>
                ))

                }
            </div>
            

        </div>

            
        {/*<div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
            <span className="p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md bg-violet-600 dark:bg-violet-600 text-white transition-all capitalize">
                Frontend
            </span>
            <span className="p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md text-gray-800 bg-white dark:bg-grey-800 hover:bg-grey-900 transition-all capitalize">
                Backend
            </span>
            <span className="p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md text-gray-800 bg-white dark:bg-grey-800 hover:bg-gray-100 hover:dark:bg-grey-900 transition-all capitalize">
                Others
            </span>
        </div>*/}

    </section>
  )
}

export default page