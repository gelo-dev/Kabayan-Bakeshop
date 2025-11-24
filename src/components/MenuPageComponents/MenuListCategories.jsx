import { motion } from "framer-motion";
import { useState } from "react";

export default function MenuListCategories({ onClose }) {


    const navItems = [
    { name: "Breads", page: "breads" },
    { name: "Pastries", page: "pastries" },
    { name: "Cakes", page: "cakes" },
    { name: "Cookies", page: "cookies" },
    { name: "Sandwiches", page: "Sandwiches" }, 
    { name: "Beverages", page: "Beverages" }
  ];

  const [page, setPage] = useState("home");
  return (
    <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="fixed top-0 left-0 w-xl md:w-full h-screen bg-white z-50 shadow-2xl overflow-auto grid"
      >
        {onClose &&<div className="flex justify-center bg-amber-300  rounded-tl-full md:rounded-none p-4">
            <h1 className="text-4xl">Our Menu</h1>
        </div>}
        <div className="bg-transparent row-span-8">
          <nav className=" w-full bg-transparent shadow-lg flex items-center justify-center gap-15 z-40 p-2 md:p-4">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`text-left p-2 rounded ${
                page === item.page ? "bg-amber-700 text-white" : "hover:bg-amber-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        </div>
        
        <button
          onClick={onClose}
          className="fixed bottom-4 md:bottom-6 right-6 bg-black text-white px-4 py-2 rounded-xl z-50 shadow-lg"
        >
          Close
        </button>
</motion.div>
  );
}
// style={{ backgroundImage: `url(./bakery.jpg)`}}