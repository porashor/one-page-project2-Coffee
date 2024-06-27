import React from 'react';
import image from "../assets/coffee2.png";
const Hero = () => {
  return (
    <div className='bg-secondary text-white  py-10' data-aos="fade-in" data-aos-delay="300">
        <div className='container py-3 grid col-span-1 md:grid-cols-2 items-center justify-between gap-2'>
            <div data-aos-delay="600" data-aos='fade-left' className='flex flex-col items-center md:items-start gap-8 justify-center order-2 md:order-1'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold'>We serve the richest <span className='text-primary font-cursive'>Coffee</span> in the city</h1>
                <button className='text-2xl border-2 px-4 py-2 rounded-full border-primary bg-gradient-to-r from-primary hover:scale-105 duration-200 transition-all to-secondary'>Coffee and Code</button>
            </div>
            <div className="gird items-center relative justify-center order-1 md:order-2">
                <img data-aos-delay="900" data-aos='zoom-in' src={image} className='w-[300px] sm:scale-110 md:scale-125 lg:scale-150 md:w-[450px] spin mx-auto' alt="" />
                <button data-aos-delay="600" data-aos='fade-right' className='absolute top-3 left-4 bg-gradient-to-r from-primary to-secondary/80 bg-primary px-4 py-3 border-none rounded-md'>Hey Coder</button>
                <button data-aos-delay="600" data-aos='fade-left' className='absolute bottom-3 right-4 bg-gradient-to-r from-primary to-secondary/80 bg-primary px-4 py-3 border-none rounded-md'>Best Coffee</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
