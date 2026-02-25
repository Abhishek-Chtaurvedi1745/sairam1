import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const collegeData = [
{ sr: "01", name: "COLLEGE OF NURSING, SIR J.J. GROUP OF HOSPITALS", city: "Mumbai", code: "9111" },
{ sr: "02", name: "COLLEGE OF NURSING B.J. MEDICAL COLLEGE", city: "Pune", code: "9115" },
{ sr: "03", name: "COLLEGE OF NURSING GMC & HOSP", city: "Nagpur", code: "9212" },
{ sr: "04", name: "COLLEGE OF NURSING GMC & HOSP", city: "Aurangabad", code: "9314" },
{ sr: "05", name: "COLLEGE OF NURSING GMC & HOSP", city: "Nanded", code: "9366" },
{ sr: "06", name: "Bombay Hospital College of Nursing (Women)", city: "Mumbai", code: "9112" },
{ sr: "07", name: "TPCT's Terna College of Nursing", city: "Navi Mumbai", code: "9113" },
{ sr: "08", name: "Holy Spirit Institute of Nursing Education (Minority-Women) (Christian)", city: "Mumbai", code: "9114" },
{ sr: "09", name: "K.J. Somaiya Nursing College", city: "Mumbai", code: "9116" },
{ sr: "10", name: "Sinhgad College of Nursing", city: "Pune", code: "9118" },
{ sr: "11", name: "Godavari College of Nursing", city: "Jalgaon", code: "9119" },
{ sr: "12", name: "Seva Mandal Edu. Soc. College of Nursing (Minority-Women) Matunga", city: "Mumbai", code: "9120" },
{ sr: "13", name: "Maharshi Karve Sanstha Bakul Tambat (Women) Institute of Nursing", city: "Pune", code: "9121" },
{ sr: "14", name: "College of Nursing, P.D. Hinduja NH & MRC (Women)", city: "Mumbai", code: "9122" },
{ sr: "15", name: "The Yash Foundation's College of Nursing", city: "Ratnagiri", code: "9123" },
{ sr: "16", name: "Br. Nath Pai College of Nursing, Kudal", city: "Sindhudurg", code: "9125" },
{ sr: "17", name: "MGM College of Nursing", city: "Vashi", code: "9126" },
{ sr: "18", name: "Matoshri College of Nursing, Eklahre", city: "Nashik", code: "9129" },
{ sr: "19", name: "M.V.P.S's Nursing College", city: "Nashik", code: "9130" },
{ sr: "20", name: "Yeshwant College of Nursing, Kodoli", city: "Kolhapur", code: "9131" },
]

function NursingCollege() {
  return (
    <div>
      <Nav/>
      <header className="w-full bg-[#49BBBD] py-[150px]  md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
           NURSING COLLEGES IN MAHARASHTRA
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
                <th className="px-6 py-6 w-[55%]">Nursing College’s Name</th>
                <th className="px-6 py-6 w-[10%]">CITY</th>
                <th className="px-6 py-6 w-[15%]">CODE</th>
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
      <td className="px-6 py-4">
        {college.code}
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

export default NursingCollege
