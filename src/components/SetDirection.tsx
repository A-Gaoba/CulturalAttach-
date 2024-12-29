import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SetDirection: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if the current language is RTL or LTR
    if (i18n.language === "ar" || i18n.language === "he" || i18n.language === "fa") {
      // Set direction to RTL
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      // Set direction to LTR
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  return null;
};

export default SetDirection;
