import { useState } from "react";
import { ChevronLeftIcon , ChevronRightIcon } from "@heroicons/react/24/outline";


export default function StoreSection(){

const images = [
"./imagesForGallery/StoreImages/counter.png",
"./imagesForGallery/StoreImages/cakeDisplay.jpg",
"./imagesForGallery/StoreImages/price.jpg",
"./imagesForGallery/StoreImages/tong.jpg",
];


const [current, setCurrent] = useState(0);

const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};
        return(
            <section id="store" className="h-screen p-10">
                
                <div className="h-screen bg-transparent grid grid-cols-2 gap-2 p-10">
    
            
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
                </div>
            </section>
        )
}