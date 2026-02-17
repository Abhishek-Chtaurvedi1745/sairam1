import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Location from '../Components/Location'

function Contactus() {
  return (
    <div>
        <Nav/>
        <header className="w-full bg-[#49BBBD] py-[150px]  rouuded-xl md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
            Contact Us
          </h1>
         <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
  Book Your Free Consultation
</button>
        </div>
        <div className="flex justify-center relative">
</div>


      </div>
    </header>
    <Location/>

        <section className="py-20 px-6 bg-[#EEF4FF] mb-12">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-[34px] font-bold text-[#002741] mb-3">
      Get in Touch
    </h2>

    <p className="text-[16px] md:text-[20px] text-[#555] mb-8 leading-relaxed">
      We're here to guide you every step of the way. Have questions about courses, admissions, or universities?
Reach out to us, and our team will assist you with personalized solutions. Let's connect and turn your
educational goals into reality!
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">


      <a
        href="tel:+919999999999"
        className="flex items-center justify-center gap-3 p-3 px-9 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]"
      >
        <img src="/assets/p1.svg" alt="Phone" className="w-[30px] h-[30px] text-center" />
        Call Us
      </a>

      <a
        href="mailto:info@example.com"
        className="flex items-center justify-center gap-3 text-[18px] px-9 p-3 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]"
      >
        <img src="/assets/e2.svg" alt="Email" className="w-[30px] h-[30px] text-center" />
        Email Us
      </a>

    </div>
  </div>
</section>

        <Footer/>      
    </div>
  )
}

export default Contactus
