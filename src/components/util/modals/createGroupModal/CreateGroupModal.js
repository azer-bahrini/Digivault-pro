"use client";
import React, { useState } from "react";
import ModalWrapper from "../modalsWrapper/ModalWrapper";

import FormInput from "../../formInput/FormInput";
import CloseButton from "../../buttons/closeButton/CloseButton";
import styles from "./createGroupModal.module.css";
import ModuleRow from "../updateGroupModal/moduleRow/ModuleRow";
import { modulesList } from "@/constants";
import ModuleElement from "../updateGroupModal/moduleRow/ModuleElement";

const CreateGroupModal = ({ setShowCreateGroupModal, setActionIsLoading }) => {
  const createGroup = async () => {
    setActionIsLoading(true);
  };
  return (
    <ModalWrapper>
      <div className={styles.container}>
        <div className="flex h-full rounded-md flex-col w-full flex-1 pt-4 pb-8 px-6">
          <div className=" flex justify-end">
            <CloseButton setShowModal={setShowCreateGroupModal} />
          </div>
          <div className={styles.wrapper}>
            <h2 className="font-content font-semibold text-2xl text-dark-pr  mt-4">
              Update Group
            </h2>
            <div className="flex justify-between items-center mt-2 ">
              <div>
                <FormInput placeholder="Group name" title="Group Name" />
              </div>
            </div>
            <div className="flex-1 ">
              <h3 className="font-content font-semibold text-lg text-dark-pr mt-4">
                Modules
              </h3>
              <div className="flex-col w-4/5">
                {modulesList.map((module, i) => {
                  return (
                    <div
                      className="flex flex-col my-6 border-2 border-dark-pr rounded-md relative p-2"
                      key={i}
                    >
                      <h4 className="font-content font-semibold text-base text-dark-pr absolute -top-3 left-3 bg-white z-40 px-2 ">
                        {module.name}
                      </h4>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3  py-2  mt-2">
                        {module.permissions.map((permission, i) => {
                          return (
                            <ModuleElement
                              permission={permission}
                              key={permission.id}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end items-end mt-4 mb-8 mr-4">
              <button
                className="bg-pr rounded-md flex justify-center items-center py-1 font-content font-medium text-lg text-white px-12"
                onClick={createGroup}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CreateGroupModal;
