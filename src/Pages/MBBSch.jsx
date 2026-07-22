import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSch() {
  return (
    <MBBSAdmissionLayout
      stateName="Karnataka"
      image="/assets/mn.jpeg"
      imageAlt="Medical College Campus in Karnataka"
      counselingBody="KEA (Karnataka Examinations Authority)"
      intro={[
        "Karnataka is one of the most preferred destinations for MBBS aspirants in India, offering high-quality education, top-ranked medical colleges, and excellent clinical exposure.",
        "The state has both government and private medical institutions with NEET-based admissions.",
      ]}
      fees={[
        "The average MBBS fees in Karnataka vary from ₹6–₹15 lakhs per year in private colleges.",
        "Government colleges offer much lower fees but have high competition due to limited seats.",
      ]}
      quota={[
        "Students can apply under Government quota, Private quota, NRI quota, and Management quota depending on NEET score and eligibility.",
        "Management quota admissions provide flexibility for students with lower NEET ranks.",
      ]}
      process={[]}
      colleges={[
        "Karnataka has some of the top medical colleges including both government and private institutions.",
      ]}
    />
  );
}

export default MBBSch;
