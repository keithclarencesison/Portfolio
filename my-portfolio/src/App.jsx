import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import About from './assets/components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Mainpage w-screen h-screen bg-[#1E1E1E] font-poppins overflow-y-scroll-scroll">
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  )
}

export default App
