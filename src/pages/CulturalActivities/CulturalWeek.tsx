import React from 'react';
import { useTranslation } from 'react-i18next';

const CulturalWeek: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{t('culturalWeek.title')}</h3>
      <p>{t('culturalWeek.description')}</p>
    </div>
  );
};

export default CulturalWeek;
