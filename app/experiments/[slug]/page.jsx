import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

//react icons imports
import { AiOutlinePlayCircle, AiFillHtml5 } from 'react-icons/ai';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { GoGoal } from 'react-icons/go';
import { FaComputer } from 'react-icons/fa6';

import experiment from "../experiment.json";

// interface IParams {
//   slug?: string
// }

// function replacePercent20WithSpace(inputString: string) {

  // function replacePercent20WithSpace(inputString) {
//   // Use the regular expression /%20/g to match all occurrences of '%20' in the inputString and replace them with a space.
//   const replacedString = inputString.replace(/%20/g, ' ');
//   return replacedString;
// }

function replacePercent20WithSpace(inputString) {
  // Use the regular expression /%20/g to match all occurrences of '%20' in the inputString and replace them with a space.
  const replacedString = inputString.replace(/-/g, ' ');
  return replacedString;
}
function compare(params) {
  function findExperimentBySlug(slug) {
    return experiment.find((experiment) => experiment.slug === slug);
  }
  // Find the experiment using the slug from the URL
  const matchedExperiment = findExperimentBySlug(params.slug);
  return matchedExperiment;
}

// const page = ({params}: {params : IParams}) => {
const page = ({params}) => {
  const exp = compare(params)
  const input = params.slug
  const result = replacePercent20WithSpace(input);
  return !exp ? (
    <div>
    <h1 className='my-10 text-transform: capitalize text-center md:text-6xl text-3xl font-bold'>{result}</h1>      
    <div>
      <a className='flex flex-col items-center text-center justify-center' href="#" target='_blank'>
      {/* <a className='flex flex-col items-center text-center justify-center' href="https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_all.html" target='_blank'> */}
        <div className='bg-[#2d363f] md:px-96 md:py-52 px-20 py-10 rounded-xl'>
          <AiOutlinePlayCircle size={150} className=""/>
        </div>
      </a>
    </div>
    <div className='md:mt-[5rem] mt-20 md:mx-10 '>
      <h2 className=' text-4xl font-bold'>Introduction</h2>
      <p className='mt-5'>The Greenhouse Effect is a fascinating and crucial scientific phenomenon that plays a pivotal role in our planet\s climate system. Understanding it is not only important for scientific knowledge but also for comprehending the ongoing global climate change.
      Our Greenhouse Effect experiment is designed to provide you with a hands-on experience that unravels the mysteries behind this natural process. As you embark on this journey, you will explore the fundamental principles, causes, and consequences of the Greenhouse Effect, all from the comfort of your own environment.
      Through engaging simulations and interactive activities, we aim to demystify this complex concept and shed light on its significance in today\s world. Join us in this exploration of the Greenhouse Effect, where science meets real-world relevance, and where knowledge is the key to a more sustainable future.
      </p>
      <div className='mt-14'>
        <div className='flex'>        
          <HiOutlineClipboardList size={70}/>
          <h2 className='mt-5 mb-2 text-4xl font-bold'>Topics</h2>
        </div>
        <div className='ml-4 mt-4'>
            <ol className='text-xl'>
              <li>&#x2022;  Greenhouse Gases</li>
              <li>&#x2022;  Thermal Equilibrium</li>
              <li>&#x2022;  Radiative Balance</li>
              <li>&#x2022;  Albedo</li>
              <li>&#x2022;  Climate</li>
            </ol>
        </div>
      </div>
      <div className='mt-14'>
        <div className='flex'>        
          <GoGoal size={70}/>
          <h2 className='mt-5 mb-2 ml-2 text-4xl font-bold'>Goals</h2>
        </div>
        <div className='ml-4 mt-4'>
            <ol className='text-xl'>
              <li>&#x2022;  Describe the effect of greenhouse gases and clouds on sunlight, infrared radiation, and surface temperature.</li>
              <li>&#x2022;  Explain why greenhouse gases affect the temperature.</li>
              <li>&#x2022;  Compare and contrast the behavior of sunlight and infrared radiation.</li>
              <li>&#x2022;  Describe radiative balance and use it to explain the relationship between the surface temperature and greenhouse gas concentration.</li>
              <li>&#x2022;  Compare the effect of greenhouse gases to the effect of infrared absorbing layers.</li>
            </ol>
        </div> 
      </div>     
      <div className='mt-14'>
        <div className='flex'>        
          <FaComputer size={70}/>
          <h2 className='md:mt-4 mt-3 mb-2 ml-3 text-4xl font-bold'>System Requirements</h2>
        </div>
        <div className='ml-4 mt-2 md:flex'>
          <AiFillHtml5 size={90} className="hidden md:block"  />
          <p className="mt-6 text-lg md:ml-5">
            HTML5 simulations can run on iPads, Chromebooks, PC, Mac, and Linux systems.See full HTML5 system requirements.Inclusive features are added to HTML5 sims only, and some features have platform limitations. See Accessible Sims for more details on system requirements and tested platforms.
          </p>
        </div> 
      </div> 
      {/* <div className='flex flex-col text-center mt-14 rounded-lg p-20 bg-[#1b2c3c] '>
        <h2 className='-mt-10 mb-7 text-2xl font-semibold'>Related Projects</h2>
        <div className='flex justify-center gap-10'> 
          <Link href={'/experiments/Greenhouse Effect'}>
            <div className='flex flex-col '>
              <Image className='rounded-t-lg' width={200} height={300} src="/greenhouse-effect.png" alt="banner_image" />
              <span className='bg-[#196177] text-white p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
            </div>
          </Link>
          <Link href={'#'}>
            <div className='flex flex-col '>
              <Image className='rounded-t-lg' width={200} height={300} src="/greenhouse-effect.png" alt="banner_image" />
              <span className='bg-[#196177] text-white p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
            </div>
          </Link>
          <Link href={'#'}>
            <div className='flex flex-col '>
              <Image className='rounded-t-lg' width={200} height={300} src="/greenhouse-effect.png" alt="banner_image" />
              <span className='bg-[#196177] text-white p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
            </div>
          </Link>  
        </div>
      </div>     */}
    </div>

    </div>
  ) : (
    <div>
        {/* {experiment?.map((exp,index)=>(           */}
          <div >
            <h1 className='my-10 text-center md:text-6xl text-3xl font-bold'>{exp.title}</h1>
            <div>
              <a className='flex flex-col items-center text-center justify-center' href={exp.link} target='_blank'>
              {/* <a className='flex flex-col items-center text-center justify-center' href="https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_all.html" target='_blank'> */}
                <Image width={900} height={2000} className='rounded-lg opacity-60' src={exp.image} alt="" />
                <AiOutlinePlayCircle size={150} className="md:-mt-[25rem] -mt-[12rem]"/>
              </a>
            </div>
            <div className='md:mt-[20rem] mt-20 md:mx-10 '>
              <h2 className=' text-4xl font-bold'>Introduction</h2>
              <p className='mt-5'>{exp.intro}
              </p>
              <div className='mt-14'>
                <div className='flex'>        
                  <HiOutlineClipboardList size={70}/>
                  <h2 className='mt-5 mb-2 text-4xl font-bold'>Topics</h2>
                </div>
                <div className='ml-4 mt-4'>
                  {exp.topics.map((topic, index) => (
                    <ol className='text-xl' key={index}>
                      <li>&#x2022;  {topic}</li>
                    </ol>
                  ))}
                </div>
              </div>
              <div className='mt-14'>
                <div className='flex'>        
                  <GoGoal size={70}/>
                  <h2 className='mt-5 mb-2 ml-2 text-4xl font-bold'>Goals</h2>
                </div>
                <div className='ml-4 mt-4'>
                  {exp.goals.map((goal, index) => (
                    <ol className='text-xl' key={index}>
                      <li>&#x2022;  {goal}</li>
                    </ol>
                  ))}
                </div> 
              </div>     
              <div className='mt-14'>
                <div className='flex'>        
                  <FaComputer size={70}/>
                  <h2 className='md:mt-4 mt-3 mb-2 ml-3 text-4xl font-bold'>System Requirements</h2>
                </div>
                <div className='ml-4 md:ml-0 mt-2 md:flex'>
                  <AiFillHtml5 size={90} className="hidden md:block"  />
                  <p className="mt-6 text-lg md:ml-5">
                    {exp.system_requirements}
                  </p>
                </div> 
              </div> 
              {/* <div className='flex flex-col text-center mt-14 rounded-lg p-20 bg-[#1b2c3c] '>
                <h2 className='-mt-10 mb-7 text-2xl font-semibold'>Related Projects</h2>
                <div className='flex justify-center gap-10'> 
                  <Link href={'/experiments/Greenhouse Effect'}>
                    <div className='flex flex-col '>
                      <Image className='rounded-t-lg' width={200} height={300} src="/greenhouse-effect.png" alt="banner_image" />
                      <span className='bg-[#196177] text-white p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
                    </div>
                  </Link>
                  <Link href={'#'}>
                    <div className='flex flex-col '>
                      <Image className='rounded-t-lg' width={200} height={300} src="/greenhouse-effect.png" alt="banner_image" />
                      <span className='bg-[#196177] text-white p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
                    </div>
                  </Link>
                  <Link href={'#'}>
                    <div className='flex flex-col '>
                      <Image className='rounded-t-lg' width={200} height={300} src="/greenhouse-effect.png" alt="banner_image" />
                      <span className='bg-[#196177] text-white p-1 pl-2 rounded-b-lg'>Greenhouse Effect</span>
                    </div>
                  </Link>  
                </div>
              </div>     */}
            </div>
          </div>
        {/* ))} */}

    </div> 
  )
}

export default page