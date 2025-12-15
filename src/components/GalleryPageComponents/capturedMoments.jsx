export default function CapturedMomentSection(){
    return(
        <section id="capture" className="h-screen  bg-transparent">
                <div className="bg-transparent h-screen grid grid-cols-2 gap-2">
                        <div className="bg-transparent p-4">
                            <div
                            style={{ backgroundImage: `url(./imagesForGallery/CapturedMoments/CaptureMoments2.jpg)` }} 
                            className="bg-amber-400 h-full rounded-2xl bg-center bg-cover flex items-end p-4 ">
                                <span className="text-white font-sans text-lg">
                                    An elegant photo from our loyal customer while waiting for his client meeting inside our store. This one looks really great
                                </span>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col gap-4 p-4">
                            <div className="h-1/2 bg-transparent rounded-2xl flex flex-col-reverse">
                                <span className="text-white text-2xl font-light">Timeless moments shared by our valued customers</span>
                                <span className="text-9xl text-white">Captured Moments</span>
                            </div>
                            <div
                            style={{ backgroundImage: `url(./imagesForGallery/CapturedMoments/CaptureMoments1.jpg)` }} 
                            className="bg-amber-700 h-1/2 rounded-2xl bg-cover bg-center flex items-end p-4">
                                <span className="text-white font-sans text-lg">
                                    Laughter of a family happily enjoying their meal at the table outside our store.
                                </span>
                            </div>
                            
                        </div>
                    
                </div>
        </section>
    )
}