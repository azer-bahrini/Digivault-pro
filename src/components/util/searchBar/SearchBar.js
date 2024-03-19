import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = () => {
  return (
    <div className="items-center flex w-1/6">
      <input
        className="font-content font-medium text-base border-pr border rounded-l-md flex-1 py-1 px-2  outline-none "
        placeholder="Search ..."
      />
      <button className="bg-pr px-3 py-2 rounded-r-md ">
        <FaMagnifyingGlass color="white" size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
