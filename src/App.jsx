
import './App.css';

import { Routes, Route, useLocation  } from "react-router-dom";
import Navitagion from  './components/header';
import MenuPageDisplay from './components/MenuPageComponents/MenuPageDisplay';
import GalleryShowcaseSection from './components/GalleryPageComponents/gallerySection';
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import Layout from './components/layoutBackground';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/scrollToTop';



function App() {
   const location = useLocation(); 
  return (
    <>
      
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<Navitagion/>  } />
          
          <Route path="/menu"
          element={
            <PageWrapper>
              <MenuPageDisplay />
            </PageWrapper>
          } />


          
          <Route path="/gallery-section"
          element={
            <Layout>
                <PageWrapper>
                  <GalleryShowcaseSection />
                </PageWrapper>
            </Layout>
            
          } />
        </Routes>
      </AnimatePresence>
    


      <ToastContainer/>
      
    </>
  )
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}   // start 50px above
    animate={{ opacity: 1, y: 0 }}    // slide into place
    exit={{ opacity: 0, y: 50 }}      // exit by sliding down
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default App

