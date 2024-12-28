import CulturalMagazine from './CulturalMagazine';
import CulturalWeek from './CulturalWeek';
import OfficialEvents from './OfficialEvents';
import Photos from './Photos';

const CulturalActivities = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">الأنشطة والفعاليات الثقافية</h2>
      <CulturalMagazine />
      <CulturalWeek />
      <OfficialEvents />
      <Photos />
    </div>
  );
};

export default CulturalActivities;
