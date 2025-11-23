import { motion } from "framer-motion";
import { useState } from "react";

export default function ListOMenuSection({ onClose }) {


    const navItems = [
    { name: "Home", page: "home" },
    { name: "Menu", page: "menu" },
    { name: "About", page: "about" }
  ];

  const [page, setPage] = useState("home");
  return (
    <motion.div
      initial={{ x: "-100%" }}
       animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
      }}
      className="fixed top-0 left-0 w-full h-screen bg-white z-50 shadow-2xl overflow-auto"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-xl z-10"
      >
        Close
      </button>

      <div>
      <nav className="fixed left-0 top-0 h-full w-40 bg-white shadow-lg p-4 flex flex-col space-y-4">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setPage(item.page)}
            className={`text-left p-2 rounded ${
              page === item.page ? "bg-amber-300" : "hover:bg-amber-200"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* <div className="mr-40 p-4">
        {page === "home" && <Home />}
        {page === "menu" && <Menu />}
        {page === "about" && <About />}
      </div> */}
    </div>
      

    </motion.div>
  );
}
// style={{ backgroundImage: `url(./bakery.jpg)`}}