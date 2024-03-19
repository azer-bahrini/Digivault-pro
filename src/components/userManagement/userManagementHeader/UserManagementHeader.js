"use client";
import ActionButton from "@/components/util/buttons/actionButton/ActionButton";
import SearchBar from "@/components/util/searchBar/SearchBar";
import React from "react";
import { IoSettings } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
const UserManagementHeader = ({ setShowCreateUserModal }) => {
  const router = useRouter();
  const navigateManageGroups = () => {
    router.push("user-management/group-management");
  };
  const handleUserCreateModal = () => {
    setShowCreateUserModal(true);
  };
  return (
    <div className="flex justify-between items-center">
      <SearchBar />
      <div className="flex gap-6 items-center">
        <ActionButton
          icon={<IoSettings color="white" size={18} />}
          text="Manage Groups"
          action={navigateManageGroups}
        />
        <ActionButton
          icon={<FaPlus color="white" size={18} />}
          text="Create User"
          action={handleUserCreateModal}
        />
      </div>
    </div>
  );
};

export default UserManagementHeader;
