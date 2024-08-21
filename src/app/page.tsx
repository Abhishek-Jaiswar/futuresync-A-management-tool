import React from 'react'
import Testimonials from './_components/Testimonials'
import Features from './_components/Features'
import TopCompanies from './_components/TopCompanies'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import HeroText from './_components/HeroText'
import Resources from './_components/Resources'
import Pricing from './_components/Pricing'

const page = () => {
  return (
    <div className='' >
      <div className=' z-50 border-b border-slate-900 sticky top-0 left-0 bg-slate-950'>
        <Navbar />
      </div>
      <div className='mx-auto max-w-7xl pt-20 lg:pt-40'>
        <HeroText />
      </div>
      <div className=' flex items-center justify-center -mt-2 lg:-mt-28'>
        <Hero />
      </div>
      <div className='lg:pb-36 pb-10 px-2 lg:px-0'>
        <TopCompanies />
      </div>
      <div className='mx-auto max-w-7xl'>
        <Features />
      </div>
      <div className='pt-8 max-w-7xl mx-auto flex flex-col items-center justify-center'>
        <div className='py-8 w-[65%]'>
          <h1 className=' bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent text-center text-2xl lg:text-5xl md:text-4xl font-bold capitalize '>
            You&apos;re in the right place for your interview journey!
          </h1>
          <p className='text-center py-5'>Have a look our happy users</p>
        </div>
        <Testimonials />
      </div>
      <div className='mx-auto max-w-7xl pt-40'>
        <Resources />
      </div>
      <div className='mx-auto max-w-7xl pt-40'>
        <Pricing />
      </div>
      
    </div>
  )
}

export default page