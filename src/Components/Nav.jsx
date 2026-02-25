import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Nav() {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-[#49BBBD] relative z-50">
        
        <div className="flex items-center">
          <img
            src="/assets/navlogo.svg"
            alt="Logo"
            className="bg-white h-[110px] w-[180px] bg-[#FFFFFF] rounded-br-[50%]"
          />
        </div>     
       <div className="hidden md:flex items-center space-x-9">
  <Link to="/" className="text-white text-[18px]">Home</Link>
  <Link to="/about" className="text-white text-[18px]">About us</Link>
   <div className="relative group">
     <div className="flex items-center gap-1 cursor-pointer">
    <Link
      to="/course"
      className="text-white text-[18px]"
    >
      Courses
    </Link>

    {/* Arrow Icon */}
    <ChevronDown 
      size={18} 
      className="text-white transition-transform duration-300 group-hover:rotate-180"
    />
  </div>
      <div className="absolute left-0 mt-0 w-48  bg-white rounded-md shadow-lg hidden group-hover:block">
        <Link
          to="/engineering"
          className="block px-4 py-2 text-black hover:bg-gray-100"
        >
          Engineering
        </Link>

        <Link
          to="/medical"
          className="block px-4 py-2 text-black hover:bg-gray-100"
        >
          Medical
        </Link>

        <Link
          to="/management"
          className="block px-4 py-2 text-black hover:bg-gray-100"
        >
          Management
        </Link>
      </div>
    </div>

<div className="relative group">
    <div className="flex items-center gap-1 cursor-pointer">
    <Link
      to="/course"
      className="text-white text-[18px]"
    >
      Colleges
    </Link>

    <ChevronDown 
      size={18} 
      className="text-white transition-transform duration-300 group-hover:rotate-180"
    />
  </div>

  <div className="absolute left-0 mt-2 w-[300px] bg-white rounded-md shadow-lg 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300">
    
    <Link
      to="/BAMS"
      className="block px-4 py-2 text-black hover:bg-gray-100"
    >
      BAMS BHMS BUMS Colleges of Maharashtrara
    </Link>

    <Link
      to="/mba-colleges-in-maharashtra"
      className="block px-4 py-2 text-black hover:bg-gray-100"
    >
      BPT COLLEGES IN MAHARASHTRA
    </Link>

    <Link
      to="/bds-colleges-in-maharashtra"
      className="block px-4 py-2 text-black hover:bg-gray-100"
    >
      BDS COLLEGES IN MAHARASHTRA
    </Link>
    <Link
      to="/nursing-college-in-maharastra"
      className="block px-4 py-2 text-black hover:bg-gray-100"
    >
      NURSING COLLEGES IN MAHARASHTRA
    </Link>
       <Link
      to="/engineering-colleges-in-maharashtra"
      className="block px-4 py-2 text-black hover:bg-gray-100"
    >
      ENGINEERING COLLEGES IN MAHARASHTRA
    </Link>
    <Link
      to="/bams-colleges-in-maharashtra"
      className="block px-4 py-2 text-black hover:bg-gray-100"
    >
      BAMS COLLEGES IN MAHARASHTRA List of Colleges
    </Link>
  </div>
</div>

  <Link to="/contact" className="text-white text-[18px]">Book Your Slots</Link>
  <Link to="/contact" className="text-white text-[18px]">Services</Link>
  <Link to="/contact" className="text-white text-[18px]">Contact Us</Link>

</div>

        <div className="hidden md:block">
          <button className="bg-white font-semibold text-[#5B5B5B] px-5 py-2 rounded-full hover:bg-gray-100 transition">
            Career Counseling
          </button>
        </div>        
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-[#49BBBD] transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        
        <div className="flex justify-between items-center px-6 py-4">
          <img
            src="/assets/navlogo.svg"
            alt="Logo"
            className="bg-white p-1 h-[55px] w-[75px]"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl"
          >
            ✕
          </button>
        </div>

      
        <div className="flex flex-col space-y-6 px-6 mt-10">
         <Link to="/" className="text-white text-[18px]">Home</Link>
  <Link to="/about" className="text-white text-[18px]">About us</Link>
  <Link to="/course" className="text-white text-[18px]">Course</Link>
  <Link to="/contact" className="text-white text-[18px]">Contact Us</Link>
  <Link to="/engineering" className="text-white text-[18px]">Engineering</Link>
  <Link to="/medical" className="text-white text-[18px]">Medical</Link>

          <button className="mt-6 bg-white text-[#5B5B5B] font-semibold px-5 py-3 rounded-full">
            Career Counseling
          </button>
        </div>
      </div>

    
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Nav;
