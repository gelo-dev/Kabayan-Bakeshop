
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn ,MdPhone, MdEmail ,MdHelpOutline  } from "react-icons/md";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import ContactFormSection from "../components/ContactPageComponent/contactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="h-screen grid grid-cols-2 p-2">
        <div
        className="bg-transparent flex flex-col p-4 items-center justify-center">
          <div 
          
          className=" flex flex-col text-white 
                            items-center justify-center h-1/2" >
                              
              <span className="text-[5rem] font-serif">CONTACT US</span>
              <span className="text-xl font-light">We'd love to hear from you! </span>
          </div>
          <div className="flex gap-5 h-1/4 w-full p-4">
              <div className=" w-full rounded-2xl flex flex-col items-center justify-center ">
                <MdLocationOn 
                size={30} 
                className="text-white"/>
                <span className="text-white text-lg font-serif"> Our Branches</span>
                <span className="text-white text-center text-sm font-light">Find our bakery locations and visit us near you.</span>
                <button className=" outline outline-white text-white 
                                    text-xs w-35 h-8 rounded-xl mt-5 
                                    flex items-center justify-center
                                    hover:bg-amber-600 hover:text-sm">
                            View locations →
                </button>
                  
              </div>
              <div className=" w-full flex flex-col items-center justify-center">
                  <div className="flex gap-2">
                    <MdPhone size={20}
                    className="text-white"/>
                    <p className="text-white">+63 912-345-6789</p>                        
                  </div>
                  <div className="flex gap-2">
                    <MdEmail size={20}
                    className="text-white"/>
                    <p className="text-white">contact@kabayanbakeshop.com</p>                        
                  </div>
                  <p className="text-white text-center font-light text-sm">Email us or give us a call for inquiries.</p>
              </div>
             
                  
                    <div className=" w-full rounded-2xl flex flex-col items-center justify-center ">
                      <MdHelpOutline 
                       size={30} 
                      className="text-white"/>
                      <span className="text-white text-md font-serif"> FAQ's</span>
                      <span className="text-white text-center text-sm font-light">Questions? </span>
                      <span className="text-white text-center text-sm font-light">Find your answers here. </span>
                      <button className=" outline outline-white text-white 
                                          text-xs w-35 h-8 rounded-xl mt-5 
                                          flex items-center justify-center
                                          hover:bg-amber-600 hover:text-sm">
                                  Get Help →
                      </button>
                      
                  </div>
              
          </div>
        </div>
        <div className="flex  p-4 justify-center items-center" >
          <ContactFormSection/>
          
        </div>
    </section>
  );
}
