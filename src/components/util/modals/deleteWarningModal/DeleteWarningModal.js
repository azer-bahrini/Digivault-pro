import React from "react";
import ModalWrapper from "../modalsWrapper/ModalWrapper";
import styles from "./deleteWarningModal.module.css";
import { IoWarningOutline } from "react-icons/io5";
const DeleteWarningModal = ({ setShowDeleteWarning, action, group }) => {
  return (
    <ModalWrapper>
      <div className={styles.container}>
        <div className="flex flex-col flex-1 border h-full pt-10 pb-12 px-12 justify-between rounded-md">
          <div className="flex justify-center ">
            <div className="rounded-full bg-light-warning-red p-3">
              <IoWarningOutline size={32} color="#E21C4A" />
            </div>
          </div>
          <div className="flex-1 text-center mt-4 font-content px-4">
            <h3 className=" font-semibold text-lg ">Are You Sure ?</h3>
            <p className="font-content text-base font-normal text-text-light-gray mt-4 px-4">
              This action can’t be undone. This user and his data will be lost
            </p>
          </div>
          <div className="flex flex-col mt-6">
            <button
              className="bg-warning-red text-white font-content font-medium text-base rounded-md py-2"
              onClick={action}
            >
              Delete User
            </button>
            <button
              className="border-text-light-gray text-text-light-gray border font-content font-medium text-base rounded-md py-2 mt-2"
              onClick={() => setShowDeleteWarning(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteWarningModal;
