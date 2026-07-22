import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSRj() {
  return (
    <MBBSAdmissionLayout
      stateName="Rajasthan"
      image="/assets/ne.jpeg"
      imageAlt="Medical College Campus in Rajasthan"
      counselingBody="NEET UG Medical & Dental Admission / Counselling Board, Rajasthan"
      intro={[
        "Rajasthan is a preferred MBBS destination with well-established medical colleges and growing private medical education options.",
        "Admissions are conducted through NEET UG with state and institutional counselling processes.",
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
