import React from 'react'
import { ChevronRight } from "lucide-react";

function Commoncouse() {
  return (
    <div>
       <section className="py-20 bg-[#002741]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 flex justify-center">
  <div className="relative"> 
    <img
      src="/assets/female.svg"
      alt="image"
      className="relative z-10"
    />
  </div>
</div>
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#FFFFFF] mb-4">
           What We Offer
          </h1>
<p className='font-medium text-[16px] md:text-[20px] text-[#FFFFFF]'>Our engineering counselling services include</p>
           <ul className="mt-6">
            {[
              "One-to-one career and engineering stream counselling",
              "Guidance for direct admission, merit quota, management quota, and NRI quota seats",
              "Support with admission planning, documentation, and institutional processes",
              "Course and specialization guidance based on academic profile and interests",
              "End-to-end admission assistance until college reporting and confirmation",
            ].map((item, index) => (
            <li key={index} className="flex gap-3 mb-4">
  {/* Arrow */}
  <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full shrink-0 self-start mt-[6px]">
    <ChevronRight size={12} />
  </span>

  {/* Text */}
  <span className="text-[#FFFFFF] text-[18px] md:text-[25px] font-medium leading-snug">
    {item}
  </span>
</li>


            ))}
          </ul>
        
        </div>
      </div>
    </section>
    </div>
  )
}

export default Commoncouse
