import React from "react";

const Boffer: React.FC = () => {
  return (
    <div dir="rtl" className="relative h-32 sm:h-80 md:h-96 lg:h-[18rem] flex items-center overflow-hidden">
      {/* Red background curve */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e4002b" fillOpacity="1" d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,149.3C672,181,768,203,864,202.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64V320H0Z"></path>
        </svg>
      </div>

      {/* Black and white circle with emblem */}
      <div className="absolute left-2 sm:left-4 md:left-8 lg:left-12 flex items-center">
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-black rounded-full flex items-center justify-center">
          <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center">
            <img src="/Yemen.png" alt="Emblem" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
          </div>
        </div>
      </div>


      {/* Title and text */}
      <div className="relative text-right pr-4 sm:pr-8 md:pt-6 z-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
          الملحقية الثقافية
        </h1>
        <p className="w-60 md:w-full md:text-lg text-xs lg:text-xl text-white">
          إدارة الشؤون الثقافية للطلاب الدراسين بالخارج
        </p>
      </div>
    </div>
  );
};

export default Boffer;
