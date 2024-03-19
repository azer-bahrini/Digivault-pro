"use client";
import PenButton from "@/components/util/buttons/penButton/PenButton";
import TrashButton from "@/components/util/buttons/trashButton/TrashButton";
import React, { useState } from "react";

const UserRow = ({
  user,
  setUser,
  setShowDeleteWarning,
  setShowUpdateUserModal,
  index,
}) => {
  const [ischecked, setIscheked] = useState(true);
  const [showUserSetting, setShowUserSetting] = useState(false);
  const handleChange = () => {
    setIscheked(!ischecked);
  };

  const {
    id,
    group,
    firstName,
    lastName,
    contact: { email, phoneNumber },
  } = user;
  return (
    <div
      className={
        index % 2 === 0
          ? "flex  items-center bg-light-pr p-4 font-semibold text-lg text-dark-pr capitalize"
          : "flex  items-center bg-white p-4  font-semibold text-lg text-dark-pr capitalize"
      }
    >
      <div className="w-1/4">
        {firstName} {lastName}
      </div>
      <div className="w-1/4">{email}</div>
      <div className="w-1/4">{phoneNumber}</div>
      <div className="flex-1">{group}</div>
      <div className="flex items-center gap-8">
        <PenButton size={24} />
        <TrashButton size={24} />
      </div>
    </div>
  );
};

export default UserRow;
