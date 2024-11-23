import React, { useState } from 'react'
import { FaNewspaper } from "react-icons/fa6";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';

const HomeNews = () => {
  const blog = [
      {
          type: "Bussiness",
          title : "Best Digital Marketing Agency in Delhi-86",
          content : "According to Neil Patel, A agency is a company that specialize in providing a various types of services for online business growth and their presence. Digital marketing agency is a firm or company where we provide services to our customer's.",
          imgSrc : "src/assets/Home/News/Delhi-86.png",
          date : "September 25, 2024",
      },
      {   type: "Blog",
          title: "Best SEO Information and Advantages in 2025",
          content: "The best SEO information and advantages in 2025. SEO it is known as “Search Engine Optimization”. It means you improving the quantity and quality of traffic to your website through organic search result is called search engine optimization.",
          imgSrc: "src/assets/Home/News/SEO-advantages.webp",
          date: "October 2, 2024",
      },
      {
          type: "Blog",
          title: "E-commerce",
          content: "E-commerce business we know about a strategies for e-commerce business. E-commerce is known as Electronic Commerce in this business you buying and selling of goods and service online.  It can involve exchange the products or services between consumers and business both.",
          imgSrc: "src/assets/Home/News/e-commerce.jpg",
          date: "August 19, 2024",
      },
      {
          type: "Blog",
          title: "Best 5 Gaming Phones of All time You Should Buy",
          content: "Gaming is those part in our life where we release our everything like stress, anxiety, depression, tension, while we play game we don’t think about these because we focus on our game and sometimes once in a rare moment when you play game with your friends you laugh continuously because they making laugh every one of us.",
          imgSrc: "src/assets/Home/News/gaming.webp",
          date: "November 5, 2024",
      },
  ]
  const illusTop = 'src/assets/Home/News/readingTop.svg'
  const illusBot = 'src/assets/Home/News/readingBottom.svg'
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? blog.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === blog.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className='w-full relative -z-10 bg-News py-5 px-3 md:px-5'>
      <div className='flex flex-row gap-2 md:gap-5 items-center md:items-end font-medium '>
        <div className='text-[8vw] sm:text-[6vw] md:text-[4.5vw] text-[#222]'>
          <FaNewspaper />
        </div>
        <h1 className='text-[6vw] sm:text-[4.5vw] md:text-[3vw] font-heading text-[#222] border-b-2 border-[#222]'>
          Latest News and Updates
        </h1>
        <div className='hidden lg:block'>
          <img src={illusTop} className='w-[100px]' alt="" />
        </div>
      </div>
      <div className='text-center py-5 font-para text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw]'>
      There’s always happening something in the Digital Samael. Check out the latest news, articles and updates.
      </div>
      <div className='w-full flex flex-row px-2 py-3 gap-[5%] flex-wrap justify-center md:justify-start gap-y-5 md:flex-nowrap overflow-x-hidden lg:px-10'>
        {blog.map((elem, index)=> (
          <div className='hover:scale-[1.02] w-[45%] md:w-[30%]  bg-[#ffffff3c] shadow-how px-1 py-3 shrink-0 md:pb-5 transition-all duration-700'
          key={index}
          style={{ transform: `translateX(-${activeIndex * 115}%)` }}
          >
            <Link to='/blogs'>
              <div className=''>
                <div className='w-full md:h-[20vw] md:pb-3'>
                  <img src={elem.imgSrc} className='w-[90%] mx-[5%] aspect-square md:aspect-auto h-full md:object-cover  object-contain' alt="" />
                </div>
                <div className='w-full flex text-[1.8vw] md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1vw] justify-between px-3 font-medium font-heading'>
                  <div>
                    {elem.type}
                  </div>
                  <div>
                    {elem.date}
                  </div>
                </div>
                <div className='text-[3vw] md:text-[2.2vw] md:h-[10vw] lg:h-[8vw] lg:text-[2vw] flex items-center font-heading px-3 pt-2 hover:underline text-orange-500'>
                  {elem.title}
                </div>
                <div className='hidden lg:line-clamp-3 lg:text-[1.3vw] xl:text-[1.2vw] lg:px-3 font-para lg:mb-4'>
                  {elem.content}
                </div>
                <button className='hidden lg:block lg:ml-3 px-3 py-2 border-2 border-[#333] rounded-lg'>
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='w-full hidden md:flex flex-row justify-center items-center text-[4vw] pt-5 gap-2 text-[#222] lg:pb-10 relative'>
        <div className='bg-[#e78a9296] shadow-how p-1 rounded-full' onClick={handlePrev}>
          <BsArrowLeftShort/>
        </div>
        <div className='bg-[#e78a9296] shadow-how p-1 rounded-full' onClick={handleNext}>
          <BsArrowRightShort/>
        </div>
        <div className='hidden lg:block absolute w-[300px] bottom-0 right-0'>
          <img src={illusBot} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeNews