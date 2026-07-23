import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechDelhiNoida() {
  return (
    <BTechAdmissionLayout
      cityName="Delhi & Noida"
      images={[
        "/assets/btech/delhi-noida/16784564520.webp",
        "/assets/btech/delhi-noida/16784564522-2.webp",
        "/assets/btech/delhi-noida/16799128194.jpg",
      ]}
      imageAlt="Admission in Engineering, Delhi & Noida"
      counselingBody="JAC Delhi / UP counselling / institute counselling"
      intro={[
        "We promise students consistent support and guidance to select a college for Engineering. Direct admission in Engineering through management quota is a good option to get into top colleges in Delhi & Noida.",
        "Delhi and Noida form one of North India’s strongest education corridors for B-Tech aspirants, with premier institutes and growing private engineering colleges.",
        "Students get access to top-tier academics, research opportunities, and excellent exposure to IT, consulting, and core industries.",
      ]}
      stats={[
        "Total Engineering Colleges in Delhi & Noida – 80+ Colleges",
        "Total Government / Autonomous Engineering Colleges in Delhi & Noida – 15+ Colleges",
        "Total Private Engineering Colleges in Delhi & Noida – 65+ Colleges",
      ]}
      fees={[
        "Private B-Tech fees in Delhi-NCR and Noida typically range from ₹1 lakh to ₹3.5 lakhs per year.",
        "Government and central institutes offer lower fees but have highly competitive entrance cut-offs.",
      ]}
      quota={[
        "Admissions are offered through national/state entrance exams, management quota, and NRI quota depending on the college.",
        "Management quota seats in private colleges provide additional pathways for eligible students.",
      ]}
      process={[]}
      colleges={[
        "Delhi and Noida host a mix of prestigious government institutes and well-known private engineering colleges.",
      ]}
    />
  );
}

export default BTechDelhiNoida;
