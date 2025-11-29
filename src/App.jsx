
import './App.css';

import { Routes, Route, useLocation  } from "react-router-dom";
import Navitagion from  './components/header';
import ListOfMnenuSection from './components/MenuPageComponents/ListOfMenu';
import { AnimatePresence, motion } from "framer-motion";



function App() {
   const location = useLocation(); 
  return (
    <>
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navitagion/>  } />
          <Route path="/list-of-menu"
          element={
          <PageWrapper>
            <ListOfMnenuSection />
          </PageWrapper>
          } />
        </Routes>
      </AnimatePresence>
      
    </>
  )
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}   // start 50px above
    animate={{ opacity: 1, y: 0 }}    // slide into place
    exit={{ opacity: 0, y: 50 }}      // exit by sliding down
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default App

