import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

  const collegeData = [
  { sr: 1, name: "NALASOPARA AYURVED MEDICAL COLLEGE, VASAI, THANE", city: "Mumbai", fees: "1.85" },
{ sr: 2, name: "YMT AYURVEDIC MEDICAL COLLEGE, KHARGHAR", city: "Mumbai", fees: "2.85" },
{ sr: 3, name: "BSDTS AYURVED MAHAVIDYALAYA, WAGHOLI", city: "Pune", fees: "1.40" },
{ sr: 4, name: "PUNE DISTRICT EDUCATION ASSOCIATION’S, COLLEGE OF AYURVED & RESEARCH CENTRE", city: "Pune", fees: "2.45" },
{ sr: 5, name: "MAHARASHTRA AROGYA MANDAL’S SUMATIBHAI SHAH AYURVED MAHAVIDYALAYA, HADAPSAR", city: "Pune", fees: "1.78" },
{ sr: 6, name: "DR. J. J. MAGDUM AYURVED COLLEGE, JAYSINGPUR", city: "Kolhapur", fees: "2.32" },
{ sr: 7, name: "HANUMAN SHIKSHAN PRASARAK MANDAL, AYURVEDIC MEDICAL COLLEGE, PETH VADGAON, HATKANGALE", city: "Kolhapur", fees: "2.35" },
{ sr: 8, name: "YASHWANT AYURVEDIC MAHAVIDYALAYA, KODOLI, PANHALA", city: "Kolhapur", fees: "2.47" },
{ sr: 9, name: "LATE KEDARI REDEKAR AYURVEDIC COLLEGE, GADHINGLAJ", city: "Kolhapur", fees: "2.35" },
{ sr: 10, name: "SANT GAJANAN MAHARAJ AYURVED MEDICAL COLLEGE", city: "Kolhapur", fees: "1.65" },
{ sr: 11, name: "SHRI ANNASAHEB DANGE AYURVED MEDICAL COLLEGE, ASHTA, WALWA", city: "Sangli", fees: "2.35" },
{ sr: 12, name: "LOKNETE RAJARAM PATIL AYURVEDIC MAHAVIDYALAYA, ISLAMPUR, WALWA", city: "Sangli", fees: "2.23" },
{ sr: 13, name: "JUPITER AYURVEDIC MEDICAL COLLEGE, KHAMLA ROAD", city: "Nagpur", fees: "0.90" },
{ sr: 14, name: "DATTA MEGHE AYURVEDIC MEDICAL COLLEGE, HOSPITAL & RESEARCH CENTRE", city: "Nagpur", fees: "1.85" },
{ sr: 15, name: "SANMARG SHIKSHAN SANSTHA, SHRI K R PANDAV AYURVEDIC COLLEGE", city: "Nagpur", fees: "1.70" },
{ sr: 16, name: "B. MULAK AYURVED MAHAVIDYALAYA AND MEDICAL SCIENCE, GREAT NAG ROAD, NANDANWAN", city: "Nagpur", fees: "1.65" },
{ sr: 17, name: "DATTA MEGHE AYURVEDIC MEDICAL COLLEGE, HOSPITAL & RESEARCH CENTRE", city: "Nagpur", fees: "1.85" },
  ];

function BAMS2College() {
  return (
    <div>
      <Nav/>
      <header className="w-full bg-[#49BBBD] py-[150px]  md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
           BAMS  COLLEGES IN MAHARASHTRA
          </h1>


         <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
  Book Your Free Consultation
</button>


        </div>
        <div className="flex justify-center relative">
</div>


      </div>
    </header>
    <section className="py-16  overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto bg-white shadow-lg ">
          <table className="w-full text-left">
            
            <thead className="bg-[#002741] font-semibold text-[22px] text-white p-10">
              <tr>
                <th className="px-6 py-6 w-[5%]">SR NO.</th>
                <th className="px-6 py-6 w-[55%]">BAMS College’s Name</th>
                <th className="px-6 py-6 w-[10%]">CITY</th>
                {/* <th className="px-6 py-6 w-[15%]">FEE</th> */}
              </tr>
            </thead>
            <tbody>
  {collegeData.map((college, index) => (
    <tr
      key={index}
      className={`text-[#002741] text-[20px] font-medium
        ${index % 2 === 0 ? "bg-[#D9D9D9]" : "bg-[#F2F2F2]"}
      `}
    >
      <td className="px-6 py-4 border-r border-[#002741]">
        {college.sr}
      </td>
      <td className="px-6 py-4 border-r border-[#002741]">
        {college.name}
      </td>
      <td className="px-6 py-4 border-r border-[#002741]">
        {college.city}
      </td>
      {/* <td className="px-6 py-4">
        {college.fees}
      </td> */}
    </tr>
  ))}
</tbody>
          </table>
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
      <Footer/>
    </div>
  )
}

export default BAMS2College
