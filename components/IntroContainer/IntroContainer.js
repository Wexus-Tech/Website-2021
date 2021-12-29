import styles from "./styles.module.css";
import Image from "next/image";

function IntroContainer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContainer}>
        <h3>Need help with your business?</h3>
        <p>We got you covered.</p>
        <button className={styles.btn}>Contact Us</button>
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
