// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-transparent outline-1 outline-white text-gray-800 py-6 mt-1">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="text-xl font-bold">
          Kabayans Bakeshop
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-700">Facebook</a>
          <a href="#" className="hover:text-green-700">Instagram</a>
          <a href="#" className="hover:text-green-700">Tiktok</a>
        </div>
      </div>

      <div className="text-center mt-2 text-sm text-white">
        &copy; {new Date().getFullYear()} Kabayans Bakeshop. All rights reserved. <br />
        Created by Angelo Garcia
      </div>
    </footer>
  );
}
