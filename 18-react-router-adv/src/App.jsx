import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Footer from './components/Footer'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div className="bg-black text-white h-screen w-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} >
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
