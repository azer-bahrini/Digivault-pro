"use client";
import React, { useState } from "react";
import GroupManagementHeader from "@/components/groupManagement/groupManagementHeader/GroupManagementHeader";
import CreateGroupModal from "@/components/util/modals/createGroupModal/CreateGroupModal";
import Loader from "@/components/util/loader/Loader";
import LoaderWrapper from "@/components/util/loader/loaderWrapper.js/LoaderWrapper";
import Groups from "@/components/groupManagement/groups/Groups";
import DeleteWarningModal from "@/components/util/modals/deleteWarningModal/DeleteWarningModal";
import UpdateGroupModal from "@/components/util/modals/updateGroupModal/UpdateGroupModal";

const GroupPage = () => {
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [showUpdateGroupModal, setShowUpdateGroupModal] = useState(false);
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [globalIsLoading, setGlobalIsLoading] = useState(false);
  const [actionIsLoading, setActionIsLoading] = useState(false);
  const [group, setGroup] = useState({});
  const deleteGroup = () => {
    console.log("deleting group ...");
    setShowDeleteWarning(false);
  };
  const updateGroup = () => {
    console.log("updating group ...");
    setShowUpdateGroupModal(false);
  };
  return (
    <div className="flex flex-col flex-1 px-4 py-6 relative w-full">
      {showCreateGroupModal && (
        <CreateGroupModal
          setShowCreateGroupModal={setShowCreateGroupModal}
          setActionIsLoading={setActionIsLoading}
        />
      )}
      {showUpdateGroupModal && (
        <UpdateGroupModal
          setShowUpdateGroupModal={setShowUpdateGroupModal}
          updateGroup={updateGroup}
          setActionIsLoading={setActionIsLoading}
          group={group}
        />
      )}
      {actionIsLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {showDeleteWarning && (
        <DeleteWarningModal
          setShowDeleteWarning={setShowDeleteWarning}
          action={deleteGroup}
          setActionIsLoading={setActionIsLoading}
          group={group}
        />
      )}
      <GroupManagementHeader
        setShowCreateGroupModal={setShowCreateGroupModal}
      />
      <Groups
        setShowDeleteWarning={setShowDeleteWarning}
        setShowUpdateGroupModal={setShowUpdateGroupModal}
        setGroup={setGroup}
      />
    </div>
  );
};

export default GroupPage;
