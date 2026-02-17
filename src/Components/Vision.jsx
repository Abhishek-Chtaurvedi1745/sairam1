import React from "react";

import { ChevronRight } from "lucide-react";


function Vision() {
  return (
    <section className="w-full py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          <h2 className="text-[32px] font-bold mb-6 text-[#002741]">
            Our Vision and Mission
          </h2>

          <div className="mt-8 lg:mt-[133px] p-8 rounded-2xl shadow-xl bg-gradient-to-r from-[#EEF4FF] to-[#FFFFFF] text-white">
            
            <div className="flex items-center mb-4">
              <img
                src="/assets/vission.svg"
                alt="Vision"
                className="w-12 h-12 mr-4"
              />
              <h3 className="text-[25px] font-semibold text-[#002741]">
                Our Vision
              </h3>
            </div>

        
            <p className="text-[16px] md:text-[18px] text-[#424040] font-Regular leading-relaxed">
              Our vision is to guide students toward the right academic
              and career paths by providing transparent, ethical, and
              expert education consulting services that shape successful
              futures.
            </p>
          </div>
        </div>

      
        <div>
          <div className="p-8 rounded-2xl shadow-xl bg-gradient-to-r from-[#EEF4FF] to-[#FFFFFF] text-white">
            <div className="flex items-center mb-4">
              <img
                src="/assets/mission.svg"
                alt="Mission"
                className="w-12 h-12 mr-4"
              />
              <h3 className="text-[25px] font-semibold text-[#002741]">
                Our Mission
              </h3>
            </div>

         
        <ul className="space-y-3">
  {[
    "To provide structured career counseling & admission guidance tailored to individual student needs",
    "To support students across multiple academic streams and locations",
    "To act as a reliable academic partner for students, parents, and institutions",
    "To continuously refine our counseling approach in line with evolving education landscapes",
  ].map((item, index) => (
    <li key={index} className="flex items-start">
      <span className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-white mr-3 mt-[2px]">
        <ChevronRight size={16} className="text-[#1EA4CE]" />
      </span>

      <span className="text-[16px] md:text-[18px] text-[#424040] font-regular leading-relaxed">
        {item}
      </span>
    </li>
  ))}
</ul>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Vision;
