import { useState,useEffect } from "react";
import { ChevronLeftIcon , ChevronRightIcon } from "@heroicons/react/24/outline";
import MobileNavBar from "./navigationSmallScreen";


export default function StoreSection(){

const landingHighlights = [
  {
    id: 1,
    text: "Step inside Kabayans Bakeshop and experience our warm counter service with freshly baked breads ready every day.",
  },
  {
    id: 2,
    text: "Explore our beautifully arranged cake displays and baked goods, made fresh to bring joy to every visit.",
  },
  {
    id: 3,
    text: "Visit our cozy store and discover why Kabayans Bakeshop is a favorite stop for fresh, affordable treats.",
  },
];


const imagesOfStore = [
  {
    id: 1,
    image: "./imagesForGallery/StoreImages/counter.png",
    text: "Store counter area",
  },
  {
    id: 2,
    image: "./imagesForGallery/StoreImages/cakeDisplay.jpg",
    text: "Cake display showcase",
  },
  {
    id: 3,
    image: "./imagesForGallery/StoreImages/price.jpg",
    text: "Price list board",
  },
  {
    id: 4,
    image: "./imagesForGallery/StoreImages/tong.jpg",
    text: "Serving tongs",
  },
  
];



const [current, setCurrent] = useState(0);
const [index, setIndex] = useState(0);


const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};


useEffect(() => {
    const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % landingHighlights.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
}, []);
        return(
            <section id="store" className="h-screen grid grid-rows-1 p-4 gap-2 mt-5">
                <div className="outline outline-white rounded-2xl justify-center 
                                items-center hidden  md:flex md:h-full h-3/4
                                md:w-full">
                            <div className=" flex flex-col 
                                            items-center justify-center rounded-2xl">
                                    <span className="text-white text-4xl md:text-9xl font-serif ">Store</span>
                                
                                    <p className="text-xs md:text-2xl text-center text-white transition-opacity duration-500">
                                        {landingHighlights[index].text}
                                    </p>  
                            </div>
                        
                </div>
               
                <div className="bg-transparent h-100 overflow-x-auto 
                                hide-horizontal-scrollbar
                                p-2 md:mb-0 md:mt-0 mt-15">
                        <ul className="h-full flex md:gap-2 gap-5">
                            {imagesOfStore.map((item,index)=>(
                                <li
                                className="flex gap-4 w-full items-center " 
                                key={index}>
                                    <div
                                    style={{backgroundImage: `url(${item.image})`}} 
                                    className="h-full w-90 bg-cover bg-center 
                                            flex items-end p-4 text-lg text-white
                                            font-bold rounded-2xl outline-2 outline-white">
                                        <span>{item.text}</span>
                                    </div>
                            
                                </li>
                            ))}
                        </ul>

                </div>
                
                {/* <div className="h-screen bg-transparent grid grid-cols-2 gap-2 p-10">
    
            
                    <div className="flex items-center justify-center flex-col">
                        <span className="text-9xl text-white">Store</span>
                        <span className="text-white font-light text-2xl mt-2">
                        Fresh goods, ready to order whenever you need them.
                        </span>
                    </div>

        
                    <div className="relative rounded-2xl overflow-hidden">
                        
                
                        <div
                        style={{ backgroundImage: `url(${images[current]})` }}
                        className="h-full w-full bg-cover bg-center transition-all duration-500 p-10"
                        />

                    
                        <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 
                                    bg-black/40 hover:bg-black/60 text-white 
                                    p-2 rounded-full transition"
                        >
                        <ChevronLeftIcon className="w-10 h-10 stroke-3" />
                        </button>

                    
                        <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 
                                    bg-black/40 hover:bg-black/60 text-white 
                                    p-2 rounded-full transition"
                        >
                        <ChevronRightIcon className="w-10 h-10 stroke-3" />
                        </button>

                    </div>
                </div> */}
                <MobileNavBar/>
            </section>
        )
}