import React from "react";
import ModuleElement from "./ModuleElement";

const ModuleRow = ({ module, permissions }) => {
  return (
    <div className="flex flex-col my-6 border-2 border-dark-pr rounded-md relative p-2">
      <h4 className="font-content font-semibold text-base text-dark-pr absolute -top-3 left-3 bg-white z-40 px-2 ">
        {module.name}
      </h4>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3  py-2  mt-2">
        {permissions.map((permission, i) => {
          return <ModuleElement permission={permission} key={permission.id} />;
        })}
      </div>
    </div>
  );
};

export default ModuleRow;
