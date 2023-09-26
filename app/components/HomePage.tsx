'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//react-icon import
// import { LiaDraftingCompassSolid } from 'react-icons/lia';

const HomePage = () => {
  return (
    <div>
      <div className='flex justify-center m-10 text-center '>
       <div>
        <h1 className='text-5xl font-bold mb-2'>Zenoscope</h1> 
        <span className='font-thin'>Online Study Companion</span> 
       </div>
      </div>
      <div>
        <div className='flex justify-center'>
          <Image className='rounded-lg '  height={100} width={1500} src="/learning.jpg" alt="banner" />
        </div>
        <div className='text-center '>
          <p className='md:-mt-[550px] -mt-[180px] md:text-5xl font-medium '>Interactive Simulation and Algorithm Visualizer<br className='md:block hidden'/> in Both Science and<br/> Computer Fields</p>
          <Link href="/experiments"><button className='mt-5 p-3 rounded-2xl border border-spacing-1'>Explore Our Sims</button></Link>
        </div>
      </div>
      <div className='text-center flex-col md:mt-[26rem] mt-[5rem]'>
        <button className='p-3 mb-5 rounded-lg bg-[#2b415b] '>About us</button>
        <p className='md:mx-36'>Embark on an educational revolution with our cutting-edge platform, where traditional textbooks are history, and the captivating power of Data Visualization meets hands-on experimentation. Dive into engaging, accessible learning featuring real-time physics and chemistry experiment simulations. <br />Explore the fascinating world of algorithm visualization, where sorting and path-finding algorithms come to life before your eyes. Gain confidence, enthusiasm, and readiness for a data-centric world with features like interactive labs, gamified challenges, and personalized learning paths. Join us in shaping the future of STEM education!</p>
      </div>
      <div className='md:flex grid grid-cols-2 ml-7 md:ml-0 justify-center  p-7 md:gap-32 gap-3 mt-10'>
        <div className='text-center items-center md:p-24 p-12 rounded-full w-20 h-20 flex justify-center bg-slate-700 text-white md:font-semibold md:text-2xl '>
          <Link href="/experiments/physics">
            <p>Physics📐</p>
          </Link>
          {/* <LiaDraftingCompassSolid /> */}
        </div>
        <div className='text-center items-center md:p-24 p-12 rounded-full w-20 h-20 flex justify-center bg-slate-700 text-white md:font-semibold md:text-2xl'>
          <Link href="/experiments/chemistry">
            <p>Chemistry🧪</p>
          </Link>
        </div>
        
        <div className='text-center items-center md:p-24 p-12 rounded-full w-20 h-20 flex justify-center bg-slate-700 text-white md:font-semibold md:text-2xl'>Sorting📂</div>
        <div className='text-center items-center md:p-24 p-12 rounded-full w-20 h-20 flex justify-center bg-slate-700 text-white md:font-semibold md:text-2xl'>Path finding🐍</div>
      </div>
      <div className='text-center md:mt-14 mt-8 items-center justify-center flex flex-col'>
        <div>
          <button className='p-3 md:mb-14 mb-8 rounded-lg bg-[#2b415b]'>Explore Our Works</button>
        </div>
        <div className='flex'>
          <div>
            <Link href="/experiments">
              <Image className='rounded-l-lg my-[0.7px] md:my-0' width={936} height={1000} src="/experiment_banner.jfif" alt="experiment banner" />
              <p className='md:-mt-10 -mt-5 text-start md:ml-10 ml-4 text-white font-extrabold text-xs md:text-xl'>Experiments</p>
            </Link>
          </div>
          <div>
            <Link href="/algorithms">
              <Image className='rounded-r-lg md:h-full' width={600} height={1050} src="/algorithm_banner.png" alt="algorithm banner" />
              <p className='md:-mt-10 -mt-6 md:text-xl text-xs font-bold'>Algorithms</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage