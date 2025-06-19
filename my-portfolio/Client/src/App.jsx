import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Email from './pages/Email'
import { motion } from 'framer-motion';
import { Box, Button, Heading, Text, VStack, HStack, Card } from '@chakra-ui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Mainpage w-screen h-screen bg-[#1E1E1E] font-poppins">
        <Navbar />

        <div className="social-icons fixed bottom-10 left-10 flex flex-col justify-evenly items-center h-1/4">
            <a className='!text-white hover:scale-125 hover:!text-[#60A5FA] transition-transform duration-300' href="https://www.facebook.com/keithclarence13" target="_blank" aria-label="Facebook">
                <i className="fab fa-facebook-f !text-3xl"></i>
            </a>
            <a className='!text-white hover:scale-125 hover:!text-[#60A5FA] transition-transform duration-300' href="https://github.com/keithclarencesison" target="_blank" aria-label="Twitter">
                <i className="fab fa-github !text-3xl text-white"></i>
            </a>
            <a className='!text-white hover:scale-125 hover:!text-[#60A5FA] transition-transform duration-300' href="https://www.instagram.com/keyssiieee/" target="_blank" aria-label="LinkedIn">
                <i className="fab fa-instagram !text-3xl text-white"></i>
            </a>
            <a className='!text-white hover:scale-125 hover:!text-[#60A5FA] transition-transform duration-300' href="https://www.linkedin.com/in/keith-clarence-sison-19994627a/" target="_blank" aria-label="GitHub">
                <i className="fab fa-linkedin-in !text-3xl"></i>
            </a>
        </div>

        <motion.section 
        id='#home' 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
          <Home />
        </motion.section>

        <motion.section id='about'>
          <About />
          {/* <Button>Click me</Button> */}
        </motion.section>

        <motion.section id='about'>
          <Email />
          {/* <Button>Click me</Button> */}
        </motion.section> 
      </div>


    </>
  )
}

export default App
