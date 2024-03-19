"use client";
import React, { useState } from "react";
import ModalWrapper from "../modalsWrapper/ModalWrapper";
import DropDown from "../../dropDown/DropDown";
import { groupsList } from "@/constants";
import FormInput from "../../formInput/FormInput";
import CloseButton from "../../buttons/closeButton/CloseButton";
import styles from "./creatUserModal.module.css";
const CreateUserModal = ({ setShowCreateUserModal, setActionIsLoading }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [group, setGroup] = useState("Archivist");
  const createUser = async () => {
    setActionIsLoading(true);
  };
  let groups = ["All"];
  const groupNames = groupsList.map((group) => group.name);
  groups = [...groups, ...groupNames];
  return (
    <ModalWrapper>
      <div className={styles.container}>
        <div className="flex h-full rounded-md flex-col p-4 w-full">
          <div className=" flex justify-end">
            <CloseButton setShowModal={setShowCreateUserModal} />
          </div>
          <h2 className="font-content font-semibold text-2xl text-dark-pr px-6 mt-2">
            Update User
          </h2>
          <div className="flex-1 flex-col flex  mt-6 px-6 pb-4">
            <div className="flex justify-between items-center  ">
              <div>
                <FormInput placeholder="First Name" title="First Name" />
              </div>
              <div className="">
                <FormInput placeholder="Last Name" title="Last Name" />
              </div>
            </div>
            <div className="mt-4">
              <FormInput placeholder="Email Address" title="Email Address" />
            </div>
            <div className="mt-4 flex justify-between ">
              <div>
                <FormInput placeholder="Phone Number" title="Phone Number" />
              </div>
              <div className="w-2/5">
                <p className="font-content font-medium text-lg text-dark-pr mb-2">
                  Group :
                </p>
                <DropDown list={groups} filter={group} setFilter={setGroup} />
              </div>
            </div>
            <div className="flex justify-end flex-1 items-end">
              <button
                className="bg-pr rounded-md flex justify-center items-center py-1 font-content font-medium text-lg text-white px-12"
                onClick={createUser}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CreateUserModal;
