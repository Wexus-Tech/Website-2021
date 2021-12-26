import ServiceCard from "../ServiceCard";
import styles from "./styles.module.css";
import phone from "../../public/assets/images/phone.png";

function OurServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p style={{ color: "#010851", fontSize: "24px", fontWeight: "bold" }}>
          What we have to offer
        </p>
        <hr style={{ marginTop: -10 }} />
      </div>
      <div className={styles.cards}>
        <ServiceCard title="UI/UX Design" id={1} />
        <ServiceCard
          title="Web/App
                Development"
          id={2}
        />
        <ServiceCard
          title="Digital
Marketing"
          id={3}
        />
      </div>
    </div>
  );
}

export default OurServices;
