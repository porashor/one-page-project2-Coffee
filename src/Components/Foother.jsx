import React from 'react';
import image from "../assets/website/coffee-footer.jpg";
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import { CiLocationArrow1 } from 'react-icons/ci';
import { BiPhone } from 'react-icons/bi';



const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
const Foother = () => {
    const footherLinks = [
        {
            name: "Home",
            Links: "home"
        },
        {
            name: "About",
            Links: "about"
        },
        {
            name: "Contact",
            Links: "contact"
        },
        {
            name: "Blog",
            Links: "blog"
        },
    ]
  return (
    <div data-aos='fade-in' className='' style={backgroundStyle}>
     <div className='bg-black/40 min-h-[400px]'>
     <div className='container py-10 text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] items-center justify-between gap-4'>
            <div className='space-y-4' data-aos-delay="500" data-aos='zoom-in'>
                <h1 className='text-3xl font-cursive2 font-bold'>
                    Coffee Cafe
                </h1>
                <p>
                Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
                </p>
                <button className='bg-secondary py-2 px-4 rounded-full'><a href="#">Visit Our Youtube Chenel</a></button>
            </div>
            <div data-aos-delay="600" data-aos='zoom-in'>
                <h1 className='font-bold text-xl pb-2'>Importent Links</h1>
                <ul className='space-y-3'>
                    {footherLinks.map((item, index)=>(
                        <li key={index} className=''>
                            <a href={item.Links} className=''>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div data-aos-delay="700" data-aos='zoom-in'>
                <h1 className='font-bold text-xl pb-2'>Quick Links</h1>
                <ul className='space-y-3'>
                    {footherLinks.map((item, index)=>(
                        <li key={index} className=''>
                            <a href={item.Links} className=''>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div data-aos-delay="800" data-aos='zoom-in' className='space-y-3'>
                <h1 className='text-xl font-bold'>Address</h1>
                <p className='flex gap-2 items-center'><CiLocationArrow1 className='text-2xl'/> Agrabad, Chattogram</p>
                <p className='flex gap-2 items-center'><BiPhone className='text-2xl'/> 880-01********</p>
                <div className='flex gap-3 text-3xl'>
                    <BsInstagram/>
                    <FaFacebook/>
                    <LiaLinkedin/>
                </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Foother
