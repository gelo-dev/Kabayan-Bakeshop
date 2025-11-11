import "./pagesAnimation/galleryAnimation.css";


export default function GallerySection(){

   


    return(
        <section id="gallery" className="h-screen flex  bg-linear-to-b from-orange-80 to-orange-200">
                <div className="flex flex-wrap gap-2  w-full h-full mt-2 justify-center  ">
                    <div className=" border-2 border-white shadow-xl  bg-[url('/cookies.jpg')] bg-cover bg-center brightness-90 w-[25%] h-[45%] bg-gray-300 flex items-center justify-center text-gray-700 font-semibold hover:scale-103 hover:brightness-110">
                    The building
                    </div>

                    <div className=" border-2 border-white shadow-xl  bg-[url('/interiorStore.jpg')] bg-cover bg-center hover:scale-101 hover:brightness-110  w-[45%] h-[45%] bg-gray-300 flex items-center justify-center text-gray-700 font-semibold ">
                    Rhythm of House
                    </div>

                    <div className=" border-2 border-white shadow-xl  bg-[url('/enseymada.jpg')] bg-cover bg-center hover:scale-101 hover:brightness-110 w-[25%] h-[45%] bg-gray-300 flex items-center justify-center text-gray-700 font-semibold ">
                    Photovoltaic farm
                    </div>

                    <div className=" border-2 border-white shadow-xl  bg-[url('/sliceOfCake.jpg')] bg-cover bg-center hover:scale-101 hover:brightness-110 w-[35%] h-[45%] bg-gray-300 flex items-center justify-center text-gray-700 font-semibold ">
                    Agricultural workshop
                    </div>

                    <div className=" border-2 border-white shadow-xl  bg-[url('/breadSharing.jpg')] bg-cover bg-center hover:scale-101 hover:brightness-110 w-[25%] h-[45%] bg-gray-300 flex items-center justify-center text-gray-700 font-semibold ">
                    Eco residence
                    </div>

                    <div className=" border-2 border-white shadow-xl  bg-[url('/BreadHome.jpg')] bg-cover bg-center hover:scale-101 hover:brightness-110 w-[35%] h-[45%] bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                    A residence in a village
                    </div>
                </div>
        </section>

    );
}

