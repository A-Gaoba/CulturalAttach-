import React from "react";
import Additions from "./Additions";
import MinistryInstructions from "./MinistryInstructions";
import RegistrationInRussianGrants from "./RegistrationInRussianGrants";
import StudentStatistics from "./StudentStatistics";
import StudyInRussia from "./StudyInRussia";
import RussianUniversitiesGuide from "./RussianUniversitiesGuide";

const AnnouncementsAndNotifications: React.FC = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        الإعلانات والإشعارات
      </h1>
      <div className="border border-gray-300 p-4 rounded-lg shadow-sm space-y-4">
        <Additions />
        <MinistryInstructions />
        <RegistrationInRussianGrants />
        <StudentStatistics />
        <StudyInRussia />
        <RussianUniversitiesGuide />
      </div>
    </div>
  );
};

export default AnnouncementsAndNotifications;
