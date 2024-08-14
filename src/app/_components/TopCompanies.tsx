import React from 'react';
import { companies } from '../utils/topCompanies';
import IconComponent from '../utils/IconComponent';

const TopCompanies = () => {
    // Triple the companies list for a smooth scrolling effect
    const tripledCompanies = [...companies, ...companies];

    return (
        <div className='relative flex items-center justify-center flex-col gap-6'>
            <div className=' w-[50rem]'>
                <h1 className='text-3xl text-gray-300 font-bold text-wrap text-center py-4 capitalize'>
                    Top <span className=' bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent'>Under-rated questions</span> from these companies
                </h1>
                <p className='text-md w-[70%] mx-auto text-slate-400 py-2 text-center text-wrap'>Explore the world of most interactive interview practise experience with Ai-generated questions</p>
            </div>

            {/* Container for the scrolling elements */}
            <div className='max-w-7xl overflow-hidden mx-auto relative'>
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10"></div>
                <ul className='flex gap-5 animate-scroll-infinite'>
                    {tripledCompanies.map((item, index) => (
                        <li key={index} className='px-6 py-3 border rounded-md border-slate-400 flex items-center justify-center gap-2'>
                            <span><IconComponent logo={item.logo} color={item.color} className="text-3xl" /></span>
                            <span className='text-lg font-semibold'>{item.company}</span>
                        </li>
                    ))}
                </ul>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>
            </div>

            <div className='max-w-7xl overflow-hidden mx-auto relative'>
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10"></div>

                <ul className='flex gap-5 animate-reverse-scroll-infinite'>
                    {tripledCompanies.map((item, index) => (
                        <li key={index} className='px-6 py-3 border border-slate-400 rounded-md flex items-center justify-center gap-2'>
                            <span className=' '>
                                <IconComponent logo={item.logo} color={item.color} className="text-3xl" />
                            </span>
                            <span className='text-lg font-semibold'>{item.company}</span>
                        </li>
                    ))}
                </ul>

                {/* Right blur effect */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};

export default TopCompanies;
