import Image from "next/image";
import styles from "./styles.module.css";
import png from "../../public/assets/images/computer.png";

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageDiv}>
        <Image src={png} style={{ boxShadow: "2px 2px 10px #fff" }} />
      </div>
      <div className={styles.textInfo}>
        <h1>About Us</h1>
        <h3>Your personalised techventure</h3>
        <p>
          Wexus is the one stop solution for all your tech needs. From digital
          marketing to building an online presence specially customized for you,
          we do it all. We value each and every client and understand your
          requirements and come up with solutions using latest technology. So
          what are you waiting for? Contact Wexus now.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
