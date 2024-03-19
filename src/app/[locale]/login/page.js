import React from "react";
import styles from "./login.module.css";
import { useTranslations } from "next-intl";
const LoginPage = () => {
  const t = useTranslations("Login");
  return (
    <div className={styles.container}>
      <div className="rounded-md flex  justify-center w-1/3 h-2/5 bg-white py-8 shadow-lg">
        <div className="w-1/2 h-full py-8 ">
          <h1 className="text-center font-title text-4xl font-medium">
            {t("login")}
          </h1>
          <div className="mt-12">
            <div className=" border-dark-pr border-b w-full">
              <input
                type="text"
                name="username"
                placeholder={t("username")}
                className="outline-none w-full text-center font-title text-lg"
              />
            </div>
            <div className="border-dark-pr border-b w-full">
              <input
                type="password"
                name="password"
                placeholder={t("password")}
                className="outline-none w-full text-center font-title text-lg mt-8"
              />
            </div>
            <div className="w-full flex justify-center mt-12">
              <button className="border px-16 py-1 rounded-md bg-gradient-to-r from-pr to-sc text-white font-title text-lg font-medium m-auto">
                {t("login")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
