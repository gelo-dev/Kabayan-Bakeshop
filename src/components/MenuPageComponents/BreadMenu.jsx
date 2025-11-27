import { useState } from "react";
import menuSampleList from "./sampleMenuArray"
import chunkArray from "./chunkArray";
import { ChevronLeftIcon , ChevronRightIcon ,InformationCircleIcon ,ShoppingCartIcon} from "@heroicons/react/24/outline";

export default function BreadMenuSection(){
    const pages = chunkArray(menuSampleList, 8);
    const [index, setIndex] = useState(0);
    const [flippedCards, setFlippedCards] = useState({});
 
    const prevPage = () => setIndex((prev) => Math.max(prev - 1, 0));
    const nextPage = () => setIndex((prev) => Math.min(prev + 1, pages.length - 1));
    
    const toggleFlip = (id) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
        
    return(
        <section id="menu">

                <button 
                    onClick={prevPage}
                    className="absolute top-98 -translate-x-5  bg-transparent text-white z-10"
                >
                    <ChevronLeftIcon className="w-10 h-10 stroke-3 " />
                </button>
            <div className="relative w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {pages.map((page, i) => (
                        <div key={i} className="grid grid-cols-4 grid-rows-2 gap-4 min-w-full p-4">
                            {page.map((item) => (
                                <div key={item.id} className="relative w-full h-full">
                                    <div
                                    className={`transition-transform duration-500 preserve-3d ${
                                    flippedCards[item.id] ? "rotate-y-180" : ""
                                    }`}>
                                        <div
                                            className="bg-transparent hover:scale-105 brightness-95 hover:brightness-105 flex flex-col backface-hidden">
                                            <div
                                            style={{ backgroundImage: `url(${item.image})` }} 
                                            className=" bg-cover bg-center w-full h-40  rounded-t-3xl flex flex-col p-2 justify-between">
                                                <InformationCircleIcon 
                                                className="stroke-blue-700 stroke-1 h-7 cursor-pointer ml-45 "
                                                onClick={(e) => {
                                                    e.stopPropagation();  // Prevent click from affecting parent
                                                    toggleFlip(item.id); // Flip only this card
                                                    }}/>
                                                    <div >
                                                        <h1 className="bg-red-400 px-2 py-0 rounded-full text-white w-15">{'₱'+' '+ item.price}</h1>    
                                                    </div>
                                                
                                            </div> 
                                            <div className="bg-white h-30 rounded-b-3xl flex flex-col justify-between items-center p-1 gap-2 ">
                                                <div>
                                                    <h1 className="text-l text-center">{item.name}</h1>
                                                </div>
                                                <div className="flex flex-col gap-2 pb-1">
                                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 py-1 rounded-full flex item-center gap-2 shadow-md transition ">
                                                        Order Now
                                                        <ShoppingCartIcon className="w-5 h-5" />
                                                    </button>
                                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-5 py-1 rounded-full flex item-center gap-2 shadow-md transition ">
                                                        Add to Cart
                                                        <ShoppingCartIcon className="w-5 h-5" />
                                                    </button>
                                                    
                                                    
                                                </div>
                                            </div> 
                                        </div> 

                                        {/* BACK CARDS */}
                                        <div className="absolute inset-0 bg-white rounded-3xl p-4 rotate-y-180 backface-hidden flex flex-col justify-center items-center gap-2">
                                            <h2 className="text-xl  mb-2">Product Details</h2>
                                            <h1 className="font-bold font-serif text-lg">{item.name}</h1>
                                            <p className="text-sm text-center">{item.text || "More info coming soon..."}</p>

                                            {/* Close button to flip back */}
                                            <button
                                                className="mt-4 p-2 bg-blue-500 text-white rounded-xl"
                                                onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFlip(item.id);
                                                }}
                                            >
                                                Close
                                            </button>
                                        </div>            


                                    </div>     
                                </div>
                                                            
                            ))}
                        </div> 
                        ))}
                    </div>

                    {/* Right Button */}
                            
                    </div> 
              <button 
                            onClick={nextPage}
                            className="absolute right-0 mr-130 top-98 translate-y-.5 text-white z-10"
                        >
                            <ChevronRightIcon className="w-10 h-10 stroke-3 " />
                        </button>
                    
                    
        </section>
    )
}