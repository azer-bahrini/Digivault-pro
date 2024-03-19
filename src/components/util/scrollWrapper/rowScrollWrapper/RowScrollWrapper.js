import React from "react";
import styles from "./rowScrollWrapper.module.css";
const RowScrollWrapper = ({ children }) => {
  return <div className={styles.container}>{children} </div>;
};

export default RowScrollWrapper;
