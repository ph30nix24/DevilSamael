import React, { useState } from 'react'
import { AiOutlineLinux } from "react-icons/ai";
import { BsChevronBarDown, BsChevronBarUp } from "react-icons/bs";

const HomeWork = () => {
  const data = [
    {
      img: 'src/assets/Home/Work/Understanding.svg',
      title: 'Understanding the Client',
      Count: '01',
      Description: 'Discuss goals and target audience with the client and Set clear objectives for both digital marketing and website development.',
    },
    {
      img: 'src/assets/Home/Work/planning.svg',
      title: 'Conduct Research and Planning',
      Count: '02',
      Description: 'Analyze competitors and market trends and Create a strategy that includes both marketing and web development plans.',
    },
    {
      img: 'src/assets/Home/Work/web.svg',
      title: 'Develop and Design the Website',
      Count: '03',
      Description: 'Design a user-friendly, responsive website using tools like React and Tailwind CSS. Optimize for SEO to ensure the site ranks well on search engines.',
    },
    {
      img: 'src/assets/Home/Work/social.svg',
      title: 'Launch Marketing Campaigns',
      Count: '04',
      Description: 'Implement digital marketing strategies across chosen channels (SEO, social media, email, etc.). Create and publish content that drives traffic and engagement.',
    },
  ]
  const [Show, setShow] = useState(null)
  const showHandler = (index) => {
    if (Show !== null){
      setShow(null)
    }
    else {
      setShow(index)
    }
  }
  return (
    <div className='w-full h-fit bg-HomeWork py-5 px-3 relative -z-10'>
        <div className=' flex flex-row items-center text-[8vw] lg:text-[5vw] gap-2 text-[#222]'>
          <AiOutlineLinux />
          <div className='text-[5vw] lg:text-[3vw] font-heading w-fit border-b-2 border-[#222]'>
            How we work
          </div>
        </div>
        <div className='w-full flex flex-col py-5 lg:px-10'>
          {data.map((elem, index) => (
            <div className='py-3  bg-[#ffffff3a] md:bg-transparent shadow-2xl md:shadow-none backdrop-blur-lg md:backdrop-blur-none filter md:filter-none rounded-lg md:flex md:flex-row md:items-center' key={index} onClick={() => showHandler(index)}>
              <div className={`w-full md:w-1/2 py-5 ${Show === index ? 'block' : 'hidden'} md:block ${index % 2 === 0 ? 'order-1' : 'order-2'} lg:w-2/5`}>
                  <img src={elem.img} className='w-3/5 mx-[20%] object-contain ' alt="" />
              </div>
              <div className={`w-full flex flex-col md:w-1/2 md:bg-[#ffffff3a] md:shadow-2xl md:backdrop-blur-lg md:filter md:rounded-lg md:h-fit ${index % 2 === 0 ? 'order-2' : 'order-1'} lg:w-3/5`}>
                <div className='w-full flex items-center justify-between px-2 text-[4.5vw] md:text-[2.6vw] font-medium pb-2 lg:pb-0'>
                  <div>
                    <h1 className='font-heading '><span className='text-[5vw] font-counting pr-2 text-[#333]'>{elem.Count}</span>{elem.title}</h1>
                  </div>
                  <div className='font-medium pt-2 md:hidden'>
                    <BsChevronBarDown />
                  </div>
                </div>
                <div className={`px-2 font-para font-normal ${Show === index ? 'block' : 'hidden'} md:block md:pb-3`}>
                  <p className='text-[4vw] sm:text-[3vw] md:text-[1.6vw] lg:text-[1.2vw] lg:px-5 lg:pb-4'>{elem.Description}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
    </div>
  )
}

export default HomeWork