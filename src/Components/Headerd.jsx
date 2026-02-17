import React from "react";

function Headerd() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#2F327D] mb-4">
            About Sairam Education & Consultancy Services
          </h1>

          <p className=" mb-4 text-[#696984] tracking-[0.02em]">
            Sairam Education & Consultancy Services is a Pune based education consultancy working as a bridge between students and universities across India.
          </p>

          <h4 className="text-[20px] font-semibold text-[#2F327D] mb-6">
            Carving Your Future with the Best in Education
          </h4>
          <button className="text-[#696984] underline underline-offset-4">
  <a href="">Read More</a>
</button>

        </div>

      <div className="flex-1 flex justify-center">
  <div className="relative"> 
    <span className="absolute -top-[8px] -left-[8px] w-16 h-16 
      border-t-[21px] border-l-8 rounded-2xl border-[#23BDEE] z-0">
    </span>

    <span className="absolute -bottom-2 -right-2 w-[150px] h-[150px] 
      border-b-[21px] border-r-8 rounded-2xl border-[#C30C22] z-0">
    </span>


    <img
      src="/assets/hd.svg"
      alt="Video Thumbnail"
      className="relative z-10 rounded-xl shadow-lg"
    />

    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7 text-[#23BDEE] ml-1"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>

  </div>
</div>



      </div>
    </section>
  );
}

export default Headerd;
