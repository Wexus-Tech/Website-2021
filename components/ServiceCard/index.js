import Image from "next/image";
import styles from "./styles.module.css";
import phone from "../../public/assets/images/phone.png";
import rocket from "../../public/assets/images/rocket.png";
import graph from "../../public/assets/images/graph.png";

function ServiceCard({ title, id }) {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.imageElement}> */}
      <Image src={id == 1 ? phone : id == 2 ? rocket : graph} />
      {/* </div> */}

      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <p style={{ textAlign: "center", fontSize: "12px", marginTop: "-10px" }}>
        Read More
      </p>
    </div>
  );
}

export default ServiceCard;
