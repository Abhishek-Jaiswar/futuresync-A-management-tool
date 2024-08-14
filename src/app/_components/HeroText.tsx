import React from "react";

const HeroText = () => {
  return (
    <div>
      <div className=" w-[50rem] mx-auto px-4 z-50">
        <h1 className=" bg-gradient-to-r from-violet-500 to-orange-300 bg-clip-text text-transparent text-5xl font-extrabold capitalize text-center">Experience the AI-Powered Interview Simulation for free</h1>
      </div>
      <div className="w-[50rem] mx-auto px-4 py-8">
        <p className="text-md text-slate-500 text-center">Simulate your most favorable interview of top tier companies</p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <button className=' px-4 py-2 bg-gray-300 text-black rounded-full flex items-center justify-center gap-2 hover:bg-gray-200'>
          Get Started
        </button>
        <button className='px-4 py-2 border border-slate-600 rounded-full hover:text-slate-300'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroText;
