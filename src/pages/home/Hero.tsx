// Import required dependencies
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { newsData } from "../news/newsData"; // Assuming this is where newsData is located

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

  // Add the last news as a slide dynamically
  const latestNews = newsData[newsData.length - 1];
  const updatedSlides = [
    ...slides,
    {
      id: latestNews.id,
      image: latestNews.image,
      title: latestNews.title,
      description: latestNews.description,
      link: `/news/${latestNews.id}`,
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updatedSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [updatedSlides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {updatedSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex-shrink-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0 z-0 pointer-events-none"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full md:object-fill object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 flex flex-col justify-center items-center gap-4 text-center text-white px-6">
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl">{slide.description}</p>
            {slide.link && (
              <Link
                to={slide.link}
                className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300"
              >
                {t("hero.read_more")}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Circle Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center items-center gap-4">
        {updatedSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 ${index === currentIndex ? "bg-red-600 border-red-600" : "bg-gray-400 border-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
