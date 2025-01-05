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
    <div dir="rtl" className="container mx-auto p-6 lg:flex lg:gap-8">
      {/* Main Content */}
      <article className="lg:flex-1">
        <img
          src={news.image}
          alt={news.title}
          className="rounded-lg mb-6 w-full h-64 object-cover shadow-md"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{news.title}</h1>
        <p className="text-gray-700 leading-relaxed">{news.content}</p>
      </article>

      {/* Sidebar */}
      <aside className="mt-10 lg:mt-0 lg:w-1/3">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">أخبار ذات صلة</h2>
        <ul className="space-y-4">
          {relatedNews.map((item) => (
            <li key={item.id} className="border-b pb-4 last:border-none">
              <Link
                to={`/news/${item.id}`}
                className="text-blue-600 hover:underline font-medium"
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
