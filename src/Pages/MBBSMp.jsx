import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSMp() {
  return (
    <MBBSAdmissionLayout
      stateName="Madhya Pradesh"
      image="/assets/md.png"
      imageAlt="Medical College Campus in Madhya Pradesh"
      counselingBody="DME Madhya Pradesh / MP Online counselling"
      intro={[
        "Madhya Pradesh is a popular choice for MBBS aspirants seeking quality medical education with a mix of government and private colleges.",
        "The state follows NEET UG based admissions with structured state counselling rounds.",
      ]}
      fees={[
        "Private MBBS college fees in Madhya Pradesh typically range from ₹6–₹14 lakhs per year.",
        "Government college fees are lower, but competition for seats remains high.",
      ]}
      quota={[
        "Candidates can apply through State quota, All India quota, Management quota, and NRI quota as per eligibility.",
        "Management quota provides additional admission pathways in private medical colleges.",
      ]}
      process={[]}
      colleges={[
        "Madhya Pradesh offers several well-known government and private medical colleges across major cities.",
      ]}
    />
  );
}

export default MBBSMp;
