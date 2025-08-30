import React from 'react'
import img from "../../assets/second.jpg"
import { motion } from "framer-motion";
import { fadeInUp } from "../../animation";
function Home() {
    return (
        <div className='w-full p-2 md:p-32'>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}>
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4">
                    {/* Image Section */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={img}
                            alt="Portfolio showcase"
                            decoding="async"
                            className="relative max-w-auto md:max-w-lg max-h-[480px]  object-cover rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-auto md:w-full h-auto"
                        />

                    </div>


                    <div className="flex-1 space-y-4">
                        <h1
                            className="font-bold  mb-4 
                             bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] 
                              bg-clip-text text-transparent
                         text-5xl 
                         inline-block"
                            style={{ WebkitBackgroundClip: "text" }}
                        >
                            Front-End Developer
                        </h1>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Building Scalable & User-Friendly Interfaces
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Front-End Developer with expertise in building modern, scalable, and responsive applications using
                            <span className="font-semibold"> React.js, Next.js, and Tailwind CSS</span>.
                            Skilled in crafting intuitive user experiences, optimizing performance, and following best practices
                            like component-driven development and clean architecture. Experienced in integrating APIs,
                            managing state efficiently, and ensuring accessibility across devices. Passionate about transforming
                            ideas into elegant, functional digital products.
                        </p>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] text-white px-4 py-2 rounded-md 
                                 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            View Resume
                        </a>




                    </div>
                </div>

            </motion.section>
        </div>
    )
}

export default Home