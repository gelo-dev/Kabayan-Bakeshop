import { useState } from "react";

export default function LoginSection( {showSignUpForm}) {

    const [isTransitionOn ,setIsTransition]= useState(false)
    
    const toggleTransition=()=>{
            showSignUpForm()
            setIsTransition(!isTransitionOn)
    }

        return (
            <div className={`w-full max-w-md bg-transparent backdrop-blur-xs p-8 rounded-2xl shadow-xl border border-gray-200 transition-opacity duration-500 ${isTransitionOn ? "opacity-0 z-0":"opacity-100 z-10"}`} >
                <h2 className="text-3xl font-semibold text-white  mb-6 text-center">
                    Welcome Back
                </h2>

                <form className="space-y-5">
                    
                    <div>
                        <label className="block text-sm font-medium text-white">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
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
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
                    >
                    Log In
                    </button>

                    
                    <div className="flex justify-between text-sm text-white mt-2">
                    <a href="#" className="hover:underline">Forgot password?</a>
                    <button onClick={toggleTransition} className="text-blue-600 hover:underline font-medium" >Create an Account</button>
                    </div>
                </form>
            </div>
        );
}
