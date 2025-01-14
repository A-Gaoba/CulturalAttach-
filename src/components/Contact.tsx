import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-3xl flex-shrink-0" />,
      label: t("contact.address"),
      value: t("Mytnaya Street, 3, Moscow, 119049"),
      isLink: false,
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-3xl flex-shrink-0" />,
      label: t("contact.email"),
      value: "mailto:mulhakia_rus@hotmail.com",
      displayValue: "mulhakia_rus@hotmail.com",
      isLink: true,
    },
    {
      id: 3,
      icon: <FaPhoneAlt className="text-3xl flex-shrink-0" />,
      label: t("contact.phone"),
      value: "tel:+7 499-246-31-06",
      displayValue: "499-246-31-06",
      isLink: true,
    },
    {
      id: 4,
      icon: <FaWhatsapp className="text-3xl flex-shrink-0" />,
      label: t("contact.whatsapp"),
      value: "https://wa.me/+79686257772",
      displayValue: t("contact.whatsapp_message"),
      isLink: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
        {t("contact.title")}
      </h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border p-4">
        {/* Left Section: Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=37.615713%2C55.727612&z=16&l=map&text=Mytnaya%20Street%2C%203%2C%20Moscow%2C%20119049"
            className="w-full h-96 md:h-full border-0"
            allowFullScreen={true}
            title="Map showing Mytnaya Street, 3, Moscow, 119049"
          // loading="lazy"
          ></iframe>
        </div>

        {/* Right Section: Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {contactInfo.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h3>
                {item.isLink ? (
                  <a href={item.value} className="hover:underline">
                    {item.displayValue}
                  </a>
                ) : (
                  <p className="text-gray-600 " >{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
