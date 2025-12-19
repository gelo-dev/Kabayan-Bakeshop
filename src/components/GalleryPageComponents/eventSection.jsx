

import { useState , useEffect ,useRef  } from "react"
import eventsData from "../../JavaScript/eventsData"
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function EventSection(){
const landingHighlights = [
    {
        id: 1,
        text: "Stay up to date with our latest promos, freshly baked specials, and exciting bakery events.",
    },
    {
        id: 2,
        text: "Discover what’s happening at Kabayans Bakeshop — from seasonal treats to special offers.",
    },
    {
        id: 3,
        text: "Join us for our latest events and enjoy freshly baked delights every day.",
    },
    ];
const scrollRef = useRef(null);

const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 320; // card width + gap

    scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
    });
};



const [index, setIndex] = useState(0);
const navigate = useNavigate()
const [activeEvent, setActiveEvent] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % landingHighlights.length);
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval);
    }, []);


        return(
            <section id="event" className="h-screen grid grid-rows-1 p-4">
                       
                        <div
                            className="relative  bg-cover bg-center 
                                       h-full rounded-2xl p-4"
                         >
                            

                            
                            <div className="relative z-10 flex flex-col 
                                            justify-end md:items-center md:justify-center 
                                            h-full md:outline outline-white rounded-2xl">
                                    <span className="text-white text-4xl md:text-9xl font-serif ">Events</span>
                                <p className="text-sm md:text-2xl md:text-center text-white transition-opacity duration-500">
                                {landingHighlights[index].text}
                                </p>
                            </div>
                            
                            

                        </div>
                        <div
                        ref={scrollRef}
                        className=" w-85 h-full md:w-full bg-transparent overflow-x-auto 
                                        md:hide-scrollbar hide-horizontal-scrollbar
                                         rounded-2xl " >

                                            
                            <ul className=" flex flex-col sm:flex-row 
                                            gap-4 md:gap-2 md:w-full w-80 rounded-2xl">
                                {eventsData.map((item,index)=>(
                                    <li key={index}>
                                        <div
                                        style={{backgroundImage: `url(${item.image})`}} 
                                        className=" bg-amber-300 w-85 md:w-100 h-80 
                                                    flex gap-2 bg-cover -bg-center
                                                    rounded-2xl p-4 relative">
                                            <div className="absolute rounded-2xl inset-0 bg-black/20"></div>
                                                <div className=" flex flex-col justify-center items-center
                                                                outline-white outline-2 rounded-2xl 
                                                                    gap-4 w-full z-10">
                                                        <div className=" flex flex-col items-center justify-center">
                                                            <span className="text-white text-xl md:text-2xl font-light">" {item.title} "</span>   
                                                            <span className="text-white text-6xl font-bold font-serif">{item.day}</span>
                                                        
                                                            <span className="text-white text-xl ">{item.month}</span>  
                                                        </div>
                                                        <button
                                                        className=" bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl transition duration-300">
                                                                View Details
                                                        </button>
                                                
                                                </div>  
                                                    
                                            
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <button
                            onClick={() => scroll("left")}
                            className="hidden md:block absolute left-2 top-3/4 -translate-y-1/2 z-10
                                    bg-white/80 hover:bg-white shadow-md
                                    rounded-full p-2 transition"
                        >
                            <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="hidden md:block  absolute right-2 top-3/4 -translate-y-1/2 z-10
                                    bg-white/80 hover:bg-white shadow-md
                                    rounded-full p-2 transition"
                        >
                            <ChevronRightIcon className="w-6 h-6 text-gray-800" />
                        </button>
                    
            </section>
        )
}