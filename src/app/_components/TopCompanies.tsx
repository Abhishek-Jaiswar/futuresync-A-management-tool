import React from 'react'
import { companies } from '../utils/topCompanies'
import IconComponent from '../utils/IconComponent'

const TopCompanies = () => {
    const doubledCompanies = [...companies, ...companies, ...companies];

    return (
        <div className='overflow-hidden'>
            <ul className='flex gap-5 animate-scroll-infinite whitespace-nowrap'>
                {doubledCompanies.map((item, index) => (
                    <li key={index} className='flex items-center justify-center gap-2'>
                        <span><IconComponent logo={item.logo}  className="text-3xl" /></span>
                        <span className='text-lg font-semibold'>{item.company}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopCompanies
