import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Menu from '../pages/Menu'
import Layout from './layoutBackground'
import LogInSection from '../pages/Log-in'
import ScrollFadeSection from './ScrollFadeSection'
import Footer from './footer'
import { useState } from 'react'


export default function ScrollPage() {

    const [menuState, setMenuState] = useState("");

      const handleMenuState = (value) => {
        console.log(value,'value from menu');
        
            setMenuState(value);
        };


    return (
        <div className="scroll-smooth">
                {!menuState &&
                <div className={`md:flex justify-between  px-2 py-2 
                                    md:px-6 md:py-4 text-white bg-transparent
                                    top-0 left-0 w-full z-50 hidden ${menuState ? 'hidden' : 'md:fixed' }`}>
                    <h1 className='font-serif  md:text-2xl font-dancing' ><i></i>Kabayans Bakery</h1>
                    <nav  className=' flex gap-5  scale-75 md:scale-100' >                        
                            <a href="#home" className=' hover:text-amber-300 hover:text-lg' >Home</a> 
                            <a href="#menu" className=' hover:text-amber-300 hover:text-lg' >Menu</a>                        
                            <a href="#gallery" className=' hover:text-amber-300 hover:text-lg' >Gallery</a>
                            <a href="#about" className=' hover:text-amber-300 hover:text-lg' >About</a>
                            <a href="#contact" className=' hover:text-amber-300 hover:text-lg' >Contact</a>
                    
                    </nav>
                </div>}
                    
                   
                        
                <Layout>
                    {!menuState &&
                    <ScrollFadeSection>
                        <Home/>
                    </ScrollFadeSection>}

                    <ScrollFadeSection>
                        <Menu sendToHeader={handleMenuState} />
                    </ScrollFadeSection>

                   {!menuState && 
                   <ScrollFadeSection>
                        <Gallery />
                    </ScrollFadeSection> }    

                    {!menuState && 
                    <ScrollFadeSection>
                        <About />
                    </ScrollFadeSection>}    

                    {!menuState && 
                    <ScrollFadeSection>
                        <Contact />
                    </ScrollFadeSection> }  

                    <Footer/>   
                </Layout> 
            
            
        </div>
    );
}
