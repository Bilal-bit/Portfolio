import React from 'react'
import { motion } from "framer-motion";
import { fadeInUp } from "./../animation";
function About() {
  const data = [
    {
      id: 1,
      number: "2",
      title: "Years Experience",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
    },
    {
      id: 2,
      number: "20",
      title: "Projects Completed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    {
      id: 3,
      number: "10",
      title: "Technologies",
      icon: (
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ),
    },
    {
      id: 4,
      number: "5",
      title: "Client Satisfaction",
      icon: (
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
      ),
    },
  ];

  return (
    <motion.section id="about" className='w-full p-2 md:p-32 py-5 md:py-20'
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
          About&nbsp;Me
        </h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
        <div className='flex-1'>
          <p className="text-md leading-relaxed mb-4 text-gray-300">
            I'm <span className="font-semibold text-white">Bilal Asif</span>, a front-end developer with a passion for crafting
            modern, user-friendly digital experiences. With over{" "}
            <span className="font-semibold">2 years of experience</span>, I specialize in building
            responsive, scalable, and performance-driven interfaces.
          </p>

          <p className="text-md leading-relaxed mb-4 text-gray-300">
            My expertise spans <span className="font-semibold">React.js, Next.js, and Tailwind CSS</span>,
            where I focus on turning complex ideas into clean and intuitive solutions.
            I believe that great front-end development is about more than just visuals—
            it’s about creating seamless interactions that truly enhance user experience.
          </p>

          <p className="text-md leading-relaxed mb-4 text-gray-300">
            When I’m not coding, you’ll find me exploring new technologies,
            polishing my portfolio, or sharing knowledge to help aspiring developers grow.
          </p>
        </div>
        <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {data.map((item) => (
            <div className=' p-6 py-7 rounded-xl flex gap-3 items-center  border  hover:shadow-cyan-500/50  border-gray-700 hover:shadow-md transition-all relative overflow-hidden hover:-translate-y-1'>
              <div className='p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400'>
                <span className="text-blue-400">{item.icon}</span>
              </div>
              <div>
                <p className='text-white font-semibold text-2xl'><span className='text-sm mr-1 text-cyan-500'>+</span>{item.number}</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>{item.title}</p>
              </div>
            </div>
          ))}





        </div>
      </div>
    </motion.section>


  )
}

export default About