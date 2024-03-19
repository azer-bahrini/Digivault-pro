"use client";
import React from "react";

const ActionButton = ({ icon, text, action }) => {
  return (
    <button
      onClick={action}
      className="flex items-center bg-pr rounded-md gap-6 font-content font-medium text-lg text-white px-6 py-1"
    >
      {icon}
      {text}
    </button>
  );
};

export default ActionButton;
