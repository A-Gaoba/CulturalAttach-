import CulturalMagazine from './CulturalMagazine';
import CulturalWeek from './CulturalWeek';
import OfficialEvents from './OfficialEvents';
import Photos from './Photos';
import { useTranslation } from 'react-i18next';

const CulturalActivities = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <h2 className="text-xl font-bold mb-4">{t(`culturalActivities.title`)}</h2>
      <CulturalMagazine />
      <CulturalWeek />
      <OfficialEvents />
      <Photos />
    </div>
  );
};

export default CulturalActivities;
