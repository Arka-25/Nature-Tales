import React from 'react'
import { Link } from 'react-router-dom'
import image6 from '../assets/image6.jpg'
import image12 from '../assets/image12.jpeg'
import image8 from '../assets/image8.jpg'
import image13 from '../assets/image13.jpg'
import './RestHouse.css'
const RestHouse = () => {
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
    <div className='div5'>
     <img className='img8'src={image12} alt="Bandipur" />
    </div>
    <div className='subdiv6'>
     <img  className='img9'src={image8} alt="dhikala" />
     <h1 className='head8'>DHIKALA FOREST REST HOUSE</h1>
     <p className='para8'>Dhikala Forest Rest House is a popular forest lodge located inside the Corbett National Park in Uttarakhand, India. It is situated on the banks of the Ramganga River and surrounded by dense Sal forest. The forest rest house is managed by the Forest Department of Uttarakhand and provides basic accommodation facilities to visitors who want to stay inside the national park.</p>
     <Link to="https://www.dhikalaforestresthouse.in/ "><button className="button8">Booking</button></Link>
     </div>
     <div className='subdiv7'>
     <img className='img10'src={image13} alt="Bandipur" />
     <h1 className='head9'>BANDIPUR FOREST REST HOUSE</h1>
     <p className='para9'>The Bandipur Forest Rest House, located within the Bandipur Tiger Reserve in Karnataka, offers visitors a serene stay amidst lush forests and abundant wildlife. Built during the British era, it retains a rustic charm with simple architecture, surrounded by teak and sandalwood trees. The rest house serves as a base for safaris and nature walks, giving travelers a chance to experience Bandipur’s rich biodiversity, including tigers, elephants, deer, and diverse bird species, while enjoying the peaceful atmosphere of the forest.</p>
     <Link to="https://www.junglelodges.com/resort/bandipur-safari-lodge-bandipur/"><button className="button9">Booking</button></Link>
     </div>
    <footer className='footer1'>
          <img className='img6' src={image6} alt="Jungle Book"/>
          <p className='para4'>Copyright © 2025 Nature Tales</p>
          <iframe className='map1'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.8535678582734!2d88.46463727851004!3d22.692664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fd938cc8877%3A0xabedc8620f85cc15!2sNovum%20Labs!5e1!3m2!1sen!2sin!4v1756031110334!5m2!1sen!2sin" width="100" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </footer>
  </>
  )
}

export default RestHouse