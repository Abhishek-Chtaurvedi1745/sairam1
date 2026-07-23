import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCounselling } from "./CounsellingContext";

function Nav() {
  const [open, setOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mbbsOpen, setMbbsOpen] = useState(false);
  const [btechOpen, setBtechOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: popupOpen, openPopup } = useCounselling();

  useEffect(() => {
    document.body.style.overflow = open || popupOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, popupOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "text-white whitespace-nowrap text-[13px] xl:text-[14px] 2xl:text-[16px] font-medium hover:opacity-90 transition";

  const dropdownItemClass =
    "block px-4 py-2.5 text-[13px] xl:text-[14px] text-gray-700 hover:bg-gray-100 transition";

  const dropdownPanelClass =
    "absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-50 min-w-[220px] max-w-[min(320px,90vw)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300";

  return (
    <>
      <nav
        className={`w-full px-3 sm:px-4 lg:px-5 xl:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 bg-[#49BBBD] sticky top-0 z-[60] transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="flex items-center shrink-0">
          <Link to="/">
            <img
              src="/assets/navlogo.svg"
              alt="Logo"
              className="bg-white h-[56px] w-[96px] sm:h-[64px] sm:w-[110px] xl:h-[72px] xl:w-[130px] 2xl:h-[90px] 2xl:w-[160px] rounded-br-[50%] object-contain"
            />
          </Link>
        </div>

        {/* Desktop / MacBook nav */}
        <div className="hidden xl:flex flex-1 items-center justify-center gap-x-3 xl:gap-x-4 2xl:gap-x-6 min-w-0">
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <Link to="/about" className={linkClass}>
            About us
          </Link>
          <Link to="/service" className={linkClass}>
            Services
          </Link>
          <Link to="/admission" className={linkClass}>
            Admission
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-0.5 cursor-pointer">
              <Link to="/course" className={linkClass}>
                Courses
              </Link>
              <ChevronDown
                size={14}
                className="text-white transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
            <div className={`${dropdownPanelClass} w-48`}>
              <Link to="/engineering" className={dropdownItemClass}>
                Engineering
              </Link>
              <Link to="/medical" className={dropdownItemClass}>
                Medical
              </Link>
              <Link to="/management" className={dropdownItemClass}>
                Management
              </Link>
              <Link to="/Humanities" className={dropdownItemClass}>
                Humanities
              </Link>
              <Link to="/Law" className={dropdownItemClass}>
                Law
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-0.5 cursor-pointer">
              <Link to="/course" className={linkClass}>
                Colleges
              </Link>
              <ChevronDown
                size={14}
                className="text-white transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
            <div className={`${dropdownPanelClass} w-[280px] 2xl:w-[320px]`}>
              <Link to="/bpt-colleges-in-maharashtra" className={dropdownItemClass}>
                BPT Colleges in Maharashtra
              </Link>
              <Link to="/bds-colleges-in-maharashtra" className={dropdownItemClass}>
                BDS Colleges in Maharashtra
              </Link>
              <Link to="/nursing-college-in-maharastra" className={dropdownItemClass}>
                Nursing Colleges in Maharashtra
              </Link>
              <Link
                to="/engineering-colleges-in-maharashtra"
                className={dropdownItemClass}
              >
                Engineering Colleges in Maharashtra
              </Link>
              <Link to="/bams-colleges-in-maharashtra" className={dropdownItemClass}>
                BAMS Colleges in Maharashtra
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-0.5 cursor-pointer select-none">
              <span className={linkClass}>MBBS 2026</span>
              <ChevronDown
                size={14}
                className="text-white transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
            <div className={`${dropdownPanelClass} w-[280px] 2xl:w-[320px]`}>
              <Link to="/mbbs-chhattisgarh" className={dropdownItemClass}>
                MBBS Admission in Chhattisgarh
              </Link>
              <Link to="/mbbs-karnataka" className={dropdownItemClass}>
                MBBS Admission in Karnataka
              </Link>
              <Link to="/mbbs-madhya-pradesh" className={dropdownItemClass}>
                MBBS Admission in Madhya Pradesh
              </Link>
              <Link to="/mbbs-maharashtra" className={dropdownItemClass}>
                MBBS Admission in Maharashtra
              </Link>
              <Link to="/mbbs-rajasthan" className={dropdownItemClass}>
                MBBS Admission in Rajasthan
              </Link>
              <Link to="/mbbs-uttar-pradesh" className={dropdownItemClass}>
                MBBS Admission in Uttar Pradesh
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-0.5 cursor-pointer select-none">
              <span className={linkClass}>B-Tech 2026</span>
              <ChevronDown
                size={14}
                className="text-white transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
            <div className={`${dropdownPanelClass} w-[280px] 2xl:w-[320px] right-0 left-auto`}>
              <Link to="/btech-pune" className={dropdownItemClass}>
                Admission in Engineering, Pune
              </Link>
              <Link to="/btech-bangalore" className={dropdownItemClass}>
                Admission in Engineering, Bangalore
              </Link>
              <Link to="/btech-chennai" className={dropdownItemClass}>
                Admission in Engineering, Chennai
              </Link>
              <Link to="/btech-delhi-noida" className={dropdownItemClass}>
                Admission in Engineering, Delhi & Delhi NCR
              </Link>
              <Link to="/btech-mumbai" className={dropdownItemClass}>
                Admission in Engineering, Mumbai
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex items-center gap-0.5 cursor-pointer select-none">
              <Link to="/contact" className={linkClass}>
                Contact Us
              </Link>
              <ChevronDown
                size={14}
                className="text-white transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
            <div className={`${dropdownPanelClass} w-44 right-0 left-auto`}>
              <Link to="/contact-us" className={dropdownItemClass}>
                Book Your Slots
              </Link>
              <Link to="/career" className={dropdownItemClass}>
                Career
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex items-center shrink-0">
          <a
            href="tel:+919146056767"
            className="phone-wave-btn relative flex items-center justify-center bg-white text-[#49BBBD] font-semibold text-[12px] xl:text-[13px] 2xl:text-[15px] px-4 xl:px-5 py-1.5 xl:py-2 rounded-full hover:bg-gray-100 whitespace-nowrap transition"
            aria-label="Call us"
          >
            <span className="phone-wave phone-wave-1" aria-hidden="true" />
            <span className="phone-wave phone-wave-2" aria-hidden="true" />
            <span className="phone-wave phone-wave-3" aria-hidden="true" />
            <span className="relative z-10">Call us</span>
          </a>
        </div>

        <div className="xl:hidden flex items-center gap-2">
          <a
            href="tel:+919146056767"
            className="phone-wave-btn relative flex items-center justify-center bg-white text-[#49BBBD] text-[11px] font-semibold px-3 py-1.5 rounded-full"
            aria-label="Call us"
          >
            <span className="phone-wave phone-wave-1" aria-hidden="true" />
            <span className="phone-wave phone-wave-2" aria-hidden="true" />
            <span className="relative z-10">Call us</span>
          </a>
          <button
            type="button"
            onClick={openPopup}
            className="bg-white text-[#5B5B5B] text-[11px] font-semibold px-2.5 py-1.5 rounded-full transition hover:bg-gray-100"
          >
            Counselling
          </button>
          <button
            onClick={() => setOpen(true)}
            className="text-white p-1.5 rounded-md hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile / tablet / small laptop menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[min(320px,85%)] bg-[#49BBBD] transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto`}
      >
        <div className="flex justify-between items-center px-5 py-4 sticky top-0 bg-[#49BBBD] z-10">
          <img
            src="/assets/navlogo.svg"
            alt="Logo"
            className="bg-white p-1 h-[48px] w-auto rounded-br-[40%]"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-white p-1 rounded-md hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-5 pb-10 mt-2">
          <Link
            to="/"
            className="text-white text-[16px]"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-[16px]"
            onClick={() => setOpen(false)}
          >
            About us
          </Link>
          <Link
            to="/service"
            className="text-white text-[16px]"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/admission"
            className="text-white text-[16px]"
            onClick={() => setOpen(false)}
          >
            Admission
          </Link>

          <div>
            <div
              onClick={() => setCourseOpen(!courseOpen)}
              className="flex justify-between items-center text-white text-[16px] cursor-pointer"
            >
              Courses
              <ChevronDown
                size={18}
                className={`transition-transform ${courseOpen ? "rotate-180" : ""}`}
              />
            </div>
            {courseOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/engineering"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Engineering
                </Link>
                <Link
                  to="/medical"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Medical
                </Link>
                <Link
                  to="/management"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Management
                </Link>
                <Link
                  to="/Humanities"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Humanities
                </Link>
                <Link
                  to="/Law"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Law
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => setCollegeOpen(!collegeOpen)}
              className="flex justify-between items-center text-white text-[16px] cursor-pointer"
            >
              Colleges
              <ChevronDown
                size={18}
                className={`transition-transform ${collegeOpen ? "rotate-180" : ""}`}
              />
            </div>
            {collegeOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/bpt-colleges-in-maharashtra"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  BPT Colleges
                </Link>
                <Link
                  to="/bds-colleges-in-maharashtra"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  BDS Colleges
                </Link>
                <Link
                  to="/nursing-college-in-maharastra"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Nursing Colleges
                </Link>
                <Link
                  to="/engineering-colleges-in-maharashtra"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Engineering Colleges
                </Link>
                <Link
                  to="/bams-colleges-in-maharashtra"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  BAMS Colleges
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => setMbbsOpen(!mbbsOpen)}
              className="flex justify-between items-center text-white text-[16px] cursor-pointer"
            >
              MBBS 2026
              <ChevronDown
                size={18}
                className={`transition-transform ${mbbsOpen ? "rotate-180" : ""}`}
              />
            </div>
            {mbbsOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/mbbs-chhattisgarh"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  MBBS Admission in Chhattisgarh
                </Link>
                <Link
                  to="/mbbs-karnataka"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  MBBS Admission in Karnataka
                </Link>
                <Link
                  to="/mbbs-madhya-pradesh"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  MBBS Admission in Madhya Pradesh
                </Link>
                <Link
                  to="/mbbs-maharashtra"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  MBBS Admission in Maharashtra
                </Link>
                <Link
                  to="/mbbs-rajasthan"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  MBBS Admission in Rajasthan
                </Link>
                <Link
                  to="/mbbs-uttar-pradesh"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  MBBS Admission in Uttar Pradesh
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => setBtechOpen(!btechOpen)}
              className="flex justify-between items-center text-white text-[16px] cursor-pointer"
            >
              B-Tech 2026
              <ChevronDown
                size={18}
                className={`transition-transform ${btechOpen ? "rotate-180" : ""}`}
              />
            </div>
            {btechOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/btech-pune"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Admission in Engineering, Pune
                </Link>
                <Link
                  to="/btech-bangalore"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Admission in Engineering, Bangalore
                </Link>
                <Link
                  to="/btech-chennai"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Admission in Engineering, Chennai
                </Link>
                <Link
                  to="/btech-delhi-noida"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Admission in Engineering, Delhi & Noida
                </Link>
                <Link
                  to="/btech-mumbai"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Admission in Engineering, Mumbai
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => setContactOpen(!contactOpen)}
              className="flex justify-between items-center text-white text-[16px] cursor-pointer"
            >
              Contact Us
              <ChevronDown
                size={18}
                className={`transition-transform ${contactOpen ? "rotate-180" : ""}`}
              />
            </div>
            {contactOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/contact-us"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Book Your Slots
                </Link>
                <Link
                  to="/career"
                  className="text-white text-[15px]"
                  onClick={() => setOpen(false)}
                >
                  Career
                </Link>
              </div>
            )}
          </div>

          <a
            href="tel:+919146056767"
            onClick={() => setOpen(false)}
            className="mt-4 w-full bg-white text-[#49BBBD] font-semibold px-5 py-3 rounded-full text-center block"
          >
            Call us
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Nav;
