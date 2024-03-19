import React from "react";

const ModuleElement = ({ permission }) => {
  return (
    <div key={permission.id} className="flex items-center justify-between">
      <p className="font-content font-medium text-base text-dark-pr">
        {permission.name}
      </p>
      <input type="checkbox" className="h-6 w-6 " />
    </div>
  );
};

export default ModuleElement;
