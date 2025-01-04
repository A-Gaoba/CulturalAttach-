import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    { code: "ar", name: "العربية" },
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <div dir="ltr" className="sticky md:relative top-0 z-10 bg-white shadow-md">
      {/* Navbar Section */}
      <nav className="shadow w-full p-2 md:pb-4 pb-1 border-b-2">
        <div className="flex justify-between md:justify-center gap-8 items-center px-4 py-3 md:py-4 md:px-6">
          {/* Logo */}
          <img src="/Yemen.png" alt="Logo" className="md:h-12 h-8 w-auto" />

          {/* Title and Subtitle */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-xs md:text-xl font-bold text-red-600 md:w-auto">
              {t("navbar.logo.title")}
            </h1>
            <p className="text-xs hidden md:flex text-red-400">
              {t("navbar.logo.subtitle")}
            </p>
          </div>

          {/* Burger Menu and Language Selector */}
          <div className="flex items-center space-x-4">
            <button
              title="language name"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="text-red-600 text-lg flex items-center justify-center"
            >
              {i18n.language === "ar" && (
                <img
                  src="/flags/sa.png"
                  alt="Saudi Flag"
                  className="max-w-6 object-cover "
                />
              )}
              {i18n.language === "en" && (
                <img
                  src="/flags/en.png"
                  alt="UK Flag"
                  className="max-w-6 h-4 object-cover "
                />
              )}
              {i18n.language === "ru" && (
                <img
                  src="/flags/ru.png"
                  alt="Russia Flag"
                  className="max-w-6 object-cover "
                />
              )}
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute right-14 md:right-[21rem] mt-20 w-28 bg-white rounded-md shadow-lg z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-red-200"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}

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
        </div>

        {/* Navigation Menu */}
        <div
          className={`md:flex md:justify-center md:items-center bg-gray-100 md:static md:bg-transparent ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          {/* <div className="flex flex-col md:flex-row-reverse "> */}
          <div className={`flex flex-col md:flex-row gap-4 py-2 md:py-0 ${i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
            }`}>
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
