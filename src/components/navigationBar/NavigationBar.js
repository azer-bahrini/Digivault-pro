"use client";
import React, { useState } from "react";

import styles from "./navigationBar.module.css";
import NavHeader from "./navHeader/NavHeader";
import NavLinks from "./navLinks/NavLinks";
import UserAuthSection from "./userAuthSection/UserAuthSection";
function NavigationBar({ locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <header className={isMenuOpen ? styles.menu : styles.menuClose}>
      <NavHeader setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <NavLinks isMenuOpen={isMenuOpen} locale={locale} />
      <UserAuthSection isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default NavigationBar;
