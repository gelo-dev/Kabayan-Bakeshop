export default function VisionSection(){
    return(
         <section className="h-screen grid grid-cols-2">
            <div className="bg-transparent flex flex-col">
                <div className="h-1/2">1</div>
                <div className=" mt-25 ml-5 flex flex-col">
                    <span className="text-4xl text-white flex ">Our</span>
                    <span className="text-[10rem] text-white font-serif leading-none">Vision</span>
                </div>
            </div>
            <div className="bg-transparent flex gap-5
                            flex-col items-center justify-center pr-10">
                <span className="text-xl text-white">
                  Our vision is to become a trusted and beloved bakeshop across the Philippines,
                   known for preserving tradition, delivering consistent quality,
                    and creating meaningful connections within every community we serve.
                </span>               
                
            </div>

            
        </section>
    )
}