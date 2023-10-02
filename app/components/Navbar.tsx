'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

//react icons imports
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineRight } from 'react-icons/ai';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);

    const toggleHidden = () => {
        setHidden(!hidden);
    }
  return (
    <div className='sticky top-4 z-30'>
        <div className='flex justify-between bg-[#2d363f] rounded-xl shadow-xl p-3'>
            <div >
               <Link className='flex gap-[6px] text-xl pt-2 items-center' href='/'>
                    <Image src={"/logo.png"} width={30} height={20} alt="logo" />
                    <p className='text-white'>Zenoscope</p>
               </Link>
            </div>
            <div className='md:flex gap-6 lg:mr-10 mr-3 hidden items-center'>
                <a href="/experiments" className='cursor-pointer hover:underline'>Experiments</a>
                <a href="/algorithms" className='cursor-pointer hover:underline'>Algorithms</a>
                <a href='/aboutUs' className='cursor-pointer hover:underline'>About us</a>
                <a href='/contactUs' className='cursor-pointer hover:underline'>Contact us</a>
                <button className='p-2 bg-[#1a232e] rounded-lg pr-10 px-3'> Login</button>
                <AiOutlineRight className="-ml-14 text-black rounded-md bg-[#09d3ff] m-3 text-xl z-10" />
            </div>
            <div className='md:hidden'>
                <HiMenuAlt3 size={30} onClick={toggleHidden}  />
            </div>
        </div>
       {hidden &&  <div className='p-3 w-32 flex flex-col absolute right-5 top-[65px] text-white bg-[#2d363f] rounded-lg'>
            <a href="/experiments" className='cursor-pointer hover:underline'>Experiments</a>
            <a href="/algorithms" className='cursor-pointer hover:underline'>Algorithms</a>
            <a href='/aboutUs' className='cursor-pointer hover:underline'>About us</a>
            <a href='/contactUs' className='cursor-pointer hover:underline'>Contact us</a> 
            <a href='/login' className='cursor-pointer hover:underline'>login</a> 
        </div>}

    </div>
  )
}

export default Navbar