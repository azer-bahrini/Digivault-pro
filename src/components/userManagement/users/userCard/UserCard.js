"use client";
import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import Switch from "react-switch";
import UserSettings from "../userSettings/UserSettings";
const UserCard = ({
  user,
  setUser,
  setShowDeleteWarning,
  setShowUpdateUserModal,
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
    <div className="min-h-56 rounded-md border-dark-pr border p-3 flex flex-col font-content z-0">
      <div className="flex ">
        <div className="flex-1 "></div>
        <button
          className="relative"
          onClick={() => setShowUserSetting(!showUserSetting)}
        >
          <IoEllipsisVertical color="#5A6E76" size={24} />
          {showUserSetting && (
            <div className="absolute w-28 bg-white border-dark-pr border rounded-md bottom-0 left-0 transform translate-y-full -translate-x-full z-0">
              <UserSettings
                setUser={setUser}
                setShowDeleteWarning={setShowDeleteWarning}
                user={user}
                setShowUpdateUserModal={setShowUpdateUserModal}
              />
            </div>
          )}
        </button>
      </div>
      <div className="flex flex-col justify-between  flex-1">
        <p className=" font-semibold text-lg text-dark-pr capitalize">
          {firstName} {lastName}
        </p>
        <div className="flex w-full justify-between flex-1 items-center ">
          <div className="">
            <div className="flex items-center gap-3">
              <FaPhone color="#2DADE4" size={18} />

              <span className=" text-base font-medium text-dark-pr">
                {phoneNumber}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <IoMdMail color="#2DADE4" size={18} />

              <span className="text-base font-medium text-dark-pr">
                {email}
              </span>
            </div>
          </div>
          <div>
            <HiUserCircle color="#A2A2A2" size={86} />
          </div>
        </div>
        <div className="flex text-base">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="font-semibold text-dark-pr">
                Group: <span className="font-medium capitalize">{group}</span>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <Switch
                onChange={handleChange}
                checked={ischecked}
                checkedIcon={false}
                offColor="#A2A2A2"
                onColor="#2DADE4"
                uncheckedIcon={false}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
