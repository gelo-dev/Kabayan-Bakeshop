import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Menu from '../pages/Menu'


export default function ScrollPage() {
    return (
        <div className="scroll-smooth">

                    <nav className="fixed top-0 left-0 w-full bg-transparent  p-4 flex justify-end items-center gap-6 text-white font-light z-30">                        
                        
                            <a href="#home" className=' hover:text-black' >Home</a>                         
                            <a href="#gallery" className=' hover:text-black' >Gallery</a>
                            <a href="#menu" className=' hover:text-black' >Menu</a>
                            <a href="#about" className=' hover:text-black' >About</a>
                            <a href="#contact" className=' hover:text-black' >Contact</a>
                    
                    </nav>
                
            

            <Home/>     
            <Gallery/>       
            <Menu/>
            <About/>
            <Contact/>
            
            
        </div>
    );
}
