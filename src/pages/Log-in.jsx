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
            className="h-screen  bg-amber-900 flex items-center justify-center">
                <div

                className=" bg-amber-700 h-[70%] w-[60%] flex items-center drop-shadow-xl rounded-2xl  ">
                    <div
                    style={{backgroundImage: `url(./LogInPageImages/LogInBG.png)`}}  
                    className="w-1/2 h-full  bg-center bg-cover rounded-l-2xl flex justify-center items-center">
                        <div className="z-10  text-white ">
                            <span className="font-extralight font-serif text-2xl md:text-2xl italic">Tinapay ni</span>
                            <h1 className=" text-5xl md:text-7xl font-serif ">KABAYAN</h1>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div 
                        className="justify-center items-center flex flex-col">
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
               

                 

                    
            
            </section>
        );
        }