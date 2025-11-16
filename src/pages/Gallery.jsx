import "./pagesAnimation/galleryAnimation.css";


export default function GallerySection(){

   


    return(
        <section
            id="gallery"
            className="min-h-screen p-10  relative flex items-center"
            >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 w-full ">
                <div className="justify-center  grid grid-rows-2">
                    <div className="bg-transparent pt-50">
                        <h1 className="text-9xl font-serif text-white leading-tight underline">GALLERY</h1>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h1 className="text-4xl font-bold text-white leading-tight">
                            Discover Our Favorites
                        </h1>
                        <p className="text-white text-lg max-w-md">
                            A curated gallery of our best-selling pastries, cookies, and breads — each treat inspired by the memories we cherish, the places we’ve grown from, and the moments we love sharing with the people who matter.
                        </p>
                        <button className="outline-1 outline-white text-white hover:bg-amber-800 w-60 h-10 rounded-4xl hover:text-black">Open Gallery</button>
                    </div>
                     
                </div>
                
                
                


            
                <div className="grid grid-cols-5 gap-2 p-4">

                
                    <div className="col-span-2 h-50 relative rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-[url('/cookies.jpg')] bg-cover bg-center"></div>
                        
                        <h1 className="absolute bottom-2 left-2 text-white font-semibold drop-shadow">
                        Cookies
                        </h1>
                    </div>

                    <div className="col-span-3 h-50 relative rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-[url('/breadSharing.jpg')] bg-cover bg-center"></div>
                        
                        <h1 className="absolute bottom-2 left-2 text-white font-semibold drop-shadow">
                        Bread
                        </h1>
                    </div>

                    <div className="col-span-3 h-50 relative rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-[url('/enseymada.jpg')] bg-cover bg-center"></div>
                        
                        <h1 className="absolute bottom-2 left-2 text-white font-semibold drop-shadow">
                        Ensaymada
                        </h1>
                    </div>

                    <div className="col-span-2 row-span-2 h-90 relative rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-[url('/sliceOfCake.jpg')] bg-cover bg-center"></div>
                        
                        <h1 className="absolute bottom-2 left-2 text-white font-semibold drop-shadow">
                        Cakes
                        </h1>
                    </div>

                    <div className="col-span-3 h-50 relative rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-[url('/interiorStore.jpg')] bg-cover bg-center"></div>
                        
                        <h1 className="absolute bottom-2 left-2 text-white font-semibold drop-shadow">
                        Our Store
                        </h1>
                    </div>

                </div>
            </div>
        </section>

    );
}

