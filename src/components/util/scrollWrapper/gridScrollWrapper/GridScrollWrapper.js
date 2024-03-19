import React from "react";
import styles from "./gridScrollWrapper.module.css";
const GridScrollWrapper = ({ children }) => {
  return <div className={styles.container}>{children} </div>;
};

export default GridScrollWrapper;
