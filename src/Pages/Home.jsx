import React from 'react'
import HomeNavbar from '../components/NavBars/HomeNavbar';
import HomeHero from '../components/HeroSections/HomeHero';
import HomeAbout from '../components/HeroSections/HomeAbout';
import HomeServices from '../components/HeroSections/HomeServices';
import HomeWork from '../components/HeroSections/HomeWork';
import HomeClient from '../components/HeroSections/HomeClient';
import HomeNews from '../components/HeroSections/HomeNews';
import HomeFooter from '../components/HeroSections/HomeFooter';

const Home = () => {
  return (
    <div className='w-full relative z-10'>
      <HomeNavbar/>
      <HomeHero/>
      <HomeAbout/>
      <HomeServices/>
      <HomeWork/>
      <HomeClient/>
      <HomeNews/>
      <HomeFooter/>
    </div>
  )
}

export default Home