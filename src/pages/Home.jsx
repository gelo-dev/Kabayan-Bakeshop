import { useState,  } from "react";
import SignUpSection from "../components/signUp";
import LoginSection from "../components/loginSection";

export default function HomeSection() {
    const slides = [
        {
        image: "/handMade.jpg",
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
        }
    ];

    const[ displayText , setDisplayText ]= useState(0)
    const[ isUserExisting , setisUserExisting] = useState(true)


    const nextSlide = (i) =>{
        if(i == i){
            setDisplayText(i)
        }else{
            setDisplayText(displayText + 1);  
        }        
    }

    const showSignUpForm =()=>{
        setisUserExisting(!isUserExisting)
    }

          

        return (
            
            <section id="home" className="h-screen relative grid grid-cols-1  md:grid-cols-2 md:flex-col-reverse pl-30 pr-15 justify-center items-center overflow-hidden">
                {isUserExisting ? (
                    <div className={`relative z-10 transition-opacity duration-500 ${isUserExisting ? "opacity-100":"opacity-0" } `}>
                        <LoginSection showSignUpForm={showSignUpForm} />
                        </div>
                    ):(
                       <div className={`relative z-10 transition-opacity duration-500 ${!isUserExisting ? "opacity-100":"opacity-0" } `}>
                        <SignUpSection showSignUpForm={showSignUpForm} />
                        </div>  
                    )

                }
                
                
               
                <div className="grid grid-rows-1 md:grid-rows-2 pr-5">
                    <div className="z-10  text-white ">
                        <span className="font-extralight font-serif text-2xl md:text-4xl italic">Tinapay ni</span>
                        <h1 className=" text-6xl md:text-9xl font-serif animate-">KABAYAN</h1>
                    </div>

                    {slides.map((slide, i) => (
                        <div
                        key={i}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 shadow-2xl shadow-gray-600 z-0 ${
                            i === displayText ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                    ))}
                    
                    <div className="absolute inset-0 bg-black/30 pointer-events-none "></div>
                    
                    <h1 className="relative font-light text-4xl text-white ml-5  leading-tight">
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
                </div>

                    
                 
            </section>
        );
        }