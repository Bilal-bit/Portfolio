import React from 'react'
import { motion } from 'framer-motion'

function Education() {
    return (
        <section className='w-full p-2 md:p-32 py-5 md:py-20' id='education'>
            <div className='text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="font-bold text-center mb-20 
                        bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] 
                        bg-clip-text text-transparent
                        text-4xl sm:text-5xl
                        inline-block"
                    style={{ WebkitBackgroundClip: "text" }}
                >
                    Education
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='p-6 py-7 rounded-xl relative flex gap-3 flex-col border 
                           hover:shadow-cyan-500/50 border-gray-700 
                           hover:shadow-lg transition-all relative 
                           overflow-hidden hover:-translate-y-1'
            >
                <div className="absolute -top-3 -right-3 z-10" tabIndex="0">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] flex items-center justify-center text-white shadow-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                        </svg>
                    </div>
                </div>

                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-r from-[#bb00ff] to-[#00cdf5]"></div>
                <h1 className='font-bold text-2xl'>BS - IT</h1>
                <div className="flex items-center gap-1 text-sm xs:text-xs font-medium text-blue-600 dark:text-blue-400">
                    <span>2018</span>
                    <span className="text-gray-400 dark:text-gray-500 mx-1">→</span>
                    <span>2022</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 rounded-full text-sm xs:text-xs border border-blue-200 dark:border-blue-800 shadow-sm">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        Punjab University
                    </span>
                </div>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-sm">
                    Specialized in <span className="font-semibold text-blue-500">Computer Science & Artificial Intelligence</span>,
                    completed Bachelor of Science in Information Technology at
                    <span className="font-semibold"> Punjab University</span>.
                </div>
            </motion.div>
        </section>
    )
}

export default Education
