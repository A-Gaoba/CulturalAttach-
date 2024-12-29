import React from "react";
import Contact from "../../components/Contact";
import HeroSlider from "./Hero";
import { useTranslation } from "react-i18next";


const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const slide = {
    id: 1,
    image: "/hero3.jpg",
    title: t("hero.title"),
    description: t("hero.description"),
  };

  return (
    <div className="">
      <HeroSlider slide={slide} />
      <Contact />
    </div>
  );
};

export default HomePage;
