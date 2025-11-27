import { motion } from "framer-motion";
import { useState } from "react";
import BreadMenuSection from "./BreadMenu";
import CookiesMenuSection from "./CookiesMenu";
import CakesMenuSection from "./CakesMenu";
import PastriesMenuSection from "./PastriesMenu";
import SandwichesMenuSection from "./SandwichesMenu";
import BeveragesMenuSection from "./BeveragesMenu";

export default function MenuListCategories({ onClose }) {


 const listOfCategories = [
    { page: "Breads", name: "Breads", content: <BreadMenuSection /> },
    { page: "Cookies", name: "Cookies", content: <CookiesMenuSection /> },
    { page: "Cakes", name: "Cakes", content: <CakesMenuSection /> },
    { page: "Pastries", name: "Pastries", content: <PastriesMenuSection /> },
    { page: "Sandwiches", name: "Sandwiches", content: <SandwichesMenuSection /> },
    { page: "Beverages", name: "Beverages", content: <BeveragesMenuSection /> },
  ];


  const [page, setPage] = useState("Breads");
  const activeMenu = listOfCategories.find((item) => item.page === page);


  return (
    <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ backgroundImage: `url(./bakeryDim.jpg)`}}
        className="fixed top-0 left-0 w-xl md:w-full h-screen bg-cover bg-center  z-50 shadow-2xl overflow-auto"
      >
          <nav className="fixed w-250 left-4 bg-transparent   flex items-center justify-center gap-4 z-40 p-2">
          {listOfCategories.map((item) => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`text-center p-2 rounded-4xl w-50  bg-amber-300 h-12 hover:shadow-lg  ${
                page === item.page ? "bg-amber-700 text-white" : "hover:bg-amber-400 "
              }`}
            >
              {item.name}
            </button>
          ))}
          </nav>
      
          <div className="grid grid-cols-3 h-screen gap-4 p-5">
            <div className=" flex flex-col items-center justify-center bg-transparent  col-span-2 gap-2 ">
              <div className="bg-transparent h-5 w-230 flex items-center justify-center text-6xl font-serif">
                      <h1 className="text-white">{activeMenu ?.name}</h1>
              </div>
               <div className="bg-transparent h-135 w-240 ">
                  {activeMenu?.content}
              </div>
            </div>
            
            
            <div className=" grid grid-rows-4 gap-3 ">
              <div className="bg-amber-600 rounded-2xl shadow-lg"></div>
              <div className="bg-amber-200  rounded-2xl shadow-lg"></div>
              <div className="bg-amber-700 row-span-2 rounded-2xl shadow-lg">
                <button
                  onClick={onClose}
                className="w-30 h-10 text-center roun bg-white rounded-4xl "
                >
                  Close
                </button>      
              </div>
                      
            </div>
          </div>
        
        
</motion.div>
  );
}
// style={{ backgroundImage: `url(./bakery.jpg)`}}