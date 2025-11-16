

export default function MenuSection (){

    const testButton = ()=>{
        alert('this is test')
    }

    return (
        <section
            id="menu"
            className="h-screen flex flex-col gap-8 items-center justify-center relative "
            
            >
                
            <div className="flex gap-8 w-3/4 justify-center relative z-10 overflow-x-auto scroll-smooth p-4" >
{/* Menu for cakes */}
                <div className="flex-1 h-140 border-2 border-white bg-transparent rounded-4xl hover:shadow-lg shrink-0">                                        
                        <div className="bg-transparent h-1/2 items-end justify-center ">
                            <img src="/chocolateCake.png"
                                alt="Chocolate Cake"
                                className="w-[60%] object-contain translate-y-10 translate-x-15" />
                        </div>

                        <div className="bg-white h-1/2 rounded-b-4xl items-center justify-center text-center flex flex-col gap-3">
                            <h1 className="font-serif font-extralight text-2xl ">CAKES</h1>
                            <h4 className="p-7  text-amber-900 leading-tight">"Indulge in our soft, moist cakes baked to perfection and layered with rich frosting. Each slice melts in your mouth — perfect for every celebration or sweet craving"</h4>
                        </div>                                        
                </div>

 {/* Menu for Cookies */}       
                <div className="flex-1 h-140 border-2 border-white bg-transparent rounded-4xl hover:shadow-lg shrink-0">                                        
                        <div className="bg-transparent h-1/2 items-end justify-center ">
                            <img src="/CookiesForMenu.png"
                                alt="Stack of Cookies"
                                className="w-[70%] object-contain translate-y-25 translate-x-15" />
                        </div>

                        <div className="bg-white h-1/2 rounded-b-4xl items-center justify-center text-center flex flex-col gap-3">
                            <h1 className="font-serif font-extralight text-2xl ">COOKIES</h1>
                            <h4 className="p-7 text-amber-900 leading-tight">"Savor our freshly baked cookies — crisp on the edges, soft and chewy inside, and bursting with flavor in every bite. Perfect for snacking, sharing, or satisfying your sweet tooth anytime"</h4>
                        </div>                                        
                </div>


 {/* Menu for Pastries */}       
                <div className="flex-1 h-140 border-2 border-white bg-transparent rounded-4xl hover:shadow-lg shrink-0">                                        
                        <div className="bg-transparent h-1/2 items-end justify-center ">
                            <img src="/pastryMenu.png"
                                alt="Pastry in Plate"
                                className="w-[85%] object-contain translate-y-10 translate-x-10" />
                        </div>

                        <div className="bg-white h-1/2 rounded-b-4xl items-center justify-center text-center flex flex-col gap-3">
                            <h1 className="font-serif font-extralight text-2xl ">PASTRIES</h1>
                            <h4 className="p-7 text-amber-900 leading-tight">"Delight in our golden, flaky pastries — buttery layers baked to perfection and filled with sweet or savory goodness. Each bite is a delicate treat, perfect for breakfast, dessert, or any indulgent moment."</h4>
                        </div>                                        
                </div> 
            </div>
            <div>
                <button
                onClick={() => testButton()}
                className="relative z-10 h-12 w-64  font-semibold rounded-full shadow-md outline-1 outline-white text-white hover:bg-amber-500 hover:shadow-lg hover:text-black">
                    View Menu
                    </button>

            </div>
             
            </section>

    );
}

