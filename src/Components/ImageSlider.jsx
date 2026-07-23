import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider({ images = [], alt = "Campus" }) {
  const [index, setIndex] = useState(0);
  const slides = images.filter(Boolean);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const goPrev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative overflow-hidden shadow-lg group bg-gray-200">
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px]">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/65 text-white p-2 rounded-full opacity-90 md:opacity-0 md:group-hover:opacity-100 transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/65 text-white p-2 rounded-full opacity-90 md:opacity-0 md:group-hover:opacity-100 transition"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2.5 bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageSlider;
