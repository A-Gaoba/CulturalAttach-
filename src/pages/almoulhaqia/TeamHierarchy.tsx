import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const handleMemberClick = (member: TeamMemberType) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const teamMembers = [
    {
      name: t('team.advisor.name'),
      title: t('team.advisor.title'),
      image: '/photo.png',
      bio: t('team.advisor.bio'),
      cvLink: '/cv.pdf',
    },
    {
      name: t('team.assistant.name'),
      title: t('team.assistant.title'),
      image: '/photo.png',
      bio: t('team.assistant.bio'),
      cvLink: '/cv.pdf',
    },
    {
      name: t('team.secretary.name'),
      title: t('team.secretary.title'),
      image: '/photo.png',
      bio: t('team.secretary.bio'),
      cvLink: '/cv.pdf',
    },
    {
      name: t('team.it.name'),
      title: t('team.it.title'),
      image: '/photo.png',
      bio: t('team.it.bio'),
      cvLink: '/cv.pdf',
    },
    {
      name: t('team.academic.name'),
      title: t('team.academic.title'),
      image: '/photo.png',
      bio: t('team.academic.bio'),
      cvLink: '/cv.pdf',
    },
    {
      name: t('team.publicRelations.name'),
      title: t('team.publicRelations.title'),
      image: '/photo.png',
      bio: t('team.publicRelations.bio'),
      cvLink: '/cv.pdf',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center text-3xl font-bold text-gray-900 mb-8">{t('team.title')}</div>

      {/* Top Level (Cultural Advisor) */}
      <div className="flex flex-col items-center mb-8">
        <TeamMember
          name={teamMembers[0].name}
          title={teamMembers[0].title}
          image={teamMembers[0].image}
          onClick={() => handleMemberClick(teamMembers[0])}
        />
      </div>

      {/* Second Level (Assistant Advisor) */}
      <div className="flex flex-col items-center mb-8 relative">
        <TeamMember
          name={teamMembers[1].name}
          title={teamMembers[1].title}
          image={teamMembers[1].image}
          onClick={() => handleMemberClick(teamMembers[1])}
        />
      </div>

      {/* Third Level (Departments) */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:flex-row sm:gap-8">
        {teamMembers.slice(2).map((member, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <TeamMember
              name={member.name}
              title={member.title}
              image={member.image}
              onClick={() => handleMemberClick(member)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name={selectedMember?.name ?? ''}
        title={selectedMember?.title ?? ''}
        image={selectedMember?.image ?? ''}
        bio={selectedMember?.bio ?? ''}
        cvLink={selectedMember?.cvLink ?? ''}
      />
    </div>
  );
};

export default TeamHierarchy;
