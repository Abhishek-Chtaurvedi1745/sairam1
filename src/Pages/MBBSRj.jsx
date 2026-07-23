import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSRj() {
  return (
    <MBBSAdmissionLayout
      stateName="Rajasthan"
      images={[
        "/assets/mbbs/rajasthan/16835518990.webp",
        "/assets/mbbs/rajasthan/16835518991.webp",
        "/assets/mbbs/rajasthan/16835518992.webp",
      ]}
      imageAlt="MBBS Admission in Rajasthan"
      counselingBody="NEET UG Medical & Dental Admission / Counselling Board, Rajasthan"
      intro={[
        "It is one of the best states for MBBS admission in India. Rajasthan has one of the best medical colleges in the country. Many students have their first preference as Rajasthan for their MBBS admission.",
        "Rajasthan has a total of 17 government medical colleges and 9 private medical colleges. We help students in MBBS admission in Rajasthan with complete guidance.",
      ]}
      stats={[
        "Total Medical colleges in Rajasthan – 26 (4705 seats)",
        "Total Government medical colleges in Rajasthan – 17 Colleges",
        "Total Private medical colleges in Rajasthan – 9 Colleges",
      ]}
      fees={[
        "Average MBBS fees in Rajasthan private colleges usually range from ₹6–₹15 lakhs per year.",
        "Government colleges remain more affordable but have limited seats and high cut-offs.",
      ]}
      quota={[
        "Applicants can seek admission under State quota, Management quota, and NRI quota as per NEET eligibility.",
        "Management quota options help students explore private medical college seats.",
      ]}
      process={[]}
      colleges={[
        "Rajasthan has reputed government and private medical colleges in cities like Jaipur, Kota, Udaipur, and more.",
      ]}
    />
  );
}

export default MBBSRj;
