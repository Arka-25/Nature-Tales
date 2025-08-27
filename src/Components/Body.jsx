import React from 'react'
import './Body.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import { Link } from 'react-router-dom'
const Body = () => {
  return (
    <>
    <div className='div1'>
    <img className='img1'  src={image1} alt="Nature image"/>
    <h1 className='head1'>NATURE TALES</h1>
    <p className='para1'>Nature calls us to pause, listen, and connect with the world around us. The rustling of leaves, the gentle flow of rivers, and the songs of birds remind us of life’s simple beauty. Spending time in nature refreshes the mind, heals the soul, and brings a sense of peace that no technology can replace. 🌿</p>
    <button className='button1'><Link to="https://youtu.be/RzVvThhjAKw">Click Here</Link></button>
    </div>
    <div className='div2'>
    <p className='para2'>Jungle Tales of India is a captivating collection of stories that brings alive the vibrant spirit of India’s forests, where nature and folklore intertwine seamlessly. These tales often revolve around animals, tribal traditions, and the mysteries of the wild, offering both entertainment and timeless wisdom. Through narratives filled with adventure, bravery, and moral lessons, the stories emphasize the importance of coexistence and respect for nature. They remind us of the cultural and spiritual connections that Indian society has long shared with its jungles, portraying the forest not just as a backdrop but as a living character. The tales also inspire values of courage, compassion, and resilience, making them both engaging for young readers and deeply meaningful for adults. By exploring the wonders and lessons hidden in the wild, Jungle Tales of India serves as a gentle call to preserve the beauty and harmony of our natural heritage.</p>
    <div className='subdiv1'>
     <img className='img2' src={image2} alt="Jim corbett"/>
     <h1 className='head2'>Jim Corbett</h1>
     <p className='para3'>Edward James Corbett, popularly known as Jim Corbett, was a British-Indian hunter, tracker, naturalist, and author,he gained fame for hunting man-eating tigers and leopards that threatened villages in Kumaon and Garhwal.</p>
  <Link to="/about"><button className="button2">Bengali Story</button></Link>
    </div>
   </div>
   <div className='div3'>
    <div className='subdiv2'>
    <img className='img3' src={image3} alt="National Parks"/>
    <h1 className='head3'>NATIONAL PARKS</h1>
    <p className='para5'>National parks in India are a treasure trove of biodiversity, showcasing the country’s rich natural heritage and Spread across varied landscapes—ranging from the snow-clad Himalayas to the deserts of Rajasthan.</p>
    <Link to="/RestHouse"><button className="button3">Next</button></Link>
    </div>
    <div className='subdiv3'>
    <img className='img4' src={image4} alt="Documentry"/>
    <h1 className='head4'>DOCUMENTRY</h1>
    <p className='para6'>A nature documentary is a form of non-fiction film or series that explores the wonders of the natural world, capturing wildlife.</p>
    <Link to="https://youtu.be/KIPR_1kqpqw"><button className="button4">Play</button></Link>
    </div>
    <div className='subdiv4'>
    <img className='img5' src={image5} alt="Hunters"/>
    <h1 className='head5'>HUNTERS</h1>
    <Link to="https://youtu.be/sMo2d1b1cP4"><button className="button5">Play</button></Link>
    </div>
   </div>
   <footer className='footer1'>
  <img className='img6' src={image6} alt="Jungle Book"/>
  <p className='para4'>Copyright © 2025 Nature Tales</p>
  <iframe className='map1'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.8535678582734!2d88.46463727851004!3d22.692664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fd938cc8877%3A0xabedc8620f85cc15!2sNovum%20Labs!5e1!3m2!1sen!2sin!4v1756031110334!5m2!1sen!2sin" width="100" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
</footer>
  </>
  )
}

export default Body