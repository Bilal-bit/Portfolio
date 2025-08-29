import React from 'react'
import data from './../data'
import { motion } from "framer-motion";
import { fadeInUp } from "./../animation";
function Skills() {
    return (
        <motion.section className='w-full p-2 md:p-32 py-5 md:py-20' id='skills'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}>
            <div className='text-center'>
                <h1
                    className="font-bold text-center  mb-20 
               bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] 
               bg-clip-text text-transparent
               text-4xl sm:text-5xl
               inline-block"
                    style={{ WebkitBackgroundClip: "text" }}
                >
                    Skills
                </h1>

            </div>


            <div className='center-wrap gap-4 sm:gap-3'>
                {data.map((item) => (
                    <div className="aspect-square w-20 sm:w-18 xs:w-16 md:w-20 border border-gray-700 rounded-lg shadow-md  flex flex-col items-center justify-center p-2 sm:p-1.5 cursor-pointer overflow-hidden relative hover:shadow-lg dark:hover:shadow-cyan-500/50 transition-all duration-300 group">
                        <div className="p-2 sm:p-1.5" style={{ transform: "scale(0.8) rotate(-0.0385895deg)" }}>
                            <img
                                src={item.image}
                                alt="JavaScript"
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>

                        <div className="w-full">
                            <span className="text-xs sm:text-[11px] xs:text-[10px] font-medium text-center text-gray-700 dark:text-gray-300 block truncate px-1">
                                {item.title}
                            </span>
                        </div>


                    </div>
                ))}
            </div>

        </motion.section>
    )
}

export default Skills