import React from 'react';
import { features } from '../utils/featuresData';
import IconComponent from '../utils/IconComponent';
import { FiChevronsRight } from 'react-icons/fi';
import { TracingBeam } from './ui/tracing-beam';

const Features = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between lg:gap-28 md:gap-10 gap-5 lg:p-8'>
      <div className='w-full p-4 md:w-1/2 md:sticky md:top-[15rem] md:left-0 flex flex-col items-center md:items-start'>
        <div className='flex flex-col gap-5 text-center md:text-left'>
          <div>
            <h1 className='relative text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-orange-200 to-violet-500 font-sans font-bold'>
              Unlock Your Interview Success
              <span className='bg-gradient-to-r from-violet-400 to-orange-300 bg-clip-text text-transparent'>
                with AI Precision
              </span>
            </h1>
          </div>
          <div>
            <p className='text-sm md:text-md font-semibold text-slate-300'>
              Get ready for interviews with our AI-powered platform. Receive personalized feedback, real-time practice, and progress analytics to refine your skills and boost your confidence for any interview.
            </p>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-6'>
            <button className='px-4 md:px-6 py-2 md:py-3 border border-slate-600 rounded-full hover:text-slate-300'>
              Learn More
            </button>
            <button className='flex items-center justify-center gap-2 hover:text-slate-400'>
              Sign up <FiChevronsRight className='animate-ping -z-50' />
            </button>
          </div>
        </div>
      </div>

      <TracingBeam className='md:px-6 px-1 overflow-hidden md:overflow-visible'>
        <div className=' pr-4 w-full flex flex-col pl-8 items-center justify-center gap-6 lg:gap-10'>
          {features && features.length > 0 && features.map((item) => (
            <div key={item.id} className='w-full  border p-4 md:p-6 rounded-lg border-slate-600 bg-slate-900/20 flex flex-col gap-4'>
              <div className='w-12 md:w-16 h-12 md:h-16 border border-zinc-600/30 flex items-center justify-center rounded-md'>
                <IconComponent logo={item.icon} className="text-2xl md:text-3xl" />
              </div>
              <div className='flex flex-col gap-3'>
                <h1 className='text-xl md:text-2xl font-semibold text-slate-300'>{item.heading}</h1>
                <p className='text-sm md:text-base text-slate-400'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Features;
