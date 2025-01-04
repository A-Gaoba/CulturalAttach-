// Import required dependencies
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className=" relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex-shrink-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100 " : "opacity-0 z-0 pointer-events-none"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 flex flex-col justify-center items-center gap-4 text-center text-white px-6">
            <h2 className="sm:text-3xl md:text-3xl lg:text-4xl font-bold">{slide.title}</h2>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl">{slide.description}</p>
            {/* <Link
              to="/almoulhaqia"
              className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300"
            >
              {t("hero.read_more")}
            </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
