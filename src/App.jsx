import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import RestHouse from './pages/RestHouse'
import About from './pages/About'
import Body from './Components/Body'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/RestHouse' element={<RestHouse />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App