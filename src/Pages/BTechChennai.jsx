import React from "react";
import BTechAdmissionLayout from "../Components/BTechAdmissionLayout";

function BTechChennai() {
  return (
    <BTechAdmissionLayout
      cityName="Chennai"
      images={[
        "/assets/btech/chennai/16785197140.jpg",
        "/assets/btech/chennai/16784562311-1.webp",
        "/assets/btech/chennai/16784562312-1.webp",
        "/assets/btech/chennai/16784562313-1.webp",
      ]}
      imageAlt="Admission in Engineering, Chennai"
      counselingBody="TNEA / Anna University counselling"
      intro={[
        "We promise students consistent support and guidance to select a college for Engineering. Direct admission in Engineering through management quota is a good option to get into top colleges in Chennai.",
        "Engineering is a branch of science and technology that aims to design, build, and use machines and structures to solve complex problems. After completion of the four-year program, graduates are awarded either a Bachelor of Engineering or a B.Tech degree.",
        "Chennai is a major hub for engineering education in South India, known for established universities, quality teaching, and strong core engineering programs.",
      ]}
      stats={[
        "Total Engineering Colleges in Chennai – 100+ Colleges",
        "Total Government / Autonomous Engineering Colleges in Chennai – 15+ Colleges",
        "Total Private Engineering Colleges in Chennai – 85+ Colleges",
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
