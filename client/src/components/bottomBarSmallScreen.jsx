
import { useContext,useState } from "react"
import { useNavigate ,useLocation} from "react-router-dom";
import { CartContext } from "../pages/CartContext";
import { 
        HomeIcon ,
        ShoppingCartIcon , 
        UserIcon, 
        ChevronDoubleUpIcon ,
        ChevronDoubleDownIcon ,
        ChevronLeftIcon,
        HeartIcon 
        } from '@heroicons/react/24/outline'

export default function SmallScreenBottomBarSection(){
const navigate = useNavigate()    
const { setShowOrderSmallScreen } = useContext(CartContext);    

const [showBottomBar, setShowBottomBar] = useState(false);
const [showInRatings , setShowInRatings] = useState(false)

const hideBottomBar= () =>{
    setShowBottomBar(false)
    setShowOrderSmallScreen(true)
}


    
    
    return(
        <section>
             {setShowOrderSmallScreen &&(<div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex flex-col items-center">
                        {/* Chevron handle */}
                        <div className={`${showBottomBar ?  "bg-amber-700": "bg-gray-300"} rounded-t-full  p-2 ${location.pathname !== "/ratings" ? "flex" : "hidden"} justify-center items-center cursor-pointer`}
                            onClick={() => setShowBottomBar(!showBottomBar)}>
                            {showBottomBar ? (
                            <ChevronDoubleDownIcon className="h-6 w-6 text-white" />
                            ) : (
                            <ChevronDoubleUpIcon className="h-6 w-6 text-white " />
                            )}
                        </div>

                        {/* Full bottom bar content */}
                        {showBottomBar && (
                            <div className="bg-amber-700 shadow-inner  w-full flex justify-around items-center p-2 ">
                            <button className="flex flex-col items-center text-white">
                                <HomeIcon onClick={() => navigate("/home")} className="h-6 w-6" />
                                <span className="text-xs">Home</span>
                            </button>

                            <button className="flex flex-col items-center text-white">
                                <ShoppingCartIcon onClick={() => hideBottomBar()} className="h-6 w-6" />
                                <span className="text-xs">Order</span>
                            </button>

                            <button className="flex flex-col items-center text-white">
                                <UserIcon className="h-6 w-6" />
                                <span className="text-xs">Profile</span>
                            </button>
                            <button className="flex flex-col items-center text-white">
                                <HeartIcon
                                onClick={()=> navigate("/ratings")}
                                className="h-6 w-6" />
                                <span className="text-xs">Ratings</span>
                            </button>
                            </div>
                        )}

                </div>)}

        </section>
    )
}