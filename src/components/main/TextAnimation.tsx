"use client"

import Typewriter from "typewriter-effect"

function TextAnimation() {
    return(
        <div className=" text-purple-600">
            <Typewriter
                options={{
                    strings: ["Frontend Development", "Backend Development", "App Development"],
                    autoStart: true,
                    loop: true,
                }}
            />

        </div>
        
    )
}

export default TextAnimation