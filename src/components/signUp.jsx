import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function SignUpSection ( {showSignUpForm} ) {
const navigate = useNavigate()
const [isSignUPShowPassword ,setSignUPShowPassword]= useState(false)

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [fullname ,setFullName ]=useState("");


const handleSubmit = (item) =>{
    item.preventDefault(); // stop page refresh

    const listOfUsers = JSON.parse(localStorage.getItem("sampleUsers")) || []; //getting the list of users from local Storage
    
    //checking of user existence via email
    const userEmailExist = 
        listOfUsers.some((user)=> user.email === email); 
            if (userEmailExist) {
                toast.error("Email already registered");
                return;
            }else{
                navigate('/home')
            }

    //inserting new user in localstorage
    const newUser = {
        id: listOfUsers.length +1,
        email,
        fullname,
        password,
        dateRegistered: new Date().toISOString().split("T")[0],
        role: "user",
    };

    //saving newUser in localStorage together with the others
    localStorage.setItem(
        "sampleUsers",
        JSON.stringify([...listOfUsers, newUser])
    );

    //creating new key in local storage
    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(newUser)
    );

    

} //end of handleSubmit


    return (
         <div className={`w-full max-w-md bg-transparent backdrop-blur-xs p-3 md:p-8   transition-opacity duration-500 ${showSignUpForm ? "opacity-100":"opacity-0"} `}>
            <h2 className="text-xl md:text-3xl font-semibold text-white mb-4 md:mb-6 text-center">
                Create Your Account
            </h2>

                <form onSubmit={handleSubmit} className=" space-y-3 md:space-y-5">
                
                    <div>
                        <label className="block text-sm font-medium text-white">Full Name</label>
                        <input
                            type="text"
                            placeholder="First Name, Last Name"
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-white">Email Address</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            
                        />
                    </div>

                    
                    <div className="relative w-full">
                        <input
                            type={isSignUPShowPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            onChange={(e) => setPassword(e.target.value)}
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