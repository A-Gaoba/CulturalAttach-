import React from 'react';
import { useTranslation } from 'react-i18next';

const OfficialEvents: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{t('officialEvents.title')}</h3>
      <p>{t('officialEvents.description')}</p>
    </div>
  );
};

export default OfficialEvents;
