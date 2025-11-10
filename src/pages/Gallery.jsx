import "./pagesAnimation/galleryAnimation.css";


export default function GallerySection(){

   


    return(
        <section id="gallery" className="h-screen ">

            <div class="flex flex-row flex-wrap justify-evenly content-start items-start h-screen mt-0.5 ">
                <div className=" brightness-90 h-2/4 w-[40%] animate-moveRight bg-[url('/sliceOfCake.jpg')] bg-cover bg-center hover:scale-103 hover:brightness-110">
                </div>
                <div className="brightness-90 h-2/4 w-[60%]  animate-moveRight bg-[url('/interiorStore.jpg')] bg-cover bg-center hover:scale-103 hover:brightness-110"></div>
                <div className="brightness-90 h-2/4 grow w-[20%]  animate-moveLeft bg-[url('/enseymada.jpg')] bg-cover bg-center hover:scale-103 hover:brightness-110"></div>
                <div className="brightness-90 h-2/4 w-[40%]  animate-moveLeft bg-[url('/cookies.jpg')] bg-cover bg-center hover:scale-103 hover:brightness-110"></div>
                <div className="brightness-90 h-2/4 w-[40%]  animate-moveLeft bg-[url('/breadSharing.jpg')] bg-cover bg-center hover:scale-103 hover:brightness-110"></div>
            </div>
        </section>
    );
}

