import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import ScrollFadeSection from "../ScrollFadeSection";
import Layout from "../layoutBackground";
import StoreSection from "./storeSection";
import EventSection from "./eventSection";
import CapturedMomentSection from "./capturedMoments";


export default function GalleryShowcaseSection(){
const sectionCategories = [
    {
    id:"event",
    name : "Events",
    imageBg : './imagesForGallery/SandwichAndBucket.jpg'
    },
    {
    id:"store",
    name : "Store",
    imageBg : './imagesForGallery/interiorStore.jpg'
    },
  
    {
    id:"capture",
    name : "Captured Moments",
    imageBg : './imagesForGallery/breadAndCamLow.jpg'
    },
]    

const navigate = useNavigate();

        return(
            <section className="h-screen scroll-smooth " >
                <div className="hidden md:flex flex-col gap-6 items-center justify-center bg-transparent p-4 h-1/2 ">
                    <div className="flex flex-col text-white md:items-center">
                        <span className="text-4xl font-sans" >Kabayan's Bakery</span>
                        <span className=" text-9xl font-serif">GALLERY</span>
                        <span className=" text-3xl font-light">Where every bite meets a smile — events, our store, and your cherished moments.</span>
                    </div>
                    <div className="items-center justify-center">
                        <button
                        onClick={() => navigate("/")} 
                        className="flex items-center w-50 gap-2 outline outline-white hover:bg-amber-500 text-white px-4 py-2 rounded-xl">                            
                            <ArrowLeftIcon className="h-5 w-5" />
                                Home
                        </button>
                    </div>                
                </div>
                <div className=" hidden md:flex md:flex-row  gap-4 p-4 items-center justify-center h-1/2 ">
                    {sectionCategories.map((item, index)=>(
                        <div
                        style={{ backgroundImage: `url(${item.imageBg})` }} 
                        className="relative w-1/4 h-full rounded-4xl overflow-hidden bg-cover bg-center"
                        key={index}><span className="text-white font-bold text-lg flex justify-center mt-10">{item.name}</span>

                        <div className="absolute inset-0 rounded-4xl transition-all duration-300
                                        hover:backdrop-blur-sm">
                            <span className="text-white font-bold text-lg flex justify-center mt-10">{item.name}</span>
                            <a href={`#${item.id}`}>
                                <button className="absolute top-1/2 left-1/2 w-50 transform -translate-x-1/2 -translate-y-1/2
                                                outline-1 text-white px-4 py-2 rounded-full
                                                opacity-0 hover:opacity-100 transition-opacity duration-300 z-10
                                                ">
                                    View
                                </button>
                            </a>
                                
                        </div>

                            

                        </div>
                    ))}
                </div>

         
              {/* ANCHOR TOP BAR FOR SMALL SCREEN */}
                    <div className="md:hidden  fixed top-0 left-0 w-full z-50 bg-white shadow-md flex flex-col gap-2 p-2">
                        <div className="flex overflow-x-auto no-scrollbar px-4 py-3 gap-4">
                            {sectionCategories.map((item, index) => (
                            <a
                                key={index}
                                href={item.id !== "#" ? `#${item.id}` : "#"}
                                className="shrink-0 text-sm font-medium text-gray-700 px-4 py-2 rounded-full bg-gray-100 hover:bg-amber-200 transition"
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                    </div>


                            <Layout>
                                <ScrollFadeSection>                    
                                    <EventSection/>
                                </ScrollFadeSection>

                                <ScrollFadeSection>
                                    <StoreSection/>
                                </ScrollFadeSection>
                                
                                <ScrollFadeSection>
                                    <CapturedMomentSection/>  
                                </ScrollFadeSection>  
                            </Layout>
                
            
        
                
            </section>
        )
}

//Gift Sets
// Events
// 🏪 Store
// 👨‍👩‍👧 Customer Moments
