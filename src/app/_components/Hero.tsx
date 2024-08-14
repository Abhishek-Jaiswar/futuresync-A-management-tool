import Image from 'next/image'
import React from 'react'
import dashboard from '../../../public/dashboard.jpg'

const Hero = () => {
    return (
        <div className="h-[50rem] w-full dark:bg-slate-950 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
            <Image
                src={dashboard}  // Replace with your image path
                alt="A beautiful description of the image"
                width={900}
                height={900}

                priority={true}  // Load this image as a priority if it's critical
                placeholder="blur"
            />
        </div>
    )
}

export default Hero