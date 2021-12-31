import Image from "next/image";
import styles from "./styles.module.css";

function InvisibleCard() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/images/heart.png"
        height={500}
        width={500}
        alt="Card"
      />
    </div>
  );
}

export default InvisibleCard;
