"use client"

import SplitText from "./SplitText";


function WelcomeText () {

    return (
        <div>
            <div className="font-main">
                <SplitText
                    text="Welcome."
                    className="tracking-widest text-6xl font-extralight "
                    delay={300}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                    //onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
        </div>
    )

}

export default WelcomeText