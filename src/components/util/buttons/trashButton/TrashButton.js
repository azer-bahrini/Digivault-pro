import React from "react";

import { FaTrashAlt } from "react-icons/fa";
const TrashButton = ({ size, onPress }) => {
  return (
    <button onClick={onPress}>
      <FaTrashAlt size={size} color="#E21C4A" />
    </button>
  );
};

export default TrashButton;
