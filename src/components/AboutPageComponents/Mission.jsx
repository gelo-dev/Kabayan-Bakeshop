export default function MissionSection(){
    return(
         <section className="h-screen grid grid-cols-2">
            <div className="bg-transparent flex flex-col">
                <div className="h-1/2">1</div>
                <div className=" mt-25 ml-5 flex flex-col">
                    <span className="text-4xl text-white flex ">Our</span>
                    <span className="text-[10rem] text-white font-serif leading-none">Mission</span>
                </div>
            </div>
            <div className="bg-transparent flex gap-5
                            flex-col items-center justify-center pr-10">
                <span className="text-2xl text-white">
                    Our mission is to provide freshly baked products made with quality ingredients, inspired by tradition, and prepared with care. 
                    We are committed to serving our community with warmth, consistency, and affordability bringing comfort and joy to every customer, every day.
                </span>
            </div>

            
        </section>
    )
}