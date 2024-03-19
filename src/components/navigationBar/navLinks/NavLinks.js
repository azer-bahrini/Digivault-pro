"use client";

import React from "react";
import NavLink from "./navLink/NavLink";
import NavItemsList from "@/constants/navItemsList";

function NavLinks({ isMenuOpen, locale }) {
  const list = NavItemsList();

  return (
    <ul className="">
      {list.map((item) => (
        <li className="w-full" key={item.path}>
          <NavLink item={item} isMenuOpen={isMenuOpen} locale={locale} />
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
