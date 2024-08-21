import React from 'react'
import Testimonials from './_components/Testimonials'
import Features from './_components/Features'
import TopCompanies from './_components/TopCompanies'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import HeroText from './_components/HeroText'
import Resources from './_components/Resources'
import Pricing from './_components/Pricing'
import { AccordionDemo } from './_components/Accordian'
import Footer from './_components/Footer'

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
        <div className='py-8 pb-2 w-full lg:w-[65%] p-4'>
          <h1 className=' bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent text-center text-2xl lg:text-4xl md:text-4xl font-bold capitalize '>
            You&apos;re in the right place for your interview journey!
          </h1>
          <p className='text-sm lg:text-base text-center w-full lg:w-[80%] mx-auto py-2 md:py-3 lg:py-5 text-slate-300'>See what our happy users are saying! Discover how our service has made a difference for them.</p>
        </div>
        <Testimonials />
      </div>
      <div className='mx-auto max-w-7xl pt-12'>
        <Resources />
      </div>
      <div className='mx-auto max-w-7xl pt-8'>
        <Pricing />
      </div>
      <div className='mx-auto max-w-7xl pt-12'>
        <AccordionDemo />
      </div>
      <div className=' pt-12'>
        <Footer />
      </div>
      
    </div>
  )
}

export default page