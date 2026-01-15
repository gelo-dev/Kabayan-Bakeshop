import { useNavigate } from "react-router-dom"
import images from "../../JavaScript/imagesForAboutUs"

export default function VisionSection(){
   

const navigate = useNavigate()    
    return(
        <section className="min-h-screen px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="hidden md:block" /> 
                    
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="text-2xl sm:text-3xl text-white block">
                            Our
                            </span>
                            <span className="text-5xl sm:text-7xl md:text-[10rem] 
                                            text-white font-serif leading-none block">
                            Vision
                            </span>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-white max-w-xl">
                            Our vision is to become a trusted and beloved bakeshop across the Philippines,
                            known for preserving tradition, delivering consistent quality,
                            and creating meaningful connections within every community we serve.
                        </p>
                        <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
                            {images.map((item) => (
                            <div
                                key={item.id}
                                style={{ backgroundImage: `url(${item.image})` }}
                                className="min-w-[220px] h-[200px] bg-transparent bg-cover bg-center rounded-lg flex items-center justify-center"
                            >
                                
                            </div>
                            ))}
                        </div>
                    <div>
                        <button
                        onClick={()=>navigate('/our-vision')} 
                        className="
                        outline outline-white
                        w-40 h-10 rounded-lg text-white
                        hover:bg-amber-500 hover:outline-0
                        transition
                        ">
                        Learn More
                        </button>
                    </div>

                    </div>
                </div>
            </section>
    )
}