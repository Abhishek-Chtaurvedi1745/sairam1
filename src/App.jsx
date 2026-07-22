import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Course from "./Pages/Course";
import Contactus from "./Pages/Contactus";
import Engineer from "./Pages/Engineer";
import BusinessManagement from "./Pages/BusinessManagement";
import Medical from "./Pages/Medical";
import BAMSCollege from "./Pages/BAMSCollege";
import BPTCollege from "./Pages/BPTCollege";
import BDSCollege from "./Pages/BDSCollege";
import NursingCollege from "./Pages/NursingCollege";
import EngineeringCollege from "./Pages/EngineeringCollege";
import BAMS2College from "./Pages/BAMS2College";
import Contact from "./Pages/Contact";
import GTMTracker from "./Components/GTMTracker";
import Humanity from "./Pages/Humanity";
import Laws from "./Pages/Laws";
import CanonicalTag from "./Components/CanonicalTag";
import NotFound from "./Pages/Notfound";
import Services from "./Pages/Services";
import Admission from "./Pages/Admission";
import Privacypolicy from "./Pages/Privacypolicy";
import Blog from "./Pages/Blog";
import Blogdetails from "./Pages/Blogdetails";
import NewsDetails from "./Pages/Newsdetails";
import Career from "./Pages/Career";
import Marquee from "./Components/Marquee";
import WhatsappButton from "./Components/Whatsappbutton";
import MBBSch from "./Pages/MBBSch";
import MBBSCg from "./Pages/MBBSCg";
import MBBSMp from "./Pages/MBBSMp";
import MBBSMh from "./Pages/MBBSMh";
import MBBSRj from "./Pages/MBBSRj";
import MBBSUp from "./Pages/MBBSUp";
import BTechPune from "./Pages/BTechPune";
import BTechBangalore from "./Pages/BTechBangalore";
import BTechChennai from "./Pages/BTechChennai";
import BTechDelhiNoida from "./Pages/BTechDelhiNoida";
import BTechMumbai from "./Pages/BTechMumbai";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
  <>
    
    <Router>
      <GTMTracker/>
      <CanonicalTag/>
      <ScrollToTop /> 
      <Marquee />
      <WhatsappButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/engineering" element={<Engineer />} />
        <Route path="/management" element={<BusinessManagement />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/BAMS"   element={<BAMSCollege />} />
        <Route path="/bpt-colleges-in-maharashtra" element={<BPTCollege/>} />
        <Route path="/bds-colleges-in-maharashtra" element={<BDSCollege />} />
        <Route path="/nursing-college-in-maharastra" element={<NursingCollege/>} />
        <Route path="/engineering-colleges-in-maharashtra" element={<EngineeringCollege/>} />
        <Route path="bams-colleges-in-maharashtra" element={<BAMS2College />} />
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/Humanities" element={<Humanity/>} />
        <Route path="Law" element={<Laws/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/service" element={< Services/>} />
        <Route path="/admission" element={< Admission/>} />
        <Route path="/privacy-policy" element={< Privacypolicy/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog-details/:slug" element={<Blogdetails />} />   
        <Route path="/news-details/:slug" element={<NewsDetails />} />   
        <Route path="/career"  element={<Career />} />
        <Route path="/mbbs-karnataka"  element={<MBBSch />} />
        <Route path="/mbbs-chhattisgarh" element={<MBBSCg />} />
        <Route path="/mbbs-madhya-pradesh" element={<MBBSMp />} />
        <Route path="/mbbs-maharashtra" element={<MBBSMh />} />
        <Route path="/mbbs-rajasthan" element={<MBBSRj />} />
        <Route path="/mbbs-uttar-pradesh" element={<MBBSUp />} />
        <Route path="/btech-pune" element={<BTechPune />} />
        <Route path="/btech-bangalore" element={<BTechBangalore />} />
        <Route path="/btech-chennai" element={<BTechChennai />} />
        <Route path="/btech-delhi-noida" element={<BTechDelhiNoida />} />
        <Route path="/btech-mumbai" element={<BTechMumbai />} />
       </Routes>
    </Router>
    </>
  );
}

export default App;
