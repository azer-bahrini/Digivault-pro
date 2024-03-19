import React from "react";
import { HiPencil } from "react-icons/hi2";

const PenButton = ({ size, onPress }) => {
  return (
    <button onClick={onPress}>
      <HiPencil size={size} color="#2DADE4" />
    </button>
  );
};

export default PenButton;
