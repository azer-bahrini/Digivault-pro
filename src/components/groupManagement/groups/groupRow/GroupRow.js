import PenButton from "@/components/util/buttons/penButton/PenButton";
import TrashButton from "@/components/util/buttons/trashButton/TrashButton";
import React from "react";

const GroupRow = ({
  index,
  group,
  setShowDeleteWarning,
  setShowUpdateGroupModal,
  setGroup,
}) => {
  const handleDelete = () => {
    setShowDeleteWarning(true);
    setGroup(group);
  };
  const handleUpdate = () => {
    setShowUpdateGroupModal(true);
    setGroup(group);
  };
  return (
    <div
      className={
        index % 2 === 0
          ? "flex  items-center bg-light-pr p-4 font-semibold text-lg text-dark-pr capitalize justify-between"
          : "flex  items-center bg-white p-4  font-semibold text-lg text-dark-pr capitalize justify-between"
      }
    >
      <div className="">{group.name}</div>
      <div className="flex items-center gap-8">
        <PenButton size={24} onPress={handleUpdate} />
        <TrashButton size={24} onPress={handleDelete} />
      </div>
    </div>
  );
};

export default GroupRow;
