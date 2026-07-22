import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechBangalore() {
  return (
    <BTechAdmissionLayout
      cityName="Bangalore"
      image="/assets/en2.jpg"
      imageAlt="Engineering College Campus in Bangalore"
      counselingBody="KEA / COMEDK / institute counselling"
      intro={[
        "Bangalore is India’s top tech city and a preferred destination for B-Tech admissions, offering world-class engineering colleges and unmatched industry exposure.",
        "Students benefit from proximity to IT parks, startups, and global companies while pursuing engineering education.",
      ]}
      fees={[
        "Private B-Tech college fees in Bangalore typically range from ₹1 lakh to ₹3.5 lakhs per year depending on the college and specialisation.",
        "Top private and deemed universities may charge higher fees for high-demand branches like CSE and AI.",
      ]}
      quota={[
        "Admissions are available through CET, COMEDK, management quota, and NRI quota based on eligibility and entrance scores.",
        "Management quota seats help students secure admission in popular private engineering colleges.",
      ]}
      process={[]}
      colleges={[
        "Bangalore has a large network of reputed engineering colleges with strong placement records and modern infrastructure.",
      ]}
    />
  );
}

export default BTechBangalore;
