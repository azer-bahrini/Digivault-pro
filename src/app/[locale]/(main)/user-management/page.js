"use client";

import React, { useState } from "react";

import { usersList } from "@/constants";
import Users from "@/components/userManagement/users/Users";
import UtilityBar from "@/components/userManagement/utilityBar.js/UtilityBar";
import DeleteWarningModal from "@/components/util/modals/deleteWarningModal/DeleteWarningModal";
import UpdateUserModal from "@/components/util/modals/updateUserModal/UpdateUserModal";
import Loader from "@/components/util/loader/Loader";
import UserManagementHeader from "@/components/userManagement/userManagementHeader/UserManagementHeader";
import LoaderWrapper from "@/components/util/loader/loaderWrapper.js/LoaderWrapper";
import CreateUserModal from "@/components/util/modals/createUserModal/CreateUserModal";

const UsersPage = () => {
  const [usersFilter, setUsersFilter] = useState("All");
  const [displayMode, setDisplayMode] = useState("grid");
  const [users, setUsers] = useState(usersList);
  const [user, setUser] = useState("");
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const [globalIsLoading, setGlobalIsLoading] = useState(false);
  const [actionIsLoading, setActionIsLoading] = useState(false);
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenuVisible(!menuVisible);

    setMenuPosition({ x: e.clientX, y: e.clientY });
  };
  const deleteUser = () => {
    console.log("deleting user ...");
    setShowDeleteWarning(false);
  };

  return (
    <>
      {menuVisible && (
        <div
          style={{
            position: "absolute",
            top: menuPosition.y,
            left: menuPosition.x,
            width: "200px",
            height: "200px",
            backgroundColor: "red",
            zIndex: "50",
          }}
        >
          Ti haw zebi
        </div>
      )}
      <div
        className="flex flex-col flex-1 px-4 py-6 relative w-full "
        onContextMenu={handleContextMenu}
      >
        {showDeleteWarning && (
          <DeleteWarningModal
            setShowDeleteWarning={setShowDeleteWarning}
            action={deleteUser}
            user={user}
          />
        )}
        {showCreateUserModal && (
          <CreateUserModal
            setShowCreateUserModal={setShowCreateUserModal}
            setActionIsLoading={setActionIsLoading}
          />
        )}
        {actionIsLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {showUpdateUserModal && (
          <UpdateUserModal
            setShowUpdateUserModal={setShowUpdateUserModal}
            user={user}
            setActionIsLoading={setActionIsLoading}
          />
        )}
        <UserManagementHeader setShowCreateUserModal={setShowCreateUserModal} />
        <UtilityBar
          usersFilter={usersFilter}
          setUsersFilter={setUsersFilter}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
        />
        <Users
          users={users}
          setShowDeleteWarning={setShowDeleteWarning}
          setUser={setUser}
          setShowUpdateUserModal={setShowUpdateUserModal}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
        />
      </div>
    </>
  );
};

export default UsersPage;
