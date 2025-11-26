import { useState } from "react";
import menuSampleList from "./sampleMenuArray"
import chunkArray from "./chunkArray";
import { ChevronLeftIcon , ChevronRightIcon } from "@heroicons/react/24/outline";

export default function BreadMenuSection(){
    const pages = chunkArray(menuSampleList, 8);
    const [index, setIndex] = useState(0);
 
    const prevPage = () => setIndex((prev) => Math.max(prev - 1, 0));
    const nextPage = () => setIndex((prev) => Math.min(prev + 1, pages.length - 1));
        
    return(
        <section id="menu">
                <div className="relative w-full overflow-hidden">
         
            {/* Left Button */}
            <button 
                onClick={prevPage}
                className="absolute  top-1/2 -translate-y-1/2 bg-transparent text-white z-10"
            >
                <ChevronLeftIcon className="w-10 h-10 stroke-3 " />
            </button>

            {/* Slider Container */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {pages.map((page, i) => (
                <div key={i} className="grid grid-cols-4 grid-rows-2 gap-4 min-w-full p-4">
                    {page.map((item) => (
                    <div
                        key={item.id}
                        className="bg-amber-500 w-full h-65 rounded-2xl p-3 flex flex-col"
                    >
                        <h1>{item.title}</h1>
                    </div>
                    ))}
                </div>
                ))}
            </div>

            {/* Right Button */}
            <button 
                onClick={nextPage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
            >
                <ChevronRightIcon />
            </button>

            </div>
        </section>
    )
}