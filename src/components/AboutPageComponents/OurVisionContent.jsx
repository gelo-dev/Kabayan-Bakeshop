import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AboutUsNavigationSection from "./aboutUsNavigation";

export default function OurVisionContentSection(){

const [isOpen, setIsOpen] = useState(false);
    
    return(
        <section className="min-h-screen">
            
            <div
                style={{ backgroundImage: `url(PHFlag.jpg)` }}
                className=
                   {` relative transition-all duration-700 ease-in-out
                     ${isOpen ? 'md:h-[50vh] h-[30vh] ':  'h-screen'}
                    flex flex-col items-center justify-center
                    bg-center bg-cover`}
                
                >
                    <div className="mb-2 md:mb-5 text-white z-10">
                        <AboutUsNavigationSection/>
                    </div>
                    
                <div
                    className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/60 via-black/30 to-black/10
                    backdrop-brightness-90
                    "
                />

                <span className="text-[2rem] md:text-[4rem] font-light font-serif z-10 text-white">
                    OUR VISION
                </span>
                <p className="text-center text-sm md:text-lg text-white z-10 max-w-xl">
                    To grow while staying true to what matters most.
                </p>

                {/* Chevron button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                    absolute bottom-4
                    z-20
                    flex items-center justify-center
                    w-12 h-12
                    rounded-full
                    bg-black/40 text-white
                    hover:bg-black/60
                    transition
                    "
                >
                    {isOpen ? (
                    <ChevronUpIcon className="w-6 h-6" />
                    ) : (
                    <ChevronDownIcon className="w-6 h-6 animate-bounce" />
                    )}
                </button>
            </div>

                
            <div
            className={`
                overflow-hidden
                transition-all duration-700 ease-in-out
                ${isOpen ? "min-h-screen opacity-100" : "max-h-0 opacity-0"}
            `}
            >
                <div className=" bg-amber-900 flex flex-col md:flex-row h-[150vh] md:h-screen">
                     <div className="bg-amber-900 h-[20vh] mt-5 p-2 flex md:hidden">
                        <p className="text-lg font-serif text-center text-white">"To grow as a trusted neighborhood bakery that continues to bring warmth,
                            quality, and togetherness to every home we serve."</p>
                    </div>
                    <div
                        className="
                        p-5
                        h-full
                        w-full md:w-1/2
                        "
                    >
                        <div
                        style={{ backgroundImage: `url(./AboutPageImages/KabayansBakery.jpg)` }}
                        className="h-full bg-center bg-cover" 
                        ></div>
                    </div>
                    <div className="
                        w-full md:w-1/2
                        bg-amber-900
                        flex flex-col justify-center
                        p-6 md:p-10
                        text-white
                        gap-6
                        ">
                        
                        <p className="text-[2.5rem] hidden md:flex  font-serif text-start text-white">
                            To grow as a trusted neighborhood bakery that continues to bring warmth, quality, and togetherness to every home we serve.</p>
                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            Our vision is to grow while staying true to the traditions that shaped us. 
                            We honor the familiar flavors, time-tested methods, and values that our community has come to love,
                            ensuring that every step forward remains grounded in authenticity and care.
                        </p>

                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            As we look ahead, we aim to continuously improve—refining our craft, expanding our offerings, and embracing better ways to serve our customers. 
                            Growth, for us, means thoughtful progress that enhances quality, accessibility, and the overall experience without losing the warmth of a neighborhood bakery.
                        </p>
                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            Ultimately, we envision a future where our bakery remains a trusted part of everyday life—bringing comfort to homes,
                            supporting our community, and creating lasting connections through freshly baked goodness, today and for generations to come.
                        </p>

                    </div>
                </div>
               
            </div>

        </section>
    )
}