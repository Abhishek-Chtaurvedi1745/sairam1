import React from "react";
import MBBSAdmissionLayout from "../Components/MBBSAdmissionLayout";

function MBBSCg() {
  return (
    <MBBSAdmissionLayout
      stateName="Chhattisgarh"
      image="/assets/cg.png"
      imageAlt="Medical College Campus in Chhattisgarh"
      counselingBody="Directorate of Medical Education (DME), Chhattisgarh"
      intro={[
        "Chhattisgarh is an emerging destination for MBBS aspirants, with growing medical colleges and improving clinical infrastructure across the state.",
        "Admissions are NEET-based and cover both government and private medical institutions.",
      ]}
      fees={[
        "The average MBBS fees in Chhattisgarh private colleges generally range from ₹5–₹12 lakhs per year.",
        "Government medical colleges offer comparatively lower fees with limited seat availability.",
      ]}
      quota={[
        "Students can apply under State quota, All India quota, Management quota, and NRI quota based on NEET score and eligibility.",
        "Management quota seats help students explore additional private college options.",
      ]}
      process={[]}
      colleges={[
        "Chhattisgarh has reputed government and private medical colleges offering solid clinical exposure and academic training.",
      ]}
    />
  );
}

export default MBBSCg;
