import Image from "next/image";
import styles from "./styles.module.css";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

function ServiceCard({ id, title, imgSrc }) {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const content = [
    "Understanding business goals and customer feedback to create user-centred designs. User flows, wireframes, prototypes, and mockups are services we offer.",
    "Webpages that are both clean and responsive. Apps for Android and iOS that can be deployed to Google Play Store or the Apple App Store.",
    "Brand advertising through the internet and other types of digital communication to engage with potential clients.",
  ];

  return (
    <>
      <div className={styles.wrapper} onClick={handleClickOpen}>
        <Image
          src={imgSrc}
          width={225}
          height={225}
          alt={title}
          className={styles.image}
        />

        <h3 style={{ textAlign: "center" }}>{title}</h3>
        <p
          className={styles.readMore}
          style={{ textAlign: "center", fontSize: "12px", marginTop: "-10px" }}
        >
          Read More
        </p>
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <div className={styles.modal}>
          <div className={styles.modalWrapper} onClick={handleClickOpen}>
            <Image
              src={imgSrc}
              width={225}
              height={225}
              alt={title}
              className={styles.image}
            />

            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <p
              className={styles.readMore}
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginTop: "-10px",
              }}
            >
              {id == 1 ? content[0] : id == 2 ? content[1] : content[2]}
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ServiceCard;
