import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSMh() {
  return (
    <MBBSAdmissionLayout
      stateName="Maharashtra"
      image="/assets/mm.png"
      imageAlt="Medical College Campus in Maharashtra"
      counselingBody="State CET Cell / DMER Maharashtra"
      intro={[
        "Maharashtra is one of India’s top states for MBBS admissions, known for premier medical colleges, strong hospital networks, and excellent clinical training.",
        "Both government and private medical institutions admit students through NEET UG counselling.",
      ]}
      fees={[
        "Private MBBS fees in Maharashtra generally range from ₹7–₹18 lakhs per year depending on the college and quota.",
        "Government medical colleges offer significantly lower fees with intense competition for seats.",
      ]}
      quota={[
        "Students can apply under State quota, Institutional / Management quota, and NRI quota based on NEET score and rules.",
        "Management quota seats in private colleges offer flexible options for eligible candidates.",
      ]}
      process={[]}
      colleges={[
        "Maharashtra has a large network of top medical colleges in Mumbai, Pune, Nagpur, Nashik, and other cities.",
      ]}
    />
  );
}

export default MBBSMh;
