import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HomeServices = () => {
    const workData = [
        {
            image : '../../../src/assets/Home/ServicesImg/SEO.svg',
            title : 'SEO Optimization',
            description : 'SEO is a vital tool for enhancing your website’s visibility and driving organic traffic. By optimizing your site for search engines, we can significantly improve your search rankings, attract more visitors, and increase conversions. Our comprehensive SEO strategies include thorough keyword research, on-page optimization, ensuring your site stands out in search results. Partnering with us means you’ll benefit from a tailored approach that aligns with your business goals, helping you reach your target audience more effectively. Let’s work together to elevate your online presence, boost your brand’s visibility, and achieve your digital marketing objectives. With our expertise, your website will not only rank higher but also engage and convert more visitors.',
            logo: GoSearch
        },
        {
            image : '../../../src/assets/Home/ServicesImg/webDev.svg',
            title : 'Website Development',
            description : 'Website development is the backbone of your online presence. Our team specializes in creating robust, scalable, and visually appealing websites tailored to your business needs. We focus on delivering a seamless user experience, ensuring your site is not only functional but also engaging. By leveraging the latest technologies and best practices, we build websites that perform well across all devices and platforms. Partnering with us means you’ll benefit from a customized approach that aligns with your goals, helping you reach your target audience effectively. Let’s work together to develop a website that not only attracts visitors but also converts them into loyal customers, driving your business growth and success.',
            logo: IoCodeSlash
        },
        {
            image : '../../../src/assets/Home/ServicesImg/ContentWriting.svg',
            title : 'Content Writing',
            description : 'Content writing is crucial for building a strong online presence and engaging your audience. Our team specializes in creating high-quality, relevant content that resonates with your target market. By focusing on thorough research, strategic keyword integration, and compelling storytelling, we ensure your content not only attracts visitors but also converts them into loyal customers. Our approach is tailored to your business goals, helping you stand out in a crowded digital landscape. Partner with us to enhance your brand’s visibility, drive organic traffic, and achieve your marketing objectives. Let’s work together to create content that informs, entertains, and persuades, ultimately boosting your online success.',
            logo: FaFileAlt
        }
    ]
    const [Display, setDisplay] = useState(0)
    const topIllus = '../../../src/assets/Home/ServicesImg/ServicesIllus.svg'
  return (
    <div className='w-full bg-HomeServicesBg py-5 px-3 relative -z-10'>
        <div className='w-full md:flex md:items-end md:justify-center'>
            <h1 className='underline font-heading text-[5vw] text-center font-semibold md:font-medium md:text-[3vw] md:no-underline w-fit md:border-b-2 border-[#222] mb-5 '>What We do
            </h1>
            <div className='hidden md:block'>
                <img src={import.meta.env.BASE_URL + topIllus} className='w-[100px] h-[100px]' alt="" />
            </div>

        </div>
        <div className='bg-[#fea8af] w-full rounded-md flex flex-col md:flex-row py-10 px-5 lg:w-4/5 lg:mx-[10%]'>
            <div className='w-full md:w-1/2 flex justify-end'>
                <img src={import.meta.env.BASE_URL+workData[Display].image} className='w-3/5 mx-[20%] md:w-4/5 md:mx-[10%]' alt="" />
            </div>
            <div className='w-full md:w-1/2 lg:px-[2.5%] flex flex-col pt-5 md:flex md:flex-row'>
                <div className='flex w-full md:w-[15%] order-1 md:order-2 md:flex-col'>
                    {workData.map((elem, index)=> (
                        <div className={`text-[5vw] md:text-[3vw] md:mb-[5%] md:h-[15%] w-[15%] md:w-full mx-[2.5%] md:mx-0 py-3 px-3 backdrop-blur-xl rounded-t-md md:rounded-t-none md:rounded-r-md flex justify-center items-center text-[#222] z-0 ${Display === index ? 'bg-[#ffffff21] shadow-2xl backdrop-blur-lg filter': 'bg-[#fffffHome/ServiceImg'}`} onClick={() => setDisplay(index)} key={index}>
                            <elem.logo/>
                        </div>
                    ))}
                </div>
                <div className='w-[95%] md:w-[85%] mx-[2.5%] md:mx-0 bg-[#ffffff21] shadow-2xl backdrop-blur-lg filter px-3 md:px-5 lg:px-8 py-5 rounded-b-lg rounded-tr-lg md:rounded-tr-none md:rounded-tl-md md:order-1 order-2'>
                    <h1 className='font-heading text-[6vw] md:text-[3vw] text-center text-[#222] font-medium pb-3'>
                        {workData[Display].title}
                    </h1>
                    <p className='line-clamp-[14] sm:line-clamp-none font-para text-justify text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.1vw]'>
                        {workData[Display].description}
                    </p>
                    <button className='px-2 py-2 font-heading font-medium border-2 mt-5 border-[#222] text-[#222] rounded-md hover:bg-[#222] hover:text-slate-100 text-[3.5vw] sm:text-[2vw] md:text-[1.4vw] lg:text-[1.1vw] transition-all duration-700'>
                        <Link to='/services'>Read More</Link>
                    </button>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default HomeServices