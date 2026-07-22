import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSUp() {
  return (
    <MBBSAdmissionLayout
      stateName="Uttar Pradesh"
      image="/assets/um.png"
      imageAlt="Medical College Campus in Uttar Pradesh"
      counselingBody="DGME / UPDGME Uttar Pradesh counselling"
      intro={[
        "Uttar Pradesh has one of the largest networks of medical colleges in India, making it a major hub for MBBS admissions.",
        "Students can choose from numerous government and private medical institutions through NEET-based counselling.",
      ]}
      fees={[
        "Private MBBS college fees in Uttar Pradesh typically range from ₹7–₹16 lakhs per year.",
        "Government medical colleges offer lower fee structures with very competitive cut-offs.",
      ]}
      quota={[
        "Students may apply under State quota, Management quota, and NRI quota depending on NEET score and college rules.",
        "Management quota seats give additional options in private medical colleges across the state.",
      ]}
      process={[]}
      colleges={[
        "Uttar Pradesh offers a wide range of government and private medical colleges with strong clinical exposure.",
      ]}
    />
  );
}

export default MBBSUp;
