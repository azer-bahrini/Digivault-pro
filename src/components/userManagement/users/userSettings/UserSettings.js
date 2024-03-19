import React from "react";
import { HiPencil } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";

const UserSettings = ({
  setUser,
  setShowDeleteWarning,
  user,
  setShowUpdateUserModal,
}) => {
  const handleWarningModal = () => {
    setUser(user);
    setShowDeleteWarning(true);
  };

  const handleUpdateModal = () => {
    setUser(user);
    setShowUpdateUserModal(true);
  };
  return (
    <ul className=" text-dark-pr ">
      <li className="hover:bg-pr hover:text-white">
        <button
          className="flex items-center gap-2  w-full justify-center py-1 border-b border-dark-pr "
          onClick={() => handleUpdateModal()}
        >
          <HiPencil />
          <span className="capitalize font-content font-medium text-base">
            update
          </span>
        </button>
      </li>
      <li className="hover:bg-pr hover:text-white">
        <button
          className="flex items-center gap-2  w-full justify-center py-1"
          onClick={() => handleWarningModal()}
        >
          <FaTrashAlt />
          <span className="capitalize font-content font-medium text-base">
            delete
          </span>
        </button>
      </li>
    </ul>
  );
};

export default UserSettings;
