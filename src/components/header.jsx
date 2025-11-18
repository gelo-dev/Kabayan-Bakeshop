import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Menu from '../pages/Menu'
import Layout from './layoutBackground'
import ScrollFadeSection from './ScrollFadeSection'


export default function ScrollPage() {
    return (
        <div className="scroll-smooth">
                <div className="md:flex justify-between  px-2 py-2 md:px-6 md:py-4 text-white bg-transparent md:fixed top-0 left-0 w-full z-50 hidden sm:block">
                    <h1 className='font-serif  md:text-2xl font-dancing' ><i></i>Kabayans Bakery</h1>
                    <nav  className=' flex gap-5  scale-75 md:scale-100' >                        
                            <a href="#home" className=' hover:text-black' >Home</a> 
                            <a href="#menu" className=' hover:text-black' >Menu</a>                        
                            <a href="#gallery" className=' hover:text-black' >Gallery</a>
                            <a href="#about" className=' hover:text-black' >About</a>
                            <a href="#contact" className=' hover:text-black' >Contact</a>
                    
                    </nav>
                </div>
                    
                    <ScrollFadeSection>
                        <Home/>
                    </ScrollFadeSection>
                        
                <Layout>      
                    <ScrollFadeSection>
                        <Menu />
                    </ScrollFadeSection>

                    <ScrollFadeSection>
                        <Gallery />
                    </ScrollFadeSection>        

                    <ScrollFadeSection>
                        <About />
                    </ScrollFadeSection>    

                    <ScrollFadeSection>
                        <Contact />
                    </ScrollFadeSection>      
                </Layout> 
            
            
        </div>
    );
}
