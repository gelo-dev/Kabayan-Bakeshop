
import './App.css';
import ProtectedRoute from './components/protectedRoutes';
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
import StoryContentSection from './components/AboutPageComponents/StoryContent';
import OurMssionContentSection from './components/AboutPageComponents/OurMssionContent';
import LogInPageSection from './pages/Log-in';
import sampleUsers from './JavaScript/users';
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast";

function App() {
   const location = useLocation(); 

    //this store users in local storage
    useEffect(() => {
        const storedUsers = localStorage.getItem("sampleUsers");

        if (!storedUsers) {
        localStorage.setItem(
            "sampleUsers",
            JSON.stringify(sampleUsers)
        );
        }
    }, []);


  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
      
        <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LogInPageSection />} />


              <Route path="/home" element={
                  <ProtectedRoute>
                      <Navitagion/>
                  </ProtectedRoute>
                    } />
              
              <Route path="/menu"
              element={
                <ProtectedRoute>
                    <PageWrapper>
                      <MenuPageDisplay />
                  </PageWrapper>
                </ProtectedRoute>
                
              } />


          
              <Route path="/gallery-section"
              element={
                <ProtectedRoute>
                    <Layout>
                      <PageWrapper>
                        <GalleryShowcaseSection />
                      </PageWrapper>
                  </Layout>
                </ProtectedRoute>
                  
                
              } />

              
              <Route 
                path="/ratings" 
                element={
                  <ProtectedRoute>
                    <RatingsSections/>
                  </ProtectedRoute>
                  }>
              </Route>

              
               
              <Route 
                path="/store" 
                element={
                  <ProtectedRoute>
                      <Layout>
                        <StoreSection/>
                      </Layout>
                  </ProtectedRoute>
                  
                  }>
              </Route>

              <Route 
                path="/event" 
                element={
                  <ProtectedRoute>
                      <Layout>
                        <EventSection/>
                      </Layout>
                  </ProtectedRoute>
                  
                  }>
              </Route>

              <Route 
                path="/moments" 
                element={
                  <ProtectedRoute>
                      <Layout>
                        <CapturedMomentSection/>
                      </Layout>
                  </ProtectedRoute>
                   
                  
                  }>
              </Route>

              <Route 
                path="/our-story" 
                element={
                  <ProtectedRoute>
                    <PageWrapper>
                       <StoryContentSection/>
                    </PageWrapper>
                  </ProtectedRoute>
                  }>
              </Route>
              <Route 
                path="/our-mission" 
                element={
                  <ProtectedRoute>
                    <OurMssionContentSection/>
                  </ProtectedRoute>
                  }>
              </Route>
              {/* <Route 
                path="/our-vision" 
                element={
                  <ProtectedRoute>
                    <VisionSection/>
                  </ProtectedRoute>
                  }>
              </Route> */}



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

