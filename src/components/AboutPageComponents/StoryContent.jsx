import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AboutUsNavigationSection from "./aboutUsNavigation";

export default function StoryContentSection(){

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
                    OUR STORY
                </span>
                <p className="text-center text-sm md:text-lg text-white z-10 max-w-xl">
                    Welcome to Kabayans Bakeshop, where freshly baked bread meets the comfort of home.
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
                <div className=" bg-amber-900 flex flex-col md:flex-row h-screen md:h-[80vh]">
                
                    <div
                       
                        className="
                        
                        h-[40vh] md:h-full
                        w-full md:w-1/2
                        flex items-center justify-center
                        mt-2 md:mt-0"
                    >
                        <div
                        style={{ backgroundImage: `url(./AboutPageImages/morning.jpg)` }}
                        className="  h-[40vh] w-[45vh] md:h-[60vh] md:w-[80vh]  bg-center bg-cover md:shadow-xl md:shadow-black/90 rounded-2xl"></div>
                    </div>
                    <div className="
                        w-full md:w-1/2
                        bg-amber-900
                        flex flex-col justify-center
                        p-6 md:p-10
                        text-white
                        gap-6
                        ">
                        
                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            Established in 2018, our bakery began with a simple passion for baking at home—early mornings, small batches, 
                            and the joy of sharing warm bread with family and friends. What started as a humble kitchen hobby soon grew into 
                            something more as neighbors began stopping by, drawn by the familiar aroma of freshly baked bread and comforting flavors.
                        </p>

                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            As word spread, so did our purpose. We opened our doors not just as a bakery, but as a place where families, friends, 
                            and the community could come together. From everyday staples to freshly made favorites, every item we bake reflects 
                            our commitment to quality, affordability, and care.
                        </p>

                    </div>
                </div>


                  <div className=" bg-amber-900 flex flex-col md:flex-row-reverse h-screen md:h-[80vh]">
                
                    <div
                       
                        className="
                        
                        h-[40vh] md:h-full
                        w-full md:w-1/2
                        flex items-center justify-center
                        "
                    >
                        <div
                        style={{ backgroundImage: `url(./AboutPageImages/vendor.jpg)` }}
                        className="h-[35vh] w-[45vh] md:h-[60vh] md:w-[80vh] bg-center bg-cover md:shadow-xl md:shadow-black/90 rounded-2xl">1</div>
                    </div>
                    <div className="
                        w-full md:w-1/2
                        bg-amber-900
                        flex flex-col justify-center
                        p-6 md:p-10
                        text-white
                        gap-6
                        ">
                        
                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            Today, we remain a community-focused bakery, proudly serving freshly made goods every day using carefully selected ingredients and time-honored baking traditions. 
                            While we’ve grown over the years, our heart stays the same—to bring people together through honest bread, familiar flavors, and the comfort of home.
                        </p>

                        <p className="text-sm md:text-lg font-light leading-relaxed">
                            Rooted in the values of sipag, malasakit, and bayanihan, our bakery continues to be shaped by the people we serve. 
                            From early-morning pandesal runs to shared moments over coffee and bread, we are grateful to be part of everyday Filipino life.
                            Each loaf carries a story of hard work, tradition, and gratitude—baked not just to fill tables, but to create memories and strengthen the bonds within our community.
                        </p>

                    </div>
                </div>





                

                
            </div>

        </section>
    )
}