import React from "react";
import { IoClose } from "react-icons/io5";
const CloseButton = ({ setShowModal }) => {
  return (
    <button onClick={() => setShowModal(false)}>
      <IoClose size={46} color="#5A6E76" />
    </button>
  );
};

export default CloseButton;
