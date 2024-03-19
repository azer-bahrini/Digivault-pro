import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaUser, FaGlobe } from "react-icons/fa6";
const PageHeader = ({ title }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLangChange = (lang) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  return (
    <div className="w-full  border-b-2 border-x-dark-pr flex shadow-md px-4 py-4 justify-between items-center">
      <h1 className="font-content font-semibold text-2xl text-dark-pr capitalize">
        {title}
      </h1>

      <div className="flex items-center gap-6">
        <button
          className="border rounded-md flex items-center gap-2 py-2 px-4 shadow-lg relative"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaGlobe size={20} color="#5A6E76" />
          <p className="font-content font-semibold text-base text-dark-pr capitalize">
            {locale}
          </p>
          {showDropdown && (
            <div className="absolute left-0 bottom-0 transition translate-y-full bg-white border border-gray-300 rounded-md shadow-lg ">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href={handleLangChange("en")}>English</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href={handleLangChange("fr")}>French</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href={handleLangChange("ar")}>Arabic</Link>
                </li>
              </ul>
            </div>
          )}
        </button>

        <button
          className="border rounded-full p-3 shadow-lg"
          onClick={() => router.push(`/${locale}/user-account`)}
        >
          <FaUser size={20} color="#5A6E76" />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
