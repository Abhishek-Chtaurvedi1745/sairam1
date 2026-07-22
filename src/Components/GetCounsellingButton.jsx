import React from "react";
import { useCounselling } from "./CounsellingContext";

function GetCounsellingButton() {
  const { openPopup } = useCounselling();

  return (
    <button
      type="button"
      onClick={openPopup}
      className="
        fixed right-0 top-1/2 -translate-y-1/2 z-[55]
        bg-[#49BBBD] hover:bg-[#38a5a7] text-white
        font-semibold text-[13px] sm:text-[14px]
        px-3 py-3 sm:px-3.5 sm:py-4
        rounded-l-xl shadow-lg
        writing-vertical
        get-counselling-btn
        transition-all duration-300
      "
      aria-label="Get Counselling"
    >
      <span className="inline-block [writing-mode:vertical-rl] rotate-180 tracking-wide">
        Get Counselling
      </span>
    </button>
  );
}

export default GetCounsellingButton;
