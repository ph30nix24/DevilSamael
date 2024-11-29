import React, { useState } from 'react'
import { BiLaugh } from "react-icons/bi";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoHappyOutline, IoCheckmarkDoneCircle } from "react-icons/io5";
import Client1 from "../../../src/assets/Home/Clients/spice-buscket.webp";
import Client2 from "../../../src/assets/Home/Clients/Header-1536x597-1.webp";
import Client3 from "../../../src/assets/Home/Clients/omega.webp";
import Client4 from "../../../src/assets/Home/Clients/Kojo-06_180x.webp";
import Client5 from "../../../src/assets/Home/Clients/derma.webp";
import Client6 from "../../../src/assets/Home/Clients/Boys.png";
import Client7 from "../../../src/assets/Home/Clients/simply.webp";
import Client8 from "../../../src/assets/Home/Clients/Triplets.png";
import Client9 from "../../../src/assets/Home/Clients/Sunrise.png";
import Bottom from '../../../src/assets/Home/Clients/smile.svg';
import TopHeading from '../../../src/assets/Home/Clients/TopHeading.svg'

const HomeClient = () => {
  const companies = [
    { company: "Spicy Bucket", logo: Client1},
    { company: "Peter'Sit", logo: Client2 },
    { company: "Omega", logo: Client3 },
    { company: "Kojo", logo: Client4 },
    { company: "Derma", logo: Client5 },
    { company: "Bad Boys", logo: Client6 },
    { company: "SBS", logo: Client7 },
    { company: "The TRiPlets", logo: Client8 },
    { company: "Sunrise", logo: Client9},
  ];
  const Experience = [
    {
      Numbers : '5+',
      Comment : "Years of Experience",
      icon: GiSandsOfTime
    },
    {
      Numbers : "100+",
      Comment : "Solution Delivered",
      icon: FaRegLightbulb
    },
    {
      Numbers : "200+",
      Comment : "Happy Customers",
      icon : IoHappyOutline
    },
    {
      Numbers : "200+",
      Comment : "Project Done",
      icon : IoCheckmarkDoneCircle
    }
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className='w-full bg-[#E78A92] relative -z-10 py-5 px-3 lg:px-10'>
      <div className='text-[9vw] md:text-[7vw] text-[#333] flex flex-row items-end gap-1 md:pb-10 md:justify-center'>
        <BiLaugh className='md:hidden'/>
        <div className='flex flex-row items-end '>
          <h1 className='text-[6vw] md:text-[4.5vw] lg:text-[3.5vw] transition-all duration-500 font-heading font-medium text-[#222] px-2 border-b-2 border-[#222]'>Our Clients</h1>
          <img src={TopHeading} className='w-[100px] h-[100px] hidden md:block' alt="" />
        </div>
      </div>
      <div className='text-center font-para py-5 text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.6vw]'>
      More than 200+ Clients trust Digital Samael as the backbone of their business solutions.
      </div>
      <div className='w-full py-5 flex flex-wrap gap-[10%] md:gap-[5%] justify-center'>
          {companies.map((elem, index) => (
            <div className={`text-[4.5vw] md:text-[3.5vw] lg:text-[2.5vw] w-2/5 md:w-[30%] lg:w-[25%] py-5 px-3 font-para border-t-2 border-b-2 border-[#333] min-w-2/5 md:min-w-[30%] lg:min-w-[25%] shrink-0 mb-5 text-center transition-all duration-1000 ${hoveredIndex !== index ? 'bg-inherit' : 'bg-[#333]'}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <p className={`${hoveredIndex === index ? 'hidden' : 'block'} transition-all duration-1000`}>{elem.company}</p>
                <img src={elem.logo} className={`${hoveredIndex === index ? 'block' : 'hidden'} w-full h-[28px] sm:h-[46px] lg:h-[56px] xl:h-[48px] object-contain`} alt="" />
              </div>
            </div>
          ))}
      </div>
      <div className='w-full lg:w-[90%] lg:mx-[5%] flex flex-wrap gap-[10%] sm:gap-[5%] justify-center shadow-Experience bg-[#ffffff2f] rounded-3xl py-3 px-2 gap-y-5'>
        {Experience.map((elem, index) =>(
          <div className='w-2/5 min-w-2/5 sm:w-1/5 sm:min-w-1/5 relative font-medium md:flex md:flex-col items-center sm:pb-5' key={index}>
            <div className='text-[8vw] sm:text-[6vw] md:text-[4vw] font-counting text-[#222]'>
              {elem.Numbers}
            </div>
            <div className='text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.4vw] font-para lg:text-center text-[#222]'>
              {elem.Comment}
            </div>
            <div className='absolute top-2 right-4 text-[16vw] sm:text-[10vw] md:text-[6vw] text-[#333] z-0 rotate-12 opacity-80 lg:opacity-70'>
              <elem.icon/>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full py-5 flex flex-col items-center '>
        <img src={Bottom} className='w-3/5 sm:w-2/5 md:w-1/4 xl:w-1/5' alt="" />
        <p className='text-center font-para pt-2 md:pt-5 text-[4.2vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.6vw] text-[#333]'>
          We Build Trust with Our Clients...
        </p>
      </div>
      <div className='w-[160px] h-[160px] absolute bg-[#ffffff1e] top-[8%] left-[8%] rounded-full shadow-heroWhite hidden lg:block'></div>
      <div className='w-[80px] h-[80px] absolute bg-[#ffffff1e] bottom-[8%] right-[35%] hidden lg:block rounded-full shadow-heroWhite'></div>
      <div className='w-[100px] h-[100px] absolute bg-[#ffffff1e] bottom-[10%] left-[30%] rounded-full shadow-heroWhite hidden lg:block'></div>
    </div>
  )
}

export default HomeClient