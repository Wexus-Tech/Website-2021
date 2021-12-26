import styles from "./styles.module.css";
import img from "../../public/assets/images/3dLaptop.png";
import Image from "next/image";

function IntroContainer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContainer}>
        <h3>Need help with your business?</h3>
        <p>We got you covered.</p>
        <button style={{ marginTop: 20 }} className={styles.btn}>
          Get Started
        </button>
      </div>
      <div className={styles.rightContainer}>
        <Image src={img} />
      </div>
    </div>
  );
}

export default IntroContainer;
