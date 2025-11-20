import { useRef } from "react";
import { ChevronLeftIcon , ChevronRightIcon} from "@heroicons/react/24/outline";


export default function MenuSection (){

    const menu = [
        {
        image: "/chocolateCake.png",
        text: `Fresh is our promise
                -tale of love, honest ingredients, and the joy of real baking.`
        },
        {
        image: "/stoneOven.jpg",
        text: "Taste the tradition — where every loaf tells a story."
        },
        {
        image: "/zoomBread.jpg",
        text: "Baked with heart — bringing warmth and sweetness to every home."
        },
         {
        image: "/PHFlag.jpg",
        text: "Our bread is made with the warmth and dedication of Filipino hands—rooted in tradition, perfected with heart."
        },
        {
        image: "/sliceOfCake.jpg",
        text: "Our bread is made with the warmth and dedication of Filipino hands—rooted in tradition, perfected with heart."
        },
        {
        image: "/Jeepney.jpg",
        text: "Our bread is made with the warmth and dedication of Filipino hands—rooted in tradition, perfected with heart."
        }
    ];

    const testButton = ()=>{
        alert('this is test')
    }

    

  const scrollRef = useRef();

    let isDown = false;
    let startX;
    let scrollLeft;

  // Mouse/touch drag handlers
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (startX - x); // how far mouse moved
    scrollRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

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
                <div className="h-50 bg-transparent flex flex-col p-4 gap-3">
                    <div className="">
                      <h1 className="text-3xl md:text-6xl font-serif text-white">Freshly Baked for You</h1>
                    </div>
                    <div className="flex md:items-end justify-center md:justify-between">
                  
                        <h1 className="font-extralight md:font-light md:text-3xl text-white leading-tight">
                      Indulge in our freshly baked treats, from soft breads to rich pastries, <br></br>all made with love and the finest ingredients for a perfect start to your day.</h1>
                        <button 
                        className="hidden md:block hover:bg-amber-700 hover:scale-105 outline-2 outline-white text-white w-50 h-12 rounded-4xl">
                          Explore All Bakes
                        </button>
                    </div>
                    
                </div>
            
            
                {/* Left Button - hidden on small screens */}
              <button
                onClick={scrollLeftBtn}
                className="hidden md:flex absolute left-0 top-3/4 -translate-y-1/2 bg-transparent text-white z-50"
              >
              < ChevronLeftIcon className="w-10 h-10 stroke-3 " />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollRef}
                className="overflow-x-hidden scroll-smooth cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
              >
                <div className="flex space-x-4 p-3">
                  
                    {menu.concat(menu).map((element, i) => (
                      <div
                        key={i}
                      >
                        <div className="h-1/2 hover:scale-103 hover:rounded-2xl">
                            <div  className="shrink-0 w-70 h-60 bg-white bg-cover bg-center rounded-t-xl"
                              style={{ backgroundImage: `url(${element.image})` }}>
                            </div>
                            <div className=" shrink-0 flex flex-col justify-between p-4 bg-white h-40 rounded-b-2xl items-center">
                                <h1 className="font-light font-sans">{element.text}</h1>
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

              <button 
                        className=" md:hidden block mt-3 ml-12  hover:bg-amber-700 hover:scale-105 outline-2 outline-white text-white w-50 h-12 rounded-4xl">
                          Explore All Bakes
              </button>
          </div>
            
            
        </section>

    );
}

