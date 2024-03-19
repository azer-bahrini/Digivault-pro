import React from "react";
import styles from "./loaderWrapper.module.css";
const LoaderWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default LoaderWrapper;
