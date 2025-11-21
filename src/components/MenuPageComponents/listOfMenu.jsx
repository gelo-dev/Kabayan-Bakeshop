import { motion } from "framer-motion";

export default function ListOMenuSection({ onClose }) {
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
        className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-xl"
      >
        Close
      </button>

      {/* Content */}
      <div className="p-6 text-black">
        <h1 className="text-3xl font-bold mb-4">All Bakes</h1>
        <p>This is your fullscreen child component.</p>
      </div>
    </motion.div>
  );
}
