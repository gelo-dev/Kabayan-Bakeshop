import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function AboutSection() {


    const sections = [
      { id: 1, 
        title: "Our Story", 
        color: "bg-amber-300",
        video: "./video/makingBread.mp4",
        text:"This bakery began because of the hard work of a father.He started as a vendor in another bakery back in 1990 and managed to save enough capital and knowledge to start his own bakery.Since then, from the time he started raising a family and up to the point where his children finished their studies, this bakery has remained his source of livelihood to this day" 

      },
      { id: 2, title: "Mission", color: "bg-emerald-300" },
      { id: 3, title: "Vision", color: "bg-pink-300" },
      { id: 4, title: "Team", color: "bg-purple-300" },
      { id: 5, title: "Values", color: "bg-yellow-300" },
    ];

    
    const scrollRef =  useRef(null)

      const scroll = (direction) => {

         let scrollAmount = 1500; // default for large screens

        // Adjust scroll amount for smaller screens
        const width = window.innerWidth;
        if (width < 640) {
          scrollAmount = 300; // small screens (mobile)
        } else if (width < 1024) {
          scrollAmount = 700; // medium screens (tablet)
        }

        if (scrollRef.current) {
              if (direction === "left") {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
              } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
              }
        }
      };


    return (
        <section id="about" className="h-screen relative flex items-center">
          
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-200"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>

     
            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute right-2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-200"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-700" />
            </button>


            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-4 h-full w-full scroll-smooth p-4 hide-scrollbar"
            >
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className={`shrink-0 w-full h-full ${section.color} rounded-lg flex items-center justify-center text-white text-xl font-bold relative`}
                    
                  >
                   
                    <div className="relative z-10">{section.title}</div>
                  </div>
                ))}
            </div>
        </section>


    );
}


//  {/* Only render video if it exists */}
//                     {section.video && (
//                       <video
//                         autoPlay
//                         loop
//                         muted
//                         className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
//                       >
//                         <source src={section.video} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     )}

//                     {/* Overlay text/content */}
