import React from 'react'
import { features } from '../utils/featuresData'
import IconComponent from '../utils/IconComponent'

const Features = () => {
  return (
    <div className='h-screen w-full flex items-start justify-between'>
      {/* Sticky Div */}
      <div className='w-1/2 h-screen sticky top-0 flex items-center'>
        <h1>What you can expect from this platform</h1>
      </div>

      {/* Scrollable Div */}
      <div className='w-1/2 h-screen overflow-y-scroll'>
        <div className='space-y-8'>
          {features && features.length > 0 && features.map((item) => (
            <div key={item.id} className='bg-zinc-900/90 p-4 rounded-md flex space-x-4'>
              <div className='bg-black/50 p-4 rounded-md'>
                <IconComponent logo={item.icon} className="text-3xl" />
              </div>
              <div>
                <h1>{item.heading}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
