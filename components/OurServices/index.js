import ServiceCard from "../ServiceCard";
import styles from "./styles.module.css";

function OurServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p>What we have to offer</p>
        <hr style={{ marginTop: -10 }} />
      </div>
      <div className={styles.cards}>
        <ServiceCard
          title="UI/UX Design"
          id={1}
          imgSrc="/assets/images/phone.png"
        />
        <ServiceCard
          id={2}
          title="Web/App Development"
          imgSrc="/assets/images/rocket.png"
        />
        <ServiceCard
          id={3}
          title="Digital Marketing"
          imgSrc="/assets/images/graph.png"
        />
      </div>
    </div>
  );
}

export default OurServices;
