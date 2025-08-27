import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import image7 from '../assets/image7.jpg'
import image6 from '../assets/image6.jpg'
import image9 from '../assets/image9.png'
const About = () => {
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
    <div className='div4'>
    <img  className='img7'src={image7} alt="jim corbet forest" />
    <h1 className='head6'>DEADLY MANEATERS STORY</h1>
    </div>
     <div className='subdiv5'>
     <img src={image9} alt="The Man eating leopard" />
     <h1 className='head7'>THE MAN EATING LEOPARD OF RUDRAPRAYAG </h1>
     <p className='para7'>The Man-eating Leopard of Rudraprayag was a notorious predator that haunted the Garhwal region of Uttarakhand between 1918 and 1926. It is believed to have killed more than 125 people, mostly along the pilgrimage routes to Kedarnath and Badrinath, creating widespread fear and panic. The leopard’s cunning nature and ability to evade traps and hunters made it seem almost invincible. Finally, in 1926, the famous hunter and conservationist Jim Corbett tracked and shot the animal, ending its long reign of terror. The story remains one of the most chilling episodes in India’s wildlife history.</p>
     <Link to="https://youtu.be/ZWyjmqqxebE"><button className="button7">Play Story</button></Link>
     </div>
    <footer className='footer1'>
      <img className='img6' src={image6} alt="Jungle Book"/>
      <p className='para4'>Copyright © 2025 Nature Tales</p>
      <iframe className='map1'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.8535678582734!2d88.46463727851004!3d22.692664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fd938cc8877%3A0xabedc8620f85cc15!2sNovum%20Labs!5e1!3m2!1sen!2sin!4v1756031110334!5m2!1sen!2sin" width="100" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </footer>
    </>
  )
}

export default About