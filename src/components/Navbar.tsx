import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";


const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedTitle, setSelectedTitle] = useState(t("navbar.home"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, label: t("navbar.home"), title: t("navbar.home"), path: "/" },
    { id: 2, label: t("navbar.about"), title: t("navbar.about"), path: "/almoulhaqia" },
    { id: 3, label: t("navbar.services"), title: t("navbar.services"), path: "/services" },
    { id: 4, label: t("navbar.activities"), title: t("navbar.activities"), path: "/activities" },
    { id: 5, label: t("navbar.announcements"), title: t("navbar.announcements"), path: "/announcements" },
    { id: 6, label: t("navbar.contact"), title: t("navbar.contact"), path: "/contact" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "ru", name: "Русский" },
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="relative z-10">
      {/* Navbar Section */}
      <nav className="shadow w-full p-2 md:pb-4 pb-1 border-b-2">
        <div className="flex justify-between md:justify-center md:items-center px-4 py-3 md:py-4 md:px-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="text-right hidden md:flex flex-col p-4">
              <h1 className="text-lg font-bold text-red-600">
                {t("navbar.logo.title")}
              </h1>
              <p className="text-sm text-red-400">
                {t("navbar.logo.subtitle")}
              </p>
            </div>
            <img src="/Yemen.png" alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Language Selector */}
          <div className={`relative top-0 right-0 left-0 ${i18n.language === "ar" ? "right-20" : "left-20"} z-10 bg-red-500 rounded-md flex justify-center left-20`}>
            <button
              title="language name"
              className="text-white md:px-3 md:py-2 p-4 rounded-md text-sm font-medium hover:text-black hover:bg-gray-200 focus:outline-none"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <FaGlobe />
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-200"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Burger Menu Icon */}
          <button
            title="menu"
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
          <div className="flex flex-col md:flex-row gap-4 py-2 md:py-0">
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
