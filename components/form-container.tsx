import type { NextPage } from "next";
import styles from "./form-container.module.css";

const FormContainer: NextPage = () => {
  return (
    <div className={styles.outerFrame}>
      <div className={styles.frame} />
      <div className={styles.powerButton} />
      <div className={styles.volumeButtons}>
        <div className={styles.volumeUpButton} />
        <div className={styles.volumeDownButton} />
      </div>
      <div className={styles.switch} />
    </div>
  );
};

export default FormContainer;
