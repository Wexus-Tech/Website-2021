import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../../public/assets/images/heart.png";
function InvisibleCard() {
  return (
    <div className={styles.wrapper}>
      <Image src={img} alt="Card" />
    </div>
  );
}

export default InvisibleCard;
