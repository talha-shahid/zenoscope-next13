import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

//react icons imports
import { FaMagnifyingGlass } from 'react-icons/fa6';

// const obj = [
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   },
//   {
//     title: 'Greenhouse Effect',
//     image: '/greenhouse-effect.png',
//     slug: 'greenhouse-effect'
//   }
// ]
import obj from "./experiment.json";

const page = () => {

  return !obj ? (
    <div>
      <div>
        <h1 className='my-5 text-center text-4xl font-bold'>Experiments</h1>
        <div className='flex justify-center items-center'>
          <input type="text" className='p-5 h-5 border-none md:w-[50rem] w-[17rem] -ml-4 md:-ml-0 bg-[#4a5a61] rounded-lg' placeholder='Search simulations'/>
          <FaMagnifyingGlass className='md:-ml-10 -ml-8' />
        </div>
       
       <div className='flex justify-center'>
          <div className='md:p-9 px-7 py-7 md:m-10 my-5 grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-6 rounded-lg bg-[#393752]'>
          <Link href={'/experiments/greenhouse-effect'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/greenhouse-effect.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/masses-and-springs.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Masses and Springs</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/wave-interference.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Wave Interference</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/coulombs-law.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Coulombs Law</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/projectile-motion.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Projectile Motion</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/gravity-and-orbits.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Gravity and Orbits</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/charges-and-fields.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Charges and Fields</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/pendulum-lab.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Pendulum Lab</span>
              </div>
            </Link>
            <Link href={'/experiments/greenhouse-effect'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/build-a-nucleus.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Build a Nucleus</span>
              </div>
            </Link>
            <Link href={'/experiments/greenhouse-effect'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/build-a-molecule.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Build a Molecule</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/gas-properties.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Gas Properties</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/energy-forms-and-changes.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Energy Forms and Changes</span>
              </div>
            </Link>
            <Link href={'#'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/molecule-shapes.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Molecule Shapes</span>
              </div>
            </Link>
          </div>
       </div>
      </div>
    </div>
  ):(
    <div>
      <div>
        <h1 className='my-5 text-center text-4xl font-bold'>Experiments</h1>
        <div className='flex justify-center items-center'>
          <input type="text" className='p-5 h-5 md:w-[50rem] w-[17rem] -ml-4 md:-ml-0 bg-[#4a5a61] rounded-lg' placeholder='Search simulations'/>
          <FaMagnifyingGlass className='md:-ml-10 -ml-8' />
        </div>
       
       <div className='flex justify-center'>
          <div className='md:p-9 px-7 py-7 md:m-10 my-5 grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-6 rounded-lg bg-[#393752]'>
            {obj.map((item, index) => (
              <Link href={`/experiments/${item.slug}`} key={index}>
                <div className='flex flex-col '>
                  <Image className='rounded-t-lg ' width={250} height={100} src={item.image} alt="banner_image" />
                  <span className='bg-white font-semibold text-black p-1 pl-3 rounded-b-lg'>{item.title}</span>
                </div>
              </Link>
            ))}

            
            {/* <Link href={'/experiments/greenhouse-effect'}>
              <div className='flex flex-col '>
                <Image className='rounded-t-lg' width={200} height={100} src="/greenhouse-effect.png" alt="banner_image" />
                <span className='bg-white font-semibold text-black p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
              </div>
            </Link>            */}
          </div>
       </div>
      </div>
    </div>
  )
}

export default page