import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechChennai() {
  return (
    <BTechAdmissionLayout
      cityName="Chennai"
      image="/assets/eb.png"
      imageAlt="Engineering College Campus in Chennai"
      counselingBody="TNEA / Anna University counselling"
      intro={[
        "Chennai is a major hub for engineering education in South India, known for established universities, quality teaching, and strong core engineering programs.",
        "The city offers excellent options in Computer Science, Electronics, Mechanical, Civil, and emerging technology branches.",
      ]}
      fees={[
        "Private engineering college fees in Chennai generally range from ₹70,000 to ₹2.5 lakhs per year.",
        "Government and aided colleges offer lower fee structures with competitive cut-offs.",
      ]}
      quota={[
        "Students can apply under government quota, management quota, and NRI quota as per Tamil Nadu admission guidelines.",
        "Management quota options are available in many private engineering colleges across Chennai.",
      ]}
      process={[]}
      colleges={[
        "Chennai has numerous reputed engineering colleges and universities with strong academic and placement support.",
      ]}
    />
  );
}

export default BTechChennai;
