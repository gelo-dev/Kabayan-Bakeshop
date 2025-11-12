
export default function MenuSection (){
    return (
        <section
            id="menu"
            className="h-screen flex flex-col gap-8 items-center justify-center relative bg-amber-600"
            >
                <div
                    className="absolute inset-0 bg-[url('/pizzaDough.jpg')] bg-cover bg-center"
                    style={{ opacity: 0.4 }} // Adjust this value
                ></div>


            <div className="flex gap-8 w-3/4 justify-center relative z-10 " >
{/* Menu for cakes */}
                <div className="flex-1 h-140 border-2 border-white bg-transparent rounded-4xl hover:shadow-2xl">                                        
                        <div className="bg-transparent h-1/2 items-end justify-center ">
                            <img src="/chocolateCake.png"
                                alt="Chocolate Cake"
                                className="w-[65%] object-contain translate-y-8 translate-x-12" />
                        </div>

                        <div className="bg-white h-1/2 rounded-b-4xl items-center justify-center text-center flex flex-col gap-3">
                            <h1 className="font-serif font-extralight text-2xl ">CAKES</h1>
                            <h4 className="p-7 font-sans">"Indulge in our soft, moist cakes baked to perfection and layered with rich frosting. Each slice melts in your mouth — perfect for every celebration or sweet craving"</h4>
                        </div>                                        
                </div>


                <div className="flex-1 h-140 bg-amber-400 rounded-4xl shadow-md"></div>
                <div className="flex-1 h-140 bg-amber-600 rounded-4xl shadow-md"></div>
              
               
            </div>
            <div>
                <button className="h-12 w-64 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out">
                    View Menu
                    </button>

            </div>
             
            </section>

    );
}

