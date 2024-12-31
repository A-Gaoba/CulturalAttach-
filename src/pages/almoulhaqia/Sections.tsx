import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Sections: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const sections = [
    {
      title: t('sections.cultural_advisor.title'),
      description: t('sections.cultural_advisor.description'),
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      title: t('sections.assistant_financial_advisor.title'),
      description: t('sections.assistant_financial_advisor.description'),
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      title: t('sections.academic_affairs.title'),
      description: t('sections.academic_affairs.description'),
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      title: t('sections.public_relations.title'),
      description: t('sections.public_relations.description'),
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      title: t('sections.it.title'),
      description: t('sections.it.description'),
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      title: t('sections.secretary.title'),
      description: t('sections.secretary.description'),
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
  ];

  return (
    <section className="p-4 relative">
      <div className="p-4 md:p-6 lg:p-8 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <h1 className="text-2xl font-bold text-black mb-6">{t('sections.title')}</h1>
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
    </section>
  );
};
