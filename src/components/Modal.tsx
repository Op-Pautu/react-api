import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-50" />
      <div className="bg-[#1F1F1F] w-[500px] h-[400px] p-4 relative z-10">
        <div className="absolute top-0 right-0 p-2 cursor-pointer">
          <span onClick={onClose}>&times;</span>
        </div>
        <div className="p-4">
          {/* Your modal content goes here */}
          <h2 className="text-xl text-white font-bold mb-4">Modal Title</h2>
          <p className="text-white">Your modal content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
