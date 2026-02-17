import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Aheader from '../Components/Aheader'
import Vision from '../Components/Vision'
import Acore from '../Components/Acore'
import Att from '../Components/Att'
import Review from '../Components/Review'
import News from '../Components/News'

function AboutUs() {
  return (
    <div>
      <Nav/>
      <Aheader/>
       <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#2F327D] mb-4">
            Who Are We?
          </h1>

          <p className=" mb-4 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
            Sairam Education & Consultancy Services is a Pune, Maharashtra based education consultancy committed to guiding students toward the right academic pathways. With a strong focus on structured counseling and transparent guidance, we support students across medical, management, and engineering streams in securing admissions that align with their academic goals and long-term aspirations.
Positioned as an education and admission consulting organization, Sairam Education works with students and families across India, offering informed guidance for domestic as well as overseas education opportunities.
          </p>

        </div>

      <div className="flex-1 flex justify-center">
  <div className="relative"> 
    <span className="absolute -top-[8px] -left-[8px] w-16 h-16 
      border-t-[21px] border-l-[21px] rounded-2xl border-[#23BDEE] z-0">
    </span>

    <span className="absolute -bottom-2 -right-2 w-[150px] h-[150px] 
      border-b-[21px] border-r-[21px] rounded-2xl border-[#C30C22] z-0">
    </span>


    <img
      src="/assets/abg1.svg"
      alt="Video Thumbnail"
      className="relative z-10 rounded-xl shadow-lg"
    />
  </div>
</div>
      </div>
    </section>
      <section className="py-20 bg-[#002741]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 flex justify-center">
  <div className="relative"> 
    <img
      src="/assets/abg2.svg"
      alt="image"
      className="relative z-10"
    />
  </div>
</div>
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#FFFFFF] mb-4">
            What We Do?
          </h1>

          <p className=" mb-4 text-[#FFFFFF] tracking-[0.02em]">
          At Sairam Education, we help students navigate one of the
most critical phases of their academic journey, choosing
the right course, college, and admission pathway. Our role
extends beyond basic admission assistance. We provide
end-to-end academic counseling that focuses on clarity,
suitability, and long-term outcomes.
          </p>
 <p className=" mb-4 text-[#FFFFFF] tracking-[0.02em]">From understanding student profiles and preferences to
guiding them through admission procedures, documentation,
and institutional processes, our approach is structured,
student-focused, and grounded in practical insights.</p>
        
        </div>
      </div>
    </section>
    <Vision/>
    <section className="py-20 bg-[#EEF4FF]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 flex justify-center">
  <div className="relative"> 
    <span className="absolute -top-[8px] -left-[8px] w-16 h-16 
      border-t-[21px] border-l-[21px] rounded-2xl border-[#23BDEE] z-0">
    </span>

    <span className="absolute -bottom-2 -right-2 w-[150px] h-[150px] 
      border-b-[21px] border-r-[21px] rounded-2xl border-[#C30C22] z-0">
    </span>


    <img
      src="/assets/abg3.svg"
      alt="Video Thumbnail"
      className="relative z-10 rounded-xl shadow-lg"
    />
  </div>
</div>
        <div className="flex-1">
          <h1 className="text-[32px]  font-bold text-[#2F327D] mb-4">
            How Sairam Education Started
          </h1>

          <p className=" mb-4 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
           Sairam Education was established in 2006 with the objective of supporting students in making informed academic decisions. Founded by Ankit, the organization was built on the belief that the right guidance at the right time can significantly influence a student’s academic and professional future.
What began as a focused counseling initiative gradually evolved into a comprehensive education consultancy, assisting students across diverse disciplines and admission pathways. Over the years, Sairam Education has continued to strengthen its counseling framework, institutional relationships, and student support systems.
          </p>
        </div>
      </div>
    </section>
    <Acore/>
    <Att/>
    <section className="py-16">
  <div className="max-w-4xl mx-auto px-3 text-left md:text-center">


    <h2 className="text-3xl font-bold text-[#2F327D] mb-6">
      Quality Certification
    </h2>

    
    <p className="text-[20px] font-medium text-[#2F327D] leading-relaxed">
     Sairam Education & Consultancy Services is an ISO 9001:2015 certified organization, reflecting our
commitment to structured processes, quality management, and consistent service delivery.
    </p>

    <br />


    <p className="text-[20px] font-medium text-[#2F327D] leading-relaxed">
The certification covers Education Consultancy Services, Career and Job Placement Guidance, Education
Planning, and Branding, Marketing and Promotion of Colleges across India. This certification reinforces our
focus on transparency, process-driven counseling, and continual improvement in the way we support
students and institutions.
    </p>

  </div>
</section>
<Review/>
<News/>
      <Footer/>
    </div>
  )
}

export default AboutUs
