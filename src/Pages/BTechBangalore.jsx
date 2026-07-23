import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechBangalore() {
  return (
    <BTechAdmissionLayout
      cityName="Bangalore"
      images={[
        "/assets/btech/bangalore/16784565800.webp",
        "/assets/btech/bangalore/16784565801-1.webp",
      ]}
      imageAlt="Admission in Engineering, Bangalore"
      counselingBody="KEA / COMEDK / institute counselling"
      intro={[
        "We promise students consistent support and guidance to select a college for Engineering. Direct admission in Engineering through management quota is a good option to get into top colleges in Bangalore.",
        "Bangalore is India’s top tech city and a preferred destination for B-Tech admissions, offering world-class engineering colleges and unmatched industry exposure with IT parks, startups, and global companies.",
        "Students can pursue specializations such as Computer Science, Electronics, Mechanical, Civil, AI & Data Science, and more based on interest and aptitude.",
      ]}
      stats={[
        "Total Engineering Colleges in Bangalore – 150+ Colleges",
        "Total Government / Autonomous Engineering Colleges in Bangalore – 20+ Colleges",
        "Total Private Engineering Colleges in Bangalore – 130+ Colleges",
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
