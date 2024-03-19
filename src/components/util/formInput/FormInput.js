import React from "react";

const FormInput = ({ setter, placeholder, title }) => {
  return (
    <div>
      <p className="font-content font-semibold text-lg text-dark-pr mb-2">
        {title} :
      </p>
      <input
        className="flex-1 w-full rounded-md border-gray-400 border-2 p-2 font-content font-medium text-base outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
