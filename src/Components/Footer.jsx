import React from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#002741] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        
        <div className="-mt-4">
          <img
            src="/assets/navlogo.svg"
            alt="Logo"
            className="p-2 bg-[#FFFFFF] mb-4 px-5"
          />
          <p className="text-[15px] font-medium leading-relaxed">
            Sairam Education & Consultancy Services
is a Pune-based education consultancy
with over three decades of experience,
having guided 5,000+ students through
structured admission and career counseling
across 80+ locations in India, supported by
75+ institute tie-ups.
          </p>
        </div>
<div>
    <h4 className="text-[25px] text-[#FFFFFF] font-semibold mb-4 pl-[37px]">Info</h4>
        <ul className="space-y-3">
  {["About Us", "Courses", "Institutions", "Contact Us"].map((item, index) => (
    <li
      key={index}
      className="flex items-center text-[15px] text-[#FFFFFF] font-medium transition"
    >
      <span className="flex items-center justify-center w-6 h-6  rounded-full mr-3">
        <ArrowRight size={22} className="text-[#FFFFFF]" />
      </span>
      {item}
    </li>
  ))}
</ul>
</div>

        <div>
          <h4 className="text-[25px] text-[#FFFFFF] font-semibold mb-4  pl-[37px]">Contact Us</h4>
          <div className="flex items-start mb-3">
  <MapPin
    size={18}
    className="mr-3 mt-1 text-[#FFFFFF] flex-shrink-0"
  />
  <span className="text-[15px] text-[#FFFFFF] font-medium">
    Office number 1013, Nandan Probiz, Sai Chowk Rd, Laxman Nagar,
    Balewadi, Pune 411045, Maharashtra, INDIA
  </span>
</div>


          <div className="flex items-center mb-3  text-[15px] text-[#FFFFFF] font-medium">
            <Phone size={18} className="mr-3 " />
            +91 98765 43210
          </div>

          <div className="flex items-center  text-[15px] text-[#FFFFFF] font-medium">
            <Mail size={18} className="mr-3 text-[15px] text-[#FFFFFF] font-medium" />
            info@example.com
          </div>
        </div>

      <div className=" ">
      <h4 className="text-[25px] text-white font-semibold mb-4">
        Follow Us
      </h4>

      <div className="flex space-x-4">
        <a className="w-15 h-15">
          <img src="/assets/face.svg" className="text-white text-[18px]" />
        </a>

        <a className="w-15 h-15 ">
          <img src="/assets/linkd.svg" className="text-white text-[18px]" />
        </a>

        <a className="w-15 h-15 ">
          <img src="/assets/insta.svg" className="text-white text-[18px]" />
        </a>

        <a className="w-15 h-15 ">
          <img src="/assets/goog.svg" className="text-white text-[16px]" />
        </a>
      </div>
    </div>


      </div>

      {/* Bottom Bar */}
      <div className=" bg-[#FFFFFF] mt-12 p-6 text-center text-[#000000] text-sm w-full">
        © {new Date().getFullYear()} Copyright © 2026 | Sairameducation | Powered by SCS Pvt. Ltd.
      </div>
    </footer>
  );
}

export default Footer;
