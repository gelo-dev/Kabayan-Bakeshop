import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import OurStorySection from "../components/AboutPageComponents/OurStory";
import MissionSection from "../components/AboutPageComponents/Mission";
import VisionSection from "../components/AboutPageComponents/Vision";

export default function AboutSection() {


    const sections = [
  { id: 1, title: "Our Story", color: "bg-amber-300", component: OurStorySection , backgroundImage: "./AboutPageImages/vendor.png"},
  { id: 2, title: "Mission", color: "bg-emerald-300", component: MissionSection ,backgroundImage: "./AboutPageImages/familyJeep.png"},
  { id: 3, title: "Vision", color: "bg-pink-300", component: VisionSection , backgroundImage: "./AboutPageImages/Vision.png"},
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
const [currentIndex, setCurrentIndex] = useState(0);
const prevSlide = () => {
  setCurrentIndex(i => Math.max(i - 1, 0));
   scroll("left")
};

const nextSlide = () => {
  setCurrentIndex(i => Math.min(i + 1, sections.length - 1));
  scroll("right")
};

    return (
        <section id="about" className="h-screen relative flex items-center p-4">
          
              {currentIndex  > 0 && (<button
                onClick={()=>prevSlide()}
                className="hidden md:block absolute left-2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-200">
                      <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
              </button>
                )}

            {(currentIndex < sections.length - 1 && <button
              onClick={() => nextSlide()}
              className="hidden md:block absolute right-2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-200"
            >
              <ChevronRightIcon
              onClick={()=>setHidePrevButton(true)} 
              className="w-6 h-6 text-gray-700" />
            </button>)}


            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-4 h-full w-full scroll-smooth p-4 hide-scrollbar"
            >
              {sections.map((section) => {
                    const Component = section.component; // get the component
                    return (
                      <div
                        key={section.id}
                        style={{backgroundImage: `url(${section.backgroundImage})`}} 
                        className={`shrink-0 w-full h-full 
                                    rounded-lg
                                    bg-center bg-cover`}
                      >
                        <Component />
                      </div>
                   
                    );
                })}
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
