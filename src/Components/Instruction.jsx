import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Instruction() {
  const slides = [
    {
      question: "How do I apply for admission?",
      image: "/assets/ap1.svg",
    },
    {
      question: "Which course is best for me?",
      image: "/assets/ap2.svg",
    },
    {
      question: "What are the eligibility criteria?",
      image: "/assets/ap3.svg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative bg-white rounded-2xl shadow-lg p-6">

          <span className="text-[#717FB0] absolute top-4 left-4 z-10 px-4 py-1 text-sm font-semibold text-white backdrop-blur rounded-full bg-[#CDD8FF]">
            Question {current + 1}
          </span>

          <div className="overflow-hidden">

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full shrink-0"
                >
                  <h4 className="text-lg font-semibold mb-4 mt-9">
                    {slide.question}
                  </h4>

                  <img
                    src={slide.image}
                    alt="instruction"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold text-[#2F327D] mb-4">
            Featured Institutions
          </h2>
          <p className="text-[#696984] font-regular text-[15px] md:text-[20px] mb-6">
            A selection of colleges across medical, engineering, and management streams associated with our admission guidance network.
          </p>
          <button className="px-6 py-3 bg-[#C30D22] text-white rounded-full font-semibold hover:bg-[#a80b1d] transition">
            Book Your FREE Consultation Today
          </button>
        </div>

      </div>
    </section>
  );
}

export default Instruction;
