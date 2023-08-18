import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Support from './Components/Support'
import AllInOne from './Components/AllInOne'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App