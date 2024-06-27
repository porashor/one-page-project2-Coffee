import React from 'react';
import Slider from "react-slick";
const TestimonialData = [
    {
      id: 1,
      name: "Dilshad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Sabir ali",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Dipankar kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Satya Narayan",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];
  
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div data-aos='fade-in' className='container py-10'>
      <div data-aos-delay="600" data-aos='fade-up' className='text-3xl lg:text-4xl font-bold text-center py-5  font-cursive'>Testimonial</div>
        <div className='py-10'>
            <Slider {...settings} className=''>
                {
                    TestimonialData.map((item)=>(
                        <div data-aos-delay="900" data-aos='zoom-in' key={item.id} className=''>
                            <div className='bg-slate-200 mx-3 py-5 px-4 rounded-md'>
                                <div className='flex justify-between items-center '>
                                    <img src={item.img} className='rounded-full w-[90px]' alt="" />
                                    <div className='text-black text-7xl md:text-8xl lg:text-9xl translate-x-5 translate-y-5'>,,</div>
                                </div>
                                <div className='text-sm text-slate-500 py-10'>{item.text}</div>
                                <div className='text-2xl font-cursive2 font-bold'>{item.name}</div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Testimonial
