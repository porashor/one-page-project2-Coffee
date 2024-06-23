import React, { useState } from 'react'
import image from "../assets/website/coffee_logo.png"
import { FaCoffee } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { FaX } from 'react-icons/fa6'
const Navbar = () => {
    const [show, setShow] = useState(false)
    const nav = [
        {
            name : "Home",
            href : "home"
        },
        {
            name : "Service",
            href : "service"
        },
        {
            name : "About",
            href : "about"
        },
    ]
  return (
    <div className='bg-gradient-to-r relative from-primary to-secondary/90 text-white shadow-sm bg-gray-900'>
      <div className='container py-2'>
        <div className='flex items-center justify-between'>
            <a href='home' className='flex items-center gap-3'>
                <img src={image} className='w-[60px]' alt="" />
                <span className='font-bold text-2xl md:text-3xl font-cursive'>Coffee shop</span>
            </a>
            <div className='hidden md:flex gap-8 items-center'>
                <ul className='flex gap-8 text-xl'>
                    {nav.map((item, index)=>(
                        <li className='text-slate-300 hover:text-white' key={index}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <button className='px-3 py-2 rounded-full flex items-center gap-3  bg-primary outline-none hover:scale-105 transition-all duration-200'>Order <FaCoffee className='text-xl'/></button>
            </div>
            <div className='block md:hidden'>
                {
                    show ? <FaX className='text-2xl' onClick={()=>setShow(false)}/> : <MdMenu className='text-2xl' onClick={()=>setShow(true)}/>
                }
            </div>
        </div>
      </div>
      <div className='block md:hidden'>
      {
        show ? <div className='absolute text-white transition-all duration-500 top-[100px] right-[50px] bg-primary/85 px-5 py-2 rounded-md min-h-[200px] min-w-[150px] backdrop-blur-sm flex flex-col gap-3'>
            <ul className='flex flex-col gap-2 text-md'>
                    {nav.map((item, index)=>(
                        <li className='' key={index}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <button className='px-3 py-2 rounded-full flex items-center gap-3  bg-primary outline-none transition-all duration-200 hover:scale-105'>Order <FaCoffee className='text-xl'/></button>
        </div> : ""
      }
      </div>
    </div>
  )
}

export default Navbar
