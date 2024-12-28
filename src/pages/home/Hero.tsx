// Import required dependencies
import React from "react";
import "tailwindcss/tailwind.css";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface HeroSliderProps {
  slide: Slide;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden md:-mt-48 -mt-44">
      {/* Single Slide */}
      <div className="w-full h-screen flex-shrink-0 relative">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 flex flex-col justify-center items-center gap-4 text-center text-white px-6">
          <h2 className="sm:text-5xl md:text-5xl lg:text-6xl font-bold mt-16 md:mt-40 w-[70%]">{slide.title}</h2>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl">{slide.description}</p>
          <a
            href="/almoulhaqia" 
            className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300"
          >
            اقرأ المزيد
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;