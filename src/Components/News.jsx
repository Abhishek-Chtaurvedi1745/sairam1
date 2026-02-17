import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function News() {
  const images = [
    "/assets/news.svg",
    "/assets/news.svg",
    "/assets/news.svg",
  ];

 const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

       
        <div>
          <h2 className="text-[32px] md:text-[43px] font-semibold  mb-1">
            Recent News and Articles
          </h2>

          <p className="text-[#696984] text-[19px] mb-1">
            Latest Insight
          </p>

          <h4 className="text-[#002741] font-medium text-[20px] md
          :text-[25px]">
            How to Choose the Right College After 12th in India
          </h4>
        </div>
      
        <div className="relative bg-white rounded-2xl overflow-hidden">
        
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-full shrink-0"
                >
                  <img
                    src={img}
                    alt="news"
                    className="w-full h-[500px] "
                  />
                </div>
              ))}
            </div>
         </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 lg:left-[70px] top-1/2 -translate-y-1/2 bg-[#FFFFFF] shadow-[0_5px_10px_#878686]  text-[#1EA4CE] p-3 rounded-full transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 lg:right-[70px] top-1/2 -translate-y-1/2 bg-[#FFFFFF] shadow-[0_5px_10px_#878686] text-[#1EA4CE] p-3 rounded-full transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default News;
