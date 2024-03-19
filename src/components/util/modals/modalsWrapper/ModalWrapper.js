import React from "react";
import styles from "./modalsWrapper.module.css";
const ModalWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ModalWrapper;
