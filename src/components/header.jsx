import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Menu from '../pages/Menu'
import Layout from './layoutBackground'
import ScrollFadeSection from './ScrollFadeSection'
import Footer from './footer'
import { useState,useRef, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { ArrowRightEndOnRectangleIcon   } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";



export default function ScrollPage() {
    const navigate = useNavigate()
    const getInitials= (name) =>{
        if (!name) return "";
        const words = name.trim().split(" ");
        const initials =
            words.length === 1
            ? words[0][0]
            : words[0][0] + words[words.length - 1][0];
        return initials.toUpperCase();
    }

    const [menuState, setMenuState] = useState("");
    const handleMenuState = (value) => {
            setMenuState(value);
        };

    const [loggedInUser, setLoggedInUser] = useState(null);
    
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setLoggedInUser(JSON.parse(storedUser));
        }
    }, []);

    
    const logOut = () => {
        
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);   // 👈 forces UI update
        toast.success(`Log-out Success!`)
        navigate("/");
    };


    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null); 

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    


    return (
        <div className="scroll-smooth">
                {!menuState &&
                <div className={`md:flex md:flex-row-reverse justify-between  px-2 py-2 
                                    md:px-6 md:py-4 text-white bg-transparent
                                    top-0 left-0 w-full z-50 hidden ${menuState ? 'hidden' : 'md:fixed' }`}>
                    <div
                    ref={dropdownRef} 
                    className='relative flex items-center gap-3'>
                        <h1 className='font-serif  md:text-xl font-dancing' > {loggedInUser ? loggedInUser.fullname : ''}</h1>

                        <ArrowRightEndOnRectangleIcon  className='h-6 w-6'
                        onClick={() => {
                            logOut();
                        }}/>

                    </div>
                    
                    <nav  className=' flex gap-5  scale-75 md:scale-100' >                        
                            <a href="#home" className=' hover:text-amber-300 hover:text-lg' >Home</a> 
                            <a href="#menu" className=' hover:text-amber-300 hover:text-lg' >Menu</a>                        
                            <a href="#gallery" className=' hover:text-amber-300 hover:text-lg' >Gallery</a>
                            <a href="#about" className=' hover:text-amber-300 hover:text-lg' >About</a>
                            <a href="#contact" className=' hover:text-amber-300 hover:text-lg' >Contact</a>
                    
                    </nav>
                </div>}

                {open && (
                    <div className="absolute right-6 mt-15 w-40 bg-white border shadow-lg z-50">
                    <ul className="flex flex-col">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer  hover:outline outline-gray-400 ">
                        Settings
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer  hover:outline outline-gray-400 ">
                        Menu
                        </li>
                        <li
                        className="px-4 py-2 hover:bg-gray-100 hover:outline outline-gray-400 cursor-pointer text-red-600"
                        onClick={() => {
                        logOut();
                        }}

                        >
                        Logout
                        </li>
                    </ul>
                    </div>
                )}
                    
                   
                        
                <Layout>
                    {!menuState &&
                    <ScrollFadeSection>
                        <Home/>
                    </ScrollFadeSection>}

                    <ScrollFadeSection>
                        <Menu sendToHeader={handleMenuState} />
                    </ScrollFadeSection>

                   {!menuState && 
                   <ScrollFadeSection>
                        <Gallery />
                    </ScrollFadeSection> }    

                    {!menuState && 
                    <ScrollFadeSection>
                        <About />
                    </ScrollFadeSection>}    

                    {!menuState && 
                    <ScrollFadeSection>
                        <Contact />
                    </ScrollFadeSection> }  

                    <Footer/>   
                </Layout> 
            
            
        </div>
    );
}
