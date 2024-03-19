"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import DropdownListElement from "./dropDownListElement/DropDownListElement";

const DropDown = ({ filter, setFilter, list }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <div className="w-full relative ">
      <button
        className="bg-pr rounded-md text-white flex w-full justify-between items-center px-3 py-1 text-lg font-content font-medium"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        {filter}
        {isDropDownOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isDropDownOpen && (
        <div className="w-full absolute  z-10 bg-white border border-dark-pr rounded-md ">
          <ul className="">
            {list.map((item) => {
              return (
                <DropdownListElement
                  value={item}
                  setFilter={setFilter}
                  setIsDropDownOpen={setIsDropDownOpen}
                  key={item}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
