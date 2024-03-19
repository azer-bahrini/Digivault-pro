import React from "react";

import { FaPlus } from "react-icons/fa6";

import SearchBar from "@/components/util/searchBar/SearchBar";
import ActionButton from "@/components/util/buttons/actionButton/ActionButton";

const GroupManagementHeader = ({ setShowCreateGroupModal }) => {
  const handleGroupCreateModal = () => {
    setShowCreateGroupModal(true);
  };
  return (
    <div className="flex justify-between items-center">
      <SearchBar />
      <div className="flex gap-6 items-center">
        <ActionButton
          icon={<FaPlus color="white" size={18} />}
          text="Create Group"
          action={handleGroupCreateModal}
        />
      </div>
    </div>
  );
};

export default GroupManagementHeader;
