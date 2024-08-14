import React from 'react'

interface MobileNavType {
    active: boolean
}

const MobileNav: React.FC<MobileNavType> = ({ active }) => {
    const links = ["Home", "About", 'Pricing', "Features", "Use Case"]
    return (
        <div
            className={`lg:hidden md:hidden sm:hidden absolute w-full h-[100vh] top-[3.1rem] left-0 flex flex-col p-8 bg-slate-950 transition-all duration-700 ${active ? " -translate-y-[80rem]" : "translate-y-0"
                } border-t border-slate-900`}
        >
            <div className=''>
                <ul className='flex flex-col items-start justify-center gap-10'>
                    {links.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div >
                <div className='flex flex-col w-full items-start justify-center gap-6 mt-9'>
                    <button className='px-4 py-2 w-full border border-slate-600 rounded-full hover:text-slate-300'>
                        View Docs
                    </button>
                    <button className=' px-4 py-2 w-full bg-gray-300 text-black rounded-full flex items-center justify-center gap-2 hover:bg-gray-200'>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileNav