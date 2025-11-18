import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";


export default function LoginSection( {showSignUpForm}) {

    const [isShowPassword ,setIsShowPassword]= useState(false)
    
    
  

        return (
            <div className={`w-full h-80 md:h-100 max-w-md bg-transparent backdrop-blur-xs p-4 md:p-8 rounded-2xl shadow-xl border border-gray-200 transition-opacity duration-500`} >
                <h2 className=" text-lg md:text-3xl font-semibold text-white  mb-2 md:mb-6 text-center">
                    Welcome Back!
                </h2>

                <form className="space-y-4 md:space-y-6">
                    
                    <div>
                        <label className="block text-sm font-medium text-white">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                    </div>

                
                    <div className="relative w-full">
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="text-white w-full px-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />

                    
                        <button
                            type="button"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-700"
                        >
                            {isShowPassword ? (
                                <EyeIcon className="h-5 w-5" />
                                ) : (
                                
                                <EyeSlashIcon className="h-5 w-5" />
                                )}
                        </button>
                    </div>

                    
                    <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
                    >
                    Log In
                    </button>

                    
                    <div className="flex justify-between text-sm text-white mt-0 md:mt-2">
                    <a href="#" className="hover:underline">Forgot password?</a>
                    <button onClick={showSignUpForm} className="text-blue-600 hover:underline font-medium" >Create an Account</button>
                    </div>
                </form>
            </div>
        );
}
