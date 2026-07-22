import React from "react";

function Marquee() {
  const text =
    "MBBS  |  BDS  |  BAMS  |  BHMS  |  B.Tech  |  MBA Admission Guidance  |  Admissions Open 2026";

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span className="marquee-item">{text}</span>
        <span className="marquee-item" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}

export default Marquee;
