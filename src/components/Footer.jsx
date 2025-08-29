import React from 'react'

function Footer() {
  return (
    <footer className="relative border-t border-gray-200/50 dark:border-gray-700/50 w-full bg-white dark:bg-gray-900">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [background-size:40px_40px] dark:invert"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          <div className="space-y-4">
            <a className="flex items-center" href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] bg-clip-text text-transparent">
                Bilal Asif
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Front-End Developer specializing in creating dynamic, responsive, and user-friendly web interfaces with modern technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/bilal-asif-941720206/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-white group relative overflow-hidden"
              >
                <span className="relative z-10">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-br from-[#bb00ff] to-[#00cdf5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </a>


              <a
                href="https://github.com/Bilal-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-white group relative overflow-hidden"
              >
                <span className="relative z-10">
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-br from-[#bb00ff] to-[#00cdf5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </a>



            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["about", "skills", "education", "experience", "contact"].map((link) => (
                <li key={link} className="text-sm sm:text-base">
                  <a
                    href={`/#${link}`}
                    className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <span className="w-1 h-1 mr-2 rounded-full bg-blue-500 transition-all duration-300 group-hover:translate-x-1"></span>
                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                {
                  icon: (
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  ),
                  href: "mailto:ba123212gol@gmail.com",
                  label: "ba123212gol@gmail.com",
                },
                {
                  icon: (
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  ),
                  href: "tel:+923244362698",
                  label: "+92 324 4362698",
                },
                {
                  icon: (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                  ),
                  href: "https://wa.me/+9232494580098",
                  label: "+92 324 9458009",
                },
                {
                  icon: (
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  ),
                  href: "https://maps.google.com/?q=Lahore,Pakistan",
                  label: "Lahore, Pakistan",
                },
              ].map(({ icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <span className="text-blue-500 dark:text-blue-400 mt-1 mr-2 transition-all duration-300 group-hover:translate-x-1">
                      {icon}
                    </span>
                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>



          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Let's Collaborate
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Have a project in mind or want to discuss potential opportunities?
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#bb00ff] to-[#00cdf5] text-white p-2 rounded-lg cursor-pointer  hover:scale-105 transition-transform duration-300 r"
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

            </div>
          </div>
        </div>


        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm sm:text-base">
            © 2025 Bilal Asif . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer