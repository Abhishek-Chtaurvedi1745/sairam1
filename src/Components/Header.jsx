import React from "react";

function Header() {
  return (
    <>
    <header className="w-full bg-[#49BBBD] pb-16 rouuded-xl md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
            From Counseling to Admission, Your Journey Made Simple
          </h1>

       <p className="mt-5 text-[16px] md:text-[18px] text-white text-left font-nunito ">
  Admission Counseling through merit <br />
  | Management Quota | NRI Quota <br />
  Serving students across Maharashtra and multiple locations in India
</p>


         <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
  Book Your Free Consultation
</button>


        </div>
        <div className="flex justify-center relative">
  <img
    src="/assets/girl.svg"
    alt="Header"
    className="w-full  rounded-xl z-5 -mt-[35px] md:mt-0"
  />

  
  <img
    src="/assets/im1.svg"
    alt="Speech 1"
    className="absolute hidden md:block bottom-[400px] -right-6"
  />

  
  <img
    src="/assets/im2.svg"
    alt="Speech 2"
    className="absolute hidden md:block bottom-[170px] -left-4 z-10"
  />

 
  <img
    src="/assets/im.svg"
    alt="Chat Icon"
    className="absolute hidden md:block bottom-[561px] -left-7 z-10"
  />

</div>


      </div>
    </header>
    </>
  );
}

export default Header;
