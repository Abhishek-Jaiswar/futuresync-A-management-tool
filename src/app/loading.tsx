import React from 'react'
import { BiLoader } from 'react-icons/bi'

const loading = () => {
  return (
    <div className=' w-screen flex items-center justify-center bg-slate-950'>
      <div className='flex items-center justify-center flex-col gap-3'>
        <div>
          <BiLoader className=' animate-spin' />
        </div>
        <div>
          <h1 className='text-2xl text-gray-200 font-semibold'>Wait a second...</h1>
        </div>
      </div>
    </div>
  )
}

export default loading