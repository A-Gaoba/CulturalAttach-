import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Speach: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="p-4 relative">
      <div className="py-16 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full max-w-5xl">
          <div className="w-full flex flex-col items-start gap-4">
            <h2 className="text-gray-900 text-3xl font-bold text-start leading-normal">
              {t('speech.title')}
            </h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed text-start">
              {t('speech.content.intro')}
              {isExpanded && (
                <>{t('speech.content.details')}</>
              )}
            </p>
            <button
              onClick={toggleReadMore}
              className="text-blue-500 font-medium underline"
            >
              {isExpanded ? t('speech.read_less') : t('speech.read_more')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speach;
