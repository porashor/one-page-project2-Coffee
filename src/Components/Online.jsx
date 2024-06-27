import React from 'react';
import BgPng from "../assets/website/coffee-beans-bg.png";
import image1 from '../assets/website/play_store.png';
import image2 from "../assets/website/app_store.png";
const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
const Online = () => {
  return (
    <div data-aos='fade-in' className='' style={backgroundStyle}>
        <div className='container py-10 mx-10'>
            <div data-aos-delay="600" data-aos='fade-left' className='flex flex-col justify-center items-start'>
                <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-5'>
                    Coffee Cafe is available for 
                    <h1>
                        Android and IOS 
                    </h1>
                </h1>
                <div className='flex gap-3 items-center justify-start'>
                    <img src={image1} alt="image1" className='w-[200px]' />
                    <img src={image2} alt="image1" className='w-[200px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Online
