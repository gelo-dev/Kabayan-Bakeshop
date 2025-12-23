export default function OurStorySection(){
    return(
        <section className="h-screen grid grid-cols-2">
            <div className="bg-transparent flex flex-col">
                <div className="h-1/2">1</div>
                <div className=" mt-25 ml-5 flex flex-col">
                    <span className="text-4xl text-white flex ">Our</span>
                    <span className="text-[10rem] text-white font-serif leading-none">Story</span>
                </div>
            </div>
            <div className="bg-transparent flex gap-5
                            flex-col items-center justify-center pr-10">
                <span className="text-xl text-white">
                  Welcome to Kabayans Bakeshop, where freshly baked bread meets the comfort of home. 
                  We are a community-focused bakery dedicated to serving quality, affordable, and freshly made goods every day.  
                </span>               
                <span className=" text-white text-lg font-light">
                    Our bakery began with our early ancestors and carried many different names as it was passed down from generation to generation.
                     
                     Some of them started as simple street vendors, working hard to save enough money to one day build something of their own.
                </span>
                <span className="text-white text-lg font-light">
                    In 2010, the family officially began establishing bakeries in different areas across Luzon and the Visayas. 
                    From that point on, they united under one name 
                     Kabayan’s  a name that continues to represent our heritage, dedication, and passion up to the present day.
                </span>
            </div>

            
        </section>
    )
}