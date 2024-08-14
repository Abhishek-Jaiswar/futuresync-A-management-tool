import React from "react";

const HeroText = () => {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto px-2.5 z-50">
        <h1 className="bg-gradient-to-r from-violet-500 to-orange-300 bg-clip-text text-transparent text-4xl md:text-4xl lg:text-5xl font-bold lg:font-extrabold capitalize text-center">
          Experience the AI-Powered Interview Simulation for free
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6">
        <p className="text-sm md:text-md lg:text-lg text-slate-500 text-center">
          Simulate your most favorable interview of top-tier companies
        </p>
      </div>

      <div className="flex px-10 items-center justify-center gap-4 mt-4">
        <button className="px-4 py-2 w-full text-sm md:w-auto bg-gray-300 text-black rounded-full flex items-center justify-center gap-2 hover:bg-gray-200">
          Get Started
        </button>
        <button className="px-4 py-2 w-full text-sm md:w-auto border border-slate-600 rounded-full hover:text-slate-300">
          Learn More
        </button>
      </div>

    </div>
  );
};

export default HeroText;
