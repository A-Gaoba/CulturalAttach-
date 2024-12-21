import React, { useState } from 'react';
import TeamMember from './TeamMember';
import TeamMemberModal from './TeamMemberModal';

interface TeamMemberType {
  name: string;
  title: string;
  image: string;
  bio: string;
  cvLink: string;
}

const TeamHierarchy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(null);

  const handleMemberClick = (member: TeamMemberType) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center text-3xl font-bold text-gray-900 mb-8">طاقم الملحقية</div>

      {/* Top Level (Cultural Advisor) */}
      <div className="flex flex-col items-center mb-8">
        <TeamMember
          name="د. خالد شعلل"
          title="المستشار الثقافي"
          image="/path/to/image.jpg"
          onClick={() => handleMemberClick({
            name: "د. خالد شعلل",
            title: "المستشار الثقافي",
            image: "/path/to/image.jpg",
            bio: "Some bio about the member.",
            cvLink: "/cv.pdf"
          })}
        />
      </div>

      {/* Second Level (Assistant Advisor) */}
      <div className="flex flex-col items-center mb-8 relative">
        <div className="w-px h-8 bg-gray-500 absolute top-8"></div>
        <TeamMember
          name="أ. فؤاد الطائني"
          title="المستشار الثقافي المساعد"
          image="/path/to/image.jpg"
          onClick={() => handleMemberClick({
            name: "أ. فؤاد الطائني",
            title: "المستشار الثقافي المساعد",
            image: "/path/to/image.jpg",
            bio: "Some bio about the member.",
            cvLink: "/cv.pdf"
          })}
        />
      </div>

      {/* Third Level (Departments) */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:flex-row sm:gap-8">
        <div className="flex flex-col items-center relative">
          <TeamMember
            name="فلورا"
            title="السكرتارية"
            image="/path/to/image.jpg"
            onClick={() => handleMemberClick({
              name: "فلورا",
              title: "السكرتارية",
              image: "/path/to/image.jpg",
              bio: "Some bio about the member.",
              cvLink: "/cv.pdf"
            })}
          />
        </div>

        <div className="flex flex-col items-center relative">
          <TeamMember
            name="؟ تقني"
            title="تقنية المعلومات"
            image="/path/to/image.jpg"
            onClick={() => handleMemberClick({
              name: "؟ تقني",
              title: "تقنية المعلومات",
              image: "/path/to/image.jpg",
              bio: "Some bio about the member.",
              cvLink: "/cv.pdf"
            })}
          />
        </div>

        <div className="flex flex-col items-center relative">
          <TeamMember
            name="أ. منصور الصلوي"
            title="الشؤون الأكاديمية"
            image="/path/to/image.jpg"
            onClick={() => handleMemberClick({
              name: "أ. منصور الصلوي",
              title: "الشؤون الأكاديمية",
              image: "/path/to/image.jpg",
              bio: "Some bio about the member.",
              cvLink: "/cv.pdf"
            })}
          />
        </div>

        <div className="flex flex-col items-center relative">
          <TeamMember
            name="د. أحمد المنغمس"
            title="العلاقات العامة والإعلام"
            image="/path/to/image.jpg"
            onClick={() => handleMemberClick({
              name: "د. أحمد المنغمس",
              title: "العلاقات العامة والإعلام",
              image: "/path/to/image.jpg",
              bio: "Some bio about the member.",
              cvLink: "/cv.pdf"
            })}
          />
        </div>
      </div>

      {/* Modal */}
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name={selectedMember?.name ?? ""}
        title={selectedMember?.title ?? ""}
        image={selectedMember?.image ?? ""}
        bio={selectedMember?.bio ?? ""}
        cvLink={selectedMember?.cvLink ?? ""}
      />
    </div>
  );
};

export default TeamHierarchy;
