import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  onClick: () => void;  
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, image, onClick }) => {
  return (
    <div className="flex flex-col items-center space-y-2 p-4 cursor-pointer" onClick={onClick}>
      <img src={image} alt={name} className="w-20 h-20 rounded-full border-2 border-gray-500" />
      <div className="text-center font-semibold text-gray-900">{name}</div>
      <div className="text-center text-sm text-gray-600">{title}</div>
    </div>
  );
};

export default TeamMember;
