import React from 'react';
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HeroImage from '../../../src/assets/Home/Hero/heroImage.png'
import HeroIllustration from '../../../src/assets/Home/Hero/heroInvite.svg'

const HomeHero = () => {
  return (
    <div className='w-full h-screen sm:h-screen md:h-[60dvh] lg:h-screen pt-[80px] bg-hero relative -z-10 lg:flex lg:flex-col items-center'>
      <div className='flex w-full h-full lg:h-4/5 flex-col md:flex-row'>
        <img src={HeroImage} className='w-full h-1/2 object-contain md:w-1/2 md:h-full lg:w-2/5 lg:mx-[5%] lg:pt-16' alt="heroImg" />
        <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-start pt-5 sm:pt-0 items-center md:justify-center'>
          <div className='flex flex-col items-center w-full md:justify-center md:items-center'>
            <p className='font-para text-[4vw] sm:text-[3vw] md:text-[2vw]'>
              More then just a 
            </p>
            <h1 className='text-[7.4vw] sm:text-[6.8vw] md:text-[4vw] font-hero leading-normal'>Digital Marketing Agency,</h1>
            <p className='font-para text-[4vw] sm:text-[3vw] md:text-[2vw]'>Meet your digital Partners</p>
          </div>
          <div className='w-full flex flex-col items-center pt-3 relative z-10'>
            <p className='text-[4vw] sm:text-[3vw] md:text-[2vw] font-para relative z-10'>Say hi! to</p>
            <h1 className='text-[7.4vw] sm:text-[6.8vw] md:text-[4vw] font-hero leading-normal relative z-20'>Digital Samael</h1>
            <button className='flex flex-row items-center text-[5vw] md:text-[2vw] border-2 border-black text-black px-3 py-2 mt-3 gap-3 rounded-md hover:bg-black hover:text-white transition-all duration-1000 ease-in-out relative z-10'>
             <Link to='/contact'  className='flex flex-row items-center gap-3'>
                <FaPersonWalkingArrowRight />
                <p className='text-base font-para font-medium'>Get in touch</p>
             </Link>
            </button>
            <img src={HeroIllustration} className='w-[200px] h-[200px] object-contain absolute -bottom-10 -left-4 z-0 md:hidden xl:block lg:bottom-0 lg:left-0' alt="" />
          </div>
        </div>
      </div>
      <div className='md:w-[160px] md:h-[160px] absolute rounded-full md:top-10 md:right-0 bg-[#fea8af] shadow-heroPink -z-10'></div>
      <div className='md:w-[160px] md:h-[160px] absolute rounded-full md:top-[5%] lg:top-[30%] xl:top-[20%] md:left-12 lg:left-[8%] bg-[#fea8af] shadow-heroPink backdrop-blur-xl transition-all duration-500 -z-10'></div>
      <div className='w-full hidden lg:block lg:h-1/5 text-center text-[1.8vw] font-para'>
        <p>Boost Your Online Visibility With Top-Notch Digital Marketing Agency In India ...</p>
      </div>
    </div>
  )
}

export default HomeHero