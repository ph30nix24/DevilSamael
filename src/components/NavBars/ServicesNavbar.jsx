import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbListSearch } from "react-icons/tb";
import { GrArticle } from "react-icons/gr";
import { MdCall } from "react-icons/md";

const ServicesNavbar = () => {
  const links = [
    { label : "Home",
      icons : IoIosHome
    },
    { label : "About",
      icons : IoPersonSharp
    },
    { label : "Contact",
      icons : TfiHeadphoneAlt
    },
    { label : "Services",
      icons : TbListSearch
    },
    { label : "Blogs",
      icons : GrArticle
    },

  ]
  const [isHovered, setIsHovered] = useState(false);
  const logo = ['../src/assets/icons/light.png', '../src/assets/icons/dark.png']
  const img = ["../src/assets/menuBar.svg", "../src/assets/menuCross.svg"]
  const [Nav, setNav] = useState(false)
  const current = 3
  return (
    <div className='w-full flex flex-col bg-[#ffffff17] backdrop-blur-md shadow-lg sm:flex-row sm:justify-between sm:items-center sm:px-[2%]'>
      <div className='flex items-center justify-between px-2 py-1 sm:w-fit'>
        <div className='flex items-center gap-2'>
          <img className='h-[56px] w-[56px] object-contain' src={logo[0]} alt="" />
          <h2 className='font-heading font-normal sm:hidden'>Digital Samael</h2>
        </div>
        <div>
          <img onClick={()=>setNav(!Nav)} className='sm:hidden' src={Nav ? img[1] : img[0]} alt="" />
        </div>
      </div>
      <nav className={`w-full sm:w-fit`}>
        <div className={`flex-col ${Nav ? 'flex' : 'hidden'} sm:flex sm:flex-row`}>
          {links.map((elem, index) => (
            <div className={`px-4 py-3 backdrop-blur-lg shadow-md rounded-full ${current === index ? 'bg-[#22d3ee77] text-[#333]': 'bg-transparent'}`} key={index}>
              <Link to={`/${index === 0 ? '': elem.label.toLowerCase()}`}>
                  <div className={`flex gap-2 items-center`}>
                    <elem.icons className='h-6 w-6 text-primary' />
                    <h1 className='font-heading sm:hidden'>{elem.label}</h1>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <div>
        <button className='sm:flex gap-2 font-para px-3 py-3 items-center hidden bg-transparent backdrop-blur-lg shadow-md sm:text-2xl sm:bg-black text-slate-100 rounded-full sm:hover: transition-all'
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
        >
          <MdCall/>
          <span className={` text-base ${isHovered ? 'sm:block' : 'sm:hidden'} transition-all duration-500`}>+91 8368560947</span>
        </button>
      </div>
    </div>
  )
}

export default ServicesNavbar