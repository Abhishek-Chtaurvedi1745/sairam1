import React from "react";

function Att() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/abg1.svg')", 
      }}
    >
     
      <div className="absolute inset-0 bg-[#002741]/90"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-white">

        <h2 className="text-[32px] font-bold text-center mb-16">
          How Are We Different From Others ?
        </h2>
       <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 place-items-center gap-8 mb-12">
          <div className="border border-2 rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             <strong>Experience-led approach</strong> backed by decades of
involvement in education counseling
            </p>
          </div>

          <div className="border border-2 rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             <strong>Student-focused guidance</strong> centered on suitability
rather than short-term outcomes
            </p>
          </div>
        </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
         
          <div className="border border-2 rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             <strong>Multi-stream expertise </strong>across medical,
management, and engineering education
            </p>
          </div>
<div className="border border-2 rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             <strong>Wide geographic reach </strong> supporting
students across multiple locations
            </p>
          </div>

         <div className="border border-2 rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             <strong>Structured counseling process </strong>
that prioritizes clarity and transparency
            </p>
          </div>
        </div>
        <p className="text-center text-[20px] max-w-4xl mx-auto font-medium">
          Our focus remains on responsible guidance, informed decision-making, and long-term academic alignment.
        </p>

      </div>
    </section>
  );
}

export default Att;
