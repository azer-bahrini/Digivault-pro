"use client";
import PersonalInfo from "@/components/userAccount/PersonalInfo";
import ActionButton from "@/components/util/buttons/actionButton/ActionButton";
import { RiLockPasswordFill } from "react-icons/ri";
import React, { useState } from "react";
import UpdatePasswordModal from "@/components/util/modals/updatePasswordModal/UpdatePasswordModal";

const UserAccountPage = () => {
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);
  const handleUpdatePasswordModal = () => {
    setShowUpdatePasswordModal(!showUpdatePasswordModal);
  };
  return (
    <div className="h-full w-full p-4">
      {showUpdatePasswordModal && (
        <UpdatePasswordModal
          setShowUpdatePasswordModal={setShowUpdatePasswordModal}
        />
      )}
      <div className="flex w-full justify-end">
        <ActionButton
          icon={<RiLockPasswordFill color="white" size={18} />}
          text="Update Password"
          action={handleUpdatePasswordModal}
        />
      </div>
      <div>
        <h2 className="font-content font-semibold text-xl text-dark-pr">
          Personal Information
        </h2>
        <PersonalInfo />
      </div>
      <div className="mt-8">
        <h2 className="font-content font-semibold text-xl text-dark-pr">
          Access Information
        </h2>
        <p className="font-content font-medium text-lg text-dark-pr mt-2">
          Group : xxxxxxxxx
        </p>
      </div>
    </div>
  );
};

export default UserAccountPage;
