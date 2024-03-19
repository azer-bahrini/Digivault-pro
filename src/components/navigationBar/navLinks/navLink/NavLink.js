"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navLink.module.css";
import { useLocale } from "next-intl";
function NavLink({ item, isMenuOpen, locale }) {
  const pathname = usePathname();
  const localActive = useLocale();

  return (
    <Link
      href={`${item.path}`}
      className={
        pathname === item.path
          ? "px-4 py-4 flex items-center bg-light-pr font-content font-semibold "
          : "px-4 py-4  flex items-center hover:bg-light-pr font-content font-semibold "
      }
    >
      {item.icon}
      <span className={isMenuOpen ? styles.titleActive : styles.titleInactive}>
        {item.title}
      </span>
    </Link>
  );
}

export default NavLink;
