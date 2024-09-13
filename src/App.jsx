import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import Privacy from './Privacy'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Privacy' element={<Privacy />} />
      </Routes>
    </>
  )
}

export default App
