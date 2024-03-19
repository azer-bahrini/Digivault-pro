import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p
            htmlFor="firstName"
            className=" font-content font-medium text-lg text-dark-pr"
          >
            First Name
          </p>
          <input
            type="text"
            id="firstName"
            value="xxxxxxxxx"
            disabled
            className="bg-gray-200 p-2 rounded mt-2"
          />
        </div>
        <div>
          <p
            htmlFor="lastName"
            className=" font-content font-medium text-lg text-dark-pr"
          >
            Last Name
          </p>
          <input
            type="text"
            id="lastName"
            value="xxxxxxxxx"
            disabled
            className="bg-gray-200 p-2 rounded mt-2"
          />
        </div>
        <div>
          <p
            htmlFor="email"
            className=" font-content font-medium text-lg text-dark-pr"
          >
            Email
          </p>
          <input
            type="email"
            id="email"
            value="xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            disabled
            className="bg-gray-200 p-2 rounded mt-2"
          />
        </div>
        <div>
          <p
            htmlFor="phoneNumber"
            className=" font-content font-medium text-lg text-dark-pr"
          >
            Phone Number
          </p>
          <input
            type="tel"
            id="phoneNumber"
            value="0000000"
            disabled
            className="bg-gray-200 p-2 rounded mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
