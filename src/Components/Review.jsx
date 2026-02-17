import React, { useEffect, useRef, useState } from "react";

function Review() {
  const reviews = [
    { value: 5000, suffix: "+", text: "Students Consulted" },
    { value: 75, suffix: "+", text: "Institute Tie Ups" },
    { value: 18, suffix: "+", text: "Years of Experience" },
    { value: 80, suffix: "+", text: "Locations Served" },
  ];

  const [counts, setCounts] = useState(reviews.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          reviews.forEach((item, index) => {
            let current = 0;
            const end = item.value;
            const duration = 1200; 
            const interval = 16; 
            const step = Math.ceil(end / (duration / interval));

            const timer = setInterval(() => {
              current += step;

              if (current >= end) {
                current = end;
                clearInterval(timer);
              }

              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = current;
                return updated;
              });
            }, interval);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[60px] md:py-0 md:pb-4 px-6 bg-[#002741]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {reviews.map((item, index) => (
          <div key={index}>
            <h3 className="text-[32px] lg:text-[73px] font-semibold text-white">
              {counts[index].toLocaleString()}
              {item.suffix}
            </h3>
            <p className="text-[18px] lg:text-[25px] text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
