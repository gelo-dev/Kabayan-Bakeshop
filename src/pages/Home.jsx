import { useState } from "react";

export default function HomeSection() {
          const slides = [
            {
            image: "/zoomBread.jpg",
            text: "Fresh is our promise - tale of love, honest ingredients, and the joy of real baking."
            },
            {
            image: "/stoneOven.jpg",
            text: "Taste the tradition — where every loaf tells a story."
            },
            {
            image: "/handMade.jpg",
            text: "Baked with heart — bringing warmth and sweetness to every home."
            }
        ];

        const[ displayText , setDisplayText ]= useState(0)

        
            const nextSlide = (i) =>{
            
                if(i == i){
                    setDisplayText(i)
                }else{
                    setDisplayText(displayText + 1);  
                }
        
                
            }  
        return (
            <section id="home" className="h-screen relative flex items-center overflow-hidden">
                    {slides.map((slide, i) => (
                        <div
                        key={i}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
                            i === displayText ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                    ))}
                    
                    <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                    
                    <h1 className="relative font-light text-4xl text-white ml-5 mt-80 leading-relaxed">
                       {slides[displayText].text}</h1>
            
            
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-3">
                {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => nextSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                    i === slides.length ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                    }`}
                ></button>
                ))}
            </div>

            </section>
        );
        }