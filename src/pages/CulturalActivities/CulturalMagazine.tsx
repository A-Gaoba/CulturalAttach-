import React from 'react';
import { useTranslation } from 'react-i18next';

const CulturalMagazine: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{t('culturalMagazine.title')}</h3>
      <p className="p-2">{t('culturalMagazine.description')}</p>
      <iframe
        src="/book.pdf"
        width="100%"
        height="600px"
        title={t('culturalMagazine.iframeTitle')}
      />
    </div>
  );
};

export default CulturalMagazine;
