"use client";
import React, { useState } from "react";
import ModalWrapper from "../modalsWrapper/ModalWrapper";
import styles from "./updateUserModal.module.css";

import FormInput from "../../formInput/FormInput";
import DropDown from "../../dropDown/DropDown";
import { groupsList } from "@/constants";
import CloseButton from "../../buttons/closeButton/CloseButton";

const UpdateUserModal = ({
  setShowUpdateUserModal,
  user,
  setActionIsLoading,
}) => {
  const {
    firstName,
    lastName,
    contact: { email, phoneNumber },
    group,
  } = user;

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [newGroup, setNewGroup] = useState(group);

  const updateUser = async () => {
    setActionIsLoading(true);
  };

  return (
    <ModalWrapper>
      <div className={styles.container}>
        <div className="flex h-full rounded-md flex-col p-4 w-full">
          <div className=" flex justify-end">
            <CloseButton setShowModal={setShowUpdateUserModal} />
          </div>
          <h2 className="font-content font-semibold text-2xl text-dark-pr px-6 mt-2">
            Update User
          </h2>
          <div className="flex-1 flex-col flex  mt-6 px-6 pb-4">
            <div className="flex justify-between items-center  ">
              <div>
                <FormInput placeholder={firstName} title="First Name" />
              </div>
              <div className="">
                <FormInput placeholder={lastName} title="Last Name" />
              </div>
            </div>
            <div className="mt-4">
              <FormInput placeholder={email} title="Email Address" />
            </div>
            <div className="mt-4 flex justify-between ">
              <div>
                <FormInput placeholder={phoneNumber} title="Phone Number" />
              </div>
              <div className="w-2/5">
                <p className="font-content font-medium text-lg text-dark-pr mb-2">
                  Group :
                </p>
                <DropDown
                  list={groupsList}
                  filter={newGroup}
                  setFilter={setNewGroup}
                />
              </div>
            </div>
            <div className="flex justify-end flex-1 items-end">
              <button
                className="bg-pr rounded-md flex justify-center items-center py-1 font-content font-medium text-lg text-white px-12"
                onClick={updateUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default UpdateUserModal;
