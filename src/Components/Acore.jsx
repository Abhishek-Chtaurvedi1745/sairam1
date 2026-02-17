import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Acore() {
  const cards = [
    { img: "/assets/core1.svg", bg: "#5B72EE", title: "Career Counseling", desc: "Helping students identify their aptitude, interests, and potential to choose the right course and college." },
    { img: "/assets/core2.svg", bg: "#00CBB8", title: "Admission Guidance", desc: "End to end support for admissions including college selection and application process assistance." },
    { img: "/assets/core3.svg", bg: "#29B9E7", title: "Overseas Education", desc: "Guidance for students planning to pursue education abroad with complete consultation support." },
    { img: "/assets/core1.svg", bg: "#5B72EE", title: "Career Counseling", desc: "Helping students identify their aptitude, interests, and potential to choose the right course and college." },
    { img: "/assets/core2.svg", bg: "#00CBB8", title: "Admission Guidance", desc: "End to end support for admissions including college selection and application process assistance." },
    { img: "/assets/core3.svg", bg: "#29B9E7", title: "Overseas Education", desc: "Guidance for students planning to pursue education abroad with complete consultation support." },
  ];

  const [index, setIndex] = useState(0);

  const isDesktop = window.innerWidth >= 768;
  const cardWidth = isDesktop ? 33.333 : 100;

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">

        <h2 className="text-[32px] font-bold text-center mb-4 text-[#2F327D]">
          Our Core Services
        </h2>

        <p className="text-[20px] text-center mb-16 text-[#2F327D]">
          Sairam Education offers a range of education and admission support services
        </p>

        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * cardWidth}%)` }}
        >
          {cards.map((item, i) => (
            <div key={i} className="min-w-full md:min-w-[33.333%] px-5">
              <div className="relative bg-white rounded-xl pt-20 pb-8 mb-8 px-6 text-center shadow-xl">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <img
                    src={item.img}
                    alt=""
                    className="w-20 h-20 p-4 rounded-full shadow-lg"
                    style={{ backgroundColor: item.bg }}
                  />
                </div>

                <h3 className="text-[22px] font-medium mb-3 text-[#2F327D]">
                  {item.title}
                </h3>

                <p className="text-[#696984] text-[15px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>



        <div className="flex justify-center my-6 space-x-3">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-[#C30D22] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#C30D22] rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#C30D22] rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronRight className="text-white" />
        </button>

      </div>
    </section>
  );
}

export default Acore;
