import React from 'react'
import Testimonials from './_components/Testimonials'
import Features from './_components/Features'
import TopCompanies from './_components/TopCompanies'

const page = () => {
  return (
    <div className='mx-auto max-w-7xl' >
      <div>
        <TopCompanies />
      </div>
      <div className='h-screen max-w-7xl mx-auto flex items-center justify-center'>
        <Testimonials />
      </div>
      <div className=''>
        <Features />
      </div>
      <div className='h-screen max-w-7xl mx-auto flex items-center justify-center'>
        <Testimonials />
      </div>
    </div>
  )
}

export default page