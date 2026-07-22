import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechMumbai() {
  return (
    <BTechAdmissionLayout
      cityName="Mumbai"
      image="/assets/gl.png"
      imageAlt="Engineering College Campus in Mumbai"
      counselingBody="State CET Cell Maharashtra / CAP rounds"
      intro={[
        "Mumbai is a top destination for B-Tech admissions, offering prestigious engineering colleges, strong industry connections, and excellent career opportunities.",
        "The city provides a wide choice of branches with high demand for Computer Science, IT, Electronics, and emerging technology programs.",
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
