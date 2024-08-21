"use client"
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from 'react-icons/md'
import MobileNav from './MobileNav';

const Navbar = () => {

    const [active, setActive] = useState(true);

    const handleMenu = () => {
        setActive(prev => !prev)
    }

    const links = ["Home", "About", 'Pricing', "Features", "Use Case"]
    return (
        <>
            <div className='flex items-center py-3 px-4 mx-auto max-w-7xl'>
                <div className='pr-10'>
                    <h1 className="text-lg lg:text-3xl font-bold bg-gradient-to-r from-violet-400 to bg-orange-300 bg-clip-text text-transparent">
                        Knox-Ai
                    </h1>
                </div>
                <div className='hidden lg:block flex-1 '>
                    <ul className='flex items-center justify-start gap-10'>
                        {links.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex items-center justify-center gap-4'>
                        <button className='px-4 py-2 border border-slate-600 rounded-full hover:text-slate-300'>
                            View Docs
                        </button>
                        <button className=' px-4 py-2 bg-gray-300 text-black rounded-full flex items-center justify-center gap-2 hover:bg-gray-200'>
                            Sign up
                        </button>
                    </div>
                </div>
                <div className=' lg:hidden absolute right-5'>
                    <div>
                        {active ? <MdMenu onClick={handleMenu} className='text-2xl text-slate-50 font-bold' /> : <RxCross2 onClick={handleMenu} className='text-2xl text-slate-50 font-bold' />}
                    </div>
                </div>
            </div>
            <div className=' -z-50'>
                <MobileNav active={active} />
            </div>
        </>

    )
}

export default Navbar