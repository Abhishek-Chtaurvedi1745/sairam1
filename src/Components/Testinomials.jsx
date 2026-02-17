import React from "react";
import { Star } from "lucide-react";

function Testinomials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      image: "/assets/ct.svg",
      text: "Clear guidance helped me choose the right college confidently.",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      image: "/assets/ct.svg",
      text: "The admission process felt simple and well organized.",
      rating: 4,
    },
    {
      name: "Saurabh Patil",
      image: "/assets/ct.svg",
      text: "Professional counseling and honest advice throughout.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-12 px-6 bg-[#EEF4FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] text-[#002741] font-semibold text-center mb-4">
          Testimonials
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-2 border-black flex flex-col"
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h4 className="ml-3 font-medium text-[#2E2F35] text-[15px]">
                  {item.name}
                </h4>
              </div>
              <p className="text-[#58595D] text-[16px] font-medium mb-6">
                {item.text}
              </p>
              <div className="mt-auto flex justify-end">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400 ml-1"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testinomials;
