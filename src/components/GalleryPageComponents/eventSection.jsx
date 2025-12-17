

import eventsData from "../../JavaScript/eventsData"

export default function EventSection(){




        return(
            <section id="event" className="h-screen ">
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen p-2 md:p-4">
                    <div className=" h-screen flex flex-col mt-20 md:mt-0 md:items-center  md:justify-center">
                        <div className="flex justify-center items-center">
                            <span className="text-4xl md:text-9xl text-white md:mr-90">Events</span>
                        </div>
                        
                        <ul className="mt-4 text-sm md:text-lg text-white list-disc list-inside space-y-2">
                            <li>Stay up to date with our latest promos, freshly baked specials, and exciting bakery events.</li>
                            <li>Discover what’s happening at Kabayans Bakeshop — from seasonal treats to special offers.</li>
                            <li>Join us for our latest events and enjoy freshly baked delights every day.</li>
                        </ul>
                    </div>

                    <div className=" p-2 md:p-10 bg-transparent overflow-x-auto md:overflow-y-auto md:hide-scrollbar hide-horizontal-scrollbar">
                        <ul className="flex  md:flex-col gap-4">
                            {eventsData.map((item,index)=>(
                                <li
                                className="" 
                                key={index}>
                                        <div
                                        className="bg-white rounded-2xl h-10 md:h-56 flex p-4 gap-4">
                                            <div className="w-50 outline-2 outline-amber-900 rounded-2xl items-center justify-center flex flex-col gap-2">
                                                <span className="text-6xl font-serif text-amber-700">{item.day}</span>
                                                <span className="text-sm font-sans">{item.time}</span>
                                                <span className="text-md font-sans">{item.month}</span>
                                            </div>
                                            <div className=" w-90 flex flex-col items-start p-2 gap-3">
                                                <div className="h-1/4 text-2xl font-bold">
                                                {item.title}
                                                </div>
                                                <div>
                                                    <span>
                                                        {item.description}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl transition duration-300">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        
                                        </div> 
                                </li>

                            ))}                        
                        </ul>
                     
                    </div>



                </div>
            </section>
        )
}