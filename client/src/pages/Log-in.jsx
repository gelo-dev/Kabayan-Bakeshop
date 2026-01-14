import { useState,  } from "react";
import SignUpSection from "../components/signUp";
import LoginSection from "../components/loginSection";

export default function LogInPageSection() {
    const[ isUserExisting , setisUserExisting] = useState(true)

    const showSignUpForm =()=>{
        setisUserExisting(!isUserExisting)
    }

  


        return (
            
            <section 
            id="log-in"
            className="h-screen  bg-amber-900 flex-row items-center justify-center">
                
            <div
            style={{backgroundImage: `url(./LogInPageImages/LoginBackDrop.png)`}}
            className="h-screen w-full flex items-center justify-center bg-contain md:bg-cover bg-center">
                <div
                className="  md:bg-amber-700 w-[90%] h-[70%] md:h-[70%] md:w-[60%] flex items-center md:shadow-xl md:shadow-black/90 rounded-4xl  ">
                    <div
                    style={{backgroundImage: `url(./LogInPageImages/LogInBG.png)`}}  
                    className="w-1/2 h-full  bg-center bg-cover rounded-l-4xl hidden md:flex justify-center items-center">
                        <div className="z-10  text-white ">
                            <span className="font-extralight font-serif text-2xl md:text-2xl italic">Tinapay ni</span>
                            <h1 className=" text-5xl md:text-7xl font-serif ">KABAYAN</h1>
                        </div>
                    </div>
                    
                    <div className="w-full flex flex-col gap-5 md:w-1/2">
                        <div className=" text-white md:hidden flex flex-col items-center justify-center ">
                            <span className="font-extralight font-serif text-2xl italic">Tinapay ni</span>
                            <h1 className=" text-5xl font-serif ">KABAYAN</h1>
                        </div>
                        <div 
                        className="justify-center items-center 
                                    flex ">
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
                        </div>
                    </div>
                </div>
            </div>   
                
               

                 

                    
            
            </section>
        );
        }