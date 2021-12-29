import Image from "next/image";
import styles from "./styles.module.css";

function ServiceCard({ title, imgSrc }) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={imgSrc}
        width={225}
        height={225}
        alt={title}
        className={styles.image}
      />

      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <p style={{ textAlign: "center", fontSize: "12px", marginTop: "-10px" }}>
        Read More
      </p>
    </div>
  );
}

export default ServiceCard;
