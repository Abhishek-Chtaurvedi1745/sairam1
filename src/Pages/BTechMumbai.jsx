import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechMumbai() {
  return (
    <BTechAdmissionLayout
      cityName="Mumbai"
      images={[
        "/assets/btech/mumbai/16784558820.webp",
        "/assets/btech/mumbai/16784558821.webp",
        "/assets/btech/mumbai/16784558822.webp",
        "/assets/btech/mumbai/16784558823.webp",
        "/assets/btech/mumbai/16784558824.webp",
        "/assets/btech/mumbai/16784558825.webp",
      ]}
      imageAlt="Admission in Engineering, Mumbai"
      counselingBody="State CET Cell Maharashtra / CAP rounds"
      intro={[
        "We promise students consistent support and guidance to select a college for Engineering. Direct admission in Engineering through management quota is a good option to get into top colleges in Mumbai.",
        "Engineering is a professional degree program that offers exciting career opportunities in various fields. After completion of the four-year program, graduates are awarded either a Bachelor of Engineering or a B.Tech degree.",
        "Mumbai is a top destination for B-Tech admissions, offering prestigious engineering colleges, strong industry connections, and excellent career opportunities.",
      ]}
      stats={[
        "Total Engineering Colleges in Mumbai – 60+ Colleges",
        "Total Government / Autonomous Engineering Colleges in Mumbai – 10+ Colleges",
        "Total Private Engineering Colleges in Mumbai – 50+ Colleges",
      ]}
      fees={[
        "Private engineering college fees in Mumbai generally range from ₹1 lakh to ₹3 lakhs per year depending on the institute and branch.",
        "Government and autonomous colleges remain more affordable but have limited seats and high competition.",
      ]}
      quota={[
        "Students can apply through CAP counselling, institute-level seats, management quota, and NRI quota based on eligibility.",
        "Management quota admissions help students explore private college options with flexible entry pathways.",
      ]}
      process={[]}
      colleges={[
        "Mumbai has several renowned engineering colleges known for academics, placements, and industry collaboration.",
      ]}
    />
  );
}

export default BTechMumbai;
