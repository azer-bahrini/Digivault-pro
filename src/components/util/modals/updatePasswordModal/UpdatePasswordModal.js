"use client";
import ModalWrapper from "../modalsWrapper/ModalWrapper";
import React, { useState } from "react";
import styles from "./updatePasswordModal.module.css";
import CloseButton from "../../buttons/closeButton/CloseButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const UpdatePasswordModal = ({ setShowUpdatePasswordModal }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleUpdatePassword = () => {
    if (
      newPassword === confirmPassword &&
      newPassword !== "" &&
      confirmPassword !== ""
    ) {
      // Logic to update password
      setErrorMessage("");
      setShowUpdatePasswordModal(false);
    } else {
      setErrorMessage("Passwords do not match");
    }
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <ModalWrapper>
      <div className={styles.container}>
        <div className="w-full h-full p-4 flex flex-col">
          <div className=" flex justify-end">
            <CloseButton setShowModal={setShowUpdatePasswordModal} />
          </div>
          <h2 className="font-content font-semibold text-2xl text-dark-pr  mt-4">
            Update Password
          </h2>
          <div className="flex justify-between mt-6 pr-24 ">
            <div>
              <p
                htmlFor="newPassword"
                className=" font-content font-medium text-lg text-dark-pr"
              >
                New Password
              </p>
              <div className="flex items-center border-2 border-gray-300  p-2   rounded-md mt-2">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="outline-none w-full"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="flex items-center justify-center">
                  {showNewPassword ? (
                    <button onClick={handleToggleNewPasswordVisibility}>
                      <FaRegEyeSlash size={20} color="#2DADE4" />
                    </button>
                  ) : (
                    <button onClick={handleToggleNewPasswordVisibility}>
                      <FaRegEye size={20} color="#2DADE4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p
                htmlFor="newPassword"
                className=" font-content font-medium text-lg text-dark-pr"
              >
                Confirm Password
              </p>
              <div className="flex items-center border-2 border-gray-300  p-2   rounded-md mt-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="New Password"
                  className="outline-none w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="flex items-center justify-center">
                  {showConfirmPassword ? (
                    <button onClick={handleToggleConfirmPasswordVisibility}>
                      <FaRegEyeSlash size={20} color="#2DADE4" />
                    </button>
                  ) : (
                    <button onClick={handleToggleConfirmPasswordVisibility}>
                      <FaRegEye size={20} color="#2DADE4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end mt-4 mb-8 mr-4 flex-1">
            <button
              className="bg-pr rounded-md flex justify-center items-center py-1 font-content font-medium text-lg text-white px-12"
              onClick={() => handleUpdatePassword()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default UpdatePasswordModal;
