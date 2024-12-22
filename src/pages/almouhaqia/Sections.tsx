import React, { useState } from 'react';

export const Sections: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "المستشار الثقافي",
      description: "يقوم بإدارة الشؤون الثقافية والإشراف على تحقيق أهداف الملحقية.",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "المستشار الثقافي المساعد للشؤون الماليه",
      description:
        "مسؤول عن الإشراف المالي وتقديم الدعم في إدارة الموارد المالية.",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "الشؤون الأكاديمية",
      description:
        "تتولى مسؤوليه متابعه الطلاب علميا واكاديميا والتواصل مع المؤسسات التعليميه.",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "العلاقات العامة والإعلام",
      description:
        "يتولى كل ما يتعلق بالانشطه الثقافيه والتنسيق مع الجامعات والجهات ذات العلاقه والخدمات الارشاديه والتوعيه للطلاب.",
      iconPath:
        "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z",
    },
    {
      title: "تقنيات المعلومات",
      description:
        "يتولى كلما تعلق بانشاء البنيه التقنيه للملحقيه والشبكه الداخليه بالاضافه الى الموقع الالكتروني للملحقيه على شبكه الانترنت والخدمات الالكترونيه المتعدده.",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "السكرتارية",
      description:
        "يتولى كل ما يتعلق بالبريد والارشفه ومخاطبه الجامعات وغيرها من مهام السكرتاريه المتعارف عليها.",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-black mb-6">اقسام الملحقيه</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-red-500 border border-gray-100/80 dark:border-gray-900/80 rounded-lg cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(index === hoveredIndex ? null : index)}
          >
            <span className="flex-shrink-0 text-gray-600 p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={section.iconPath} />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                {section.title}
              </h3>
              {hoveredIndex === index && (
                <p className="text-gray-700 dark:text-white text-sm mt-2">
                  {section.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
