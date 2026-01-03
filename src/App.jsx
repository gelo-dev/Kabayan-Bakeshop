
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
import RatingsSections from './components/MenuPageComponents/Ratings';
import StoreSection from './components/GalleryPageComponents/storeSection';
import EventSection from './components/GalleryPageComponents/eventSection';
import CapturedMomentSection from './components/GalleryPageComponents/capturedMoments';
import LogInPageSection from './pages/Log-in';


function App() {
   const location = useLocation(); 
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
      
        <Routes location={location} key={location.pathname}>
               <Route path="/" element={<LogInPageSection />} />
              <Route path="/home" element={<Navitagion/>  } />
              
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

              
              <Route 
                path="/ratings" 
                element={
                  <RatingsSections/>}>
              </Route>

              
               
              <Route 
                path="/store" 
                element={
                  <Layout>
                    <StoreSection/>
                  </Layout>
                  }>
              </Route>

              <Route 
                path="/event" 
                element={
                  <Layout>
                      <EventSection/>
                  </Layout>
                  }>
              </Route>

              <Route 
                path="/moments" 
                element={
                  <Layout>
                      <CapturedMomentSection/>
                  </Layout>
                  }>
              </Route>



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

