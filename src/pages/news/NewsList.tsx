import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "./newsData";

interface NewsListProps {
  limit?: number;
}

const NewsList: React.FC<NewsListProps> = ({ limit }) => {
  const limitedNews = limit ? newsData.slice(0, limit) : newsData;

  return (
    <section className="flex items-center justify-center min-h-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {limitedNews.map((news) => (
          <div
            key={news.id}
            className="flex flex-col bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Link to={`/news/${news.id}`} className="group">
              {/* News Image */}
              <img
                src={news.image}
                alt={news.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                {/* News Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {news.title}
                </h3>
                {/* News Description */}
                <p className="text-gray-600 mt-2">{news.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsList;
