import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer';

const collegeData = [
 { sr: "01", name: "YMT AYURVEDIC COLLEGE, KHARGHAR", city: "Mumbai", code: "3104" },
  { sr: "02", name: "AYURVEDIC MEDICAL COLLEGE", city: "Nalasopara", code: "3105" },
  { sr: "03", name: "BSD TRUST'S AYURVEDIC MAHAVIDYALAYA VAGHOLI", city: "Pune", code: "3109" },
  { sr: "04", name: "PDEA's AYURVED MAHAVIDYALAYA AND SANSHODHAN KENDRA", city: "Pune", code: "3110" },
  { sr: "05", name: "SUMATIBHAI SHAH AYURVED MAHAVIDYALAYA HADAPSAR", city: "Pune", code: "3111" },
  { sr: "06", name: "AYURVEDIC MEDICAL COLLEGE PETH VADGAON", city: "Kolhapur", code: "3112" },
  { sr: "07", name: "JJ MAGDUM AYURVED MAHAVIDYALAY", city: "Jaisingpur", code: "3113" },
  { sr: "08", name: "YESHWANT AYURVEDIC MAHAVIDYALAYA KODOLI", city: "Kolhapur", code: "3114" },
  { sr: "09", name: "LKRSS AYURVEDIC COLLEGE GADHINGLAJ", city: "Kolhapur", code: "3115" },
  { sr: "10", name: "HON. SHRI ANNASAHEB DANGE AYU MED. COL. ASHTA", city: "Sangli", code: "3118" },
  { sr: "11", name: "SANGAM SEVABHAVI TRUST'S AYURVEDIC COLLEGE", city: "Sangamner", code: "3121" },
  { sr: "12", name: "SHRI VIVEKANAND NURSING HOME'S AYU COL. RAHURI", city: "Ahmednagar", code: "3122" },
  { sr: "13", name: "PRAVARA MED. TRUST'S AYU MAHAVIDYALAY & EKNATH AYU HOSP SHEVGAON", city: "Ahmednagar", code: "3123" },
  { sr: "14", name: "SIDDHAKALA AYURVED MAHAVIDYALAYA", city: "Sangamner", code: "3124" },
  { sr: "15", name: "SHREE SAPTASHRINGI AYURVEDIC COLLEGE", city: "Nashik", code: "3126" },
  { sr: "16", name: "KC AJMERA AYURVED MAHAVIDYALAYA DEOPUR", city: "Dhule", code: "3128" },
  { sr: "17", name: "KDMG AYURVEDIC MEDICAL COLLEGE", city: "Chalisgaon", code: "3130" },
  { sr: "18", name: "CHAITANYA AYURVED MAHAVIDYALAYA", city: "Sakegaon", code: "3131" },
  { sr: "19", name: "SAWKAR AYURVEDIC MEDICAL COLLEGE", city: "Satara", code: "3132" },
  { sr: "20", name: "ASHVIN RURAL AYURVED MAHAVIDYALAY MANCHIHILL, ASHVI", city: "Sangamner", code: "3147" },
  { sr: "21", name: "LRP AYURVED MAHAVIDYALAYA ISLAMPUR", city: "Sangli", code: "3158" },
{ sr: "22", name: "RURAL INSTITUTE AYU. RESEARCH CENTRE KHATAV", city: "Satara", code: "3159" },
{ sr: "23", name: "MES AYURVED MAHAVIDYALAYA KHED", city: "Ratnagiri", code: "3160" },
{ sr: "24", name: "SMBT AYURVED MAHAVIDYALAY IGATPURI", city: "Nashik", code: "3161" },
{ sr: "25", name: "MATOSHRI ASARABAI DARADE AYURVED MAHAVIDYALAY YEOLA", city: "Nashik", code: "3162" },
{ sr: "26", name: "SAI AYURVEDIC COLLEGE, VAIRAG BARSHI", city: "Solapur", code: "3172" },
{ sr: "27", name: "SWAMI VIVEKANAND AYURVEDIC COLLEGE SHRIGONDA", city: "Ahmednagar", code: "3176" },
{ sr: "28", name: "SANT GAJANAN MAHARAJ AYURVEDIC COLLEGE", city: "Gadhinglaj", code: "3179" },
{ sr: "29", name: "DR DEEPAK PATIL AYURVEDIC COLLEGE", city: "Kolhapur", code: "3180" },
{ sr: "30", name: "ASVM's BHIMASHANKAR AYURVEDIC COLLEGE", city: "Pune", code: "3181" },
{ sr: "31", name: "B.R. HARNE AYURVEDIC COLLEGE VANGANI", city: "Ambernath", code: "3183" },
{ sr: "32", name: "RASHTRASANT JANARDAN SWAMI AYURVEDIC COLLEGE", city: "Ahmednagar", code: "3184" },
{ sr: "33", name: "IDEAL COLLEGE OF AYURVED", city: "Palghar", code: "3185" },
{ sr: "34", name: "ASHOKRAO MANE AYURVEDIC MEDICAL COLLEGE VADGAON", city: "Kolhapur", code: "3187" },
{ sr: "35", name: "MATOSHRI AYURVED MAHAVIDYALAY EKLAHARE", city: "Nashik", code: "3188" },
{ sr: "36", name: "SANJIVANI COLLEGE OF AYURVEDA & RESEARCH CENTRE KOPARGAON", city: "Ahmednagar", code: "3192" },
{ sr: "37", name: "SHANTABAI SHIVSHANKAR ARALI AYURVED COLLEGE JATH", city: "Sangli", code: "3193" },
{ sr: "38", name: "PHARATE PATIL AYURVEDIC MEDICAL COLLEGE", city: "Pune", code: "3196" },
{ sr: "39", name: "DR. S.P. PATIL AYURVEDIC MEDICAL COLLEGE", city: "Kolhapur", code: "3198" },
{ sr: "40", name: "SHIVAJIRAO PAWAR AYURVEDIC MEDICAL COLLEGE AT PACHAAGON TAL NEWASA", city: "Ahmednagar", code: "3199" },
{ sr: "41", name: "B MULAK AYURVED MAHAVIDYALAYA NANDANVAN", city: "Nagpur", code: "3234" },
{ sr: "42", name: "GRAMIN AYURVED MAHAVIDYALAYA NAVEGAON PATUR", city: "Akola", code: "3238" },
{ sr: "43", name: "SHREE GAJANAN MAHARAJ SANSTHAN AYU. COL. PUSAD", city: "Yavatmal", code: "3240" },
{ sr: "44", name: "APES'S MS AYURVEDIC M COLLEGE KUDWA", city: "Gondia", code: "3241" },
{ sr: "45", name: "SUNIL RAMSINGHJI CHUNAWALA AYU. MAHA. CHIKHLI", city: "Buldhana", code: "3252" },
{ sr: "46", name: "JUPITER AYURVEDIC MEDICAL COLLEGE", city: "Nagpur", code: "3257" },
{ sr: "47", name: "SKR PANDAV AYURVED MAHAVIDYALAYA", city: "Nagpur", code: "3263" },
{ sr: "48", name: "MUPS AYURVED MAHAVIDYALAYA RISOD DEGAON", city: "Washim", code: "3264" },
{ sr: "49", name: "SMT. VIMLADEVI AYURVEDIC COLLEGE", city: "Chandrapur", code: "3265" },
{ sr: "50", name: "ASPM AYURVED COLLEGE AND RESEARCH INSTITUTE SAGWAN", city: "Buldhana", code: "3266" },
{ sr: "51", name: "DR. R.N. LAHOTI AYURVEDIC COLLEGE & RESEARCH INSTITUTE", city: "Buldhana", code: "3271" },
{ sr: "52", name: "DR. RAJENDRA GHODE AYU. MAHAVIDYALAYA", city: "Amravati", code: "3273" },
{ sr: "53", name: "B MULAK AYURVED MAHAVIDYALAYA BUTIBORI", city: "Nagpur", code: "3274" },
{ sr: "54", name: "DATTA MEGHE AYURVED MEDICAL COLLEGE", city: "Nagpur", code: "3277" },
{ sr: "55", name: "SMT. SHALINITAI MEGHE AYURVED COLLEGE BHILEWADA", city: "Bhandara", code: "3286" },
{ sr: "56", name: "P.R. POTE PATIL COLLEGE OF MEDICAL SCIENCES", city: "Amravati", code: "3294" },
{ sr: "57", name: "CSMSS AYURVED MAHAVIDYALAYA KANCHANWADI", city: "Aurangabad", code: "3342" },
{ sr: "58", name: "LATE BABRUWAN VILLALRAO KALE AYURVED COLLEGE", city: "Latur", code: "3353" },
{ sr: "59", name: "BSPM'S DHANWANTARI AYU MAHAVIDYALAYA UDGIR", city: "Latur", code: "3354" },
{ sr: "60", name: "BSS'S RAMRAO PATIL AYU MAHAVIDYALAYA PURNA", city: "Parbhani", code: "3355" },
{ sr: "61", name: "ADITYA AYURVED MAHAVIDYALAYA", city: "Beed", code: "3367" },
{ sr: "62", name: "SAU. SHANTADEVI VEDPRAKASH PATIL AYURVED MAHAVIDYALAYA", city: "Hingoli", code: "3368" },
{ sr: "63", name: "SHIVA TRUST'S YESHVANTRAO CHAVAN AYURVED MAHAVIDYALAYA", city: "Aurangabad", code: "3369" },
{ sr: "64", name: "DR. VEDPRAKASH AYURVED MAHAVIDYALAYA REVGAON", city: "Jalna", code: "3375" },
{ sr: "65", name: "ANAND AYURVED MEDICAL COLLEGE VAIJAPUR", city: "Aurangabad", code: "3378" },
{ sr: "66", name: "SAI AYURVEDIC MEDICAL COLLEGE AND RESEARCH", city: "Aurangabad", code: "3389" },
{ sr: "67", name: "DHANESHWARI AYURVEDIC COLLEGE", city: "Aurangabad", code: "3390" },
{ sr: "68", name: "SHREE GORAKSHA AYURVEDIC MEDICAL COLLEGE KHAMGAON", city: "Buldhana", code: "3395" },
{ sr: "69", name: "PT. PU. GURUMAULI ANNASAHEB MORE AYURVEDIC COLLEGE MAJALGAON", city: "Beed", code: "3397" },

{ sr: "70", name: "SMT. CHANDABEN M PATEL HOMOEOPATHY COLLEGE", city: "Mumbai", code: "4101" },
{ sr: "71", name: "YERALA MED. TRUST'S HOMOEOPATHY COLLEGE, KHARGHAR", city: "New Mumbai", code: "4102" },
{ sr: "72", name: "VIRAR HOMOEOPATHIC MEDICAL COLLEGE", city: "Mumbai", code: "4103" },
{ sr: "73", name: "SAI HOMOEOPATHIC MEDICAL COLLEGE BHIWANDI", city: "Mumbai", code: "4104" },
{ sr: "74", name: "CHANDRAKANT H KELUSKAR HOMOEOPATHY COLLEGE", city: "Alibag", code: "4105" },
{ sr: "75", name: "KES LOKNETE ADV. DATTA PATIL HOM MED. COLLEGE", city: "Vengurla", code: "4106" },
{ sr: "76", name: "DAPOLI HOMOEOPATHIC MEDICAL COLLEGE APTI, DAPOLI", city: "Ratnagiri", code: "4107" },
{ sr: "77", name: "DHONDUMAMA SATHE HOMOEOPATHY MEDICAL COLLEGE", city: "Pune", code: "4108" },
{ sr: "78", name: "LFPEF'S HOMOEOPATHIC MEDICAL COLLEGE", city: "Chinchwad", code: "4109" },
{ sr: "79", name: "SJPES'S HOMOEOPATHIC MEDICAL COLLEGE", city: "Kolhapur", code: "4112" },
{ sr: "80", name: "V. Y. CHAVAN HOMOEOPATHY MEDICAL COLLEGE", city: "Kolhapur", code: "4113" },
{ sr: "86", name: "KAKASAHEB MHASKE HOMOEOPATHY MED COL", city: "AHMEDNAGAR", code: "4120" },
{ sr: "87", name: "MOTIWALA (MINORITY) HOMOEOPATHY MEDICAL COLLEGE", city: "NASIK", code: "4121" },
{ sr: "88", name: "KBA (MINORITY) HOM. MED. COLLEGE", city: "CHANDWAD", code: "4122" },
{ sr: "89", name: "KDMG HOMOEOPATHIC MEDICAL COLLEGE SHIRPUR", city: "DHULE", code: "4123" },
{ sr: "90", name: "VAMANRAO ITHAPE HOM. MED. COL", city: "SANGAMNER", code: "4141" },
{ sr: "91", name: "KSSM'S DHANWANTARI HOM. COLLEGE", city: "NASIK", code: "4142" },
{ sr: "92", name: "HOM.MED.COLLEGE, ALEPHATA JUNNAR", city: "PUNE", code: "4143" },
{ sr: "93", name: "PSPM'S MAHILA HOMOEOPATHIC MEDICAL COLLEGE", city: "SOLAPUR", code: "4144" },
{ sr: "94", name: "CHAMUNDAMATA HOM. MED. COL", city: "JALGAON", code: "4145" },
 { sr: "95", name: "DR. ULHAS PATIL HOMOEOPATHIC COLLEGE", city: "JALGAON", code: "4145" },
//  Second 
  // { sr: "97", name: "Nalasopara Ayurved Medical College, Vasai, Thane", city: "MUMBAI", fees: "1.85" },
  // { sr: "98", name: "YMT Ayurvedic Medical College, Kharghar", city: "MUMBAI", fees: "2.85" },
  // { sr: "99", name: "BSDTS Ayurved Mahavidyalaya, Wagholi", city: "PUNE", fees: "1.40" },
  // { sr: "100", name: "Pune District Education Association’s College of Ayurved & Research Centre", city: "PUNE", fees: "2.45" },
  // { sr: "101", name: "Maharashtra Arogya Mandal’s Sumati Bhai Shah Ayurved Mahavidyalaya, Hadapsar", city: "PUNE", fees: "1.78" },
  // { sr: "102", name: "Dr. J. J. Magdum Ayurved College, Jaysingpur", city: "KOLHAPUR", fees: "2.32" },
  // { sr: "103", name: "Hanuman Shikshan Prasarak Mandal Ayurvedic Medical College, Peth Vadgaon, Hatkanangale", city: "KOLHAPUR", fees: "2.35" },
  // { sr: "104", name: "Yashwant Ayurvedic Mahavidyalaya, Kodoli, Panhala", city: "KOLHAPUR", fees: "2.47" },
  // { sr: "105", name: "Late Kedari Redekar Ayurvedic College, Gadhinglaj", city: "KOLHAPUR", fees: "2.35" },
  // { sr: "106", name: "Sant Gajanan Maharaj Ayurved Medical College", city: "KOLHAPUR", fees: "1.65" },
  // { sr: "107", name: "Shri Annasaheb Dange Ayurved Medical College, Ashta, Walwa", city: "SANGLI", fees: "2.35" },
  // { sr: "108", name: "Loknete Rajaram Patil Ayurvedic Mahavidyalaya, Islampur, Walwa", city: "SANGLI", fees: "2.23" },
  // { sr: "109", name: "Jupiter Ayurvedic Medical College, Khamla Road", city: "NAGPUR", fees: "0.90" },
  // { sr: "110", name: "Datta Meghe Ayurvedic Medical College, Hospital & Research Centre", city: "NAGPUR", fees: "1.85" },
  // { sr: "111", name: "Sanmarg Shikshan Sanstha Shri K R Pandav Ayurvedic College", city: "NAGPUR", fees: "1.70" },
  // { sr: "112", name: "B. Mulak Ayurved Mahavidyalaya and Medical Science, Great Nag Road, Nandanwan", city: "NAGPUR", fees: "1.65" },
  // { sr: "113", name: "Datta Meghe Ayurvedic Medical College, Hospital & Research Centre", city: "NAGPUR", fees: "1.85" }
];


function BAMSCollege() {
  return (
    <div>
      <Nav/>
      <header className="w-full bg-[#49BBBD] py-[150px]  md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
           BAMS COLLEGES IN MAHARASHTRA
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
                <th className="px-6 py-6 w-[55%]">BAMS College’s Name</th>
                <th className="px-6 py-6 w-[10%]">CITY</th>
                {/* <th className="px-6 py-6 w-[15%]">CODE
Year (Lacs)</th> */}
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
        {college.code}
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

export default BAMSCollege
