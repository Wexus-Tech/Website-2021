import styles from "./styles.module.css";
import Image from "next/image";

function Card({ title, client, imgSrc }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.imageDiv}
        style={{
          width: "60%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Image src={imgSrc} width={225} height={225} alt={title} />
      </div>
      {title}
      <br />
      <p style={{ fontWeight: "bold" }}>~ {client}</p>
    </div>
  );
}

export default Card;
