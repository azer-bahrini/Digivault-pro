import React from "react";

import UserCard from "./userCard/UserCard";

import UserRow from "./userRow/UserRow";
import GridScrollWrapper from "@/components/util/scrollWrapper/gridScrollWrapper/GridScrollWrapper";
import RowScrollWrapper from "@/components/util/scrollWrapper/rowScrollWrapper/RowScrollWrapper";

const Users = ({
  users,
  setUser,
  setShowDeleteWarning,
  setShowUpdateUserModal,

  displayMode,
}) => {
  return (
    <div className="mt-8 h-full justify-center flex w-full">
      {displayMode === "grid" ? (
        <GridScrollWrapper>
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                user={user}
                setUser={setUser}
                setShowDeleteWarning={setShowDeleteWarning}
                setShowUpdateUserModal={setShowUpdateUserModal}
              />
            );
          })}
        </GridScrollWrapper>
      ) : (
        <RowScrollWrapper>
          {users.map((user, index) => {
            return (
              <UserRow
                key={user.id}
                user={user}
                setUser={setUser}
                setShowDeleteWarning={setShowDeleteWarning}
                setShowUpdateUserModal={setShowUpdateUserModal}
                index={index}
              />
            );
          })}
        </RowScrollWrapper>
      )}
    </div>
  );
};

export default Users;
