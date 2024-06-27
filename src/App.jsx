import React, {useEffect} from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Banner from './Components/Banner'
import Online from './Components/Online'
import Testimonial from './Components/Testimonial'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Foother from './Components/Foother';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <Online/>
      <Testimonial/>
      <Foother/>
    </div>
  )
}

export default App
