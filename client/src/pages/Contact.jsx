import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdHelpOutline } from "react-icons/md";
import ContactFormSection from "../components/ContactPageComponent/contactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        p-4
      "
    >
    
        <div className="flex flex-col items-center justify-center gap-6">
          
        
          <div className="text-white text-center">
            <h1 className="text-3xl md:text-5xl font-serif">
              CONTACT US
            </h1>
            <p className="text-base md:text-xl font-light mt-2">
              We'd love to hear from you!
            </p>
          </div>

    
          <div
            className="
              w-full
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
            "
          >
        
            <div className="outline outline-white rounded-xl backdrop-blur-sm p-4 flex flex-col items-center text-center">
                <MdLocationOn size={30} className="text-white mb-2" />
                <span className="text-white text-lg font-serif">
                  Our Branches
                </span>
                <p className="text-white text-sm font-light mt-1">
                  Find our bakery locations and visit us near you.
                </p>
                <button className="text-white text-xs mt-4 hover:text-amber-500 transition">
                  View locations →
                </button>
            </div>

          
            <div className="outline outline-white rounded-xl backdrop-blur-sm p-4 flex flex-col items-center gap-3 text-center">
                <div className="flex items-center gap-2">
                  <MdPhone size={18} className="text-white" />
                  <p className="text-white text-sm">
                    +63 912-345-6789
                  </p>
                </div>
              <div className="flex items-center gap-2">
                  <MdEmail size={18} className="text-white" />
                  <p className="text-white text-sm">
                    contact@kabayanbakeshop.com
                  </p>
              </div>
              <p className="text-white text-sm font-light mt-2">
                Email us or give us a call for inquiries.
              </p>
            </div>

    
            <div className="outline outline-white rounded-xl backdrop-blur-sm p-4 flex flex-col items-center text-center">
              <MdHelpOutline size={30} className="text-white mb-2" />
              <span className="text-white text-lg font-serif">
                FAQ’s
              </span>
              <p className="text-white text-sm font-light">
                Questions?
              </p>
              <p className="text-white text-sm font-light">
                Find your answers here.
              </p>
              <button className="text-white text-xs mt-4 hover:text-amber-600 transition">
                Get Help →
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <ContactFormSection />
        </div>
    </section>
  );
}
