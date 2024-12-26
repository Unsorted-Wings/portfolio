import React from 'react';

interface ModalAlertProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 text-gray-100 rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Notice</h2>
        <p className="mb-4">This portfolio is best viewed on a PC and is currently under development.</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalAlert;