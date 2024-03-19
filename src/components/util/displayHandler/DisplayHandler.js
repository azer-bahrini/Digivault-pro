import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
const DisplayHandler = ({ displayMode, setDisplayMode }) => {
  return (
    <div className="flex gap-3">
      <button
        className={
          displayMode === "grid"
            ? "p-2 bg-pr rounded-md border-pr border"
            : "bg-white border-pr rounded-md border p-2"
        }
        onClick={() => setDisplayMode("grid")}
      >
        <BsFillGrid3X3GapFill
          size={18}
          color={displayMode === "grid" ? "white" : "#2DADE4"}
        />
      </button>
      <button
        className={
          displayMode === "list"
            ? "p-2 bg-pr rounded-md border-pr border"
            : "bg-white border-pr rounded-md border p-2"
        }
        onClick={() => setDisplayMode("list")}
      >
        <FaList
          size={18}
          color={displayMode === "list" ? "white" : "#2DADE4"}
        />
      </button>
    </div>
  );
};

export default DisplayHandler;
