import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AboutUsNavigationSection from "./aboutUsNavigation";

export default function OurMssionContentSection(){

const [isOpen, setIsOpen] = useState(false);
    
    return(
        <section className="min-h-screen">
            
            <div
                style={{ backgroundImage: `url(stoneOven.jpg)` }}
                className=
                   {` relative transition-all duration-700 ease-in-out
                     ${isOpen ? 'md:h-[50vh] h-[40vh] ':  'h-screen'}
                    flex flex-col items-center justify-center
                    bg-center bg-cover`}
                
                >
                    <div className="mb-5 text-white z-10">
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

                <span className="text-[3rem] md:text-[4rem] font-light font-serif z-10 text-white">
                    OUR MISSION
                </span>
                <p className="text-center text-sm md:text-lg text-white z-10 max-w-xl">
                    Serving our community with care, quality, and freshly baked goodness.
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
                <div className=" bg-amber-900 flex flex-col md:flex-row h-screen">
                     <div className="bg-amber-900 h-[30vh] mt-5 p-2 flex md:hidden">
                        <p className="text-lg font-serif text-center text-white">Baking with care, serving with heart, bringing our community together.</p>
                    </div>
                    <div
                        className="
                        p-5
                        h-full
                        w-full md:w-1/2
                        "
                    >
                        <div
                        style={{ backgroundImage: `url(./AboutPageImages/MissionImage.jpg)` }}
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
                        
                        <p className="text-[3rem] hidden md:flex  font-serif text-start text-white">Baking with care, serving with heart, bringing our community together.</p>
                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            We serve our community with genuine care by treating every customer like family. 
                            From the way we prepare our products to how we welcome people through our doors, we believe that kindness, 
                            respect, and consistency are just as important as the bread we bake.
                        </p>

                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            Quality is at the heart of everything we do. We carefully select our ingredients, 
                            follow trusted baking methods, and maintain high standards to ensure that every loaf, pastry, 
                            and treat meets our promise of freshness, taste, and value.
                        </p>
                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            Freshly baked goodness defines our everyday commitment. By baking daily and focusing on familiar, 
                            comforting flavors, we aim to provide warm, reliable products that bring people together and make every visit feel like home.
                        </p>

                    </div>
                </div>
               
            </div>

        </section>
    )
}