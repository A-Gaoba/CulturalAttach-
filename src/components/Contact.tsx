import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">تواصل معنا</h2>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Left Section: Contact Information */}
        <div className="flex-1  text-white p-6 rounded-lg shadow-lg space-y-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl text-red-500 mr-4" />
            <div>
              <label className="text-lg mb-1">العنوان</label>
              <p className="text-gray-400">السفارة العراقية في موسكو، Pogodinskaya Ulitsa 16 Moskva روسيا، Moscow, 119435</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-3xl text-blue-600 mr-4" />
            <div>
              <label className="text-lg mb-1">الايميل</label>
              <a href="mailto:someone@example.com" className="text-blue-500 hover:text-blue-700">
                someone@example.com
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhoneAlt className="text-3xl text-blue-600 mr-4" />
            <div>
              <label className="text-lg mb-1">الهاتف</label>
              <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">
                +1 234 567 890
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <FaWhatsapp className="text-3xl text-green-500 mr-4" />
            <div>
              <label className="text-lg mb-1">الواتساب</label>
              <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                إرسال رسالة
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Map */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 md:h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.com/map-widget/v1/?um=constructor%3A9EjRFueXqXH1XFOuMEdI9UBu6J0JgfL9&source=constructor&text=%D8%A7%D9%84%D8%B3%D9%81%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A%D8%A9+%D9%81%D9%8A+%D9%85%D9%88%D8%B3%D9%83%D9%88,+Pogodinskaya+Ulitsa+16+Moskva,+Russia,+Moscow,+119435"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
