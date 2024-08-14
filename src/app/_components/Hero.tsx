import Image from 'next/image'
import React from 'react'
import dashboard from '../../../public/dashboard.png'

const Hero = () => {
    return (
        <>
            <div className="h-[65rem] w-full dark:bg-slate-950 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative flex items-center justify-center -z-30">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>

                <div className="relative w-screen flex mx-auto z-50 items-center justify-center">
                    <Image
                        src={dashboard}  // Replace with your image path
                        alt="A beautiful description of the image"
                        width={1200}
                        height={900}
                        priority={true}  // Load this image as a priority if it's critical
                        placeholder="blur"
                        className="relative z-10 rounded-lg shadow-lg"  // Ensure the image stays on top
                    />

                    <div className="absolute bottom-0 w-[60rem] h-10 -z-10">
                        <div className="absolute inset-0 w-full h-full rounded-full bg-violet-500 opacity-60 blur-xl" />
                        <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-80 blur-3xl" />
                    </div>
                </div>

                {/* Blur Effect on Top */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-slate-950 blur-lg opacity-60 pointer-events-none"></div>

                {/* Blur Effect on Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-slate-950 blur-lg opacity-60 pointer-events-none"></div>
            </div>


        </>

    )
}

export default Hero