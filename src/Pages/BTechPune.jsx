import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechPune() {
  return (
    <BTechAdmissionLayout
      cityName="Pune"
      images={[
        "/assets/btech/pune/16784556501-1.webp",
        "/assets/btech/pune/16784556504-1.webp",
        "/assets/btech/pune/16784556505-1.webp",
        "/assets/btech/pune/17085095210.webp",
        "/assets/btech/pune/17085095211.webp",
        "/assets/btech/pune/17085095212.webp",
        "/assets/btech/pune/17085095213.webp",
        "/assets/btech/pune/17085095214.webp",
      ]}
      imageAlt="Admission in Engineering, Pune"
      counselingBody="State CET Cell Maharashtra / CAP rounds"
      intro={[
        "We promise students consistent support and guidance to select a college for Engineering. Direct admission in Engineering through management quota is a good option to get into top colleges in Pune.",
        "Engineering is the application of scientific and mathematical principles to design, build, and improve structures, machines, and systems. Pune is one of India’s strongest education hubs for B-Tech aspirants with excellent industry exposure and placements.",
        "There are various specializations students can pursue, including Civil, Mechanical, Electrical, Chemical, Aerospace, Computer Engineering, and many more.",
      ]}
      stats={[
        "Total Engineering Colleges in Pune – 100+ Colleges",
        "Total Government / Autonomous Engineering Colleges in Pune – 15+ Colleges",
        "Total Private Engineering Colleges in Pune – 85+ Colleges",
      ]}
      fees={[
        "Private engineering college fees in Pune generally range from ₹80,000 to ₹2.5 lakhs per year depending on the institute and branch.",
        "Autonomous and premium colleges may have higher fees, while government colleges remain more affordable.",
      ]}
      quota={[
        "Students can apply through CAP rounds, institute-level seats, management quota, and NRI quota based on eligibility.",
        "Direct admission through management quota is a preferred option for many students seeking top private colleges.",
      ]}
      process={[]}
      colleges={[
        "Pune has many well-known engineering colleges offering quality academics, modern labs, and strong industry connections.",
      ]}
    />
  );
}

export default BTechPune;
