import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Cr2 from '../Components/Cr2'

function Course() {
  return (
    <div>
      <Nav/>
      <header className="w-full bg-[#49BBBD] py-[150px]  rouuded-xl md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
            Courses
          </h1>
         <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
  Book Your Free Consultation
</button>
        </div>
        <div className="flex justify-center relative">
</div>


      </div>
    </header>
     <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#2F327D] mb-4">
            List of Courses
          </h1>

          <p className=" mb-4 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
            Looking to secure admission into your dream college and pursue the course you’ve always wanted? You need a thoughtfully selected range of UG and PG programs across reputed institutions, aligned with global academic standards and today’s industry needs.
We help with admission counseling to help students choose the right colleges and courses based on their interests, strengths, and career goals. Whether your ambition lies in engineering, management, healthcare, or other professional fields, we guide you at every step and help you turn your academic dreams into a confident, successful future in India or abroad.
          </p>

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
    <Cr2/>
      <Footer/>
    </div>
  )
}

export default Course
