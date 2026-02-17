import React from "react";

function Core() {
  return (
    <section className="py-20 bg-[#EEF4FF]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[32px] font-bold text-center mb-16 text-[#2F327D] ">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="relative bg-gray-50 rounded-xl pt-20 pb-8 px-6 text-center shadow-md">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src="/assets/core1.svg"
                alt=""
                className="w-20 h-20 bg-[#5B72EE] p-4 rounded-full shadow-lg"
              />
            </div>

            <h3 className="text-[22px] font-medium mb-3 text-[#2F327D]">
              Career Counseling
            </h3>

            <p className="text-[#696984] mb-3 text-[15px] font-regular">
              Helping students identify their aptitude, interests, and potential to choose the right course and college.
            </p>
          </div>
          <div className="relative bg-gray-50 rounded-xl pt-20 pb-8 px-6 mt-[20px] lg:mt-0 text-center shadow-md">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 ">
              <img
                src="/assets/core2.svg"
                alt=""
                className="w-20 h-20 bg-[#00CBB8] p-4 rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-[22px] font-medium mb-3 text-[#2F327D]">
              Admission Guidance
            </h3>

            <p className="text-[#696984] mb-3 text-[15px] font-regular">
              End to end support for admissions including college selection and application process assistance.
            </p>
          </div>         
          <div className="relative bg-gray-50 rounded-xl pt-20 pb-8 px-6 text-center shadow-md mt-[20px] lg:mt-0">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 ">
              <img
                src="/assets/core3.svg"
                alt=""
                className="w-20 h-20 bg-[#29B9E7] p-4 rounded-full shadow-lg"
              />
            </div>

            <h3 className="text-[22px] font-medium mb-3 text-[#2F327D]">
              Overseas Education
            </h3>

            <p className="text-[#696984] mb-3 text-[15px] font-regular">
              Guidance for students planning to pursue education abroad with complete consultation support.
            </p>           
          </div>
        </div>       
      </div>
       <div className="flex flex-col justify-center mt-4">
          <p className="text-center text-[#002741] text-[18px] md:text-[22px] font-medium px-3">Get a Free Counseling Session. Talk to our experts now!</p>
          <div className="flex justify-center">
          <button className="mt-4 w-[300px] text-[18px] p-3 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Book Your Slot</button>
          </div>
          </div>
    </section>
  );
}

export default Core;
