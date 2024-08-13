import React from 'react';
import { testimonials } from '../utils/testimonialData';

const Testimonials = () => {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 space-y-4 gap-4'>
      {testimonials && testimonials.length > 0 && testimonials.map((item: any) => (
        <div key={item.id} className='bg-zinc-900/40 break-inside-avoid rounded-md p-8 border border-gray-500/30'>
          <div className="py-2 flex items-center justify-start gap-2">
            <div
              className='w-10 h-10 rounded-full bg-gray-700/35 flex items-center justify-center font-bold'
              aria-label={`Initials of ${item.username}`}
            >
              {item.username.slice(0, 1).toUpperCase()}

            </div>
            <div>
              <p className='font-semibold text-xl text-gray-100'>{item.username}</p>
            </div>
          </div>
          <div>
            <p className='text-gray-400 text-[1.2rem]'> {item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
