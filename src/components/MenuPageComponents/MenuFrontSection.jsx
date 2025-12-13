import ProcessOrderSection from "./ProcessOrder"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";



export default function MenuFrontPageSection(){
const navigate = useNavigate();

const promos = [
  {
    id: 1,
    discount: 30,
    text: "Get 30% off when you buy any 2 loaves of bread",
    validUntil: "2025-01-31"
  },
  {
    id: 2,
    discount: 20,
    text: "Save 20% on all pastries every weekend",
    validUntil: "2025-02-15"
  },
  {
    id: 3,
    discount: 15,
    text: "Enjoy 15% off when your total purchase reaches ₱500",
    validUntil: "2025-03-01"
  }
];

const [current, setCurrent] = useState(0);

const prevPromo = () => {
setCurrent((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
};

const nextPromo = () => {
setCurrent((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
};

const text = "Promo!";



        return(
            <section  id="font-menu-page" className="scroll-smooth">
 
                <div className="relative h-screen overflow-hidden hidden sm:block ">
                  
                    <div
                        className="absolute inset-0 bg-cover bg-center clip-left grid grid-cols-2"
                        style={{ backgroundImage: "url('./pizzaDough.jpg')" }}
                    >
                        <div className="bg-transparent text-white flex flex-col items-center justify-center gap-10">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold">Kabayan's Bakery</span>
                                <span className="text-9xl font-serif font-bold">Menu</span>
                                <span className="text-xl text-white mt-2">
                                Made with love, baked to perfection, and enjoyed by families every day
                                </span>     
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => navigate("/")} 
                                    className="flex items-center w-50 gap-2 outline outline-white hover:bg-amber-700 text-white px-4 py-2 rounded-xl">                            
                                        <ArrowLeftIcon className="h-5 w-5" />
                                            Home
                                </button>
                            </div>
                        </div>
                        <div className="bg-transparent"></div>
                    </div>

                    
                
                    <div className="relative h-full grid grid-cols-2 bg-amber-700 clip-right overflow-hidden">

                        <div className="flex items-center justify-center text-white text-xl font-bold"></div>

                      
                        <div className="relative bg-amber-700 flex flex-col justify-center items-center p-4 text-center gap-5">
                            <div className="text-white flex flex-col items-center justify-center ">
                                <h1 className="text-4xl font-bold flex gap-1">
                                    {text.split("").map((letter, index) => (
                                        <span
                                        key={index}
                                        className="bounce-letter"
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                        >
                                        {letter}
                                        </span>
                                    ))}
                                    </h1>
                                <h3
                                 style={{ textShadow: "6px 6px 10px rgba(0,0,0,0.6)" }} 
                                className="text-9xl font-bold mb-10 text-shadow-2xl shadow-amber-900">
                                {promos[current].discount}% OFF
                                </h3>
                                <p className="text-lg mb-2">{promos[current].text}</p>
                                <p className="text-md">Valid until: {promos[current].validUntil}</p>
                            </div>
                            
                            <div className=" flex gap-5">
                                <button
                                    onClick={prevPromo}
                                    className="bg-white text-amber-700 p-2 rounded-full shadow hover:bg-gray-100"
                                >
                                    <ChevronLeftIcon className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={nextPromo}
                                    className="bg-white text-amber-700 p-2 rounded-full shadow hover:bg-gray-100"
                                >
                                    <ChevronRightIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                
                    <ProcessOrderSection />
            
            
            
            
            </section>
        )
}