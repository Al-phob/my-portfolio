"use client"

import { useState } from "react"
import SkillCard from "./SkillCard"
import SectionWrapper from "./SectionWrapper"
import { Button } from "../ui/button"

const Skills = () => {
    const [category, setCategory] = useState("languages")

    return (
        <SectionWrapper id="skills" className="mt-6">

            <div className="flex md:gap-8 justify-center py-4">
                {["languages", "frameworks", "tools"].map((x) => (
                    <Button
                        key={x}
                        onClick={ () => setCategory(x) }
                        className={`px-8 py-2 capitalize ${
                            category === x ? "bg-purple-600 text-white" : "bg-transparent"
                        }`}
                    >
                        {x}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-8 justify-items-center">
                {category === "languages" && (
                    <>
                        <SkillCard name="Python" imageSrc="/images/python.png"/>
                        <SkillCard name="HMTL" imageSrc="/images/html5.png"/>
                        <SkillCard name="CSS" imageSrc="/images/css.png"/>
                        <SkillCard name="TypeScript" imageSrc="/images/typescript.png"/>
                        <SkillCard name="JavaScript" imageSrc="/images/javascript.png"/>
                        <SkillCard name="Java" imageSrc="/images/java.png"/>
                        <SkillCard name="C++" imageSrc="/images/c++.png"/>
                    </>
                )}

                {category === "frameworks" && (
                    <>
                        <SkillCard name="React" imageSrc="/images/react.png" />
                        <SkillCard name="Next.js" imageSrc="/images/nextjs.png"/>
                        <SkillCard name="Tailwind CSS" imageSrc="/images/tailwindcss.png"/>
                        
                    </>
                )}

                {category === "tools" && (
                    <>
                        <SkillCard name="Node.js" imageSrc="/images/nodejs.png"/>
                        <SkillCard name="Supabase" imageSrc="/images/supabase.png"/>
                        <SkillCard name="GitHub" imageSrc="/images/github_1.png"/>
                        <SkillCard name="Vercel" imageSrc="/images/vercel_1.png"/>
                    </>

                )}

            </div>

        </SectionWrapper>
    )

}

export default Skills