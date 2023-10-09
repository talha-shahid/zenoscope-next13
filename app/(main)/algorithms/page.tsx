import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

//react icons imports
import { FaMagnifyingGlass } from 'react-icons/fa6';


const page = () => {

  return (
    <div>
      <div>
        <h1 className='my-5 text-center text-4xl font-bold'>Algorithms</h1>
        <div className='flex justify-center items-center'>
          <input type="text" className='p-5 h-5 border-none md:w-[50rem] w-[17rem] -ml-4 md:-ml-0 bg-[#4a5a61] rounded-lg' placeholder='Search algorithms'/>
          <FaMagnifyingGlass className='md:-ml-10 -ml-8' />
        </div>
       
       <div className='flex justify-center'>
          <div className='md:p-9 px-7 py-7 md:m-10 my-5 grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-6 rounded-lg bg-[#393752]'>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col'>
                <Image className='rounded-t-lg' width={200} height={100} src="/Bubble-Sort.png" alt="banner_image" />
                <span className='bg-[#114e3a] text-white p-1 pl-2 rounded-b-lg'>Bubble Sort</span>
              </div>
            </Link>
          </div>
       </div>
      </div>
    </div>
  )
}

export default page