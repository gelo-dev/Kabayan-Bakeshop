import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

export default function GallerySection() {

const navigate = useNavigate()    

    return (
            <section
            id="gallery"
            className="min-h-screen w-full flex justify-center relative pt-10 md:pt-5 pb-10"
            >
                <div className="w-[90%] max-w-7xl mx-auto">

                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

                
                        <div
                            style={{ backgroundImage: `url(./imagesForGallery/breadAndCamLow.jpg)` }}
                            className="h-[260px] sm:h-80 md:h-[380px] bg-cover bg-center rounded-xl 
                                    shadow-md hover:scale-[1.02] transition-transform duration-300 flex items-end p-4"
                        ><span className="text-2xl text-white font-bold">Captured Moments</span></div>

                        
                        <div className="flex flex-col justify-end gap-4">
                            <button
                            onClick={() => navigate("/gallery-section")} 
                            className="flex items-center w-80 gap-2 outline outline-white hover:bg-amber-500 text-white px-4 py-2 rounded-xl">
                                Explore Sweet Moments
                                <ArrowRightIcon className="h-5 w-5" />
                                </button>
                            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            Sweet Moments Captured
                            </h1>

                            <p className="text-white text-sm md:text-lg max-w-md">
                            A curated gallery of our best-selling pastries, cookies, and breads —
                            each one capturing the joyful moments of every event and the warm smiles
                            of the customers who inspire us every day.
                            </p>
                        </div>
                    </div>

                    {/* === BOTTOM ROW === */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                        <div
                            style={{ backgroundImage: `url(./imagesForGallery/interiorStore.jpg)` }}
                            className="h-[220px] sm:h-[260px] md:h-[300px] bg-cover bg-center rounded-xl
                                    shadow-md hover:scale-[1.02] transition-transform duration-300 flex items-end p-4"
                        ><span className="text-2xl text-white font-bold">Store</span>

                        </div>

                        <div
                            style={{ backgroundImage: `url(./imagesForGallery/breadSharing.jpg)` }}
                            className="h-[220px] sm:h-[260px] md:h-[300px] bg-cover bg-center rounded-xl
                                    shadow-md hover:scale-[1.02] transition-transform duration-300 flex items-end p-4"
                        ><span className="text-2xl text-white font-bold">Happy Guests</span>

                        </div>

                        <div
                            style={{ backgroundImage: `url(./imagesForGallery/SandwichAndBucket.jpg)` }}
                            className="h-[220px] sm:h-[260px] md:h-[300px] bg-cover bg-center rounded-xl
                                    shadow-md hover:scale-[1.02] transition-transform duration-300 flex items-end p-4"
                        ><span className="text-2xl text-white font-bold">Events</span>
                            
                        </div>

                    </div>

                </div>
            </section>
    );
}
