"use client"

import ShinyText from "@/components/main/ShinyText"
import Profile from "@/components/main/Profile"

function page() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 text-white">

        <h3 className="text-3xl text-center font-serif">
            ABOUT ME
        </h3>

        <div className="w-24 h-1 border-b-2 border-white"/>

        <h2 className='tracking-widest uppercase text-5xl mx-auto text-center py-9 font-serif font-bold'>
            <ShinyText text="Al Wahid Bio-Tchané" disabled={false} speed={3} className='custom-class' />
        </h2>

        <div className="flex flex-col xl:flex-row xl:gap-28 items-center justify-between xl:pt-6 xl:pb-10">

            {/* Image */}

            <div className="ml-3 xl:order-2">
                <Profile />
            </div>
            

            {/* Text */}
            <div className="flex flex-col gap-4 md:gap-6 text-left justify-center items-center px-6 w-auto xl:w-xl mb-4 mt-7 xl:mt-0">
                <p>
                    I'm a Web developer based in Montreal, Canada. I'm 
                    currently focused on growing into a full-stack
                    developer, building on my front-end strenghts while
                    deepening my knowledge of back-end technologies.
                </p>

                <p>
                    Beyond Web development, I'm actively expanding my
                    skill set in Cybersecurity and Artificial Intelligence,
                    with the goal of building applications that are not only
                    smart and scalable, but also secure. 
                </p>

                <div className="w-36 h-1 border-b-2 border-white" />

                <p>{/*
                    Another of my experience is having worked in customer service
                    and technical support, which gave me a solid foundation in
                    empathy, problem-solving, and clear communication. These skills
                    have shaped how I approach development — with a focus on real
                    users, practical solutions, and collaborative teamwork. 
                    */}
                </p>

                <p className="text-left">
                    When I'm not immersed in code, I enjoy :
                </p>
                <ul>
                    <li>🎮 Playing video games </li>
                    <li>📚 Reading books and watching anime </li>
                    <li>🎾 Hitting balls on a tennis court</li>
                </ul>
                <p>These passions keep me creative, curious, and
                    inspired — traits I bring into every project.
                </p>

                <p>
                    Whether it's contributing to innovative tech projects or
                    joining forces with forward-thinking teams, I'm always
                    looking for opportunities to learn, collaborate, and make
                    an impact.
                </p>

              

                
            </div>

            



        </div>
    
    </section>
  )
}

export default page