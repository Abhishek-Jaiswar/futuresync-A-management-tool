import React from 'react'
import { features } from '../utils/featuresData'
import IconComponent from '../utils/IconComponent'
import { FiChevronsRight } from "react-icons/fi";


const Features = () => {
  return (
    <div className=' items-center md:flex md:items-start justify-between lg:gap-28'>
      <div className='md:w-1/2 md:sticky md:top-[15rem] md:left-0 flex md:items-start items-center p-4 lg:p-0'>
        <div className='flex flex-col gap-5'>
          <div>
            <h1 className='text-4xl font-bold text-gray-200'>Unlock Your Interview Success <span className=' bg-gradient-to-r from-violet-00 to-orange-300 bg-clip-text text-transparent'>with AI Precision</span></h1>
          </div>
          <div>
            <p className='text-md font-semibold text-slate-400'>"Get ready for interviews with our AI-powered platform. Receive personalized feedback, real-time practice, and progress analytics to refine your skills and boost your confidence for any interview."</p>
          </div>
          <div className=' flex items-center justify-start gap-6'>
            <button className='px-6 py-3 border border-slate-600 rounded-full hover:text-slate-300'>
              Learn More
            </button>
            <button className='flex items-center justify-center gap-2 hover:text-slate-400'>
              Sign up <FiChevronsRight className=' animate-ping' />
            </button>
          </div>
        </div>
      </div>

      <div className='lg:w-1/2 p-4 lg:p-0 flex items-center justify-center flex-col gap-6 lg:gap-10 '>
        {features && features.length > 0 && features.map((item) => (
          <div key={item.id} className='border p-6 rounded-lg border-slate-600 bg-slate-900/40 flex flex-col gap-4'>
            <div className=' w-16 h-16 border border-zinc-600/30 flex items-center justify-center rounded-md'>
              <IconComponent logo={item.icon} className="text-3xl " />
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl font-semibold'>{item.heading}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Features
