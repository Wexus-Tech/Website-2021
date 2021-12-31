import Card from "./Card";
import styles from "./styles.module.css";
import InvisibleCard from "./InvisibleCard";
import testimonials from "../../testimonials.json";

function Testimonials() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{ textAlign: "center" }}>Clients Love Us!</h1>
      <div className={styles.flexDiv}>
        <InvisibleCard />
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            title={testimonial.title}
            imgSrc={testimonial.imgSrc}
            client={testimonial.client}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
