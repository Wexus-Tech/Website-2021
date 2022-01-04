import React from "react";
import styles from "./styles.module.css";

function Contactus({ close }) {
  return (
    <div className={styles.container} onClick={close}>
      <form className={styles.form} onBlur={close}>
        <div className={styles.close} onClick={close}>
          X
        </div>
        <div className={styles.heading}>Contact us</div>
        <input type="text" className={styles.input} placeholder="Your Name" />
        <input type="text" className={styles.input} placeholder="Your Email" />
        <input type="text" className={styles.input} placeholder="Subject" />
        <textarea placeholder="Your Message" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contactus;
