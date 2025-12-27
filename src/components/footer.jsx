
import { FaFacebook, FaInstagram, FaYoutube , FaTiktok} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transparent outline-1 outline-white text-gray-800 py-6 mt-1">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="text-xl font-bold">
          Kabayans Bakeshop
        </div>
        <div className="flex gap-4">
          <div className="items-center justify-center flex flex-col">
                <FaFacebook/>
              <a href="#" className="hover:text-green-700">Facebook</a>
          </div>
          
          <div className="items-center justify-center flex flex-col">
              <FaInstagram/>
              <a href="#" className="hover:text-green-700">Instagram</a>
          </div>
          <div className="items-center justify-center flex flex-col">
              <FaYoutube/>
              <a href="#" className="hover:text-green-700">Youtube</a>
          </div>
          <div className="items-center justify-center flex flex-col">
              <FaTiktok/>
              <a href="#" className="hover:text-green-700">Tiktok</a>
          </div>
          
          
          
        </div>
      </div>

      <div className="text-center mt-2 text-sm text-white">
        &copy; {new Date().getFullYear()} Kabayans Bakeshop. All rights reserved. <br />
        Created by Angelo Garcia
      </div>
    </footer>
  );
}
