import menuRecommendations from '../../JavaScript/customerReccomendations';
import { 
        HomeIcon,   
        ChevronLeftIcon,
        ChevronRightIcon,
        HeartIcon 
        } from '@heroicons/react/24/outline'
import { PlusIcon } from "@heroicons/react/24/solid";        
import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';       

export default function RatingsSections(){
 const navigate = useNavigate()

const getInitials= (name) =>{
    if (!name) return "";
    const words = name.trim().split(" ");
    // Take first letter of first and last word
    const initials =
        words.length === 1
        ? words[0][0]
        : words[0][0] + words[words.length - 1][0];
    return initials.toUpperCase();
}

    
const scrollRef = useRef(null);

const scrollLeft = () => {
scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = () => {
scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
};

    return (
        <section>

            <div className="flex flex-col items-center h-screen md:h-80 bg-transparent  md:p-5  gap-2 relative">
                            <div className='flex md:hidden items-center bg-amber-700 justify-between p-5 w-full h-15'>
                                <div
                               
                                className='flex text-white'>
                                    <ChevronLeftIcon
                                     onClick={() => navigate("/menu")} 
                                    className='h-6 w-6'/>
                                    <span>Back to Menu</span>
                                </div>
                                <div className='flex text-white'>
                                    <HomeIcon
                                    onClick={() => navigate("/")}  
                                    className='h-6 w-6'/>
                                    
                                </div>
                                
                            </div>
                            
                            <div className='h-15 flex flex-col items-center justify-center  w-full md:bg-transparent'>
                                <span className='text-xl md:text-4xl text-amber-700 font-serif  md:text-white'>Reviews & Ratings</span>
                            </div>  
                <button
                    onClick={scrollLeft}
                    className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-10 shadow">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
                </button>
                <button
                    onClick={scrollRight}
                    className="hidden md:flex  absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-10 shadow">
                    <ChevronRightIcon className="w-6 h-6 text-gray-800" />
                </button>
                <div
                ref={scrollRef}
                className="flex flex-col md:flex-row items-center h-screen md:h-80 bg-gray-200 md:bg-transparent  p-5 overflow-y-auto md:overflow-x-auto w-full scroll-smooth drop-shadow-lg gap-4 md:gap-2 hide-horizontal-scrollbar">
                    {menuRecommendations.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white h-45 w-85 md:w-90 rounded-2xl shrink-0 p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center  font-semibold drop-shadow-md">
                                {getInitials(item.name)}
                            </div>
                            <span className="text-amber-900 font-bold font-serif">
                                {item.name}
                            </span>
                        </div>
                        <div className='flex flex-col  gap-1'>
                            <div className='flex items-center justify-center h-5'>
                                <span className='font-serif font-bold text-amber-700'>{item.suggestion}</span>
                            </div>
                            <div className='flex flex-col items-center justify-center h-10'>
                                <span className="text-xs md:text-sm text-center line-clamp-3">
                                    “{item.comment}”
                                </span>

                            </div>
                            <div className="flex items-center justify-center gap-1 h-1/4">
                                    {[1, 2, 3, 4, 5].map((num) =>
                                        num <= item.rating ? (
                                        <HeartIcon  key={num} className="h-5 w-5 text-red-600 fill-red-600" />
                                        ) : (
                                        <HeartIcon  key={num} className="h-5 w-5 text-red-600" />
                                        )
                                    )}
                                </div>
                        </div>
                        

                        
                    </div>
                    ))}
                </div>              
            </div>

            <button
            className="fixed bottom-5 right-5 md:hidden w-14 h-14 bg-amber-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-800 transition duration-200"
            >
            <PlusIcon className="w-6 h-6" />
            </button>
        </section>
    )
}