import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSUp() {
  return (
    <MBBSAdmissionLayout
      stateName="Uttar Pradesh"
      images={[
        "/assets/mbbs/uttar-pradesh/16678153180-1.webp",
        "/assets/mbbs/uttar-pradesh/16678153181-1.webp",
        "/assets/mbbs/uttar-pradesh/16678153182-1.webp",
        "/assets/mbbs/uttar-pradesh/16678153184-1.webp",
      ]}
      imageAlt="MBBS Admission in Uttar Pradesh"
      counselingBody="DGME / UPDGME Uttar Pradesh counselling"
      intro={[
        "UP State has been one of the important states for admission in MBBS for students across India. There are total of 51 Medical colleges in Uttar Pradesh. Out of which government and private medical colleges together form a large network of options.",
        "We help students in getting MBBS admission in Uttar Pradesh with complete counselling guidance for government, private, and management quota seats.",
      ]}
      stats={[
        "Total Medical Colleges in Uttar Pradesh – 51 (6569 seats) + 6 central universities (AIIMS, AMC and IMS BHU)",
        "Total Government Colleges in Uttar Pradesh – 24 (2469 seats)",
        "Total Private Medical Colleges in Uttar Pradesh – 29 (4100 seats)",
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
