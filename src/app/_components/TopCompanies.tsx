import React from 'react';
import { companies } from '../utils/topCompanies';
import IconComponent from '../utils/IconComponent';

const TopCompanies = () => {
    // Duplicate the companies list for a smooth scrolling effect
    const doubledCompanies = [...companies, ...companies];

    return (
        <div className='  -z-50 relative flex flex-col items-center justify-center gap-3 lg:gap-6'>
            {/* Heading Section */}
            <div className='w-full max-w-4xl'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-bold text-center py-1 capitalize'>
                    Top <span className='bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent'>Under-rated questions</span> from these companies
                </h1>
                <p className='text-sm sm:text-md md:text-lg text-slate-400 py-1 text-center mx-auto max-w-xl'>
                    Explore the world of the most interactive interview practice experience with AI-generated questions.
                </p>
            </div>

            <div className='w-full max-w-full lg:max-w-7xl overflow-hidden mx-auto relative'>
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10"></div>

                <ul className='flex gap-2 lg:gap-5 animate-scroll-infinite'>
                    {doubledCompanies.map((item, index) => (
                        <li key={index} className='px-2 py-1.5 lg:px-6 lg:py-3 border rounded-md border-slate-400 flex items-center justify-center gap-2'>
                            <span><IconComponent logo={item.logo} color={item.color} className="text-2xl sm:text-3xl" /></span>
                            <span className='text-sm sm:text-md md:text-lg font-semibold'>{item.company}</span>
                        </li>
                    ))}
                </ul>
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10"></div>
            </div>

            <div className='w-full max-w-full lg:max-w-7xl overflow-hidden mx-auto relative'>
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10"></div>
                <ul className='flex gap-2 lg:gap-5 animate-reverse-scroll-infinite'>
                    {doubledCompanies.map((item, index) => (
                        <li key={index} className='px-2 py-1.5 lg:px-6 lg:py-3 border border-slate-400 rounded-md flex items-center justify-center gap-2'>
                            <span className=' '>
                                <IconComponent logo={item.logo} color={item.color} className="text-2xl sm:text-3xl" />
                            </span>
                            <span className='text-sm sm:text-md md:text-lg font-semibold'>{item.company}</span>
                        </li>
                    ))}
                </ul>

                {/* Right blur effect */}
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10"></div>
            </div>
        </div>
    );
};

export default TopCompanies;
