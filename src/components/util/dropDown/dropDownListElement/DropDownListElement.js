import React from "react";

const DropdownListElement = ({ value, setFilter, setIsDropDownOpen }) => {
  const handleChoiceSelect = () => {
    setIsDropDownOpen(false);
    setFilter(value);
  };
  return (
    <li className="pl-2 py-2 text-dark-pr border-b font-content font-medium text-lg hover:bg-pr hover:text-white">
      <button className="h-full w-full" onClick={handleChoiceSelect}>
        {value}
      </button>
    </li>
  );
};

export default DropdownListElement;
