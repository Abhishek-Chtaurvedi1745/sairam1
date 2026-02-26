import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import News from '../Components/News'
import { ChevronRight } from 'lucide-react'

function Medical() {
  return (
    <div>
      <Nav/>
       <header className="w-full bg-[#49BBBD] py-[150px]  rouuded-xl md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
            Medical
          </h1>
         <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
  Book Your Free Consultation
</button>
        </div>
        <div className="flex justify-center relative">
</div>
      </div>
    </header>
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#2F327D] mb-4">
            Medical Counselling & Direct Admission Support
          </h1>

          <p className=" mb-4 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Sairam Education & Consultancy Services provides structured medical counselling and admission guidance for students aspiring to build a career in medicine and allied health sciences. Our approach is focused on clarity, eligibility alignment, and realistic admission pathways, helping students and parents navigate complex counselling processes with confidence.
          </p>
          <br />
          <p className=" mb-4 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">We offer guidance for direct admissions, Institute Quota, and NRI quota seats, ensuring that students clearly understand available options, admission procedures, and institutional requirements. Our counselling is transparent, process-driven, and aligned with current admission frameworks.</p>

        </div>

    <div className="flex justify-center">
  <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-[500px]">

  
    <div>
      <img
        src="/assets/cr20.svg"
        alt=""
        className="w-[280px] h-[480px] object-cover rounded-[100px]"
      />
    </div>

  
    <div className="mt-5 md:mt-20 relative">
      <img
        src="/assets/cr21.svg"
        alt=""
        className="w-[280px] h-[380px] object-cover rounded-[100px]"
      />
      <img src="/assets/cr1.svg" className='absolute -top-[76px] left-[22px]' alt="" />
    </div>

  </div>
</div>
      </div>
    </section>
    <section className="py-20 bg-[#002741]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 flex justify-center">
  <div className="relative"> 
    <img
      src="/assets/female.svg"
      alt="image"
      className="relative z-10"
    />
  </div>
</div>
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#FFFFFF] mb-4">
           What We Offer
          </h1>
<p className='font-medium text-[16px] md:text-[20px] text-[#FFFFFF]'>Our medical counselling services are designed to support
students at every stage of the admission journey</p>
           <ul className="mt-6">
            {[
              "One-to-one medical career counselling based on academic profile and eligibility",
              "Guidance for direct admission, Institute Quota, and NRI quota seats",
              "Guidance for government, private, deemed universities, Institute Quota, and NRI quota admissions",
              "Support for counselling processes, option selection, and documentation",
              "Assistance with admission planning based on course preference and budget considerations",
              "End-to-end admission guidance until college reporting and confirmation",
            ].map((item, index) => (
            <li key={index} className="flex gap-3 mb-4">

  <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full shrink-0 self-start mt-[6px]">
    <ChevronRight size={12} />
  </span>
  <span className="text-[#FFFFFF] text-[18px] md:text-[25px] font-medium leading-snug">
    {item}
  </span>
</li>


            ))}
          </ul>
        
        </div>
      </div>
    </section>
    <section className="py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-[32px] font-bold text-[#002741] mb-4">
      Undergraduate Medical Courses
    </h2>
    <p className="text-[16px] md:text-[20px] font-medium  text-[#2F327D] leading-relaxed">
      We provide counselling and admission support for the following undergraduate medical and
allied health courses
    </p>
  </div>
     <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 mt-[43px]">
          <div className="flex-1 flex justify-center">
 <div className="relative inline-block">

 
  <span
    className="absolute -top-4 -left-4 w-0 h-0 
    border-t-[160px] border-r-[160px] 
    border-t-[#FFD25D] border-r-transparent 
    z-0"
  ></span>


  <span
    className="absolute -bottom-4 -right-4 w-0 h-0 
    border-b-[160px] border-l-[160px] 
    border-b-[#FFD25D] border-l-transparent 
    z-0"
  ></span>

  <img
    src="/assets/bm1.svg"
    alt="Video Thumbnail"
    className="relative z-10 rounded-xl shadow-lg"
  />

</div>

</div>
        <div className="flex-1">
           <ul className="mt-6">
            {[
              "MBBS",
              "BHMS",
              "BDS",
              "B.Pharm",
              "BPT",
              "B.Sc Nursing"
            ].map((item, index) => (
            <li key={index} className="flex gap-3 mb-4">
  <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full shrink-0 self-start mt-[6px]">
    <ChevronRight size={12} />
  </span>

  <span className="text-[#424040] text-[18px] md:text-[25px] font-medium leading-snug">
    {item}
  </span>
</li>
            ))}
          </ul>
          <button className='text-[18px] p-3 px-7 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]'>Read More</button>
        
        </div>
      </div>
</section>
<section className="py-16 px-6 bg-[#EEF4FF]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-[32px] font-bold text-[#002741] mb-4">
      Postgraduate Medical Courses
    </h2>
    <p className="text-[16px] md:text-[20px] font-medium  text-[#2F327D] leading-relaxed">
     Sairam Education also supports students seeking postgraduate medical education through structured
counselling and admission assistance
    </p>
  </div>
     <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 mt-[43px]">
        <div className="flex-1">
          
           <ul className="mt-6">
            {[
              "MD",
              "MS",
              "DM",
              "MCh",
              "PhD",
            ].map((item, index) => (
            <li key={index} className="flex gap-3 mb-4">
  <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full shrink-0 self-start mt-[6px]">
    <ChevronRight size={12} />
  </span>

  <span className="text-[#424040] text-[18px] md:text-[25px] font-medium leading-snug">
    {item}
  </span>
</li>
            ))}
          </ul>
        
        </div>
          <div className="flex-1 flex justify-center">
  <div className="relative inline-block">

  
    <span
      className="absolute -top-[20px] -left-[20px] w-16 h-16
      bg-[#3FF1BB] z-20"
    ></span>

   
    <span
      className="absolute -top-[40px] -left-[40px] w-16 h-16
      bg-[#7768E5] z-30"
    ></span>

    
    <span
      className="absolute -bottom-3 -right-3 w-56 h-56
      bg-[#3BE1AF]
      z-0"
    ></span>

    <img
      src="/assets/en3.svg"
      alt="Video Thumbnail"
      className="relative z-10  shadow-lg"
    />

  </div>
</div>
      </div>
      </section>
      
 <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[32px] font-bold text-center mb-16 text-[#2F327D] ">
          Our Counselling Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="relative rounded-xl pt-20 pb-8 px-6 text-center shadow-xl">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src="/assets/en6.svg"
                alt=""
                className="w-20 h-20 bg-[#5B72EE] p-4 rounded-full shadow-lg"
              />
            </div>

            <h3 className="text-[22px] font-medium mb-3 text-[#2F327D]">
              Profile Assessment & Stream Evaluation
            </h3>

            <p className="text-[#696984] mb-3 text-[15px] font-regular">
              We begin with a detailed discussion to understand the student’s academic background, entrance exam status, preferred courses, and admission goals. This allows us to identify suitable and realistic admission pathways.
            </p>
          </div>
          <div className="relative  rounded-xl pt-20 pb-8 px-6 mt-[20px] lg:mt-0 text-center shadow-xl">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 ">
              <img
                src="/assets/en7.svg"
                alt=""
                className="w-20 h-20 bg-[#00CBB8] p-4 rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-[22px] font-medium mb-3 text-[#2F327D]">
              College Shortlisting & Admission Strategy
            </h3>

            <p className="text-[#696984] mb-3 text-[15px] font-regular">
              Based on eligibility and preferences, we assist with college shortlisting and define a clear admission strategy, including management and NRI quota pathways where applicable.
            </p>
          </div>         
          <div className="relative rounded-xl pt-20 pb-8 px-6 text-center shadow-xl mt-[20px] lg:mt-0">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 ">
              <img
                src="/assets/en10.svg"
                alt=""
                className="w-20 h-20 bg-[#29B9E7] p-4 rounded-full shadow-lg"
              />
            </div>

            <h3 className="text-[22px] font-medium mb-3 text-[#2F327D]">
              Admission Guidance &
Confirmation
            </h3>

            <p className="text-[#696984] mb-3 text-[15px] font-regular">
              From documentation and application support to coordination with institutions, we provide continuous guidance until the admission process is completed and the student successfully joins the selected college.
            </p>           
          </div>
        </div>       
      </div>
    </section>
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/abg1.svg')", 
      }}
    >
     
      <div className="absolute inset-0 bg-[#002741]/90"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-white">

        <h2 className="text-[32px] font-bold text-center mb-16">
          Why Choose Sairam for Management Counselling?
        </h2>
       <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 place-items-center gap-8 mb-12">
          <div className="bg-[#193C54] rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             Decades of experience in education and
admission consultancy
            </p>
          </div>

          <div className="w-full bg-[#193C54] rounded-tr-[77px] p-8 rounded-md">
            <p className=" text-[16px] md:text-[20px] leading-relaxed">
            Structured and transparent counselling
approach
            </p>
          </div>
        </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
         
          <div className="bg-[#193C54]  rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
            Support across undergraduate and
postgraduate medical courses
            </p>
          </div>
<div className="bg-[#193C54] rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             Student-focused counselling aligned
with long-term academic goals
            </p>
          </div>

         <div className="bg-[#193C54]  rounded-tr-[77px] p-8 rounded-md">
            <p className="text-[16px] md:text-[20px] leading-relaxed">
             Guidance for direct admission,
Institute Quota, and NRI quota
pathways
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12 px-6 text-[#FFFFFF]">
  <div className="w-full lg:max-w-6xl mx-auto bg-[#49BBBD] rounded-[75px] p-10">

    <h2 className="text-[32px] font-bold">
      Start Your Journey Management With Us
    </h2>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      <p className="md:max-w-[70%]  text-[16px] md:text-[20px] font-medium  leading-relaxed">
       Get personalized medical counselling and explore suitable
admission pathways with clarity and confidence.
      </p>

      <button className="mt-2 md:-mt-[20px] px-8 py-3 bg-[#C30D22] text-white font-semibold rounded-full hover:bg-[#a90b1d] transition">
        Book Your Counselling Session
      </button>

    </div>
  </div>
</section>
<News/>
      <Footer/>
    </div>
  )
}

export default Medical
