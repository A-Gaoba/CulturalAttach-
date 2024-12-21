import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-3xl  flex-shrink-0" />,
      label: "العنوان",
      value: "السفاره اليمنيه في موسكو",
      isLink: false,
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-3xl  flex-shrink-0" />,
      label: "الايميل",
      value: "mailto:someone@example.com",
      displayValue: "someone@example.com",
      isLink: true,
    },
    {
      id: 3,
      icon: <FaPhoneAlt className="text-3xl  flex-shrink-0" />,
      label: "الهاتف",
      value: "tel:+1234567890",
      displayValue: "+1 234 567 890",
      isLink: true,
    },
    {
      id: 4,
      icon: <FaWhatsapp className="text-3xl flex-shrink-0" />,
      label: "الواتساب",
      value: "https://wa.me/11234567890",
      displayValue: "إرسال رسالة",
      isLink: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6" dir="rtl">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">تواصل معنا</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A9EjRFueXqXH1XFOuMEdI9UBu6J0JgfL9&source=constructor&text=%D8%A7%D9%84%D8%B3%D9%81%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A%D8%A9+%D9%81%D9%8A+%D9%85%D9%88%D8%B3%D9%83%D9%88,+Pogodinskaya+Ulitsa+16+Moskva,+Russia,+Moscow,+119435"
            className="w-full h-96 md:h-full border-0"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Section: Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {contactInfo.map((item) => (
            <div key={item.id} className="flex items-start space-x-4 space-x-reverse">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h3>
                {item.isLink ? (
                  <a href={item.value} className=" hover:underline">
                    {item.displayValue}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
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
