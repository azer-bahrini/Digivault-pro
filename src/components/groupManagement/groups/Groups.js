import RowScrollWrapper from "@/components/util/scrollWrapper/rowScrollWrapper/RowScrollWrapper";
import React from "react";
import GroupRow from "./groupRow/GroupRow";
import { groupsList } from "@/constants";

const Groups = ({
  setShowDeleteWarning,
  setShowUpdateGroupModal,
  setGroup,
}) => {
  return (
    <div className="mt-8 h-full justify-center flex w-full">
      <RowScrollWrapper>
        {groupsList.map((group, index) => {
          return (
            <GroupRow
              key={group.name}
              group={group}
              index={index}
              setShowDeleteWarning={setShowDeleteWarning}
              setShowUpdateGroupModal={setShowUpdateGroupModal}
              setGroup={setGroup}
            />
          );
        })}
      </RowScrollWrapper>
    </div>
  );
};

export default Groups;
