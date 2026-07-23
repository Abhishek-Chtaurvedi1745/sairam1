import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSMp() {
  return (
    <MBBSAdmissionLayout
      stateName="Madhya Pradesh"
      images={[
        "/assets/mbbs/madhya-pradesh/16678139880.webp",
        "/assets/mbbs/madhya-pradesh/16678139881.webp",
        "/assets/mbbs/madhya-pradesh/16678139882.webp",
        "/assets/mbbs/madhya-pradesh/16678139883.webp",
      ]}
      imageAlt="MBBS Admission in Madhya Pradesh"
      counselingBody="DME Madhya Pradesh / MP Online counselling"
      intro={[
        "It has one of the best medical colleges in India. The state has a total of 22 medical colleges out of which 13 are government medical colleges and 9 are private medical colleges.",
        "As the state has high population but the number of colleges are less, so cutoff is generally high in this state. For students who are not from Madhya Pradesh, they can do their counselling in the later rounds as non-domicile candidates have limited access in early rounds.",
        "Counselling is a very smart and hectic process. To get the best possible seat in lowest budget, you need to fill the preferences very smartly. We can assure the best seat guidance and help save lakhs of your rupees.",
      ]}
      stats={[
        "Total Medical Colleges in Madhya Pradesh – 22 Colleges",
        "Total Government Medical Colleges in Madhya Pradesh – 13 Colleges",
        "Total Private Medical Colleges in Madhya Pradesh – 9 Colleges",
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
