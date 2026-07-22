import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
  <h4 className="text-[25px] text-[#FFFFFF] font-semibold mb-4 pl-[37px]">
    Info
  </h4>

 <ul className="space-y-3">
  {[
    { name: "About Us", link: "/about" },
    { name: "Courses", link: "/course" },
    { name: "Contact Us", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Career", link: "/career" },
  ].map((item, index) => (
    <li key={index}>
      <Link
        to={item.link}
        className="flex items-center text-[15px] text-[#FFFFFF] font-medium hover:text-gray-200 transition"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full mr-3">
          <ArrowRight size={22} className="text-[#FFFFFF]" />
        </span>
        {item.name}
      </Link>
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


          <div className="flex   mb-3 text-[15px] text-[#FFFFFF] font-medium">
            <div>
  <Phone size={18} className="mr-3 mt-2" />
  </div>
  <div className="flex flex-col">
  <a href="tel:+919146056767" className="underline mt-1">
    9146056767 
  </a>
  <a href="tel:+918400092005" className="underline mt-1">
     8400092005
  </a>
  <a href="tel:+917741004777" className="underline mt-1">
     7741004777
  </a>
  
  </div>
  
</div>

<div className="flex items-center text-[15px] text-[#FFFFFF] font-medium">
  <Mail size={18} className="mr-3" />
  <a href="mailto:contact@sairameducation.in" className="hover:underline">
    contact@sairameducation.in
  </a>
</div>
        </div>

      <div>
  <h4 className="text-[25px] text-white font-semibold mb-4">
    Follow Us
  </h4>

  <div className="flex gap-4">
    
    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=100071132186898"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
    >
      <img src="/assets/fas.svg" className="w-10 h-10" alt="facebook" />
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@SairamEducationPune"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full  hover:scale-110 transition"
    >
      <img src="/assets/y.png" className="w-10 h-10" alt="Youtube" />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/sairameducationpune/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full  hover:scale-110 transition"
    >
      <img src="/assets/int.png" className="w-10 h-10" alt="instagram" />
    </a>

  </div>
</div>


      </div>

      {/* Bottom Bar */}
      <div className=" bg-[#FFFFFF] mt-12 p-6 text-center text-[#000000] text-sm w-full">
        © {new Date().getFullYear()} Copyright © 2026 | Sairameducation | Web Services By <a href="https://razobyte.com/">Razobyte</a>
      </div>
    </footer>
  );
}

export default Footer;
