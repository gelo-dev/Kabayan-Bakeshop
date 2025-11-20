import "./pagesAnimation/galleryAnimation.css";


export default function GallerySection(){

   


    return(
        <section
            id="gallery"
            className="min-h-screen w-full flex justify-center relative pt-20 pb-10" 
            
            >
            <div className="w-[90%] max-w-9xl">

                {/* Top row: 2 wide boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="h-75 rounded-2xl bg-[url('/interiorStore.jpg')] bg-cover bg-center  drop-shadow-xs drop-shadow-black hover:scale-102 ">

                    </div>

                    <div className="h-75 bg-transparent flex flex-col-reverse gap-4">
                        
                        <p className="text-white text-lg max-w-md">
                            A curated gallery of our best-selling pastries, cookies, and breads — each one capturing the joyful moments of every event and the warm smiles of the customers who inspire us every day.
                        </p>
                        <h1 className="text-4xl font-bold text-white leading-tight">
                            Sweet Moments Captured
                        </h1>

                    </div>
                </div>

                {/* Bottom row: 3 boxes on md+, 2 on sm, 1 on xs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="h-70  rounded-2xl bg-[url('/chocolateSprinkles.jpg')] bg-cover bg-center drop-shadow-xs drop-shadow-black hover:scale-102 ">
                        


                    </div>
                    <div className="h-70  rounded-2xl bg-[url('/breadSharing.jpg')] bg-cover bg-center drop-shadow-xs drop-shadow-black hover:scale-102"></div>
                    <div className="h-70  rounded-2xl bg-[url('/cookies.jpg')] bg-cover bg-center drop-shadow-xs drop-shadow-black hover:scale-102"></div>
                </div>

            </div>
        </section>

    );
}

