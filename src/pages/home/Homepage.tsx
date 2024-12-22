import React from "react";
import Contact from "../../components/Contact";
import HeroSlider from "./Hero";


const HomePage: React.FC = () => {
  const slide = {
    id: 1,
    image: "/public/hero3.jpg",
    title: "",
    description: "",
  };

  return (
    <div>
      <HeroSlider slide={slide} />
      <Contact />
    </div>
  );
};

export default HomePage;
