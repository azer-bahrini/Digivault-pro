import React from "react";

import styles from "./loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.cell} ${styles.d_0}`}></div>
      <div className={`${styles.cell} ${styles.d_1}`}></div>
      <div className={`${styles.cell} ${styles.d_2}`}></div>

      <div className={`${styles.cell} ${styles.d_1}`}></div>
      <div className={`${styles.cell} ${styles.d_2}`}></div>

      <div className={`${styles.cell} ${styles.d_2}`}></div>
      <div className={`${styles.cell} ${styles.d_3}`}></div>

      <div className={`${styles.cell} ${styles.d_3}`}></div>
      <div className={`${styles.cell} ${styles.d_4}`}></div>
    </div>
  );
};

export default Loader;
