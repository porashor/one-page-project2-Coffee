import React from 'react'
import image from "../assets/coffee-white.png"
import bg from "../assets/website/coffee-texture.jpg"
import { GrSecure } from 'react-icons/gr';



const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
const Banner = () => {
  return (
    <div className='bg-slate-600' style={backgroundStyle}>
      <div className='container py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-evenly'>
            <div className='flex items-center justify-center'>
                <img src={image} className='w-[300px] md:w-[450px] spin mx-auto' alt="" />
            </div>
            <div className='gird gap-y-10 space-y-8'>
                <div className='flex flex-col items-start justify-center gap-5'>
                    <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl font-cursive capitalize'>Premium brand coffee </h1>
                    <p className='text-slate-700'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium et porro officiis inventore cumque obcaecati non blanditiis mollitia tempore, expedita quas eaque maiores dolorem harum?
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <div className='flex items-center justify-start gap-4 text-black'>
                            <GrSecure className='text-2xl bg-purple-400 p-6 rounded-full  '/>
                            <h1>Premium coffee</h1>
                        </div>
                    </div>
                    <div>anotherpart</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
