
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import ContactFormSection from "../components/ContactPageComponent/contactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="h-screen grid grid-cols-2 p-2">
        <div
         
        className="bg-transparent flex flex-col p-4 items-center justify-center">
          <div className=" flex flex-col text-white 
                            items-center justify-center h-1/2" >
              <span className="text-[5rem] font-serif">CONTACT US</span>
              <span className="text-xl font-light">We'd love to hear from you! </span>
          </div>
          <div className="flex gap-5 h-1/4 w-full p-4">
              <div className="bg-white w-full">Location Of Branches</div>
              <div className="bg-white w-full">Email and Phone</div>
              <div className="bg-white w-full">FAQ</div>
          </div>
        </div>
        <div className="flex  p-4 justify-center items-center" >
          <ContactFormSection/>
        </div>
    </section>
  );
}
