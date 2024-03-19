"use client";
import React from "react";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { MdGridView, MdManageAccounts } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineAudit } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";

import { useLocale, useTranslations } from "next-intl";

const NavItemsList = () => {
  const t = useTranslations("Links");
  const locale = useLocale();
  const NAV_ITEMS_LIST = [
    {
      id: 1,
      title: t("home"),
      path: `/${locale}/home`,
      icon: <MdGridView color="#5A6E76" size={28} />,
    },
    {
      id: 2,
      title: t("archive"),
      path: `/${locale}/archive`,
      icon: <RiArchiveDrawerLine color="#5A6E76" size={28} />,
    },
    {
      id: 3,
      title: t("fileExplorer"),
      path: `/${locale}/file-explorer`,
      icon: <FaMagnifyingGlass color="#5A6E76" size={28} />,
    },
    {
      id: 4,
      title: t("audit"),
      path: `/${locale}/audit`,
      icon: <AiOutlineAudit color="#5A6E76" size={28} />,
    },
    {
      id: 5,
      title: t("analytics"),
      path: `/${locale}/analytics`,
      icon: <VscGraph color="#5A6E76" size={28} />,
    },
    {
      id: 6,
      title: t("userManagement"),
      path: `/${locale}/user-management`,
      icon: <MdManageAccounts color="#5A6E76" size={28} />,
    },
  ];
  return NAV_ITEMS_LIST;
};

export default NavItemsList;
