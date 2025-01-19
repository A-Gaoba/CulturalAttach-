import React from "react";
import Contact from "../../components/Contact";
import HeroSlider from "./Hero";
import { useTranslation } from "react-i18next";
import NewsList from "../news/NewsList";
import { Link } from "react-router-dom";
// import useNews from "../../api/useNews";
// import { getDataByLastDays, shortenString } from "../../utils";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const slides = [
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
      title: "SOCOTRA ISLAND",
      description: "",
    },
    {
      id: 6,
      image: "/hero9.jpg",
      title: "DRAGON BLOOD TREE",
      description: "",
    },
    {
      id: 7,
      image: "/hero6.jpg",
      title: "DAR ALHAJAR",
      description: "",
    },
    {
      id: 8,
      image: "/hero7.jpg",
      title: "TAIZ CASTLE",
      description: "",
    },
    {
      id: 9,
      image: "/hero8.jpg",
      title: "LITTLE BIG BIN",
      description: "",
    },
    {
      id: 10,
      image: "/hero10.webp",
      title: "BILQIS' THRONE",
      description: "",
    },
    {
      id: 11,
      image: "/hero11.jpg",
      title: "SHAHARAH BRIDGE",
      description: "",
    },
  ];

  return (
    <div>
      <HeroSlider slides={slides} />

      <div className="flex md:flex-row flex-col-reverse ">
        <main className="w-3/4 p-4">
          <NewsList />
          <div className="text-center m-2">
            <Link
              to="/news"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition"
            >
              {t("hero.read_more")}
            </Link>
          </div>
        </main>

        <aside className="md:w-1/4 p-4 ">
          <ImportantNewsCard />
        </aside>
      </div>

      <Contact />
    </div>
  );
};

const ImportantNewsCard = () => {
  const importantNews = {
    id: 1,
    title: "Important News Title",
    description: "This is a description of the important news.",
    image: "/news/important.jpg",
    important: true,
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
      <Link to={`/news/${importantNews.id}`} className="group">
        <img src={importantNews.image} alt={importantNews.title} className="rounded-t-lg w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
            {importantNews.title}
          </h3>
          <p className="text-gray-600 mt-2">{importantNews.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
