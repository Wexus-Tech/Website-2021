import Image from "next/image";
import styles from "./styles.module.css";

function AboutUs() {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.imageDiv}>
        <Image
          src="/assets/images/computer.png"
          width={400}
          height={400}
          alt="Computer"
        />
      </div>
      <div className={styles.textInfo}>
        <h1>About Us</h1>
        <p>
          Wexus is the one stop solution for all your tech needs. From digital
          marketing to building an online presence specially customized for you,
          we do it all. We value each and every client and understand your
          requirements and come up with solutions using latest technology. So
          what are you waiting for? Contact us now.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
