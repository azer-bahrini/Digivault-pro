"use client";
import React from "react";
import { IoLogOut } from "react-icons/io5";
import styles from "./userAuthSection.module.css";
function UserAuthSection({ isMenuOpen }) {
  return (
    <div className="px-2 ">
      <div
        className={
          isMenuOpen ? styles.containerActive : styles.containerInactive
        }
      >
        <div
          className={
            isMenuOpen ? styles.userInfoActive : styles.userInfoInactive
          }
        >
          <div className="h-14 w-14 rounded-lg bg-white"></div>
          <div className="ml-3 flex-1">
            <p className="font-content font-semibold text-l text-white">Hedi</p>
            <p className="font-content font-normal text-l text-white">Admin</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button>
            <IoLogOut color={isMenuOpen ? "white" : "#5A6E76"} size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserAuthSection;
