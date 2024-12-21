import React from 'react';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  title: string;
  image: string;
  bio: string;
  cvLink: string;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ isOpen, onClose, name, title, image, bio, cvLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 md:w-2/3 lg:w-1/2 max-w-4xl relative">
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700">
          &times;
        </button>

        <div className="flex items-center space-x-4">
          <img src={image} alt={name} className="w-20 h-20 rounded-full border-2 border-gray-500" />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="mt-4 text-sm text-gray-800">{bio}</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-lg">CV</h4>
          <iframe
            src={cvLink} 
            className="w-full h-96" // Responsive width and height
            frameBorder="0"
            title="CV"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
