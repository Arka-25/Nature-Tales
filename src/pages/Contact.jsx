import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import image14 from '../assets/image14.jpg'
const Contact = () => {
  return (
    <>
    <nav className="nav1">
     <h1 className='heading1'>NATURE TALES</h1>
     <ul className='list1'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/About'>About</Link></li>
      <li><Link to='/RestHouse'>RestHouse</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
     </ul>
     <button className='button-1'>Sign Up</button>
    </nav>
    <div className='div6'>
    <div className='subdiv8'>
    <img className='img11'src={image14} alt='Arka Basu'/>
    <h1 className='head10'>Name: Arka Basu</h1>
    <h1 className='head11'>Email Id:basuarkatech25@gmail.com</h1>
    <p className='para10'>Hello, I am Arka — a Computer Science Engineering graduate with a deep passion for web development and emerging technologies like Artificial Intelligence. I believe technology is not just a tool for innovation but a force to solve real-world problems.</p>
    </div>
    </div>
    </>
    
  )
}

export default Contact