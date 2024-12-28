import React from "react";
import Contact from "../../components/Contact";
import HeroSlider from "./Hero";


const HomePage: React.FC = () => {
  const slide = {
    id: 1,
    image: "/hero3.jpg",
    title: "الموقع الرسمي للملحقيه الثقافيه اليمنيه في موسكو",
    description: "يوفر معلومات شاملة ودقيقة لجميع الطلاب اليمنيين في روسيا.",
  };

  return (
    <div className="">
      <HeroSlider slide={slide} />
      <Contact />
    </div>
  );
};

export default HomePage;
