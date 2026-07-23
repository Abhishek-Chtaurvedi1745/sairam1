import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSCg() {
  return (
    <MBBSAdmissionLayout
      stateName="Chhattisgarh"
      images={[
        "/assets/mbbs/chhattisgarh/16678135850.jpg",
        "/assets/mbbs/chhattisgarh/16678135851.jpg",
        "/assets/mbbs/chhattisgarh/16678135852.jpg",
      ]}
      imageAlt="MBBS Admission in Chhattisgarh"
      counselingBody="Directorate of Medical Education (DME), Chhattisgarh"
      intro={[
        "It is one of the prominent states when it comes for medical admission. The state has 6 government medical colleges and private medical colleges. We have helped many students with their MBBS admission in Chhattisgarh.",
        "Chhattisgarh is an open state which allows admission in 15% seats in private medical college to non-domicile students also. You can also save your lakhs of rupees through our expert counselling. We can get you the best possible college in the lowest budget.",
      ]}
      stats={[
        "Total Medical Colleges in Chhattisgarh – 8 Colleges (912 seats).",
        "Total Government Medical Colleges in Chhattisgarh – 6 colleges (612 seats).",
        "Total Private Medical Colleges in Chhattisgarh – 3 Colleges (450 seats).",
      ]}
      fees={[
        "Private medical college fees in Chhattisgarh generally range based on college, quota, and academic year.",
        "Government medical colleges offer comparatively lower fees but have high competition due to limited seats.",
      ]}
      quota={[
        "Students can apply under State quota, All India quota, Management quota, and NRI quota based on NEET score and eligibility.",
        "Management quota seats help students explore additional private college options in Chhattisgarh.",
      ]}
      process={[
        "Counselling is a smart and detailed process. Preference filling plays a major role in getting the best possible seat.",
      ]}
      colleges={[
        "Chhattisgarh has reputed government and private medical colleges offering solid clinical exposure and academic training.",
      ]}
    />
  );
}

export default MBBSCg;
