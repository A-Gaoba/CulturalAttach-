import React from "react";
import NewsList from "./NewsList";

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="p-4 max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">الأخبار</h1>
        </div>
      </header>

      <main>
        <NewsList />
      </main>
    </div>
  );
};

export default NewsPage;
