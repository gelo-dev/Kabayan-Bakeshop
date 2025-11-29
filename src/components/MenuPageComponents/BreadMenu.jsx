import { useState } from "react";
import menuSampleList from "./sampleMenuArray"
import chunkArray from "./chunkArray";
import {InformationCircleIcon ,ShoppingCartIcon} from "@heroicons/react/24/outline";

export default function BreadMenuSectionDemo(){
    
    const pages = chunkArray(menuSampleList, menuSampleList.length);
    const [flippedCards, setFlippedCards] = useState({});
 
 
    
    const toggleFlip = (id) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
     
    
    
    return(
        <section id="breadss" className="h-screen pt-15">

            <div className="relative w-full h-screen overflow-hidden flex">
                        {pages.map((page, i) => (
                        <div key={i}
                        className={`grid grid-cols-1 md:grid-cols-4  gap-2 `}>
                            {page.map((item) => (
                                <div key={item.id} className="relative w-full h-full ">
                                    <div
                                    className={`transition-transform duration-500 preserve-3d ${
                                    flippedCards[item.id] ? "rotate-y-180" : ""
                                    }`}>
                                        <div
                                            className="w-full bg-transparent hover:scale-105 brightness-95 hover:brightness-105 flex flex-col backface-hidden">
                                            <div
                                            style={{ backgroundImage: `url(${item.image})` }} 
                                            className=" bg-cover bg-center w-full h-40  rounded-t-2xl flex flex-col p-2 justify-between">
                                                <InformationCircleIcon 
                                                className="stroke-blue-700 stroke-1 h-7 cursor-pointer ml-50 "
                                                onClick={(e) => {
                                                    e.stopPropagation();  // Prevent click from affecting parent
                                                    toggleFlip(item.id); // Flip only this card
                                                    }}/>
                                                    <div >
                                                        <h1 className="bg-red-400 px-2 py-0 rounded-full text-white w-15">{'₱'+' '+ item.price}</h1>    
                                                    </div>
                                                
                                            </div> 
                                            <div className="bg-white h-40 rounded-b-2xl flex flex-col justify-between items-center p-1 gap-2 ">
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
                                        <div className="absolute inset-0 bg-white rounded-3xl p-4 rotate-y-180 backface-hidden flex flex-col justify-center items-center gap-2 w-full h-full">
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

                        <div className="bg-amber-300 w-1/2">
                            <h1>TEST DIV</h1>
                        </div>
                    

                            
            </div> 
            
                    
        </section>
    )
}