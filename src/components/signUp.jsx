import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import sampleUsers from "../JavaScript/users";

export default function SignUpSection ( {showSignUpForm} ) {

    const testButton= (item)=>{
        alert(item)
        console.log(showSignUpForm);
        
    }

    const [isTransitionOn ,setIsTransition]= useState(false)
    const [isSignUPShowPassword ,setSignUPShowPassword]= useState(false)

     const toggleTransition=()=>{
            showSignUpForm()
            setIsTransition(!isTransitionOn)
    }

    const [users, setUsers] = useState(sampleUsers);

    const insertUser = (newUser) => {
    
            const exists = users.some(
                (user) => user.email === newUser.email
            );

            if (exists) {
                alert("Email already registered!");
                return;
            }

            setUsers((prevUsers) => [
                ...prevUsers,
                {
                ...newUser,
                role: "user",
                dateRegistered: new Date().toISOString().split("T")[0],
                },
            ]);

            alert("Signup successful!");
    };



    

    return (
         <div className={`w-full max-w-md bg-transparent backdrop-blur-xs p-3 md:p-8   transition-opacity duration-500 ${showSignUpForm ? "opacity-100":"opacity-0"} `}>
            <h2 className="text-xl md:text-3xl font-semibold text-white mb-4 md:mb-6 text-center">
                Create Your Account
            </h2>

                <form className=" space-y-3 md:space-y-5">
                
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

                    
                    <div className="relative w-full">
                        <input
                            type={isSignUPShowPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="text-white w-full px-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setSignUPShowPassword(!isSignUPShowPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                        >
                            {isSignUPShowPassword ? (
                            <EyeIcon className="h-5 w-5" />
                            ) : (
                            <EyeSlashIcon className="h-5 w-5" />
                            )}
                        </button>
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