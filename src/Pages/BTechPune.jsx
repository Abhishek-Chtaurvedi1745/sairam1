import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechPune() {
  return (
    <BTechAdmissionLayout
      cityName="Pune"
      image="/assets/ce.png"
      imageAlt="Engineering College Campus in Pune"
      counselingBody="State CET Cell Maharashtra / CAP rounds"
      intro={[
        "Pune is one of India’s leading education hubs for B-Tech aspirants, known for strong engineering colleges, industry exposure, and excellent placement opportunities.",
        "The city offers a wide range of government, autonomous, and private engineering colleges with branches in Computer, IT, Mechanical, Electronics, Civil, and more.",
      ]}
      fees={[
        "Private engineering college fees in Pune generally range from ₹80,000 to ₹2.5 lakhs per year depending on the institute and branch.",
        "Autonomous and premium colleges may have higher fees, while government colleges remain more affordable.",
      ]}
      quota={[
        "Students can apply through CAP rounds, institute-level seats, management quota, and NRI quota based on eligibility.",
        "Management quota admissions provide flexible options for students seeking direct entry into reputed private colleges.",
      ]}
      process={[]}
      colleges={[
        "Pune has many well-known engineering colleges offering quality academics, modern labs, and strong industry connections.",
      ]}
    />
  );
}

export default BTechPune;
