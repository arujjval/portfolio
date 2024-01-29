import { useState } from "react"
import { motion } from "framer-motion"


const HomeAnime = () => {
    const [currLoop, changeLoop] = useState(0)

  return (
    <div className='flex flex-col absolute items-center'>
        <div className="flex flex-row">
            <motion.div
                drag
                dragConstraints={{
                        top: -200,
                        left: -200,
                        right: 200,
                        bottom: 200,
                    }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                animate={{
                    scale: [2, 2, 2, 0.5, 1.25, 1, 1],
                    rotate: [0, 180, 270, 270, 180, 0],
                    borderRadius: ["20%", "50%", "80%", "50%", "20%", "20%"],
                }}
                className= 'md:h-80 md:w-80 h-40 w-40 bg-gradient-to-r from-cyan-500 to-blue-500'
            />
            <motion.div
                drag
                dragConstraints={{
                        top: -200,
                        left: -200,
                        right: 200,
                        bottom: 200,
                }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                animate={{
                    scale: [2, 2, 2, 0.5, 1.25, 1, 1],
                    rotate: [0, 180, 270, 270, 180, 0],
                    borderRadius: ["20%", "50%", "80%", "50%", "20%", "20%"],
                }}
                className= 'md:h-80 md:w-80 h-40 w-40 bg-gradient-to-r from-purple-500 to-pink-500'
            />
        </div>

        <div className="flex flex-row">
            <motion.div
                drag
                dragConstraints={{
                        top: -200,
                        left: -200,
                        right: 200,
                        bottom: 200,
                    }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                animate={{
                    scale: [2, 2, 2, 0.5, 1.25, 1, 1],
                    rotate: [0, 180, 270, 270, 180, 0],
                    borderRadius: ["20%", "50%", "80%", "50%", "20%", "20%"],
                }}
                className= 'md:h-80 md:w-80 h-40 w-40 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'
            />  
            <motion.div
                drag
                dragConstraints={{
                        top: -200,
                        left: -200,
                        right: 200,
                        bottom: 200,
                    }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                animate={{
                    scale: [2, 2, 2, 0.5, 1.25, 1, 1],
                    rotate: [0, 180, 270, 270, 180, 0],
                    borderRadius: ["20%", "50%", "80%", "50%", "20%", "20%"],
                }}
                className= 'md:h-80 md:w-80 h-40 w-40 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
            /> 
        </div>  
    </div>
    )
  
}

export default HomeAnime