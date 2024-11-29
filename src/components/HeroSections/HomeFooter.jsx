import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineFacebook, MdAddLocationAlt } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail, IoIosMailUnread , IoIosCall } from 'react-icons/io';
import { FaYoutube } from "react-icons/fa6";
import PhoneIllus from '../../../src/assets/Home/Footer/FooterIllus.svg'

const HomeFooter = () => {
    const [activeIndex, setactiveIndex] = useState(null)
    const social = [MdOutlineFacebook, BsInstagram, FaWhatsapp, FaLinkedinIn, FaYoutube]
  return (
    <div className='w-full h-fit bg-[#E78A92] px-3 py-5 flex flex-col'>
            <div className='w-full md:flex md:flex-row'>
            <div className='px-5 pb-5 md:w-1/2'>
                <p className='font-para text-[#222] font-medium text-center text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.4vw] lg:pb-3'>Ready to stay ahead of your competition?</p>
                <p className='font-para text-[#222] font-medium text-center text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:pb-3'>
                The strongest bonds in the workplace are built on trust, turning colleagues into collaborators
                </p>
                <div className='w-full flex gap-5 justify-center pt-2'>
                    {social.map((Elem, index) => (
                        <div className={`text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] ${activeIndex === index ? 'text-[#222] sm:scale-150' : 'text-[#333] sm:scale-100'}`} key={index}
                        onMouseEnter={()=>setactiveIndex(index)}
                        onMouseLeave={()=>setactiveIndex(null)}
                        >
                            <Link to='/'>
                                <Elem />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full px-5 flex md:w-1/5'>
                <div className='w-1/2 flex flex-col items-center md:w-full'>
                    <h1 className='font-heading text-[#222] text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] font-medium mb-2'>Quick links</h1>
                    <div className='flex flex-col font-para items-center gap-3 sm:text-[2.2vw] md:text-[1.8vw] xl:text-[1.4vw]'>
                        <Link to='/about' className='underline'>about</Link>
                        <Link to='/contact' className='underline'>Contact Us</Link>
                        <Link to='/serivces' className='underline'>Services</Link>
                        <Link to='/blogs' className='underline'>blogs</Link>
                    </div>
                </div>
                <div className='w-1/2 flex items-end justify-center md:hidden'>
                    <img src={PhoneIllus} className='w-4/5 sm:w-3/5' alt="" />
                </div>
            </div>
            <div className='w-full px-5 mt-3 md:mt-0 md:w-[30%] text-[#222]'>
                <h1 className='font-heading font-medium text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] pb-3'>Contacts</h1>
                <div>
                    <div className='flex items-center text-[6vw] sm:text-[4vw] md:text-[2.5vw] gap-2 md:pb-2'>
                        <IoIosMailUnread/>
                        <p className='text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] font-para font-medium lg:text-[1.3vw]'>DigitalSamael@gmail.com</p>
                    </div>
                    <div className='flex items-center text-[6vw] sm:text-[4vw] md:text-[2.5vw] gap-2 md:pb-2'>
                        <IoIosCall/>
                        <p className='text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] font-para font-medium lg:text-[1.3vw]'>+91 88512 52546</p>
                    </div>
                    <div className='flex items-center text-[6vw] sm:text-[4vw] md:text-[3.5vw] gap-2 '>
                        <MdAddLocationAlt/>
                        <p className='text-[3.5vw] sm:text-[2.5vw] font-para font-medium md:text-[1.5vw] lg:text-[1.3vw]'>A-59, Near Durga Dairy, partap vihar-2 kirari, Delhi</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t-2 border-[#222] pt-1 mt-5'>
            <p className='font-para font-semibold text-center text-[#222] text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw]'>
                @Copyright (c) 2024 DigitalSamael
            </p>
            <p className='font-para font-semibold text-center text-[#222] text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw]'>
                All rights reserved | Designed, Developed and Maintained by Phe0nix
            </p>
        </div>
    </div>
  )
}

export default HomeFooter