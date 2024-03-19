import React from "react";

import DisplayHandler from "@/components/util/displayHandler/DisplayHandler";
import DropDown from "@/components/util/dropDown/DropDown";
import { groupsList } from "@/constants";

const UtilityBar = ({
  usersFilter,
  setUsersFilter,
  displayMode,
  setDisplayMode,
}) => {
  let groups = ["All"];
  const groupNames = groupsList.map((group) => group.name);
  groups = [...groups, ...groupNames];
  return (
    <div className="flex justify-between items-center mt-6 ">
      <div className="w-1/6">
        <DropDown
          filter={usersFilter}
          setFilter={setUsersFilter}
          list={groups}
        />
      </div>

      <DisplayHandler
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
      />
    </div>
  );
};

export default UtilityBar;
