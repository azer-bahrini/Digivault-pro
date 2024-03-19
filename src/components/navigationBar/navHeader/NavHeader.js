"use client";
import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import styles from "./navHeader.module.css";
const NavHeader = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? styles.headerActive : styles.headerInactive}>
      <div className="font-title text-pr font-medium">
        <h1 className={isMenuOpen ? styles.logoActive : styles.logoInactive}>
          Digivault Pro
        </h1>
      </div>
      <button onClick={() => setIsMenuOpen((prev) => !prev)}>
        <CgMenuRightAlt style={{ color: "#5A6E76" }} size={36} />
      </button>
    </div>
  );
};

export default NavHeader;
