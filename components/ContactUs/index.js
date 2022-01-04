import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
function Contactus({ close }) {
  return (
    <div className={styles.container} onClick={close}>
      <form className={styles.form} onBlur={close}>
        <div className={styles.close} onClick={close}>
          X
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className={styles.heading}>Contact us</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Your Name"
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Your Email"
            />
            <input type="text" className={styles.input} placeholder="Subject" />
            <textarea placeholder="Your Message" />
            <button>Submit</button>
          </div>
          <div style={{ marginLeft: "50px", display: "block" }}>
            <Image src="/assets/images/computer.png" width="400" height="400" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contactus;
