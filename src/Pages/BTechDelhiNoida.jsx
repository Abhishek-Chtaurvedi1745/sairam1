import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechDelhiNoida() {
  return (
    <BTechAdmissionLayout
      cityName="Delhi & Noida"
      image="/assets/em.png"
      imageAlt="Engineering College Campus in Delhi and Noida"
      counselingBody="JAC Delhi / UPSEE or CUET-based counselling / institute counselling"
      intro={[
        "Delhi and Noida form one of North India’s strongest education corridors for B-Tech aspirants, with premier institutes and growing private engineering colleges.",
        "Students get access to top-tier academics, research opportunities, and excellent exposure to IT, consulting, and core industries.",
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
