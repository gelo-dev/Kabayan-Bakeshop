import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Menu from '../pages/Menu'


export default function ScrollPage() {
    return (
        <div className="scroll-smooth">

                    <nav className="fixed top-0 left-0 w-full bg-transparent shadow p-4 flex justify-end items-center flex gap-6">                        
                        
                            <a href="#home" className="text-blue-500 hover:text-blue-700">Home</a>
                            <a href="#menu" className="text-blue-500 hover:text-blue-700">Menu</a>
                            <a href="#gallery" className="text-blue-500 hover:text-blue-700">Gallery</a>
                            <a href="#about" className="text-blue-500 hover:text-blue-700">About</a>
                            <a href="#contact" className="text-blue-500 hover:text-blue-700">Contact</a>
                       
                    </nav>
                
            

            <Home/>
            <Gallery/>
            <Menu/>
            <About/>
            <Contact/>
            
            
        </div>
    );
}
