

import { useState } from "react"
import eventsData from "../../JavaScript/eventsData"
import { useNavigate } from 'react-router-dom';

export default function EventSection(){


const navigate = useNavigate()
const [activeEvent, setActiveEvent] = useState(null);


        return(
            <section id="event" className="h-screen ">
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen  md:p-4  md:gap-1">
                    <div className="h-10  md:h-screen flex flex-col mt-15 md:mt-0 md:items-center  md:justify-center ">
                        <div className="flex justify-center items-center bg-gray-200 md:bg-transparent">
                            <span className="text-3xl md:text-9xl text-amber-700 md:text-white md:mr-90">Events</span>
                        </div>
                        
                        <ul className="flex flex-col gap-2 mt-4 
                                        text-sm md:text-lg text-white 
                                        list-disc list-inside space-y-2">
                            <li>Stay up to date with our latest promos, freshly baked specials, and exciting bakery events.</li>
                            <li>Discover what’s happening at Kabayans Bakeshop — from seasonal treats to special offers.</li>
                            <li>Join us for our latest events and enjoy freshly baked delights every day.</li>
                        </ul>
                    </div>

                    <div className="mt-30 md:mt-0 p-2 md:p-10 
                                    bg-transparent overflow-x-auto 
                                    md:overflow-y-auto md:hide-scrollbar 
                                    hide-horizontal-scrollbar">
                        <ul className="flex md:flex-col gap-8">
                            {eventsData.map((item,index)=>(
                                <li
                                className="" 
                                key={index}>
                                        <div
                                        className=" bg-white rounded-2xl h-70 w-60 md:w-full md:h-56 flex p-4 gap-4">
                                            <div className="w-60 md:w-50 outline-2 
                                                            outline-amber-900 rounded-2xl 
                                                            items-center justify-center flex 
                                                            flex-col gap-2">
                                                <span className="text-6xl font-serif text-amber-700">{item.day}</span>
                                                <span className="text-sm font-sans">{item.time}</span>
                                                <span className="text-md font-sans">{item.month}</span>
                                                <button
                                                onClick={() => setActiveEvent(item)}
                                                className="block md:hidden bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl transition duration-300">
                                                        View Details
                                                </button>
                                            </div>
                                            <div className=" w-90 hidden md:flex flex-col items-start p-2 gap-3">
                                                <div className="h-1/4 text-2xl font-bold">
                                                {item.title}
                                                </div>
                                                <div>
                                                    <span>
                                                        {item.description}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button className="bg-green-500 hover:bg-green-600 
                                                                    text-white font-semibold 
                                                                        px-6 py-2 rounded-2xl 
                                                                        transition duration-300">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>

                                            {activeEvent  && (
                                                <div 
                                                className="fixed inset-0 z-50 
                                                            flex md:hidden flex-col gap-5
                                                            items-center justify-center bg-black/30"
                                                >

                                                    <div 
                                                    className="w-[90%] h-[50%] max-w-sm 
                                                                bg-white rounded-2xl 
                                                                shadow-2xl p-6 
                                                                flex flex-col gap-4 
                                                                animate-popIn items-center justify-center"
                                                    onClick={(e) => e.stopPropagation()}  >
                                                            <div className="flex flex-col gap-4 items-center justify-center ">
                                                                <span className="font-serif text-2xl text-amber-700" >{activeEvent.title}</span>
                                                                <span className="font-light font-sans flex text-center items-center" >{activeEvent.description}</span>
                                                            </div>

                                                            <div className="flex flex-col items-center justify-center ">
                                                                <div className="flex gap-2 font-bold">
                                                                    <span>{activeEvent.day}</span>
                                                                    <span>{activeEvent.month}</span>
                                                                </div>
                                                                <span className="font-bold text-red-700">{activeEvent.time}</span>
                                                                <span className="font-serif">{activeEvent.location}</span>
                                                            </div>
                                                            <div className="flex justify-end pt-2">
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
                                                                        transition"
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



                </div>
            </section>
        )
}