import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/sections/Home.jsx'
import About from './components/sections/About.jsx'
import Education from './components/sections/Education.jsx'
import Skills from './components/sections/Skills.jsx'
import Experience from './components/sections/Experience .jsx'
import Contact from './components/sections/Contact.jsx'
function App() {
  return (
    <main>
      <Header />
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Experience />
      <Contact/>
      <Footer />
    </main>
  )
}

export default App