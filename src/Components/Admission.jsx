import React from "react";

function Admission() {
  const ugPrograms = [
    { title: "Medical", img: "/assets/medical.svg" },
    { title: "Engineering", img: "/assets/eng.svg" },
    { title: "Management", img: "/assets/team.svg" },
    { title: "General Career Counseling", img: "/assets/last.svg" },
  ];

  const pgPrograms = [
    { title: "Medical", img: "/assets/medical.svg" },
    { title: "Engineering", img: "/assets/eng.svg" },
    { title: "Management", img: "/assets/team.svg" },
    { title: "General Career Counseling", img: "/assets/last.svg" },
  ];

  return (
    <section className="py-16 px-2 text-center">
      <h2 className="font-semibold text-[32px] text-[#002741] mb-4">
        Admission Counselling through Merit/ Management & NRI Quota.
      </h2>

      <p className="text-[25px] font-medium text-[#002741] mx-auto mb-6">
        Admission Support Across Streams
      </p>

      
      <div className="inline-block w-full lg:w-[75%] bg-gradient-to-r from-[#FFFFFF] via-[#36898B] to-[#FFFFFF] text-white text-[25px] font-semibold px-6 py-3 mb-12">
        Undergraduate Programs
      </div>

      <div className="flex justify-center gap-4 flex-wrap px-4 md:px-0">
        {ugPrograms.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-[237px] h-[230px] bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-[50px] h-[50px] mb-6"
              />
              <p className="font-semibold text-center">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="inline-block w-full lg:w-[75%] mt-12 bg-gradient-to-r from-[#FFFFFF] via-[#36898B] to-[#FFFFFF] text-white text-[25px] font-semibold px-6 py-3 mb-12">
        Postgraduate Programs
      </div>

      <div className="flex justify-center gap-4 flex-wrap px-4 md:px-0">
        {pgPrograms.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-[237px] h-[230px] bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-[50px] h-[50px] mb-6"
              />
              <p className="font-semibold text-center">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#002741] font-medium text-[20px] md:text-[25px] mt-12">
        We assist students through appropriate admission channels based on
        eligibility and availability.
      </p>
    </section>
  );
}

export default Admission;
