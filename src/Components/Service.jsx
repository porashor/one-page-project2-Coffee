import React from 'react'
import Img2 from "../assets/coffee2.png"
const Service = () => {
    const ServicesData = [
        {
          id: 1,
          img: Img2,
          name: "Espresso",
          description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
          aosDelay: "100",
        },
        {
          id: 2,
          img: Img2,
          name: "Americano",
          description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
          aosDelay: "300",
        },
        {
          id: 3,
          img: Img2,
          name: "Cappuccino",
          description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
          aosDelay: "500",
        },
      ];
  return (
    <div className='container py-10'>
      <h1 data-aos-delay="600" data-aos='fade-up' className='text-2xl md:text-4xl font-bold capitalize font-cursive text-center text-slate-900'>Best coffee for you </h1>
      <div className='flex items-center justify-evenly gap-8 pt-[100px]'>
        {
            ServicesData.map((item, index)=>(
                <div data-aos="zoom-in" data-aos-delay="300" className='min-h-[200px] rounded-lg min-w-[300px] relative hover:bg-primary shadow-2xl transition-all duration-200 group py-4' key={index}>
                    <img src={item.img} className='w-[200px]  group-hover:rotate-[10deg] transition-all duration-300 absolute -top-[100px] left-3 translate-x-9' alt="" />
                    <div>
                        <h1 className='text-xl text-center pt-[70px] font-bold'>
                            {item.name}
                        </h1>
                        <p className='max-w-[300px] px-2 pt-4 text-slate-600 text-center line-clamp-2'>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Service
