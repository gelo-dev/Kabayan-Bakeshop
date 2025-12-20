

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
const isDesktop = window.innerWidth >= 768;



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
            <section id="event" className="h-screen grid grid-rows-1 p-4 justify-center">
                    
                        <div
                            className="relative 
                                        h-full rounded-2xl 
                                        mt-12 md:mt-5"
                        >
                            <div className="relative z-10 flex flex-col 
                                            items-center justify-center 
                                            
                                            h-full outline outline-white rounded-2xl">
                                    <span className="text-white text-4xl md:text-9xl font-serif ">Events</span>
                                
                                    <p className="text-xs md:text-2xl text-center text-white transition-opacity duration-500">
                                        {landingHighlights[index].text}
                                    </p>  
                                
                                
                            </div>
                            
                            

                        </div>
                        <div
                        ref={scrollRef}
                      className="w-85 mb-15 md:mb-0 h-115 md:h-full md:w-full 
                                md:outline-0 bg-transparent overflow-x-auto 
                                md:hide-scrollbar hide-horizontal-scrollbar
                                md:p-0 rounded-2xl mt-15 p-4
                                outline outline-white " >

                                            
                            <ul className=" flex flex-col sm:flex-row items-center 
                                            gap-3 md:gap-2 w-full rounded-2xl">
                                {eventsData.map((item,index)=>(
                                    <li className="md:p-0 pr-3 pl-3" key={index}>
                                        <div
                                        style={{backgroundImage: `url(${item.image})`}} 
                                        className=" w-80 md:w-100 md:h-80 h-50 
                                                    flex gap-2 bg-cover -bg-center
                                                    rounded-2xl p-4 relative ">
                                            <div className="absolute rounded-2xl inset-0 bg-black/20"></div>
                                                <div className=" flex flex-col justify-center items-center
                                                                outline-white outline-2 rounded-2xl 
                                                                    gap-2 md:gap-4 w-full z-10">
                                                        <div className=" flex flex-col items-center justify-center">
                                                            <span className="text-white text-xl md:text-2xl font-light">" {item.title} "</span>   
                                                            <span className="text-white text-4xl md:text-6xl font-bold font-serif">{item.day}</span>
                                                        
                                                            <span className="text-white text-xl ">{item.month}</span>  
                                                        </div>
                                                        <button
                                                        onClick={() => setActiveEvent(item)}
                                                        className=" bg-green-500 hover:bg-green-600
                                                                    text-white font-semibold md:px-6 md:py-2 
                                                                    rounded-2xl transition duration-300
                                                                    px-4 py-1">
                                                                View Details
                                                        </button>
                                                
                                                </div>  


                                                {activeEvent  && (
                                                <div
                                                onClick={() => {
                                                    if (isDesktop) {
                                                    setActiveEvent(null);
                                                    }
                                                }}
                                                className="fixed inset-0 z-50 
                                                            flex  flex-col gap-5
                                                            items-center justify-center bg-black/30"
                                                >
                                                     
                                                    <div
                                                    style={{backgroundImage: `url(${activeEvent.image})`}}  
                                                    className="  md:h-[50%] md:w-[50%] w-[90%] h-[50%]
                                                                bg-cover bg-center rounded-2xl 
                                                                shadow-xs p-6 
                                                                flex flex-col gap-4 
                                                                animate-popIn items-center justify-center relative shadow-white"
                                                    onClick={(e) => e.stopPropagation()}  >
                                                        <div className="absolute rounded-2xl inset-0 bg-black/30"></div> 
                                                            

                                                            <div className="flex flex-col gap-4 items-center justify-center z-60 text-white ">
                                                                <span className="font-serif text-2xl text-center md:text-4xl " >{activeEvent.title}</span>
                                                                <span className="font-light md:text-2xl  font-sans flex text-center items-center" >{activeEvent.description}</span>
                                                            </div>

                                                            <div className="flex flex-col items-center justify-center text-white z-60 ">
                                                                <div className="flex gap-2 font-bold">
                                                                    <span>{activeEvent.day}</span>
                                                                    <span>{activeEvent.month}</span>
                                                                </div>
                                                                <span className="font-bold ">{activeEvent.time}</span>
                                                                <span className="font-serif">{activeEvent.location}</span>
                                                            </div>
                                                            <div className="flex justify-end pt-2  z-60 ">
                                                                <button
                                                                onClick={()=>navigate("/menu")} 
                                                                className=" bg-green-500 hover:bg-green-600 
                                                                                text-white font-semibold
                                                                                px-5 py-2 rounded-xl transition">
                                                                Go to Menu
                                                                </button>
                                                            </div>
                                                            
                                                    </div>

                                                        <button
                                                            onClick={() => setActiveEvent(null)}
                                                            className="w-12 h-12 rounded-full opacity-50
                                                                        bg-gray-300 text-white
                                                                        flex items-center justify-center
                                                                        text-xl font-bold
                                                                        shadow-lg
                                                                        hover:bg-gray-100
                                                                        transition md:hidden"
                                                            >
                                                            ✕
                                                        </button>
                                                                                                    
                                                </div>
                                                )}    
                                            
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