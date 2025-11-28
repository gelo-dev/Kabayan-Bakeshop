
import './App.css';

import { Routes, Route } from "react-router-dom";
import Navitagion from  './components/header';
import SmallScreenMenu from './pages/SmallScreenMenu';


function App() {
  
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<Navitagion/>  } />
        <Route path="/full-menu" element={<SmallScreenMenu />} />
      </Routes>
    </>
  )
}

export default App

