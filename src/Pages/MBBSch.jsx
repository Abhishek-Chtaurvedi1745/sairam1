import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSch() {
  return (
    <MBBSAdmissionLayout
      stateName="Karnataka"
      images={[
        "/assets/mbbs/karnataka/16678143430.webp",
        "/assets/mbbs/karnataka/16678143431.webp",
        "/assets/mbbs/karnataka/16678143432.webp",
        "/assets/mbbs/karnataka/16678143433.webp",
        "/assets/mbbs/karnataka/16678143434.webp",
      ]}
      imageAlt="MBBS Admission in Karnataka"
      counselingBody="KEA (Karnataka Examinations Authority)"
      intro={[
        "It is one of the best states for MBBS admission in India. Karnataka has one of the best medical colleges in the country. Many students have their first preference as Karnataka for their MBBS admission.",
        "Karnataka has a total of 19 government medical colleges and 29 private medical colleges. We help students in MBBS admission in Karnataka with complete counselling support.",
      ]}
      stats={[
        "Total Medical colleges in Karnataka – 48 (6884 seats)",
        "Total Government medical colleges in Karnataka – 19 (2375 seats)",
        "Total Private medical colleges in Karnataka – 29 (4509 seats)",
      ]}
      fees={[
        "The average MBBS fees in Karnataka vary from ₹6–₹15 lakhs per year in private colleges.",
        "Government colleges offer much lower fees but have high competition due to limited seats.",
      ]}
      quota={[
        "Students can apply under Government quota, Private quota, NRI quota, and Management quota depending on NEET score and eligibility.",
        "Management quota admissions provide flexibility for students seeking private college options.",
      ]}
      process={[]}
      colleges={[
        "Karnataka has some of the top medical colleges including both government and private institutions.",
      ]}
    />
  );
}

export default MBBSch;
