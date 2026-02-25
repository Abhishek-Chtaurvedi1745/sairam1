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


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/engineering" element={<Engineer />} />
        <Route path="/management" element={<BusinessManagement />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/BAMS"   element={<BAMSCollege />} />
        <Route path="/mba-colleges-in-maharashtra" element={<BPTCollege/>} />
        <Route path="/bds-colleges-in-maharashtra" element={<BDSCollege />} />
        <Route path="/nursing-college-in-maharastra" element={<NursingCollege/>} />
        <Route path="/engineering-colleges-in-maharashtra" element={<EngineeringCollege/>} />
        <Route path="bams-colleges-in-maharashtra" element={<BAMS2College />} />
      </Routes>
    </Router>
  );
}

export default App;
