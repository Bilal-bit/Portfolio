import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animation";
function Experience() {
    const experiencePoints = [
        "Developed and maintained front-end features using React and Next.js",
        "Worked with Tailwind CSS to build responsive and modern UI",
        "Integrated REST APIs and optimized performance",
        "Collaborated with designers and backend team for seamless delivery",
        "Improved website accessibility and SEO performance"
    ];

    return (
        <motion.section className="w-full p-2 md:p-32 py-5 md:py-20" id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp} >
            <div className="text-center">
                <h1
                    className="font-bold text-center mb-20 
                     bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] 
                     bg-clip-text text-transparent
                     text-4xl sm:text-5xl inline-block"
                    style={{ WebkitBackgroundClip: "text" }}
                >
                    Experience
                </h1>
            </div>

            <div className=" p-6 py-7 rounded-xl relative flex gap-3 flex-col border hover:shadow-cyan-500/50 border-gray-700 hover:shadow-lg transition-all overflow-hidden hover:-translate-y-1">
                {/* Floating Gradient Icon */}
                <div className="absolute -top-3 -right-3 z-10" tabIndex="0">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] flex items-center justify-center text-white shadow-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                </div>

                {/* Left Gradient Line */}
                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-r from-[#bb00ff] to-[#00cdf5]" />

                {/* Job Title */}
                <h1 className="font-bold text-2xl">Front-End Developer</h1>

                {/* Duration */}
                <div className="flex items-center gap-1 text-sm xs:text-xs font-medium text-blue-600 dark:text-blue-400">
                    <span>Jan, 2023</span>
                    <span className="text-gray-400 dark:text-gray-500 mx-1">→</span>
                    <span>Mar, 2025</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 rounded-full text-sm xs:text-xs border border-blue-200 dark:border-blue-800 shadow-sm">
                            <svg
                                className="w-4 h-4 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                ></path>
                            </svg>
                            Vaival Technology
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-pink-100/80 dark:bg-pink-900/50 text-pink-800 dark:text-pink-100 rounded-full text-sm xs:text-xs border border-pink-200 dark:border-pink-800 shadow-sm">
                            <svg
                                className="w-4 h-4 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                            Lahore, Pakistan
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-100/80 dark:bg-green-900/50 text-green-800 dark:text-green-100 rounded-full text-sm xs:text-xs border border-green-200 dark:border-green-800 shadow-sm">
                            <svg
                                className="w-4 h-4 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                ></path>
                            </svg>
                            Full-time
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-red-100/80 dark:bg-red-900/50 text-red-800 dark:text-red-100 rounded-full text-sm xs:text-xs border border-red-200 dark:border-red-800 shadow-sm">
                            <svg
                                className="w-4 h-4 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            On-site
                        </span>
                    </div>
                </div>

                {/* Description */}
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-base sm:text-sm py-6">
                    {experiencePoints.map((point, index) => (
                        <li key={index} className="leading-relaxed">
                            {point}
                        </li>
                    ))}
                </ul>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] text-white px-4 py-2 rounded-md 
             hover:scale-105 transition-transform duration-300 cursor-pointer w-auto self-start"
                >
                    View Resume
                </a>


            </div>

        </motion.section>
    );
}

export default Experience;
