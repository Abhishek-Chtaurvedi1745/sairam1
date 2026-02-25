import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const collegeData = [
{ sr: "01", name: "College of Engineering Pune (COEP)", city: "PUNE", code: "E001" },
{ sr: "02", name: "MIT World Peace University (MIT-WPU)", city: "PUNE", code: "E002" },
{ sr: "03", name: "Bharati Vidyapeeth College of Engineering", city: "PUNE", code: "E003" },
{ sr: "04", name: "Vishwakarma Institute of Technology", city: "PUNE", code: "E004" },
{ sr: "05", name: "Dr. D. Y. Patil Institute of Technology Pimpri", city: "PUNE", code: "E005" },
{ sr: "06", name: "Symbiosis Institute of Technology Pune", city: "PUNE", code: "E006" },
{ sr: "07", name: "MIT Academy of Engineering and Design Loni Kalbhor (MIT-ADT)", city: "PUNE", code: "E007" },
{ sr: "08", name: "MIT Academy of Engineering Alandi", city: "PUNE", code: "E008" },
{ sr: "09", name: "Pune Institute of Computer Technology (PICT)", city: "PUNE", code: "E009" },
{ sr: "10", name: "Cummins College of Engineering for Women Pune", city: "PUNE", code: "E010" },
{ sr: "11", name: "Rajarshi Shahu College of Engineering Pune (JSPM)", city: "PUNE", code: "E011" },
{ sr: "12", name: "Pimpri Chinchwad College of Engineering Pune (PCCOE)", city: "PUNE", code: "E012" },
{ sr: "13", name: "Dr. D. Y. Patil College of Engineering Akurdi", city: "PUNE", code: "E013" },
{ sr: "14", name: "Sinhgad College of Engineering Vadgaon", city: "PUNE", code: "E014" },
{ sr: "15", name: "Smt. Kashibai Navale College of Engineering Pune (SKN)", city: "PUNE", code: "E015" },
{ sr: "16", name: "NBN Sinhgad School of Engineering", city: "PUNE", code: "E016" },
{ sr: "17", name: "RMD Sinhgad College of Engineering Warje", city: "PUNE", code: "E017" },
{ sr: "18", name: "Sinhgad Academy of Engineering Kondhwa", city: "PUNE", code: "E018" },
{ sr: "19", name: "Vishwakarma Institute of Information Technology (VIIT)", city: "PUNE", code: "E019" },
{ sr: "20", name: "Dr. D. Y. Patil School of Engineering Lohegaon", city: "PUNE", code: "E020" },
{ sr: "21", name: "PVG's College of Engineering and Technology Pune", city: "PUNE", code: "E021" },
{ sr: "22", name: "G H Raisoni College of Engineering and Management Pune", city: "PUNE", code: "E022" },
{ sr: "23", name: "Modern Education Society's College of Engineering Pune", city: "PUNE", code: "E023" },
{ sr: "24", name: "Marathwada Mitra Mandal's College of Engineering Pune (MMCOE)", city: "PUNE", code: "E024" },
{ sr: "25", name: "JSPM Narhe Technical Campus", city: "PUNE", code: "E025" },
{ sr: "26", name: "Trinity College of Engineering and Research Pune", city: "PUNE", code: "E026" },
{ sr: "27", name: "Zeal College of Engineering and Research Pune", city: "PUNE", code: "E027" },
{ sr: "28", name: "All India Shri Shivaji Memorial Society's College of Engineering (AISSMSS)", city: "PUNE", code: "E028" },
{ sr: "29", name: "Nowrosjee Wadia College of Engineering Pune", city: "PUNE", code: "E029" }
];


function EngineeringCollege() {
  return (
    <div>
      <Nav/>
      <header className="w-full bg-[#49BBBD] py-[150px]  md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
           ENGINEERING COLLEGES IN MAHARASHTRA
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
                <th className="px-6 py-6 w-[15%]">SR NO.</th>
                <th className="px-6 py-6 w-[75%]">Engineering College’s Name</th>
                <th className="px-6 py-6 w-[10%]">CITY</th>
                {/* <th className="px-6 py-6 w-[15%]">CODE</th> */}
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

export default EngineeringCollege
