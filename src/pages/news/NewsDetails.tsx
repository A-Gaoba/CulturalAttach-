import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "./newsData";

const NewsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = newsData.find((item) => item.id === parseInt(id!, 10));
  const relatedNews = newsData.filter((item) => item.id !== parseInt(id!, 10));

  if (!news) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-lg">
        الخبر غير موجود.
      </div>
    );
  }

  return (
    <div dir="rtl" className="container mx-auto px-6 py-10 lg:flex lg:gap-12">
      {/* Main Article Section */}
      <main className="lg:flex-1 bg-white p-6 rounded-lg shadow-lg">
        <img
          src={news.image}
          alt={news.title}
          className="rounded-lg mb-6 w-full h-80 object-cover shadow-md"
        />
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{news.title}</h1>
        <p className="text-gray-700 leading-loose whitespace-pre-line">{news.content}</p>
      </main>

      {/* Related News Section */}
      <aside className="mt-12 lg:mt-0 lg:w-1/3">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">أخبار ذات صلة</h2>
        <ul className="space-y-6">
          {relatedNews.map((item) => (
            <li key={item.id} className="flex items-start gap-4 border p-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg shadow-md"
              />
              <Link
                to={`/news/${item.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default NewsDetails;
