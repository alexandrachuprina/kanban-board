import React from "react";
import styles from "./PopUp.module.scss";

const PopUp = () => {
  return (
    <div className={styles.popup}>
      <p>
        Please check this site in your desktop browser!
        <br />
        <br />
        Mobile version is in progress.
      </p>
    </div>
  );
};

export default PopUp;
