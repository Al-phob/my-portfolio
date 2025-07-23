"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Avatar = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeIn"}
        }}
      >
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.5, ease: "easeInOut"}
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] xl:mr-40 absolute">
            <Image
                src="/images/avatar_1.png"
                priority
                quality={100}
                fill
                alt="logo"
                className="object-contain"
            />
        </motion.div>

        {/* Circle */}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253"
            cy="253"
            r="250"
            stroke="#1c2833"
            strokeWidth="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 720", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Avatar