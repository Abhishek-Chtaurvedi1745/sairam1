import React from "react";

function City() {
 
    const cities = [
  {
    id: 1,
    title: "MH",
    desc: "Pune, Mumbai, Nagpur, Nashik, Aurangabad",
    img: "/assets/mh.svg",
    bgColor: "#E2F0FF",
  },
  {
    id: 2,
    title: "Gujarat",
    desc: "Ahmedabad, Surat, Vadodara, Rajkot",
    img: "/assets/gujrat.svg",
    bgColor: "#B3EFEA",
  },
  {
    id: 3,
    title: "Rajasthan",
    desc: "Jaipur, Kota, Udaipur",
    img: "/assets/rajasthan.svg",
    bgColor: "#C8EBEB",
  },
  {
    id: 4,
    title: "Hariyana",
    desc: "Gurugram, Faridabad, Rohtak",
    img: "/assets/hariyana.svg",
    bgColor: "#CED5FA",
  },
];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
      
      <h2 className="text-[32px] font-bold text-[#000000] mb-2">
        City Wise Segregation
      </h2>
      
      <p className="font-medium text-[20px] mb-4">
        Admissions Support Across Major Cities
      </p>
      </div>
     
  <div className="flex items-center justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[95%] md:w-[80%] gap-6">
    {cities.map((city) => (
      <div
        key={city.id}
        className="shadow-[0_7px_20px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden p-4 pr-[1px]"
      >
       <img
  src={city.img}
  alt={city.title}
  style={{ backgroundColor: city.bgColor }}
  className="object-cover rounded-lg mb-4 p-6"
/>


        <h3 className="text-[20px] md:text-[25px] font-semibold text-left text-[#000000]">
          {city.title}
        </h3>

        <p className=" text-[15px] pr-2 md:text-[20px] font-medium  text-[#000000] text-left">
          {city.desc}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default City;
