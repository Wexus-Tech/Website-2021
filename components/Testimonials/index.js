import Card from "./Card";
import styles from "./styles.module.css";
import img from "../../public/assets/images/logo.png";
import Image from "next/image";
import InvisibleCard from "./InvisibleCard";
function Testimonials() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{ textAlign: "center" }}>Clients Love Us!</h1>
      <div className={styles.flexDiv}>
        <InvisibleCard />
        <Card
          title="Thank you for taking extra effort to make sure the entire team was on the same page. It would have been easy for important details to slip through the cracks, but thanks to you, that didn’t happen, determined boys working hard and delivering projects upto the mark."
          imgSrc="/assets/images/map.png"
          client="Venkatesh"
        />
        <Card
          title="Avi and Jayesh are very much talented and professional. At every point during the project I felt like they are a part of the team itself. They do the work considering the project as their own and their work is obviously error free and up to the mark."
          imgSrc="/assets/images/flash.png"
          client="Yagyansh"
        />
        <Card
          title="Thank you for taking extra effort to make sure the entire team was on the same page. It would have been easy for important details to slip through the cracks, but thanks to you, that didn’t happen, determined boys working hard and delivering projects upto the mark."
          imgSrc="/assets/images/phone.png"
          client="Siva"
        />
        <Card
          title="Avi and Jayesh are very much talented and professional. At every point during the project I felt like they are a part of the team itself. They do the work considering the project as their own and their work is obviously error free and up to the mark."
          imgSrc="/assets/images/bulb.png"
          client="Shruti"
        />
      </div>
    </div>
  );
}

export default Testimonials;
