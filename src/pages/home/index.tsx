import React from "react";
import Contact from "../../components/Contact";
import HeroSlider from "./Hero";
import { useTranslation } from "react-i18next";
import NewsList from "../news/NewsList";
import { Link } from "react-router-dom";


const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const slides = [
    // {
    //   id: 1,
    //   image: "/hero1.jpg",
    //   title: "SANA'A",
    //   description: "",
    // },
    {
      id: 1,
      image: "/hero3.jpg",
      title: "OLD SANA'A",
      description: "",
    },
    {
      id: 2,
      image: "/hero2.jpg",
      title: "SHIBAM",
      description: "",
    },
    {
      id: 4,
      image: "/hero4.jpg",
      title: "TAWILA TANKS",
      description: "",
    },
    {
      id: 5,
      image: "/hero5.jpg",
      title: " SOCOTRA ISLAND",
      description: "",
    },
    {
      id: 6,
      image: "/hero6.jpg",
      title: "DAR ALHAJAR",
      description: "",
    },
    {
      id: 7,
      image: "/hero7.jpg",
      title: "TAIZ-CASTLE",
      description: "",
    },
  ];


  return (
    <div className="">
      <HeroSlider slides={slides} />
      <div>

        <NewsList limit={3} />
        <div className="text-center m-2">
          <Link
            to="/news"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition"
          >
            {t("hero.read_more")}
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default HomePage;
