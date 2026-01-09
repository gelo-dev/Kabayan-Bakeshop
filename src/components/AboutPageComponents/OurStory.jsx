import { useNavigate } from "react-router-dom";
import images from "../../JavaScript/imagesForAboutUs"
export default function OurStorySection() {

const navigate = useNavigate();

        return (
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
                            Story
                            </span>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-white max-w-xl">
                            Welcome to Kabayans Bakeshop, where freshly baked bread meets the comfort of home.
                            We are a community-focused bakery dedicated to serving quality, affordable,
                            and freshly made goods every day.
                        </p>
                        <div className="flex  gap-4 overflow-x-auto pb-2 scroll-smooth">
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
                        onClick={()=>(navigate('/our-story'))}
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

        );
        }
