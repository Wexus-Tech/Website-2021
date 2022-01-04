import styles from "./styles.module.css";
import Image from "next/image";
import Contactus from "../ContactUs";
import { useState } from "react";

function IntroContainer() {
  const [open, setOpen] = useState(false);

  const closeContainer = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {open && <Contactus close={closeContainer} />}
      <div className={styles.leftContainer}>
        <h3>Need help with your business?</h3>
        <p>We got you covered.</p>
        <button className={styles.btn} onClick={() => setOpen(true)}>
          Contact Us
        </button>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src="/assets/images/3dLaptop.png"
          width={1000}
          height={900}
          alt="Laptop"
        />
      </div>
    </div>
  );
}

export default IntroContainer;
