import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience .jsx'
import Contact from './components/Contact.jsx'
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