import { HeartIcon } from "@heroicons/react/24/outline";
import MobileNavBar from "./navigationSmallScreen";


export default function CapturedMomentSection(){
    return(
        <section id="capture" className="h-screen  bg-transparent">
                <div className="bg-transparent h-screen grid grid-cols-1 mt-10 md:mt-0 md:grid-cols-2 gap-1 sm:flex-nowrap overflow-x-auto">
                        <div className="bg-transparent p-3 md:p-4">
                            <div
                            className=" h-110 md:h-full  flex flex-col p-4">
                                <div
                                style={{ backgroundImage: `url(./imagesForGallery/CapturedMoments/CaptureMoments2.jpg)` }}  
                                className="bg-amber-200 h-3/4 bg-center bg-cover rounded-t-4xl">
                                    
                                </div>
                                <div
                                className="bg-white h-1/2 md:h-1/4 rounded-b-4xl p-2 md:p-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold drop-shadow-md">
                                            AG
                                        </div>

                                        <span className="font-bold font-serif text-sm md:text-lg">Angelo Garcia</span>
                                    
                                    </div>
                                    <div className="flex pl-12">
                                        <span className=" font-sans text-sm md:text-lg font-light">
                                        An elegant photo from our loyal customer while waiting for his client meeting inside our store. This one looks really great
                                        </span>
                                    </div>
                                    <div className="flex justify-end pr-5">
                                        <div className="flex items-center gap-2"> 
                                            <HeartIcon className="w-6 h-6 text-gray-600 hover:fill-red-400" />
                                            <span>542</span>       
                                        </div>
                                        
                                    </div>
                                        
                                </div>
                                
                            </div>
                        </div>

                        <div className="bg-transparent flex flex-col gap-4 p-4">
                            <div className="h-1/2 bg-transparent rounded-2xl hidden md:flex flex-col-reverse">
                                <span className="text-white text-2xl font-light">Timeless moments shared by our valued customers</span>
                                <span className="text-9xl text-white">Captured Moments</span>
                            </div>
                            <div
                            className="bg-transparent h-220 md:h-1/2 rounded-2xl 
                                        bg-cover bg-center flex 
                                        flex-col md:flex-row  gap-4 md:gap-2 p-4">
                                <div className="bg-transparent md:w-1/2 md:h-full h-110 w-full"> 
                                        <div
                                        style={{ backgroundImage: `url(./imagesForGallery/CapturedMoments/CaptureMoments1.jpg)` }} 
                                        className="bg-amber-500 h-3/4 rounded-t-xl bg-cover bg-center">
                                            <div   className=" rounded-b-4xl flex justify-between p-4 items-end h-full">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold drop-shadow-md">
                                                            AG
                                                        </div>
                                                        <span className=" text-white font-bold font-serif">Angelo Garcia</span>
                                                    
                                                    </div>
                                                    <div className="flex items-center text-white justify-center mb-2">
                                                        <div className="flex gap-2"> 
                                                            <HeartIcon className="w-6 h-6 text-white hover:fill-red-400" />
                                                            <span>542</span>       
                                                        </div>
                                                    </div>
                                                        
                                            </div>
                                        </div>
                                        <div className="bg-white h-1/4 rounded-b-xl flex justify-center items-center p-5 ">
                                            <span className=" font-light font-sans text-sm text-center">
                                                " Laughter of a family happily enjoying their meal at the table outside our store. "
                                            </span>
                                        </div>
                                </div>
                                <div className="bg-transparent md:w-1/2 md:h-full h-110 w-full"> 
                                        <div
                                        style={{ backgroundImage: `url(./imagesForGallery/CapturedMoments/CaptureMoments1.jpg)` }} 
                                        className="bg-amber-500 h-3/4 rounded-t-xl bg-cover bg-center">
                                            <div   className=" rounded-b-4xl flex justify-between p-4 items-end h-full">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold drop-shadow-md">
                                                            AG
                                                        </div>
                                                        <span className=" text-white font-bold font-serif">Angelo Garcia</span>
                                                    
                                                    </div>
                                                    <div className="flex items-center text-white justify-center mb-2">
                                                        <div className="flex gap-2"> 
                                                            <HeartIcon className="w-6 h-6 text-white hover:fill-red-400" />
                                                            <span>542</span>       
                                                        </div>
                                                    </div>  
                                            </div>
                                        </div>
                                        <div className="bg-white h-1/4 rounded-b-xl flex justify-center items-center p-5 ">
                                            <span className=" font-light font-sans text-sm text-center">
                                                " Laughter of a family happily enjoying their meal at the table outside our store. "
                                            </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            
            <MobileNavBar/>
        </section>
    )
}