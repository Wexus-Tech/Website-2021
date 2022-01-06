import styles from "./styles.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Contactus from "../ContactUs";

function Footer() {
  const [open, setOpen] = useState(false);

  const closeContainer = () => {
    setOpen(false);
  };
  return (
    <div className={styles.wrapper} id="contact">
      {open && <Contactus close={closeContainer} />}
      <div className={styles.leftContainer}>
        <Image
          src="/assets/images/bulb.png"
          height={225}
          width={225}
          alt="Bulb"
        />
      </div>
      <div className={styles.rightContainer}>
        <div style={{ margin: 10 }}>
          <h3>Wexus</h3>
          <p>Your personalised techventure</p>
          <button
            style={{ marginTop: 20 }}
            className={styles.btn}
            onClick={() => setOpen(true)}
          >
            Contact Us
          </button>
        </div>
        <div
          className={styles.footerSocial}
          style={{ margin: 10, textAlign: "right" }}
        >
          <h3>Socials</h3>
          <div
            className={styles.socialLinks}
            style={{
              display: "flex",
              marginLeft: "auto",
              paddingBottom: 30,
            }}
          >
            <a
              className={styles.headernav}
              href="https://instagram.com/wexusofficial"
              style={{ marginTop: -20 }}
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              className={styles.headernav}
              href="https://www.linkedin.com/in/avi-vashishta-28b3308a/"
              style={{ marginTop: -20 }}
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              className={styles.headernav}
              href="https://www.facebook.com/avi.vashishta.5/"
              style={{ marginTop: -20 }}
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              className={styles.headernav}
              href="mailto: simplysitestech@gmail.com"
              style={{ marginTop: -20, marginRight: -10 }}
            >
              {" "}
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
