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
            
            <section id="home" className="h-screen relative grid grid-cols-1  md:grid-cols-2 md:flex-col-reverse p-8 md:pl-30 md:pr-15 justify-center items-center overflow-hidden">
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
                
                
               
                <div className="grid grid-rows-1 md:grid-rows-2 pr-3">
                    <div className="z-10  text-white ">
                        <span className="font-extralight font-serif text-2xl md:text-4xl italic">Tinapay ni</span>
                        <h1 className=" text-5xl md:text-9xl font-serif ">Gelo</h1>
                    </div>

                    {slides.map((slide, i) => (
                        <div
                        key={i}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 shadow-2xl shadow-gray-600 z-0 ${
                            i === displayText ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                    ))}
                    
                    <div className="absolute inset-0 bg-black/30 pointer-events-none "></div>
                    
                    <h1 className="relative font-light text-lg md:text-4xl text-white  md:ml-5  md:leading-tight">
                       {slides[displayText].text}</h1>
            
            
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-5 md:gap-3">
                            {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => nextSlide(i)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                i === slides.length ? "bg-amber-600 w-5 h-5" : "w-3 h-3 bg-white/40 hover:bg-white"
                                }`}

                            ></button>
                            ))}
                        </div>
                </div>

                    
                 
            </section>
        );
        }