"use client";
import React, { useState } from "react";
import ModalWrapper from "../modalsWrapper/ModalWrapper";
import styles from "./updateGroupModal.module.css";
import FormInput from "../../formInput/FormInput";
import CloseButton from "../../buttons/closeButton/CloseButton";
import { modulesList } from "@/constants";
import ModuleRow from "./moduleRow/ModuleRow";
const UpdateGroupModal = ({ group, setShowUpdateGroupModal, updateGroup }) => {
  const [modules, setModules] = useState(modulesList);
  const findElementIndex = (array, element) => {
    return array.findIndex((obj) => obj.name === element);
  };
  return (
    <ModalWrapper>
      <div className={styles.container}>
        <div className="flex h-full rounded-md flex-col w-full flex-1 pt-4 pb-8 px-6">
          <div className=" flex justify-end">
            <CloseButton setShowModal={setShowUpdateGroupModal} />
          </div>
          <div className={styles.wrapper}>
            <h2 className="font-content font-semibold text-2xl text-dark-pr  mt-4">
              Update Group
            </h2>
            <div className="flex justify-between items-center mt-2 ">
              <div>
                <FormInput placeholder={group.name} title="Group Name" />
              </div>
            </div>
            <div className="flex-1 ">
              <h3 className="font-content font-semibold text-lg text-dark-pr mt-4">
                Modules
              </h3>
              <div className="flex-col w-4/5">
                {group.modules.map((module, i) => {
                  const index = findElementIndex(modules, module.name);
                  const permissions = modules[index].permissions;
                  return (
                    <ModuleRow
                      module={module}
                      key={i}
                      permissions={permissions}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end items-end mt-4 mb-8 mr-4">
              <button
                className="bg-pr rounded-md flex justify-center items-center py-1 font-content font-medium text-lg text-white px-12"
                onClick={updateGroup}
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

export default UpdateGroupModal;
