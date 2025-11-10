import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Menu from '../pages/Menu'


export default function ScrollPage() {
    return (
        <div className="scroll-smooth">
                <div className="flex justify-between px-6 py-4 text-white bg-transparent fixed top-0 left-0 w-full z-50">
                    <h1 className='font-serif text-2xl font-dancing' ><i></i>Kabayans Bakery</h1>
                    <nav  className=' flex gap-5' >                        
                            <a href="#home" className=' hover:text-black' >Home</a> 
                            <a href="#menu" className=' hover:text-black' >Menu</a>                        
                            <a href="#gallery" className=' hover:text-black' >Gallery</a>
                            <a href="#about" className=' hover:text-black' >About</a>
                            <a href="#contact" className=' hover:text-black' >Contact</a>
                    
                    </nav>
                </div>
                    
                
            

            <Home/>     
            <Menu/>
            <Gallery/>  
            <About/>
            <Contact/>
            
            
        </div>
    );
}
