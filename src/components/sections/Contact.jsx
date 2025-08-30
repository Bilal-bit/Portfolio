import React from 'react'
import { motion } from "framer-motion";
import { fadeInUp } from "../../animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Contact() {
    return (
        <motion.section className='w-full p-2 md:p-32 py-5 md:py-20'
            id='contact'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}>

            <div className='text-center'>
                <h1
                    className="font-bold text-center  mb-10 
               bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] 
               bg-clip-text text-transparent
               text-4xl sm:text-5xl
               inline-block"
                    style={{ WebkitBackgroundClip: "text" }}
                >
                    Lets&nbsp;Connect
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='flex flex-col gap-3 border border-gray-700 p-6 py-7 rounded-xl relative flex-col border hover:shadow-cyan-500/50 border-gray-700 hover:shadow-lg transition-all overflow-hidden hover:-translate-y-1'>
                    <h1 className='text-2xl font-bold'>Get in touch</h1>
                    <label htmlFor="name" className='text-xs'>Name *</label>
                    <input type="text" name="name" id="" placeholder='Your name' className='mb-3 border border-gray-700 p-2 rounded-lg focus:outline-none bg-gray-800' />
                    <label htmlFor="name" className='text-xs'>Email *</label>
                    <input type="text" name="name" id="" placeholder='Your email' className='mb-3 border border-gray-700 p-2 rounded-lg focus:outline-none bg-gray-800' />
                    <label htmlFor="name" className='text-xs'>Message *</label>
                    <textarea name="message" rows="4" class="w-full mb-5 px-4 py-3 text-sm rounded-xl border border-gray-300/80 dark:border-gray-600/80 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all backdrop-blur-sm" placeholder="Your message..."></textarea>
                    <button className='bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] text-white p-2 rounded-lg cursor-pointer  hover:scale-105 transition-transform duration-300 '>Send Message</button>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col  border border-gray-700 p-6 py-7 rounded-xl relative flex-col border hover:shadow-cyan-500/50 border-gray-700 hover:shadow-lg transition-all overflow-hidden hover:-translate-y-1'>
                        <h1 className='text-2xl font-bold mb-4'>Contact Information</h1>
                        <div className="space-y-4">
                            {/* Email */}
                            <a
                                href="mailto:ba123212gol@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-2 xs:p-1.5 hover:bg-gray-50 
                   dark:hover:bg-gray-700/50 rounded-lg transition-colors"
                            >
                                <div className="p-3 bg-blue-100/80 dark:bg-blue-900/50 rounded-xl 
                        text-blue-600 dark:text-blue-400">
                                    {/* Email Icon */}
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 
                     1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 
                     2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-300 sm:text-xs xs:text-xs">
                                        ba123212gol@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+201091854368"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-2 xs:p-1.5 hover:bg-gray-50 
                   dark:hover:bg-gray-700/50 rounded-lg transition-colors"
                            >
                                <div className="p-3 bg-blue-100/80 dark:bg-blue-900/50 rounded-xl 
                        text-blue-600 dark:text-blue-400">
                                    {/* Phone Icon */}
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                     19.79 19.79 0 0 1-8.63-3.07 
                     19.5 19.5 0 0 1-6-6 
                     19.79 19.79 0 0 1-3.07-8.67A2 
                     2 0 0 1 4.11 2h3a2 2 0 0 1 2 
                     1.72 12.84 12.84 0 0 0 .7 
                     2.81 2 2 0 0 1-.45 2.11L8.09 
                     9.91a16 16 0 0 0 6 6l1.27-1.27a2 
                     2 0 0 1 2.11-.45 12.84 12.84 0 
                     0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-300 sm:text-xs xs:text-xs">
                                        +92 324 4362698
                                    </p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/+923244362698"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-2 xs:p-1.5 hover:bg-gray-50 
                   dark:hover:bg-gray-700/50 rounded-lg transition-colors"
                            >
                                <div className="p-3 bg-blue-100/80 dark:bg-blue-900/50 rounded-xl 
                        text-blue-600 dark:text-blue-400">
                                    {/* WhatsApp Icon */}
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M380.9 97.1C339 55.1 283.2 
                     32 223.9 32c-122.4 0-222 99.6-222 
                     222 0 39.1 10.2 77.3 29.6 111L0 
                     480l117.7-30.9c32.4 17.7 68.9 27 
                     106.1 27h.1c122.3 0 224.1-99.6 
                     224.1-222 0-59.3-25.2-115-67.1-157zm-157 
                     341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 
                     18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 
                     0-101.7 82.8-184.5 184.6-184.5 49.3 
                     0 95.6 19.2 130.4 54.1 34.8 34.9 
                     56.2 81.2 56.1 130.5 0 101.8-84.9 
                     184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 
                     2.8-3.7 5.6-14.3 18-17.6 
                     21.8-3.2 3.7-6.5 4.2-12 
                     1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 
                     5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 
                     0-9.7 1.4-14.8 6.9-5.1 
                     5.6-19.4 19-19.4 46.3 0 27.3 
                     19.9 53.7 22.6 57.4 2.8 
                     3.7 39.1 59.7 94.8 83.8 35.2 
                     15.2 49 16.5 66.6 13.9 10.7-1.6 
                     32.8-13.4 37.4-26.4 4.6-13 
                     4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">WhatsApp</h3>
                                    <p className="text-gray-600 dark:text-gray-300 sm:text-xs xs:text-xs">
                                        +92 324 4362698
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <a
                                href="https://maps.google.com/?q=Laohre,Pakistan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-2 xs:p-1.5 hover:bg-gray-50 
                   dark:hover:bg-gray-700/50 rounded-lg transition-colors"
                            >
                                <div className="p-3 bg-blue-100/80 dark:bg-blue-900/50 rounded-xl 
                        text-blue-600 dark:text-blue-400">
                                    {/* Location Icon */}
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 
                     9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-300 sm:text-xs xs:text-xs">
                                        Lahore, Pakistan
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5  border border-gray-700 p-6 py-7 rounded-xl relative  border hover:shadow-cyan-500/50 border-gray-700 hover:shadow-lg transition-all overflow-hidden hover:-translate-y-1'>
                        <h1 className='text-2xl font-bold'>Social Profiles</h1>
                        <div className="flex flex-wrap gap-3">

                            <a
                                href="https://www.linkedin.com/in/bilal-asif-941720206/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-gray-100/80 
                   dark:bg-gray-700/80 hover:bg-gray-200/80 
                   dark:hover:bg-gray-600/80 rounded-xl transition-all text-white"
                            >
                                <FaLinkedin className="w-5 h-5" />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/Bilal-bit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-gray-100/80 
                   dark:bg-gray-700/80 hover:bg-gray-200/80 
                   dark:hover:bg-gray-600/80 rounded-xl transition-all text-white"
                            >
                                <FaGithub className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}

export default Contact