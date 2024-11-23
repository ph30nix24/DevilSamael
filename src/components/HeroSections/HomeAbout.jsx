import React from 'react'

const HomeAbout = () => {
    const AboutImg = 'src/assets/Home/About/HeroAbout.png'
    const AboutImg2 = 'src/assets/Home/About/About2.png'
  return (
    <div className='w-full px-3 py-5 bg-HomeAbout sm:px-8 relative -z-10'>
        <div className='w-[200px] h-[200px] hidden lg:block bg-[#fea8af] shadow-heroPink rounded-full absolute top-0 left-0 -z-10'></div>
        <div className='w-[200px] h-[200px] hidden lg:block bg-[#fea8af] shadow-heroPink rounded-full absolute bottom-10 right-0 -z-10'></div>
        <h1 className='font-heading text-[6vw] md:text-[4vw] md:py-10 font-medium text-center underline md:no-underline leading-relaxed'>
            Digital Marketing Agency, why it Matters?
        </h1>
        <div className='md:flex md:flex-row md:items-center'>
            <div className='md:w-1/2'>
                <img src={AboutImg} className='w-full object-contain sm:w-4/5 sm:mx-[10%] ' alt="" />
            </div>
            <div className='font-para pt-5 text-[3.5vw] sm:text-[2.3vw] text-center font-medium md:w-1/2 md:text-[1.6vw] lg:text-[1.34vw] xl:text-[1.2vw]'>
            if you are not using digital marketing services for your business yet, you might as well be advertising via a carrier pigeon! Jokes aside, partnering with a digital marketing agency today is no longer optional, it's a necessity. If you want to reach a specific demographic, if you want to rank higher in search engine results, if you want to generate those much-needed leads and if you want to be seen and heard on world wide web - working with a digital marketing agency is your only bet!
            </div>
        </div>
        <div className='pt-5 md:flex md:flex-row md:w-full md:items-center'>
            <div className='md:w-1/2 md:order-2'>
                <img src={AboutImg2} className='w-full object-contain sm:w-4/5 sm:mx-[10%]' alt="" />
            </div>
            <div className='font-para pt-5 text-[3.5vw] sm:text-[2.3vw] md:w-1/2 md:text-[1.6vw] text-center font-medium md:order-1 lg:text-[1.34vw] xl:text-[1.2vw]'>
            <span className='font-semibold'>Digital Samael Agency</span>, one of the leading Digital marketing agenciess in Delhi NCR, was founded on the principle of assisting customers in attaining the pinnacle of success via the adoption of uniquely inventive solutions and strategies for their businesses. We've assembled an incredibly enthusiatic team of killer marketers, strategies: to increase the breath of consumer traffic and interaction, consequently increasing your company's exposure, profits, and growth.
            </div>
        </div>
        <div className='hidden md:block font-para font-medium text-center md:text-[1.6vw] md:py-10 lg:text-[1.34vw] xl:text-[1.2vw]'>
            We are the Top Digital marketing agency in Delhi NCR as we believe in empowering small and large companies alike by allowing the world to talk about You!
        </div>
    </div>
  )
}

export default HomeAbout