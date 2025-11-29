import { useState } from "react";
import menuSampleList from "./sampleMenuArray"
import {InformationCircleIcon ,ShoppingCartIcon} from "@heroicons/react/24/outline";


export default function BreadMuneSection(){

 const [flippedCards, setFlippedCards] = useState({});
 
 
    
    const toggleFlip = (id) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };


    return(
        <section id="breads">

            <div className="grid grid-cols-3 gap-2">
            {menuSampleList.map((item, index) => (
                <div key={index} className="relative w-full h-80 perspective">
                
                {/* FLIP WRAPPER */}
                <div
                    className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
                    flippedCards[item.id] ? "rotate-y-180" : ""
                    }`}
                >
                    {/* FRONT SIDE */}
                    <div className="absolute w-full h-full backface-hidden">
                        <div className="bg-amber-200 w-full h-full rounded-2xl flex flex-col items-center">

                            {/* IMAGE + ICON + PRICE */}
                            <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="bg-amber-400 w-full h-60 rounded-t-2xl bg-cover bg-center flex flex-col justify-center p-1"
                            >
                                <InformationCircleIcon
                                    className="stroke-blue-700 stroke-1 h-[15%] mb-10 cursor-pointer ml-45"
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFlip(item.id);
                                    }}
                                />

                                <div className="flex justify-start mt-20 h-[13%]">
                                    <h1 className="bg-red-400 px-2 py-0 rounded-full text-white w-15">
                                    {"₱ " + item.price}
                                    </h1>
                                </div>
                            </div>

                            {/* NAME + BUTTONS */}
                            <div className="bg-gray-100 w-full h-40 rounded-b-2xl flex flex-col items-center gap-2">
                                <span>{item.name}</span>

                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 py-1 rounded-full flex item-center gap-2 shadow-md transition">
                                    Order Now
                                    <ShoppingCartIcon className="w-5 h-5" />
                                </button>

                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-5 py-1 rounded-full flex item-center gap-2 shadow-md transition">
                                    Add to Cart
                                    <ShoppingCartIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*BACK SIDE */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                    
                        <h1 className="text-lg font-bold mb-2">{item.name}</h1>
                        <p className="text-sm mb-4">{item.description || "No description available."}</p>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                            onClick={() => toggleFlip(item.id)}
                        >
                            Back
                        </button>
                    </div>
                </div>
                </div>
            ))}
            </div>

                        
        </section>
    )

}