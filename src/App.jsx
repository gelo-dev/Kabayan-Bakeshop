
import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Navitagion from  './components/header';
// import Menu from './pages/Menu';
// import Gallery from './pages/Gallery';
// import About from './pages/About';
// import Contact from './pages/Contact';


function App() {
  
  return (
    <>
      <Navitagion/>  
      
    </>
  )
}

export default App

{/* <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/gallery" element={<Gallery />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
          */}