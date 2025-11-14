import { useState } from "react";

export default function SignUpSection ( {showSignUpForm} ) {

    const testButton= (item)=>{
        alert(item)
        console.log(showSignUpForm);
        
    }

    const [isTransitionOn ,setIsTransition]= useState(false)

     const toggleTransition=()=>{
            showSignUpForm()
            setIsTransition(!isTransitionOn)
    }


    

    return (
         <div className={`w-full max-w-md bg-transparent backdrop-blur-xs p-8 rounded-2xl shadow-xl border border-gray-200  transition-opacity duration-500 ${showSignUpForm ? "opacity-100":"opacity-0"} `}>
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">
                Create Your Account
            </h2>

                <form className="space-y-5">
                
                    <div>
                        <label className="block text-sm font-medium text-white">Full Name</label>
                        <input
                            type="text"
                            placeholder="First Name, Last Name"
                            className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-white">Email Address</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium text-white">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    
                        <button
                        onClick={()=>testButton(showSignUpForm)}
                        type="submit"
                        className="w-full py-3 bg-blue-700 hover:bg-blue-400 text-white font-semibold rounded-lg shadow-md transition-all"
                        >
                        Sign Up
                        </button>

                    
                            <p className="text-center text-sm text-white">
                                Already have an account?{" "}
                                <button onClick={showSignUpForm} className="text-blue-600 hover:underline font-medium" >Log-in</button>
                            </p>
                </form>
        </div>
    )

}