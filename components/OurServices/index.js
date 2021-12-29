import ServiceCard from "../ServiceCard";
import styles from "./styles.module.css";
import phone from "../../public/assets/images/phone.png";

function OurServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p>What we have to offer</p>
        <hr style={{ marginTop: -10 }} />
      </div>
      <div className={styles.cards}>
        <ServiceCard title="UI/UX Design" imgSrc="/assets/images/phone.png" />
        <ServiceCard
          title="Web/App Development"
          imgSrc="/assets/images/rocket.png"
        />
        <ServiceCard
          title="Digital Marketing"
          imgSrc="/assets/images/graph.png"
        />
      </div>
    </div>
  );
}

export default OurServices;
