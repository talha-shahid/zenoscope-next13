import React from 'react'

//react icons imports
import { AiOutlineQuestion } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';


const page = () => {
  return (
    <div>
      <h1 className='my-5 text-center text-5xl font-bold'>Contact Us</h1>
      <form action="" className='flex justify-center flex-col items-center text-center'>
        <div className='my-3'>  
          <input className='p-4 text-xl md:mr-3 rounded-lg bg-[#333d47]' placeholder='First Name' type="text" />
          <input className='p-4 text-xl rounded-lg mt-6 md:mt-0 bg-[#333d47]' placeholder='Last Name' type="text" />
        </div>
        
        <div className='my-3 flex justify-between flex-col md:flex-row '>  
          <input className='p-4 text-xl md:mr-3 md:w-[75%] rounded-lg bg-[#333d47]' placeholder='Email' type="text" />
          <input className='p-4 text-xl md:w-2/5 w-3/4 mt-6 md:mt-0 rounded-lg bg-[#333d47]' placeholder='Phone' type="text" />
        </div>
        
        <input className='p-4 my-3 text-xl md:w-[51%] rounded-lg bg-[#333d47]' placeholder='Country' type="text" />
        <input className='p-4 my-3 h-48 md:w-[51%] text-xl rounded-lg bg-[#333d47]' placeholder='Message' type="text" />

        <p className='my-3 font-light'>By proceeding, you consent to Labster&apos;s processing of your information provided <br /> above in accordance with its  Privacy Policy, subject to its website Terms of <br /> Service and Use. You can unsubscribe or revoke your consent at any time.</p>

        <button className='p-2 my-5 md:mb-10 px-5 rounded-lg bg-[#0c8ce9] font-bold' type="submit">Submit</button>
      </form>

      <hr className='mx-44 '/>
      <div className='text-center md:mt-16 mt-3'>
        <h1 className='text-5xl mb-2 font-bold'>Contact Our Support team</h1>
        <p className='font-extralight'>Our dedicated support team is here to partner with you in achieving your goals.</p>
      </div>
      <div className='flex justify-between md:px-64 my-10'>
        <div className='text-center '>
          <div className='rounded-full md:text-8xl text-black md:p-10 p-4 w-12 md:w-auto ml-12 md:ml-0   text-center items-center bg-[#d9d9d9]'><MdEmail /></div>
          <h2 className='mt-3 font-semibold'>Email</h2>
          <p className='font-extralight'>abc123@gmail.com</p>
        </div>
        <div className='text-center'>
          <div className='rounded-full md:text-8xl text-black md:p-10 p-4 w-12 md:w-auto ml-14 md:ml-0   text-center items-center bg-[#d9d9d9]'><AiOutlineQuestion /></div>
          <h2 className='mt-3 font-semibold'>Help Center</h2>
          <p className='font-extralight'>info@zenoscope.com</p>
        </div>
      </div>

    </div>
  )
}

export default page