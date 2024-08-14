import React from 'react'
import { resources } from '../utils/blogsData'
import Image from 'next/image'

const Resources = () => {

  return (
    <div className='flex items-center justify-center flex-col px-4'>
      <div className=''>
        <h1 className='text-3xl lg:text-5xl font-bold text-slate-200'>Checkout our latest posts</h1>
        <p className='text-md text-slate-300 text-center py-4'>Resources that can help you to bypass the interviews</p>
      </div>
      <div className=' mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {resources && resources.length > 0 && resources.slice(0,6).map((items) => (
          <div key={items.id} className=''>
            <div className='w-auto h-auto bg-gradient-to-r from-purple-300 to-orange-300 p-[1px] rounded-lg'>
              <Image
                src={items.image}
                width={600}
                height={600}
                alt='Blog posts'
                className=' rounded-lg '
              />
            </div>
            <div className='py-3'>
              <p className='bg-gradient-to-r inline font-semibold from-violet-400 to-orange-300 bg-clip-text text-transparent capitalize'>{items.field}</p>
            </div>
            <div className='pb-2'>
              <h1 className='text-2xl font-bold text-gray-100 hover:text-gray-400 transition-all duration-400 cursor-pointer'>{items.title}</h1>
            </div>
            <div>
              <p>{items.description.slice(0, 80)}</p>
            </div>
            <div>
              <div className=' h-14 w-14 flex items-center justify-center text-lg bg-slate-800/55 rounded-full'>{items.author.name.slice(0,1)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources