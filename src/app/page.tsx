import React from 'react'
import Testimonials from './_components/Testimonials'
import Features from './_components/Features'
import TopCompanies from './_components/TopCompanies'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import HeroText from './_components/HeroText'

const page = () => {
  return (
    <div className='' >
      <div className='mx-auto max-w-7xl'>
        <Navbar />
      </div>
      <div className='mx-auto max-w-7xl pt-40'>
        <HeroText />
      </div>
      <div className=' flex items-center justify-center -mt-28'>
        <Hero />
      </div>
      <div className='pb-36 px-4 lg:px-0 '>
        <TopCompanies />
      </div>
      <div className='mx-auto max-w-7xl'>
        <Features />
      </div>
      <div className=' lg:h-screen pt-16 max-w-7xl mx-auto flex flex-col items-center justify-center'>
        <div className='py-24'>
          <h1 className=' text-center text-2xl text-gray-200 font-bold capitalize'>
            You are in good hands, see what students says
          </h1>
        </div>
        <Testimonials />
      </div>
    </div>
  )
}

export default page