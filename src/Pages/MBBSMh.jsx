import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSMh() {
  return (
    <MBBSAdmissionLayout
      stateName="Maharashtra"
      images={[
        "/assets/mbbs/maharashtra/16678147740.webp",
        "/assets/mbbs/maharashtra/16678147741.webp",
        "/assets/mbbs/maharashtra/16678147742.webp",
        "/assets/mbbs/maharashtra/16678147743.webp",
        "/assets/mbbs/maharashtra/16678147744.webp",
      ]}
      imageAlt="MBBS Admission in Maharashtra"
      counselingBody="State CET Cell / DMER Maharashtra"
      intro={[
        "Maharashtra has been one of the best states for MBBS admission for students across India. Maharashtra has a total of 56 medical colleges out of which 25 are government medical colleges, 19 are private medical colleges and 12 are deemed medical universities.",
        "The state has one of the best medical college infrastructures in India. Fees of private colleges are also not very soaring high, so the cutoff is generally higher in this state. We help students in getting MBBS admission in Maharashtra.",
      ]}
      stats={[
        "Total Medical Colleges in Maharashtra – 56",
        "Government Medical Colleges in Maharashtra – 25",
        "Private Medical Colleges in Maharashtra – 19",
        "Deemed Medical Colleges in Maharashtra – 12",
      ]}
      fees={[
        "Private MBBS fees in Maharashtra generally range from ₹7–₹18 lakhs per year depending on the college and quota.",
        "Government medical colleges offer significantly lower fees with intense competition for seats.",
      ]}
      quota={[
        "Students can apply under State quota, Institutional / Management quota, and NRI quota based on NEET score and rules.",
        "Management quota seats in private colleges offer flexible options for eligible candidates.",
      ]}
      process={[]}
      colleges={[
        "Maharashtra has a large network of top medical colleges in Mumbai, Pune, Nagpur, Nashik, and other cities.",
      ]}
    />
  );
}

export default MBBSMh;
