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
  autoPlay?: boolean;
  interval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides if autoPlay is enabled
  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-screen flex-shrink-0 relative">
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
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 text-white rounded-full p-4 hover:bg-opacity-80 transition"
        aria-label="Previous Slide"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 text-white rounded-full p-4 hover:bg-opacity-80 transition"
        aria-label="Next Slide"
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full border-2 ${currentSlide === index ? "bg-white border-white" : "bg-gray-500 border-gray-500"} transition`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
