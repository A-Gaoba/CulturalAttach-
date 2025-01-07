import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  link?: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const updatedSlides = [...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updatedSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [updatedSlides.length]);

  return (
    <section className="p-4 md:p-6">
      <div className="relative w-full h-[70vh] max-w-7xl mx-auto overflow-hidden  ">
        {/* Carousel */}
        <div className="flex justify-center items-center h-full relative">
          {updatedSlides.map((slide, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + updatedSlides.length) % updatedSlides.length;
            const isNext =
              index === (currentIndex + 1) % updatedSlides.length;

            return (
              <div
                key={slide.id}
                className={`absolute transition-transform duration-700 ease-in-out p-2 ${
                  isActive
                    ? "scale-100  opacity-100"
                    : isPrev || isNext
                    ? "scale-75 z-10 opacity-70"
                    : "scale-50 z-0 opacity-0"
                }`}
                style={{
                  transform: isActive
                    ? "translateX(0)"
                    : isPrev
                    ? "translateX(-100%)"
                    : isNext
                    ? "translateX(100%)"
                    : "translateX(200%)",
                }}
              >
                <div
                  className={`w-[80vw] md:w-[60vw] overflow-hidden shadow-lg rounded-3xl ${
                    isActive ? "h-[70vh]" : "h-[60vh]"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  {isActive && (
                    <div className="absolute inset-0 text-white flex flex-col justify-end items-center text-center px-4 rounded-3xl">
                      <h2 className="text-2xl md:text-4xl font-bold mb-16">
                        {slide.title}
                      </h2>
                      <p className="text-sm md:text-lg mt-2">
                        {slide.description}
                      </p>
                      {slide.link && (
                        <Link
                          to={slide.link}
                          className="mt-4 inline-block px-6 py-2 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300"
                        >
                          {t("hero.read_more")}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 w-full flex justify-center items-center gap-4 z-20">
          {updatedSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full border-2 ${
                index === currentIndex
                  ? "bg-red-600 border-red-600"
                  : "bg-gray-400 border-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
