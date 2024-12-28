const UsefulLinks = () => {
  return (
    <div id="useful-links" className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">روابط مفيدة</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        مجموعة من الروابط المفيدة للطلاب المهتمين بالمنح الدراسية في روسيا.
      </p>
      <ul className="list-disc list-inside text-blue-500 space-y-2">
        <li>
          <a
            href="https://od.globaluni.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            برنامج Open Doors للمنح الدراسية
          </a>
        </li>
        <li>
          <a
            href="https://future-in-russia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            موقع Future in Russia للمعلومات عن الدراسة في روسيا
          </a>
        </li>
        <li>
          <a
            href="https://studyinrussia.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            الدراسة في روسيا - Study in Russia
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UsefulLinks;
