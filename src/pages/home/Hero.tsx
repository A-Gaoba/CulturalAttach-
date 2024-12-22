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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Single Slide */}
      <div className="w-full h-screen flex-shrink-0 relative">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h2>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl">{slide.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;