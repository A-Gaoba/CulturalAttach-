import React from "react";
import { useTranslation } from "react-i18next";

const Boffer: React.FC = () => {
  const { t, i18n } = useTranslation(); // Hook to get translation function and current language

  const isArabic = i18n.language === "ar"; // Check if the language is Arabic

  return (
    <section className="relative">
      <div
        dir={isArabic ? "rtl" : "ltr"} // Set the direction based on the language
        className="relative h-24 lg:h-[18rem] md:h-96 flex items-center overflow-hidden w-full max-w-7xl px-4 lg:px-5 mx-auto"
      >
        {/* Red background curve */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#e4002b" fillOpacity="1" d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,149.3C672,181,768,203,864,202.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64V320H0Z"></path>
          </svg>
        </div>

        {/* Black and white circle with emblem */}
        <div className={`absolute ${isArabic ? 'left-2 sm:left-4 md:left-8 lg:left-12' : 'right-2 sm:right-4 md:right-8 lg:right-12'} flex items-center`}>
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-black rounded-full flex items-center justify-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center">
              <img src="/yemen-minstry.png" alt="Emblem" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
          </div>
        </div>

        {/* Title and text */}
        <div className={`relative ${isArabic ? 'text-right md:pr-4 pr-1 md:pt-6' : 'text-left md:pl-4 pl-1 md:pt-6'}`}>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
            {t("boffer.title")}
          </h1>
          <p className="w-60 md:w-full md:text-lg text-xs lg:text-xl text-white">
            {t("boffer.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Boffer;
