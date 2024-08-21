import React from 'react';
import { testimonials } from '../utils/testimonialData';
import { CardSpotlight } from './ui/card-spotlight';

const Testimonials = () => {
  return (
    <div className=" grid md:grid-cols-3 lg:grid-cols-3 gap-5 px-4">
      {testimonials && testimonials.length > 0 && testimonials.map((item: any, index: number) => (
        <CardSpotlight key={index} className=" cursor-pointer">
          <div className='flex items-center gap-4'>
            <div className='h-11 w-11 z-10 flex items-center justify-center rounded-full border border-slate-600'>
              <h1 className="text-xl font-bold relative z-20 text-white">{item.username.slice(0, 1)}</h1>
            </div>
            <div className=' mt-2'>
              <p className="text-md leading-3 font-semibold relative z-20 text-white">
                {item.username}
              </p>
              <span className='text-xs font-semibold relative z-20 text-white'>@guestuser</span>
            </div>
          </div>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p>{item.content}</p>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Ensuring your account is properly secured helps protect your personal
            information and data.
          </p>
        </CardSpotlight>
      ))}
    </div>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0-.432.002-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579c-.005.098-.01.198-.013.299l-.017.616-.004.318-.001.324c0 .218.002.432.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034c.098.005.198.01.299.013l.616.017.642.005.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579c.005-.098.01-.198.013-.299l.017-.616.005-.642-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017-.318-.004-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1 1.32-1.497l.094.083 1.293 1.292 3.293-3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Testimonials;
