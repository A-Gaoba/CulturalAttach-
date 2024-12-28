import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState("الرئيسيه");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "الرئيسيه", title: "الرئيسيه", path: "/" },
    { id: 2, label: "الملحقية", title: "الملحقية", path: "/almoulhaqia" },
    { id: 3, label: "خدمات الكترونيه", title: "خدمات الكترونيه", path: "/services" },
    { id: 4, label: "الأنشطة والفعاليات", title: "الأنشطة والفعاليات", path: "/activities" },
    { id: 5, label: "الإعلانات والإشعارات", title: "الإعلانات والإشعارات", path: "/announcements" },
    { id: 6, label: "اتصل بنا", title: "اتصل بنا", path: "/contact" },
  ];

  return (
    <div dir="rtl" className=" relative z-10">
      {/* Navbar Section */}
      <nav className="shadow w-full p-2 md:pb-4 pb-1 border-b-2"      >
        <div className="flex justify-between md:justify-center md:items-center px-4 py-3 md:py-4 md:px-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="text-right hidden md:flex flex-col p-4">
              <h1 className="text-lg font-bold text-red-600">
                الملحقية الثقافية بسفارة الجمهورية اليمنية - موسكو
              </h1>
              <p className="text-sm text-red-400 ">
                Культурный отдел (Посольство Республики Йемен в Москве)
              </p>
            </div>
            <img src="/Yemen.png" alt="Logo" className="h-12 w-auto " />
          </div>

          {/* Burger Menu Icon */}
          <button
            title="title"
            className="md:hidden text-red-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`md:flex md:justify-center md:items-center bg-gray-100 md:static md:bg-transparent ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-x-reverse py-2 md:py-0">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium md:text-base ${selectedTitle === item.title
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-red-500 hover:text-white"
                  }`}
                onClick={() => {
                  setSelectedTitle(item.title);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;

// {/* Hero Section */}
// <div className="flex justify-between items-center bg-slate-400 w-full px-4 py-2 mt-20">
//   {/* Left-Aligned Text */}
//   <p className="text-white text-base font-bold">
//     الملحقية الثقافية بسفارة الجمهورية اليمنية - موسكو
//   </p>

//   {/* Right-Aligned Dynamic Title */}
//   <p className="text-white text-base">{selectedTitle}</p>
// </div>
