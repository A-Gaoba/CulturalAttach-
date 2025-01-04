import React from "react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, description, image, date }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-gray-500 text-xs mt-4">{date}</p>
        <Link
          to={`/news/${id}`}
          className="text-blue-600 hover:underline mt-4 block"
        >
          اقرأ المزيد
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
