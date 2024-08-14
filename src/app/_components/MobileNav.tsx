import React from 'react'

const MobileNav = () => {
    const links = ["Home", "About", 'Pricing', "Features", "Use Case"]
    return (
        <div className='flex items-center py-3'>
            <div className='pr-10'>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to bg-orange-300 bg-clip-text text-transparent">
                    Knox-Ai
                </h1>
            </div>
            <div className=' flex-1'>
                <ul className='flex items-center justify-start gap-10'>
                    {links.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div >
                <div className='flex items-center justify-center gap-4'>
                    <button className='px-4 py-2 border border-slate-600 rounded-full hover:text-slate-300'>
                        View Docs
                    </button>
                    <button className=' px-4 py-2 bg-gray-300 text-black rounded-full flex items-center justify-center gap-2 hover:bg-gray-200'>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileNav