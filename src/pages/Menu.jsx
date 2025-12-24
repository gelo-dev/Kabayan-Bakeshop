import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon , ChevronRightIcon ,StarIcon  } from "@heroicons/react/24/outline";





export default function MenuSection ({ sendToHeader  }){

    const menu = [
        {
        image: "./imagesForMenu/loafBreadForMenu.jpg",
        text: `Soft, fluffy, and freshly baked daily. Perfect for sandwiches, toast, or just enjoying plain.`,
        name:"Pinoy Tasty",
        rating : 5
        },
        {
        image: "./imagesForMenu/cookiesForMenu.jpg",
        text: "Soft inside, lightly crisp outside, and made with real, premium ingredients.",
        name:"Pinoy Cookies",
        rating : 5
        },
        {
        image: "./imagesForMenu/pastryForMenu.jpg",
        text: "Locally baked, globally inspired. Yes, Pinoy bakery kami—but we make croissants that taste like you're in Paris.",
        name:"Croissant",
        rating : 4
        },
         {
        image: "./imagesForMenu/PandecocoForMenu.jpg",
        text: "Soft bread filled with sweet, creamy coconut. A true Filipino favorite.",
        name:"Classic Pandecoco",
        rating : 4
        },
        {
        image: "./imagesForMenu/chocolateCake.jpg",
        text: "Our homemade cakes with smooth frosting and delicious layers, baked fresh daily.",
        name:"Cakes",
        rating : 5
        },
        {
        image: "./imagesForMenu/PandesalForMenu.jpg",
        text: "Warm, soft rolls with a subtle sweetness—perfect with coffee, palaman, or eaten on its own.",
        name:"Classicc Pandesal",
        rating : 4

        }
    ];

  const navigate = useNavigate();
  const scrollRef = useRef();


  const scrollLeftBtn = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRightBtn = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
  setCurrentIndex(i => Math.max(i - 1, 0));
    scrollRef.current.scrollBy({ left: -700, behavior: "smooth" });
  };

const nextSlide = () => {
  setCurrentIndex(i => Math.min(i + 1, menu.length - 1));
    scrollRef.current.scrollBy({ left: 700, behavior: "smooth" });
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
                        onClick={() => navigate("/menu")}
                        className="
                          hidden md:inline-flex items-center justify-center
                          hover:bg-amber-500
                          text-white font-semibold text-lg
                          px-6 py-3 rounded-full
                          outline hover:shadow-lg
                          transition duration-300 ease-in-out
                          transform hover:scale-105
                          focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2
                        "
                      >
                        Buy Fresh Goods
                      </button>


                    </div>
                    
                </div>
            
            
                {/* Left Button - hidden on small screens */}
              {currentIndex > 0 &&(<button
                onClick={prevSlide}
                className="hidden md:flex absolute left-0 top-3/4 -translate-y-1/2 bg-transparent text-white "
              >
              < ChevronLeftIcon className="w-10 h-10 stroke-3 " />
              </button>)}

              {/* Scrollable Container */}
              <div
                ref={scrollRef}
                className="overflow-x-auto scroll-smooth cursor-grab  hide-scrollbar"
                
              >
                <div className="flex space-x-9 md:space-x-7 p-3">
                  
                    {menu.concat(menu).map((element, i) => (
                      <div
                        key={i}
                      >
                        <div className=" hover:scale-103 brightness-97 hover:brightness-105 ">
                            <div  className="shrink-0 h-45 w-65  md:w-70 md:h-60 bg-white md:bg-contain md:bg-no-repeat bg-center bg-cover rounded-tl-4xl rounded-br-4xl"
                              style={{ backgroundImage: `url(${element.image})` }}>
                                
                            </div>
                            <div className=" shrink-0 flex flex-col justify-between p-4 md:p-3 bg-transparent text-white h-45 items-start">
                              <h1 className="text-lg md:text-xl font-bold">{element.name}</h1>
                                <h1 className="text-sm font-sans">{element.text}</h1>
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((num) =>
                                    num <= element.rating ? (
                                      <StarIcon key={num} className="h-5 w-5 text-amber-300 fill-amber-300" />
                                    ) : (
                                      <StarIcon key={num} className="h-5 w-5 text-white" />
                                    )
                                  )}
                              </div>
                            </div>
                        </div>
                            
                      </div>
                    ))}
                  
                </div>
              </div>

              {/* Right Button - hidden on small screens */}
              {currentIndex < menu.length - 1 &&(<button
                onClick={nextSlide}
                className="hidden md:flex absolute right-0 top-3/4 -translate-y-1/2 bg-transparent text-white z-20"
              >
                <ChevronRightIcon className="w-10 h-10 stroke-3 " />
              </button>)}

               <span className="block sm:hidden text-xs text-white ml-5 animate-pulse">Swipe left or right to explore our featured treats.</span>     
              <button
              onClick={() => navigate("/menu")}
              className= {` md:hidden block mt-6 ml-10  hover:bg-amber-700 outline-2 outline-white text-white w-50 h-10 rounded-4xl`}>
                          Buy Fresh Goods
                        
              </button>
          </div>
            
            
        </section>

    );
}

