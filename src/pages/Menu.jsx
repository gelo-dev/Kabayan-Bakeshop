import { useRef, useState } from "react";
import { ChevronLeftIcon , ChevronRightIcon ,HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import {  HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import MenuListCategories from "../components/MenuPageComponents/MenuListCategories";
import { AnimatePresence } from "framer-motion";



export default function MenuSection ({ sendToHeader  }){

    const menu = [
        {
        image: "./imagesForMenu/loafBreadForMenu.jpg",
        text: `Soft, fluffy, and freshly baked daily. Perfect for sandwiches, toast, or just enjoying plain.`,
        name:"Pinoy Tasty",
        liked : false
        },
        {
        image: "./imagesForMenu/cookiesForMenu.jpg",
        text: "Soft inside, lightly crisp outside, and made with real, premium ingredients.",
        name:"Pinoy Cookies",
        liked : false
        },
        {
        image: "./imagesForMenu/pastryForMenu.jpg",
        text: "Locally baked, globally inspired. Yes, Pinoy bakery kami—but we make croissants that taste like you're in Paris.",
        name:"Croissant",
        liked : false
        },
         {
        image: "./imagesForMenu/PandecocoForMenu.jpg",
        text: "Soft bread filled with sweet, creamy coconut. A true Filipino favorite.",
        name:"Classic Pandecoco",
        liked : false
        },
        {
        image: "./imagesForMenu/chocolateCake.jpg",
        text: "Our homemade cakes with smooth frosting and delicious layers, baked fresh daily.",
        name:"Cakes",
        liked : false
        },
        {
        image: "./imagesForMenu/PandesalForMenu.jpg",
        text: "Warm, soft rolls with a subtle sweetness—perfect with coffee, palaman, or eaten on its own.",
        name:"Classicc Pandesal",
        liked : false

        }
    ];

    const openListOfMenu = () => {
      setShowListOfMenu(prev => {
        const newValue = !prev;
        sendToHeader(newValue);
        return newValue;
      });
    };

    const closeMenu =() =>{
      sendToHeader(false)
      setShowListOfMenu(false)
    }

  const [showListOfMenu , setShowListOfMenu]=useState(false)
  const [oldMenu, setOldMenu] = useState(menu);

 const heartedFeaturedMenu = (index) => {
    // Create a new array, toggle liked for clicked item only
    const updatedMenu = oldMenu.map((item, i) =>
      i === index ? { ...item, liked: !item.liked } : item
    );
    setOldMenu(updatedMenu);
  };



  const scrollRef = useRef();


  const scrollLeftBtn = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRightBtn = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };


    return (
        <section
            id="menu"
            className="h-screen flex  justify-center relative "
            >
            
            <div className="relative w-full mx-auto p-8 ">
                <div className="h-50 bg-transparent flex flex-col p-2 md:p-6 gap-3">
                    <div className="">
                      <h1 className="text-3xl md:text-6xl font-serif text-white">Freshly Baked for You</h1>
                    </div>
                    <div className="flex md:items-end justify-center md:justify-between">
                  
                        <h1 className="font-extralight md:font-light md:text-3xl text-white leading-tight">
                      Indulge in our freshly baked treats, from soft breads to rich pastries, <br></br>all made with love and the finest ingredients for a perfect start to your day.</h1>
                         <button
                            onClick={() => openListOfMenu()}
                            className="hidden md:block  hover:bg-amber-700 hover:scale-105 outline outline-white text-white px-6 py-3 rounded-3xl transition"
                          >
                            Buy Fresh Goods
                          </button>

                          <AnimatePresence>
                            {showListOfMenu && <MenuListCategories onClose={() => closeMenu(false)}  />}
                          </AnimatePresence>
                    </div>
                    
                </div>
            
            
                {/* Left Button - hidden on small screens */}
              <button
                onClick={scrollLeftBtn}
                className="hidden md:flex absolute left-0 top-3/4 -translate-y-1/2 bg-transparent text-white "
              >
              < ChevronLeftIcon className="w-10 h-10 stroke-3 " />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollRef}
                className="overflow-x-auto scroll-smooth cursor-grab  hide-scrollbar"
                
              >
                <div className="flex space-x-4 p-3">
                  
                    {menu.concat(menu).map((element, i) => (
                      <div
                        key={i}
                      >
                        <div className=" hover:scale-103 ">
                            <div  className="shrink-0 h-45 w-65  md:w-70 md:h-60 bg-white bg-cover bg-center rounded-t-xl"
                              style={{ backgroundImage: `url(${element.image})` }}>
                                <span
                                  key={i}
                                  onClick={() => heartedFeaturedMenu(i)}
                                  className="cursor-pointer inline-flex items-center"
                                >
                                  {element.liked ? (
                                    <HeartSolid className="w-6 h-6 text-red-500" />
                                  ) : (
                                    <HeartOutline className="w-6 h-6 text-gray-500" />
                                  )}
                                </span>
                            </div>
                            <div className=" shrink-0 flex flex-col justify-between p-4 md:p-3 bg-white h-45 rounded-b-2xl items-center">
                              <h1 className="text-lg font-bold">{element.name}</h1>
                                <h1 className="text-xs md:text-sm font-sans text-center">{element.text}</h1>
                                <button className="bg-amber-300 w-40 h-10 rounded-4xl">Details</button>
                            </div>
                        </div>
                            
                      </div>
                    ))}
                  
                </div>
              </div>

              {/* Right Button - hidden on small screens */}
              <button
                onClick={scrollRightBtn}
                className="hidden md:flex absolute right-0 top-3/4 -translate-y-1/2 bg-transparent text-white z-20"
              >
                <ChevronRightIcon className="w-10 h-10 stroke-3 " />
              </button>

               <span className="block sm:hidden text-xs text-white ml-5 animate-pulse">Swipe left or right to explore our featured treats.</span>     
              <button
              onClick={() => openListOfMenu()}
              className= {`${ showListOfMenu ? 'hidden' :'block'} md:hidden block mt-6 ml-10  hover:bg-amber-700 outline-2 outline-white text-white w-50 h-10 rounded-4xl`}>
                          Buy Fresh Goods
                        
              </button>
          </div>
            
            
        </section>

    );
}

