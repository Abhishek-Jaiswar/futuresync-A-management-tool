import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Pricing = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-20' >
            <div className='flex items-center justify-center flex-col gap-5'>
                <div>
                    <h1 className=' py-2 text-5xl bg-gradient-to-r from-violet-400 to bg-orange-300 bg-clip-text text-transparent font-bold capitalize'>Smart tech with smart pricing.</h1>
                </div>
                <div>
                    <p className='text-base text-slate-400'>Commit to a year, and watch your savings grow with our exclusive rates!</p>
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-14 p-4'>
                <div className='border border-violet-500/20 rounded-lg p-5 flex flex-col gap-3'>
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-200'>Starter</h1>
                    </div>
                    <div>
                        <p className='text-sm text-slate-200'>Great for beginners starting their interview preparation journey.</p>
                    </div>
                    <div className='flex items-end justify-start gap-1'>
                        <h1 className='text-5xl font-bold text-white'>$9</h1>
                        <span>/</span>
                        <p>MO.</p>
                    </div>
                    <div>
                        <button className='w-full rounded-lg border border-slate-500 hover:bg-gradient-to-r  hover:from-violet-300  hover:to-orange-300  hover:text-slate-900 flex items-center justify-center gap-2 font-semibold px-2 py-2 transition-all ease-in duration-700'>Get started <FaArrowRightLong /> </button>
                    </div>
                    <div className='mt-3'>
                        <ul className=' flex flex-col items-start justify-start gap-3'>
                            <li className='flex items-center justify-start gap-2 text-base text-slate-300 '><IoIosCheckmarkCircle className='text-2xl text-violet-400' /> 6 Hours of interviews in a week</li>
                            <li className='flex items-center justify-start gap-2 text-base text-slate-300 '><IoIosCheckmarkCircle className='text-2xl text-violet-400' /> 6 Hours of interviews in a week</li>
                            <li className='flex items-center justify-start gap-2 text-base text-slate-300 '><IoIosCheckmarkCircle className='text-2xl text-violet-400' /> 6 Hours of interviews in a week</li>
                            <li className='flex items-center justify-start gap-2 text-base text-slate-300 '><IoIosCheckmarkCircle className='text-2xl text-violet-400' /> 6 Hours of interviews in a week</li>
                            <li className='flex items-center justify-start gap-2 text-base text-slate-300 '><IoIosCheckmarkCircle className='text-2xl text-violet-400' /> 6 Hours of interviews in a week</li>
                            <li className='flex items-center justify-start gap-2 text-base text-slate-300 '><IoIosCheckmarkCircle className='text-2xl text-violet-400' /> 6 Hours of interviews in a week</li>
                            <li className='flex items-center justify-start gap-2 text-base text-slate-300 '><IoIosCheckmarkCircle className='text-2xl text-violet-400' /> 6 Hours of interviews in a week</li>
                            
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Professional</h1>
                        <div>
                            <p>Best seller</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Professional</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing