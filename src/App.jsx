
import './App.css';

import { Routes, Route } from "react-router-dom";
import Navitagion from  './components/header';
import ListOfMnenuSection from './components/MenuPageComponents/ListOfMenu';



function App() {
  
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<Navitagion/>  } />
        <Route path="/list-of-menu" element={<ListOfMnenuSection />} />
      </Routes>
    </>
  )
}

export default App

