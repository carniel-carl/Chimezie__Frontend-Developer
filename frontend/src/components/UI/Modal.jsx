import React from "react";

const Modal = ({ isVisible, onClose, data }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 z-30 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-5xl place-self-end"
          onClick={onClose}
        >
          X
        </button>
        <div className="bg-white p-2 rounded ">hello</div>
      </div>
    </div>
  );
};

export default Modal;
