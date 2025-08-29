
import React, { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        {
            id: "about",
            title: "About",

        },
        {
            id: "education",
            title: "Education",

        },
        {
            id: "skills",
            title: "Skills",

        },
        {
            id: "experience",
            title: "Experience",

        },
        {
            id: "contact",
            title: "Contact",

        },
    ]
    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className='flex justify-between items-center p-3'>
                <h1 className='text-xl font-bold  cursor-pointer transition ease-in-out duration-300  hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5] hover:bg-clip-text hover:text-transparent'>Bilal Asif</h1>
                <ul className='flex space-x-4 hidden md:flex'>
                    {
                        navLinks.map((link) => (
                            <li key={link.id} className="cursor-pointer relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#bb00ff] after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5] hover:bg-clip-text hover:text-transparent transition" onClick={() =>
                                document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                            }>{link.title}</li>
                        ))
                    }
                </ul>
                <div className="flex items-center space-x-1 ">



                    {/* Social Links (Mobile only) */}
                    <div className="flex items-center space-x-1 hidden md:flex">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/bailal.asif.9/"
                            target="_blank"
                            className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group relative overflow-hidden 
                                transition-all duration-500 ease-in-out 
                                hover:scale-110 hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5]"
                            tabIndex={0}
                        >


                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>


                        </a>




                        <a
                            href="https://www.linkedin.com/in/bilal-asif-941720206/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group relative overflow-hidden 
                                        transition-all duration-500 ease-in-out 
                                        hover:scale-110 hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5]"
                            tabIndex={0}
                        >

                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>

                        </a>

                        <a
                            href="https://github.com/Bilal-bit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group relative overflow-hidden 
             transition-all duration-500 ease-in-out 
             hover:scale-110 hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5]"
                            tabIndex={0}
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>


                    </div>


                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-[#bb00ff] transition"
                                onClick={() => handleScroll(link.id)}
                            >
                                {link.title}
                            </li>
                        ))}
                        {/* Social Links inside Mobile Menu */}
                       <div className="flex items-center space-x-1">
                        {/* Facebook */}
                          <a
                            href="https://www.facebook.com/bailal.asif.9/"
                            target="_blank"
                            className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group relative overflow-hidden 
                                transition-all duration-500 ease-in-out 
                                hover:scale-110 hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5]"
                            tabIndex={0}
                        >


                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>


                        </a>




                        <a
                            href="https://www.linkedin.com/in/bilal-asif-941720206/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group relative overflow-hidden 
                                        transition-all duration-500 ease-in-out 
                                        hover:scale-110 hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5]"
                            tabIndex={0}
                        >

                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>

                        </a>

                        <a
                            href="https://github.com/Bilal-bit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group relative overflow-hidden 
             transition-all duration-500 ease-in-out 
             hover:scale-110 hover:bg-gradient-to-r hover:from-[#bb00ff] hover:to-[#00cdf5]"
                            tabIndex={0}
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>


                    </div>
                    </ul>
                </div>
            )}
        </nav >
    )
}

export default Header