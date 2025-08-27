import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
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
    </>
    
  )
}

export default Navbar